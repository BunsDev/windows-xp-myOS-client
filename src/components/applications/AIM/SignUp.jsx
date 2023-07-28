import { useState } from "react";
import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import axios from "axios";
import bcrypt from "bcryptjs";
import useSound from "use-sound";
import inactive from "/src/assets/inactive.mp3";

const BASE_URL = import.meta.env.VITE_BASEURL;

const SignUp = (props) => {
  const initialValue = { username: "", password: "", passwordConfirm: "" };
  const { showSignup, setShowSignup, users, setSignedUp } = props;
  const [formState, setFormState] = useState(initialValue);
  const [play] = useSound(inactive);

  const handleFormChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.id]: e.target.value,
    }));
    console.log(formState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      users.filter((user) => user.username == formState.username).length > 0
    ) {
      play();
      alert("Screenname already exists. Please choose another screenname.");
    } else if (
      formState.password !== formState.passwordConfirm ||
      !formState.password ||
      !formState.passwordConfirm
    ) {
      play();
      alert("Invalid password. Please make sure passwords match.");
    } else {
      createUser();
      setFormState(initialValue);
      setShowSignup(false);
      setTimeout(() => {
        setSignedUp(true);
      }, 2000);
      alert("Sign up sucessful. Please log in.");
    }
  };

  const createUser = async () => {
    let hashedPassword = await hashPassword(); // Hashing the password before sending it to the server
    let user = await axios.post(`${BASE_URL}/users`, {
      username: formState.username.toLowerCase(),
      password: hashedPassword,
    });
  };

  const hashPassword = async () => {
    const saltRounds = 10; // Number of salt rounds for password hashing

    const hashedPassword = await bcrypt.hash(formState.password, saltRounds); // Hashing the password using bcrypt

    return hashedPassword; // Returning the hashed password
  };

  const handleClose = () => {
    setShowSignup(false);
  };

  return showSignup ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "274%", y: "70%" }}
    >
      <Container
        className="border border-2 border-dark d-flex flex-column align-content-center position-absolute p-0 m-0"
        style={{ height: "330px", width: "245px", backgroundColor: "#ebe9d8" }}
      >
        <Container className="d-flex bg-dark text-light flex-row align-content-center justify-content-between m-0 p-0">
          <p className="px-3 m-0">AIM - Sign Up</p>
          <button onClick={handleClose}>X</button>
        </Container>
        <Container>
          <p className="fw-bold mt-4">Sign Up Below</p>
          <form onSubmit={handleFormSubmit}>
            <label>ScreenName</label>
            <input
              value={formState.username}
              onChange={handleFormChange}
              id="username"
            />
            <label>Password</label>
            <input
              value={formState.password}
              onChange={handleFormChange}
              id="password"
              type="password"
            />
            <label>Confirm Password</label>
            <input
              onChange={handleFormChange}
              id="passwordConfirm"
              type="password"
              value={formState.passwordConfirm}
            />
            <button type="submit" className="mt-2">
              Sign Up
            </button>
          </form>
        </Container>
      </Container>
    </Draggable>
  ) : null;
};

export default SignUp;
