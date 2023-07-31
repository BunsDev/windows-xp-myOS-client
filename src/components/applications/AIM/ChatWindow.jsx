import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import { Configuration, OpenAIApi } from "openai";
import useSound from "use-sound";
import instantMessageSound from "/src/assets/instant-message-im.mp3";
import chatToolbar from "/src/assets/chat-toolbar.png";
import chatBottomBar from "/src/assets/chat-bottombar.png";
import chatSend from "/src/assets/chat-send.png";
import axios from "axios";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAIKEY,
});
delete configuration.baseOptions.headers["User-Agent"];
const openai = new OpenAIApi(configuration);
const BASE_URL = import.meta.env.VITE_BASEURL;

const ChatWindow = (props) => {
  const { setShowChatWindow, user } = props;
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [play] = useSound(instantMessageSound);
  const bottom = useRef(null);

  const handleClose = () => {
    setShowChatWindow(false);
  };

  const handleChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageInput.length > 0) {
      let message = messageInput;
      setMessageInput("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: user.username, message: message },
      ]);
      bottom?.current?.scrollIntoView({ behavior: "smooth" });
      try {
        runPrompt(message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const runPrompt = async (input) => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 1000,
    });
    let ai_response = completion.data.choices[0].text;
    setMessages((prevMessages) => [
      ...prevMessages,
      { user: "SmarterChild", message: ai_response },
    ]);
    bottom?.current?.scrollIntoView({ behavior: "smooth" });
    play();
  };

  const handleExportChatLog = () => {
    const confirmResponse = confirm(
      "Are you sure you want to export this chat log?"
    );
    if (confirmResponse) {
      exportChatLog();
    }
  };

  const exportChatLog = async () => {
    let savedLog = await axios.post(`${BASE_URL}/logs`, {
      content: JSON.stringify(messages),
      userId: user.id,
    });
    console.log(savedLog);
  };

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "90%", y: "20%" }}
    >
      <Container
        style={{
          width: "500px",
          maxWidth: "500px",
          height: "400px",
          backgroundColor: "#ebe9d8",
        }}
        className="position-absolute p-0 m-0"
      >
        <Container className="d-flex bg-dark text-light flex-row align-content-center justify-content-between m-0 p-0">
          <p className="px-3 m-0">SmarterChild - Instant Message</p>

          <button onClick={handleClose}>X</button>
        </Container>
        <Container className="my-1">
          <button disabled>File</button>
          <button disabled>Edit</button>
          <button disabled>View</button>
          <button disabled>People</button>
          <button onClick={handleExportChatLog}>Export Chat Log</button>
        </Container>
        <Container
          style={{
            width: "480px",
            height: "150px",
            overflow: "scroll",
            wordWrap: "break-word",
          }}
          className="bg-white"
        >
          <ul className="text-start mx-0 mt-1 p-0">
            {messages.map((message) => (
              <li style={{ listStyle: "none" }} className="p-0 m-0 fs-5">
                <span>
                  {message.user == "SmarterChild" ? (
                    <span style={{ color: "blue" }}>{message.user}</span>
                  ) : (
                    <span style={{ color: "red" }}>{message.user}</span>
                  )}
                  : {message.message}
                </span>
              </li>
            ))}
          </ul>
          <br />
          <br />
          <div ref={bottom}></div>
        </Container>
        <Container className="p-0 m-0">
          <img className="w-100" src={chatToolbar} />
        </Container>
        <Container>
          <form onSubmit={handleSubmit}>
            <textarea
              style={{ width: "475px", height: "60px" }}
              value={messageInput}
              onChange={handleChange}
            />

            <Container className="d-flex flex-row justify-content-center align-content-start">
              <img style={{ height: "75px" }} src={chatBottomBar} />
              <button style={{ border: "none" }}>
                <img style={{ height: "75px" }} src={chatSend} />
              </button>
            </Container>
          </form>
        </Container>
      </Container>
    </Draggable>
  );
};

export default ChatWindow;
