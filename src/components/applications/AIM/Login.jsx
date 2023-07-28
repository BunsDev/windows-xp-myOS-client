import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import { useState, useEffect } from "react";
import axios from "axios";
import loginLogo from "/src/assets/login-logo2.png";
import signon from "/src/assets/signon2.png";
import signon2 from "/src/assets/signon3.png";
import useSound from "use-sound";
import buddyIn from "/src/assets/buddy-in.mp3";
import inactive from "/src/assets/inactive.mp3";
import SignUp from "./SignUp";
import bcrypt from "bcryptjs"; // Importing bcrypt for password hashing

const BASE_URL = import.meta.env.VITE_BASEURL;

const Login = (props) => {
  const initialValue = { screenname: "", password: "" };
  const { setIsLoggedIn, setShowAim, users, setUsers, setUser } = props;
  const [formState, setFormState] = useState(initialValue);
  const [showSignup, setShowSignup] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [playSuccess] = useSound(buddyIn);
  const [playFail] = useSound(inactive);

  const handleAuth = () => {
    let match = users.find((user) => {
      return (
        user.username === formState.screenname.toLowerCase() &&
        bcrypt.compare(user.password, formState.password)
      );
    });
    return match;
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    let authUser = handleAuth();
    if (authUser) {
      setUser(authUser);
      setIsLoggedIn(true);
      playSuccess();
    } else {
      setFormState(initialValue);
      playFail();
    }
  };

  const handleClose = () => {
    setShowAim(false);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    const getAllUsers = async () => {
      let response = await axios.get(`${BASE_URL}/users`);
      setUsers(response.data);
    };
    getAllUsers();
  }, [signedUp]);

  return (
    <>
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        positionOffset={{ x: "220%", y: "30%" }}
      >
        <Container
          className="d-flex flex-column align-content-center position-absolute p-0 m-0"
          style={{
            height: "530px",
            width: "295px",
            backgroundColor: "#ebe9d8",
          }}
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
              <input
                id="screenname"
                value={formState.screenname}
                onChange={handleChange}
              />
              <a href="#" onClick={() => setShowSignup(true)}>
                Get a screenname
              </a>
              <p className="mb-0">Password</p>
              <input
                id="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
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
      <SignUp
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        users={users}
        setSignedUp={setSignedUp}
      />
    </>
  );
};

export default Login;
