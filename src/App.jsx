import Desktop from "../components/Desktop";
import "./App.css";
import { Button, Container } from "react-bootstrap";

function App() {
  return (
    <Container
      style={{
        backgroundImage: "url('./src/assets/wallpaper.png')",
        backgroundSize: "cover",
        width: "1600px",
        height: "1000px",
        minWidth: "1600px",
        minHeight: "900px",
      }}
    >
      <Desktop />
    </Container>
  );
}

export default App;
