import { useState } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

const InternetExplorer = (props) => {
  let { showInternetExplorer, setShowInternetExplorer } = props;
  let [currentURL, setCurrentURL] = useState("https://kevinli.boston/");
  let [inputValue, setInputValue] = useState(currentURL);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setCurrentURL(inputValue);
  };

  const handleBookmarkClick = (e) => {
    setCurrentURL(e.target.value);
    setInputValue(e.target.value);
  };

  return showInternetExplorer ? (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      positionOffset={{ x: "15%", y: "4%" }}
    >
      <Container
        className="border border-2 rounded p-0 position-absolute"
        style={{ width: "1204px", height: "900px", backgroundColor: "#ebe9d8" }}
      >
        {" "}
        <Container className="d-flex bg-dark text-light justify-content-between p-0 m-0">
          <span className="px-3">Internet Explorer</span>

          <button onClick={() => setShowInternetExplorer(false)}>X</button>
        </Container>
        <Container className="py-1 bg-light d-flex flex-row">
          <form onSubmit={handleInputSubmit}>
            <input
              value={inputValue}
              onChange={handleInputChange}
              style={{ width: "500px" }}
            />
          </form>
          <div>
            <button
              className="mx-1"
              value="https://kevinli.boston/"
              onClick={handleBookmarkClick}
            >
              Home
            </button>
            <button
              className="mx-1"
              value="https://orangeboxalerts.com/"
              onClick={handleBookmarkClick}
            >
              Orange Box Alerts
            </button>
            <button
              className="mx-1"
              value="https://mbta-tracker-production.up.railway.app/"
              onClick={handleBookmarkClick}
            >
              MBTA Tracker
            </button>
          </div>
        </Container>
        <iframe
          title="mytitle"
          src={currentURL}
          width="1200px"
          height="825px"
        ></iframe>
      </Container>
    </Draggable>
  ) : null;
};

export default InternetExplorer;
