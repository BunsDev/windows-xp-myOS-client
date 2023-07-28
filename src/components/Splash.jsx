import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Splash = (props) => {
  const { showSplash, setShowSplash } = props;
  return showSplash ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "130%", y: "80%" }}
    >
      <Container
        style={{ width: "400px", height: "300px", backgroundColor: "#ebe9d8" }}
        className="position-absolute"
      >
        Welcome to my application.
      </Container>
    </Draggable>
  ) : null;
};

export default Splash;
