import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import loginLogo from "/src/assets/login-logo2.png";
import signon from "/src/assets/signon2.png";
import signon2 from "/src/assets/signon3.png";

import useSound from "use-sound";
import buddyIn from "/src/assets/buddy-in.mp3";

const Login = (props) => {
  const { setIsLoggedIn, setShowAim } = props;
  const [play] = useSound(buddyIn);

  const handleLogIn = () => {
    setIsLoggedIn(true);
    play();
  };

  const handleClose = () => {
    setShowAim(false);
  };
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "220%", y: "30%" }}
    >
      <Container
        className="d-flex flex-column align-content-center position-absolute p-0 m-0"
        style={{ height: "500px", width: "295px", backgroundColor: "#ebe9d8" }}
      >
        <Container className="d-flex bg-dark text-light flex-row align-content-center justify-content-between m-0 p-0">
          <p className="px-3 m-0">AIM - Sign On</p>
          <button onClick={handleClose}>X</button>
        </Container>

        <Container className="mt-2">
          <img width="270px" src={loginLogo} />
        </Container>
        <Container>
          <hr />
        </Container>
        <form>
          <Container className="d-flex flex-column align-content-center align-items-center text-center mt-0">
            <p className="mb-0">ScreenName</p>
            <input />
            <p className="mb-0">Password</p>
            <input />
          </Container>
          <Container className="d-flex flex-row justify-content-around mt-1">
            <div>
              <input type="checkbox" />
              <span> Save password</span>
            </div>
            <div>
              <input type="checkbox" />
              <span> Auto-login</span>
            </div>
          </Container>
          <Container className="d-flex flex-row justify-content-between mt-2">
            <img height="60px" src={signon2} />
            <button
              type="submit"
              onClick={handleLogIn}
              // style={{ borderWidth: "0" }}
            >
              <img height="50px" src={signon} />
            </button>
          </Container>
        </form>
      </Container>
    </Draggable>
  );
};

export default Login;
