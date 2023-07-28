import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import notepadIcon from "/src/assets/notepad-icon.png";

const NotepadIcon = (props) => {
  let { setShowNotepad } = props;

  const handleClick = () => {
    setShowNotepad(true);
  };
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-end"
        style={{ width: "70px", height: "70px" }}
        onDoubleClick={handleClick}
      >
        <img height="70px" draggable="false" src={notepadIcon} />
      </Container>
    </Draggable>
  );
};

export default NotepadIcon;
