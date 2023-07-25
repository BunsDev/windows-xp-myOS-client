import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Friends = (props) => {
  const { setIsLoggedIn, setShowAim } = props;
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleClose = () => {
    setIsLoggedIn(false);
  };
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "410%", y: "10%" }}
    >
      <Container
        className="position-absolute bg-secondary"
        style={{ height: "550px", width: "300px" }}
      >
        <button onClick={handleClose}>X</button>
        <p>Friends Screen</p>
        <button onClick={handleLogOut}>Log Out</button>
      </Container>
    </Draggable>
  );
};

export default Friends;
