import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import gameIcon from "../src/assets/game-icon.png";

const ConnectFourIcon = (props) => {
  let { setShowConnectFour } = props;
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-center"
        style={{ width: "55px", height: "80px" }}
        onDoubleClick={() => setShowConnectFour(true)}
      >
        <img height="80px" draggable="false" src={gameIcon} />
      </Container>
    </Draggable>
  );
};

export default ConnectFourIcon;
