import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import calculatorIcon from "../src/assets/calculator-icon.png";

const CalculatorIcon = (props) => {
  let { setShowCalculator, setShowConnectFour } = props;

  const handleClick = () => {
    setShowCalculator(true);
    // setShowConnectFour(false)
  };
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-center"
        style={{ width: "55px", height: "80px" }}
        onDoubleClick={handleClick}
      >
        <img height="80px" draggable="false" src={calculatorIcon} />
      </Container>
    </Draggable>
  );
};

export default CalculatorIcon;
