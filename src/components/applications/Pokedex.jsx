import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Pokedex = (props) => {
  let { showPokedex, setShowPokedex } = props;

  return showPokedex ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      // positionOffset={{ x: "100%", y: "-27%" }}
    >
      <Container
        className="border border-2 rounded bg-secondary p-0 position-absolute"
        style={{ width: "510px", height: "900px", zIndex: "2" }}
      >
        {" "}
        <Container className="d-flex justify-content-between p-0 m-0 position-relative">
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
