import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import internetExplorerIcon from "/src/assets/ie.ico";

const InternetExplorerIcon = (props) => {
  let { setShowInternetExplorer } = props;

  const handleClick = () => {
    setShowInternetExplorer(true);
  };
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-end"
        style={{ width: "70px", height: "70px" }}
        onDoubleClick={handleClick}
      >
        <img height="70px" draggable="false" src={internetExplorerIcon} />
      </Container>
    </Draggable>
  );
};

export default InternetExplorerIcon;
