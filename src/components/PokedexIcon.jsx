import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import pokedexIcon from "/src/assets/pokedex-icon.png";

const PokedexIcon = (props) => {
  let { setShowPokedex } = props;
  return (
    <Draggable positionOffset={{ x: "5px", y: "-10px" }}>
      <Container
        className="d-flex justify-content-center"
        style={{ width: "70px", height: "60px" }}
        onDoubleClick={() => setShowPokedex(true)}
      >
        <img height="110px" draggable="false" src={pokedexIcon} />
      </Container>
    </Draggable>
  );
};

export default PokedexIcon;
