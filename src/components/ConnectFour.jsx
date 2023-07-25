import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const ConnectFour = (props) => {
  let { showConnectFour, setShowConnectFour } = props;

  return showConnectFour ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "50%", y: "10%" }}
    >
      <Container
        className="border border-2 bg-secondary p-0 position-absolute"
        style={{ width: "755px", height: "815px" }}
      >
        {" "}
        <Container className="d-flex justify-content-between p-0">
          <span className="px-3">Connect Four</span>
          <button onClick={() => setShowConnectFour(false)}>X</button>
        </Container>
        <iframe
          title="mytitle"
          src="/applications/connect-four/index.html"
          width="750px"
          height="780px"
        ></iframe>
      </Container>
    </Draggable>
  ) : null;
};

export default ConnectFour;
