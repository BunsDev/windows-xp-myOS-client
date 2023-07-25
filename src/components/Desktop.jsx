import { Container, Button, Row, Col } from "react-bootstrap";
import Draggable from "react-draggable";
import { useState } from "react";
import Calculator from "./applications/Calculator";
import CalculatorIcon from "./icons/CalculatorIcon";
import ConnectFour from "./applications/ConnectFour";
import ConnectFourIcon from "./icons/ConnectFourIcon";
import Pokedex from "./applications/Pokedex";
import PokedexIcon from "./icons/PokedexIcon";
import AimIcon from "./icons/AimIcon";
import AIM from "./applications/AIM/AIM";

const Desktop = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showConnectFour, setShowConnectFour] = useState(false);
  const [showPokedex, setShowPokedex] = useState(false);
  const [showAim, setShowAim] = useState(false);
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
      <Row className="mt-3">
        <Col xs={1}>
          <AimIcon setShowAim={setShowAim} />
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
      <AIM showAim={showAim} setShowAim={setShowAim} />
    </Container>
  );
};

export default Desktop;
