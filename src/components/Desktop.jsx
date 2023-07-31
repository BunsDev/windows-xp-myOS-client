import { Container, Button, Row, Col } from "react-bootstrap";
import Draggable from "react-draggable";
import { useState } from "react";
import Calculator from "./applications/Calculator";
import CalculatorIcon from "./icons/CalculatorIcon";
import ConnectFour from "./applications/ConnectFour";
import ConnectFourIcon from "./icons/ConnectFourIcon";
import Pokedex from "./applications/Pokedex";
import PokedexIcon from "./icons/PokedexIcon";
import AimIcon from "./icons/AimIcon";
import AIM from "./applications/AIM/AIM";
import InternetExplorerIcon from "./icons/InternetExplorerIcon";
import InternetExplorer from "./applications/InternetExplorer/InternetExplorer";
import NotepadIcon from "./icons/NotepadIcon";
import Notepad from "./applications/Notepad";
import Splash from "./Splash";
import SettingsIcon from "./icons/SettingsIcon";
import Settings from "./applications/Settings/Settings";

const Desktop = (props) => {
  const { wallpaper, setWallpaper } = props;
  const [showCalculator, setShowCalculator] = useState(false);
  const [showConnectFour, setShowConnectFour] = useState(false);
  const [showPokedex, setShowPokedex] = useState(false);
  const [showAim, setShowAim] = useState(false);
  const [showInternetExplorer, setShowInternetExplorer] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [zIndices, setZIndices] = useState({
    Calculator: 1,
    ConnectFour: 1,
    Pokedex: 1,
    AIM: 1,
    InternetExplorer: 1,
    Notepad: 1,
    Splash: 1,
    Settings: 1,
  });

  const bringToFront = (componentName) => {
    const highestZIndex = Math.max(...Object.values(zIndices));
    const newZIndex = highestZIndex + 1;
    setZIndices((prevZIndices) => ({
      ...prevZIndices,
      [componentName]: newZIndex,
    }));
  };

  return (
    <Container className="d-flex flex-column align-content-start m-0 p-0">
      {/* Desktop Icons */}
      <Row className="mt-2">
        <Col xs={1}>
          <CalculatorIcon setShowCalculator={setShowCalculator} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={1}>
          <ConnectFourIcon setShowConnectFour={setShowConnectFour} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={1}>
          <PokedexIcon setShowPokedex={setShowPokedex} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={1}>
          <AimIcon setShowAim={setShowAim} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={1}>
          <InternetExplorerIcon
            setShowInternetExplorer={setShowInternetExplorer}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={1}>
          <NotepadIcon setShowNotepad={setShowNotepad} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={1}>
          <SettingsIcon setShowSettings={setShowSettings} />
        </Col>
      </Row>

      {/* Applications */}
      <Splash showSplash={showSplash} setShowSplash={setShowSplash} />
      <Calculator
        showCalculator={showCalculator}
        setShowCalculator={setShowCalculator}
        zIndex={zIndices["Calculator"]}
        setZIndex={() => bringToFront("Calculator")}
      />
      <ConnectFour
        showConnectFour={showConnectFour}
        setShowConnectFour={setShowConnectFour}
        zIndex={zIndices["ConnectFour"]}
        setZIndex={() => bringToFront("ConnectFour")}
      />
      <Pokedex
        showPokedex={showPokedex}
        setShowPokedex={setShowPokedex}
        zIndex={zIndices["Pokedex"]}
        setZIndex={() => bringToFront("Pokedex")}
      />
      <AIM
        showAim={showAim}
        setShowAim={setShowAim}
        zIndex={zIndices["AIM"]}
        setZIndex={() => bringToFront("AIM")}
      />
      <InternetExplorer
        showInternetExplorer={showInternetExplorer}
        setShowInternetExplorer={setShowInternetExplorer}
        zIndex={zIndices["InternetExplorer"]}
        setZIndex={() => bringToFront("InternetExplorer")}
      />
      <Notepad
        showNotepad={showNotepad}
        setShowNotepad={setShowNotepad}
        zIndex={zIndices["Notepad"]}
        setZIndex={() => bringToFront("Notepad")}
      />

      <Settings
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        wallpaper={wallpaper}
        setWallpaper={setWallpaper}
        zIndex={zIndices["Settings"]}
        setZIndex={() => bringToFront("Settings")}
      />
    </Container>
  );
};

export default Desktop;
