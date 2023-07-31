import { useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const ConnectFour = (props) => {
  let { showConnectFour, setShowConnectFour, zIndex, setZIndex } = props;

  return showConnectFour ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "50%", y: "10%" }}
    >
      <Container
        className="border border-2 bg-secondary p-0 position-absolute"
        style={{ width: "755px", height: "815px", zIndex: zIndex + 1 }}
      >
        {" "}
        <Container
          className="d-flex bg-dark text-light justify-content-between p-0"
          onClick={() => setZIndex()}
        >
          <span className="px-3">Connect Four</span>
          <button onClick={() => setShowConnectFour(false)}>X</button>
        </Container>
        <iframe
          title="mytitle"
          src="/projects/connect-four/index.html"
          width="750px"
          height="780px"
        ></iframe>
      </Container>
    </Draggable>
  ) : null;
};

export default ConnectFour;
