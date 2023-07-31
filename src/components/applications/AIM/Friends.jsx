import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import useSound from "use-sound";
import buddyOut from "/src/assets/buddy-out.mp3";
import buddyLogo from "/src/assets/buddy-logo.png";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

const Friends = (props) => {
  const { setIsLoggedIn, setShowAim, user, zIndex, setZIndex } = props;
  const [play] = useSound(buddyOut);
  const [showChatWindow, setShowChatWindow] = useState(false);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    play();
  };

  const handleClose = () => {
    setShowAim(false);
  };

  const handleOpenChat = () => {
    setShowChatWindow(true);
  };
  return (
    <>
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        positionOffset={{ x: "460%", y: "10%" }}
      >
        <Container
          className="position-absolute p-0 m-0"
          style={{
            height: "550px",
            width: "260px",
            backgroundColor: "#ebe9d8",
            zIndex: zIndex,
          }}
        >
          <Container
            className="d-flex bg-dark text-light flex-row align-content-center justify-content-between m-0 p-0"
            onClick={() => setZIndex()}
          >
            <p className="px-3 m-0">{user.username}'s Buddy List</p>

            <button onClick={handleClose}>X</button>
          </Container>
          <Container className="d-flex flex-column justify-content-center p-0 m-0 text-center mt-2">
            <Container>
              <img width="200px" src={buddyLogo} />
            </Container>
            <Container
              style={{ height: "330px", width: "225px" }}
              className="border border-2 border-secondary bg-white mx-3 my-4"
            >
              <p className="text-start fw-bold p-0 m-0">▼ Buddies</p>
              <div
                className="text-center"
                style={{
                  backgroundColor: "lightgray",
                  width: "140px",
                  cursor: "grab",
                }}
                onDoubleClick={handleOpenChat}
              >
                <p className="text-start p-0 mx-4">SmarterChild</p>
              </div>
            </Container>
            <Container>
              <button onClick={handleLogOut}>Log Out</button>
            </Container>
          </Container>
        </Container>
      </Draggable>
      {showChatWindow ? (
        <ChatWindow
          setShowChatWindow={setShowChatWindow}
          user={user}
          zIndex={zIndex}
          setZIndex={setZIndex}
        />
      ) : null}
    </>
  );
};

export default Friends;
