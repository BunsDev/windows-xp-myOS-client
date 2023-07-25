import { useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import Login from "./Login";
import Friends from "./Friends";

const AIM = (props) => {
  const { setShowAim } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    props.setShowAim(false);
  };

  if (props.showAim) {
    return !isLoggedIn ? (
      <Login
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setShowAim={setShowAim}
      />
    ) : (
      <Friends setIsLoggedIn={setIsLoggedIn} setShowAim={setShowAim} />
    );
  }
};

export default AIM;
