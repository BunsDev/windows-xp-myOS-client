import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import settingsIcon from "/src/assets/settings-icon.png";

const SettingsIcon = (props) => {
  let { setShowSettings } = props;

  const handleClick = () => {
    setShowSettings(true);
  };
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-end"
        style={{ width: "80px", height: "80px" }}
        onDoubleClick={handleClick}
      >
        <img height="80px" draggable="false" src={settingsIcon} />
      </Container>
    </Draggable>
  );
};

export default SettingsIcon;
