import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Splash = (props) => {
  const { showSplash, setShowSplash } = props;
  return showSplash ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "280%", y: "3%" }}
    >
      <Container
        style={{ width: "400px", height: "300px", backgroundColor: "#ebe9d8" }}
        className="position-absolute p-0 m-0"
      >
        <Container className="d-flex bg-dark text-light justify-content-between p-0 m-0">
          <span className="px-3">Welcome to myOS</span>

          <button>X</button>
        </Container>
        <Container>Welcome to my application.</Container>
      </Container>
    </Draggable>
  ) : null;
};

export default Splash;
