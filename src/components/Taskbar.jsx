import { Button, Col, Container, Row } from "react-bootstrap";
import start1 from "/src/assets/start1.png";
import blankTaskbar from "/src/assets/blank-taskbar.png";
import taskbarRight from "/src/assets/taskbar-right.png";
import { useEffect, useState } from "react";

const Taskbar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
  });

  return (
    <Container className="p-0">
      <Row>
        <Col
          className="p-0"
          xs={1}
          style={{
            backgroundImage: `url("${blankTaskbar}")`,
            backgroundSize: "cover",
          }}
        >
          <img
            height="35px"
            src={start1}
            onClick={() => alert("start button pressed")}
          />
        </Col>
        <Col className="p-0 w-100">
          {" "}
          <img width="100%" height="35px" src={blankTaskbar} />
        </Col>

        <Col xs={2} className="p-0">
          <img
            className="img-fluid"
            style={{ height: "35px" }}
            src={taskbarRight}
          />
          <p
            className="position-relative text-light small"
            style={{ bottom: "28px", left: "136px" }}
          >
            {date.toLocaleTimeString("en-US")}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Taskbar;
