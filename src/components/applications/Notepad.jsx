import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import axios from "axios";
import moment from "moment";
import { json } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASEURL;

const Notepad = (props) => {
  let { showNotepad, setShowNotepad } = props;
  const initialState = { name: "Untitled Document" };
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(initialState);
  const [textareaValue, setTextAreaValue] = useState("");
  const [logs, setLogs] = useState([]);

  const handleSave = () => {
    const fileName = prompt("Please enter a file name.");
    if (fileName.length != 0) {
      setFiles((prevFiles) => [
        ...prevFiles,
        { name: fileName, content: textareaValue },
      ]);
      setTextAreaValue("");
      setCurrentFile(initialState);
    }
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
  const handleSelect = (e) => {
    const foundLog = logs.find((log) => log.id == e.target.value);
    console.log(e.target.value);
    console.log(foundLog);
    const momentDate = moment(foundLog.createdAt).format(
      "YYYY-MM-DD h:mm:ss a"
    );
    const parsedLog = parseLogFile(foundLog.content);
    setTextAreaValue(parsedLog);
    setCurrentFile({ name: momentDate });
    // setTextAreaValue(logMessages.map((message) => message.user));
  };

  const parseLogFile = (logFile) => {
    let jsonParsed = JSON.parse(logFile);
    let logOutput = "";
    console.log(jsonParsed);
    jsonParsed.map((message) => {
      const trimmedMessage = message.message
        .trim(/\n{2}/g, "")
        .replace(/\n{2}/g, " ")
        .replace(/\n/g, " ");
      logOutput += `${message.user.toUpperCase()}: ${trimmedMessage} \n`;
    });
    return logOutput;
  };

  const handleNewFile = () => {
    setCurrentFile(initialState);
    setTextAreaValue("");
  };

  const handleClose = () => {
    setShowNotepad(false);
    setTextAreaValue("");
    setCurrentFile(initialState);
  };

  useEffect(() => {
    if (showNotepad) {
      const getAllLogs = async () => {
        let response = await axios.get(`${BASE_URL}/logs`);
        setLogs(response.data);
        console.log(response);
      };
      getAllLogs();
    }
  }, [showNotepad]);

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

          <button onClick={handleClose}>X</button>
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
          <div>
            <select onChange={handleSelect}>
              <option>Select A Chat Log</option>

              {logs.map((log) => (
                <option className="mx-1" id={log.id} value={log.id}>
                  {moment(log.createdAt).format("YYYY-MM-DD h:mm:ss a")}
                </option>
              ))}
            </select>
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
