import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Calculator = (props) => {
  let { showCalculator, setShowCalculator } = props;

  return showCalculator ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "130%", y: "20%" }}
    >
      <Container
        className="border border-2 rounded bg-secondary p-0 position-absolute"
        style={{ width: "420px", height: "650px" }}
      >
        {" "}
        <Container className="d-flex justify-content-between p-0 m-0">
          <span className="px-3">Calculator</span>

          <button onClick={() => setShowCalculator(false)}>X</button>
        </Container>
        <iframe
          title="mytitle"
          src="/applications/calculator/index.html"
          width="410px"
          height="615px"
        ></iframe>
      </Container>
    </Draggable>
  ) : null;
};

export default Calculator;
