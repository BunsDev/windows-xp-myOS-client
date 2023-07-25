import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import pokedexIcon from "/src/assets/pokedex-icon.png";

const PokedexIcon = (props) => {
  let { setShowPokedex } = props;
  return (
    <Draggable>
      <Container
        className="d-flex justify-content-center"
        style={{ width: "55px", height: "80px" }}
        onDoubleClick={() => setShowPokedex(true)}
      >
        <img height="80px" draggable="false" src={pokedexIcon} />
      </Container>
    </Draggable>
  );
};

export default PokedexIcon;
