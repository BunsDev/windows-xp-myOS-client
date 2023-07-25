import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Pokedex = (props) => {
  let { showPokedex, setShowPokedex } = props;

  return showPokedex ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "20%", y: "-20%" }}
    >
      <Container
        className="border border-2 rounded bg-secondary p-0"
        style={{ width: "510px", height: "900px" }}
      >
        {" "}
        <Container className="d-flex justify-content-end p-0 m-0 position-relative">
          <button onClick={() => setShowPokedex(false)}>X</button>
        </Container>
        <iframe
          title="mytitle"
          src="../applications/pokedex/index.html"
          width="460px"
          height="900px"
        ></iframe>
      </Container>
    </Draggable>
  ) : null;
};

export default Pokedex;
