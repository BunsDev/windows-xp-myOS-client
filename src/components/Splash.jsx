import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Splash = (props) => {
  const { showSplash, setShowSplash } = props;

  const handleClose = () => {
    setShowSplash(false);
  };

  return showSplash ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "290%", y: "3%" }}
    >
      <Container
        style={{ width: "400px", height: "340px", backgroundColor: "#ebe9d8" }}
        className="position-absolute p-0 m-0"
      >
        <Container className="d-flex bg-dark text-light justify-content-between p-0 m-0">
          <span className="px-3">myOS Welcome Page</span>

          <button onClick={handleClose}>X</button>
        </Container>
        <Container className="px-2 mx-1 mt-1">
          <h6>Welcome to myOS Virtual Desktop Environment</h6>
          <ul>
            <li>Created entirely with React / PostgreSQL</li>
            <li>Fully functioning desktop applications</li>
            <li>
              AOL Instant Messenger
              <ul>
                <li>User authentication w/ password hashing</li>
                <li>AI-powered "SmarterChild" chatbot</li>
              </ul>
            </li>
            <li>
              Internet Explorer
              <ul>
                <li>Explore my other projects via bookmarks</li>
                <li>Access other webpages using address bar</li>
              </ul>
            </li>
            <li>Notepad - Retrieval of files from SQL API</li>
          </ul>
          <h4 className="text-center">
            Developed By:{" "}
            <a href="https://github.com/kevinleet" target="_blank">
              Kevin Li
            </a>
          </h4>
        </Container>
      </Container>
    </Draggable>
  ) : null;
};

export default Splash;
