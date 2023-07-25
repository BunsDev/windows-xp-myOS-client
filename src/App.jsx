import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Desktop from "./components/Desktop";
import wallpaper from "./assets/wallpaper.png";
import Taskbar from "./components/Taskbar";

function App() {
  return (
    <Container
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        width: "1600px",
        height: "1000px",
        minWidth: "1600px",
        minHeight: "900px",
        // overflow: "hidden",
      }}
    >
      {/* Desktop Icons */}
      <Row>
        <Col xs={1} className=" mx-2 " style={{ width: "90px" }}>
          <Desktop />
        </Col>
      </Row>
      {/* Place Filler */}
      <Row className="" style={{ height: "620px" }}></Row>
      {/* Taskbar */}
      <Row className="w-100 mx-auto" style={{ height: "38px" }}>
        <Taskbar />
      </Row>
    </Container>
  );
}

export default App;
