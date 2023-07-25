import { Container, Button, Row, Col } from "react-bootstrap";
import Calculator from "./Calculator";
import Draggable from "react-draggable";
import { useState } from "react";
import ConnectFour from "./ConnectFour";
import CalculatorIcon from "./CalculatorIcon";
import ConnectFourIcon from "./ConnectFourIcon";
import PokedexIcon from "./PokedexIcon";
import Pokedex from "./Pokedex";

const Desktop = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showConnectFour, setShowConnectFour] = useState(false);
  const [showPokedex, setShowPokedex] = useState(false);
  return (
    <Container className="d-flex flex-column align-content-start m-0 p-0">
      {/* Desktop Icons */}
      <Row className="mt-2">
        <Col xs={1}>
          <CalculatorIcon
            setShowCalculator={setShowCalculator}
            setShowConnectFour={setShowConnectFour}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={1}>
          <ConnectFourIcon setShowConnectFour={setShowConnectFour} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={1}>
          <PokedexIcon setShowPokedex={setShowPokedex} />
        </Col>
      </Row>
      {/* Applications */}
      <Calculator
        showCalculator={showCalculator}
        setShowCalculator={setShowCalculator}
      />
      <ConnectFour
        showConnectFour={showConnectFour}
        setShowConnectFour={setShowConnectFour}
      />
      <Pokedex showPokedex={showPokedex} setShowPokedex={setShowPokedex} />
    </Container>
  );
};

export default Desktop;
