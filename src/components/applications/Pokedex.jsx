import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Pokedex = (props) => {
  let { showPokedex, setShowPokedex, zIndex, setZIndex } = props;

  return showPokedex ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "100%", y: "5%" }}
    >
      <Container
        className="border border-2 rounded p-0 position-absolute"
        style={{
          width: "510px",
          height: "900px",
          zIndex: zIndex,
          backgroundColor: "#ebe9d8",
        }}
      >
        {" "}
        <Container
          className="d-flex justify-content-between bg-dark text-light p-0 m-0 position-relative"
          onClick={() => setZIndex()}
        >
          <span className="px-3">Pokedex</span>
          <button onClick={() => setShowPokedex(false)}>X</button>
        </Container>
        <iframe
          title="mytitle"
          src="/projects/pokedex/index.html"
          width="460px"
          height="900px"
        ></iframe>
      </Container>
    </Draggable>
  ) : null;
};

export default Pokedex;
