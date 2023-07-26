import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import useSound from "use-sound";
import buddyOut from "/src/assets/buddy-out.mp3";

const Friends = (props) => {
  const { setIsLoggedIn, setShowAim } = props;
  const [play] = useSound(buddyOut);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    play();
  };

  const handleClose = () => {
    setShowAim(false);
  };
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "410%", y: "10%" }}
    >
      <Container
        className="position-absolute p-0 m-0"
        style={{ height: "550px", width: "300px", backgroundColor: "#ebe9d8" }}
      >
        <Container className="d-flex bg-dark text-light flex-row align-content-center justify-content-between m-0 p-0">
          <p className="px-3 m-0">AIM - Buddy List</p>
          <button onClick={handleClose}>X</button>
        </Container>
        <p>Friends Screen</p>
        <button onClick={handleLogOut}>Log Out</button>
      </Container>
    </Draggable>
  );
};

export default Friends;
