import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import defaultWallpaper from "/src/assets/wallpaper.png";
import { useState } from "react";

function App() {
  const [wallpaper, setWallpaper] = useState(defaultWallpaper);
  return (
    <Container
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        width: "1600px",
        height: "940px",
        minWidth: "1600px",
        minHeight: "940px",
      }}
    >
      {/* Desktop Icons */}
      <Row>
        <Col xs={1} className=" mx-2 " style={{ width: "90px" }}>
          <Desktop wallpaper={wallpaper} setWallpaper={setWallpaper} />
        </Col>
      </Row>
      {/* Place Filler */}
      <Row className="" style={{ height: "292px" }}></Row>
      {/* Taskbar */}
      <Row className="w-100 mx-auto" style={{ height: "38px" }}>
        <Taskbar />
      </Row>
    </Container>
  );
}

export default App;
