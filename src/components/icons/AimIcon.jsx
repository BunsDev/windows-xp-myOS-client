import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import aimIcon from "/src/assets/aim-icon.png";

const AimIcon = (props) => {
  let { setShowAim } = props;

  const handleClick = () => {
    setShowAim(true);
  };
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-end"
        style={{ width: "70px", height: "70px" }}
        onDoubleClick={handleClick}
      >
        <img height="70px" draggable="false" src={aimIcon} />
      </Container>
    </Draggable>
  );
};

export default AimIcon;
