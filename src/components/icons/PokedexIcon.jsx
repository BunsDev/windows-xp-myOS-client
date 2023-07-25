import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import pokedexIcon from "/src/assets/pokedex-icon.png";

const PokedexIcon = (props) => {
  let { setShowPokedex } = props;
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-center"
        style={{ width: "50px", height: "75px" }}
        onDoubleClick={() => setShowPokedex(true)}
      >
        <img height="70px" draggable="false" src={pokedexIcon} />
      </Container>
    </Draggable>
  );
};

export default PokedexIcon;
