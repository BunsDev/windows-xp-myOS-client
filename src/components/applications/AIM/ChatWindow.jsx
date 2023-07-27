import { useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import { Configuration, OpenAIApi } from "openai";
import useSound from "use-sound";
import instantMessageSound from "/src/assets/instant-message-im.mp3";

const configuration = new Configuration({
  apiKey: "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",
});
delete configuration.baseOptions.headers["User-Agent"];
const openai = new OpenAIApi(configuration);

const ChatWindow = (props) => {
  const { setShowChatWindow } = props;
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [play] = useSound(instantMessageSound);

  const handleClose = () => {
    setShowChatWindow(false);
  };

  const handleChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSubmit = (e) => {
    let message = messageInput;
    e.preventDefault();
    setMessageInput("");
    setMessages((prevMessages) => [...prevMessages, message]);
    try {
      runPrompt(message);
    } catch (error) {
      console.log(error);
    }
  };

  const runPrompt = async (input) => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
    });
    let ai_response = completion.data.choices[0].text;
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, ai_response]);
      play();
    }, 500);
  };

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "90%", y: "20%" }}
    >
      <Container
        style={{ width: "500px", height: "400px", backgroundColor: "#ebe9d8" }}
        className=" position-absolute"
      >
        <Container className="d-flex bg-dark text-light flex-row align-content-center justify-content-between m-0 p-0">
          <p className="px-3 m-0">SmarterChild - Instant Message</p>

          <button onClick={handleClose}>X</button>
        </Container>
        <Container className="my-1">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>People</button>
        </Container>
        <Container
          style={{ minWidth: "400px", minHeight: "200px" }}
          className="bg-white"
        >
          <ul>
            {messages.map((message) => (
              <li>{message}</li>
            ))}
          </ul>
        </Container>
        <form onSubmit={handleSubmit}>
          <input value={messageInput} onChange={handleChange} />
        </form>
      </Container>
    </Draggable>
  );
};

export default ChatWindow;
