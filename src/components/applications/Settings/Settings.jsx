import { useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import Wallpaper from "./Wallpaper";

const Settings = (props) => {
  const { showSettings, setShowSettings, wallpaper, setWallpaper } = props;
  const [settingDisplay, setSettingDisplay] = useState("wallpaper");

  const handleSelect = (e) => {
    setSettingDisplay(e.target.id);
  };

  const handleClose = () => {
    setShowSettings(false);
    setSettingDisplay("wallpaper");
  };

  return showSettings ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "50%", y: "20%" }}
    >
      <Container
        className="border border-2 rounded p-0 position-absolute"
        style={{ width: "750px", height: "650px", backgroundColor: "#ebe9d8" }}
      >
        {" "}
        <Container className="d-flex bg-dark text-light justify-content-between p-0 m-0">
          <span className="px-3">Settings</span>

          <button onClick={handleClose}>X</button>
        </Container>
        <Container>
          <ul
            className="d-flex flex-row m-0 p-0 mt-1"
            style={{ listStyle: "none" }}
          >
            <li className="mx-2">
              <button id="wallpaper" onClick={handleSelect}>
                Wallpaper
              </button>
            </li>
            <li className="mx-2">
              <button>Files</button>
            </li>
          </ul>
        </Container>
        {settingDisplay == "wallpaper" ? (
          <Wallpaper wallpaper={wallpaper} setWallpaper={setWallpaper} />
        ) : null}
      </Container>
    </Draggable>
  ) : null;
};

export default Settings;
