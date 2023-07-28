import { useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Notepad = (props) => {
  let { showNotepad, setShowNotepad } = props;
  const initialState = { name: "Untitled Document" };
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(initialState);
  const [textareaValue, setTextAreaValue] = useState("");

  const handleSave = () => {
    const fileName = prompt("Please enter a file name.");
    setFiles((prevFiles) => [
      ...prevFiles,
      { name: fileName, content: textareaValue },
    ]);
    setTextAreaValue("");
    setCurrentFile(initialState);
  };

  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
    console.log(textareaValue);
  };

  const handleOpenFile = (e) => {
    const foundFile = files.find((file) => file.name == e.target.id);
    console.log(foundFile);

    setCurrentFile(foundFile);
    setTextAreaValue(foundFile.content);
  };

  const handleNewFile = () => {
    setCurrentFile(initialState);
    setTextAreaValue("");
  };

  return showNotepad ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "60%", y: "10%" }}
    >
      <Container
        className="border border-2 rounded p-0 position-absolute justify-content-center"
        style={{ width: "600px", height: "800px", backgroundColor: "#ebe9d8" }}
      >
        {" "}
        <Container className="d-flex bg-dark text-light justify-content-between p-0 m-0">
          <span className="px-3">Notepad - {currentFile.name}.txt</span>

          <button onClick={() => setShowNotepad(false)}>X</button>
        </Container>
        <Container className="d-flex flex-row justify-content-between">
          <div>
            <button onClick={handleNewFile}>New File</button>
            <button onClick={handleSave} className="mx-1">
              Save
            </button>
          </div>
          <div>
            {files.length > 0 ? <span>Recent Files: </span> : null}
            {files.map((file) => (
              <button className="mx-1" id={file.name} onClick={handleOpenFile}>
                {file.name}.txt
              </button>
            ))}
          </div>
        </Container>
        <Container className="mt-1">
          <textarea
            value={textareaValue}
            id={textareaValue}
            onChange={handleChange}
            style={{ width: "570px", height: "730px" }}
          ></textarea>
        </Container>
      </Container>
    </Draggable>
  ) : null;
};

export default Notepad;
