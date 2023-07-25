import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const Login = (props) => {
  const handleLogIn = () => {
    props.setIsLoggedIn(true);
  };

  const handleClose = () => {
    props.setShowAim(false);
  };
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "220%", y: "30%" }}
    >
      <Container
        className="position-absolute bg-secondary"
        style={{ height: "550px", width: "300px" }}
      >
        <button onClick={handleClose}>X</button>
        <p>Log In Screen</p>
        <button onClick={handleLogIn}>Log In</button>
      </Container>
    </Draggable>
  );
};

export default Login;
