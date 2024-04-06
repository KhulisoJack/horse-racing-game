import React from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import '../styles/game.css'; // Update the path to your CSS file

const RacePage: React.FC = () => {
  const handleRaceStart = () => {
    // Implement logic to start the race
  };

  return (
    <div style={{backgroundImage: 'url(images/bg.png)', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Container>
        <Row>
          <Col md={3}>
            <div id="horse1" className="horse standRight">
              <div className="rider">
                <div className="head"></div>
                <div className="body"></div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div id="horse2" className="horse standRight">
              <div className="rider">
                <div className="head"></div>
                <div className="body"></div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div id="horse3" className="horse standRight">
              <div className="rider">
                <div className="head"></div>
                <div className="body"></div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div id="horse4" className="horse standRight">
              <div className="rider">
                <div className="head"></div>
                <div className="body"></div>
              </div>
            </div>
          </Col>
        </Row>

        {/* <div className="track">
          <div id="startline"></div>
          <div className="inner">
            <Button id="start" onClick={handleRaceStart}>Start Race</Button>

            <div id="bet">
              <p>You currently have <span id="funds">100</span></p>
              <Form.Group controlId="amount">
                <Form.Label>Bet Amount (£)</Form.Label>
                <Form.Control type="number" defaultValue="0" />
              </Form.Group>
              <Form.Group controlId="bethorse">
                <Form.Label>Bet on horse:</Form.Label>
                <Form.Control as="select">
                  <option value="1">White</option>
                  <option value="2">Blue</option>
                  <option value="3">Green</option>
                  <option value="4">Brown</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="num_lap">
                <Form.Label>Number of laps</Form.Label>
                <Form.Control type="number" defaultValue="1" />
              </Form.Group>
            </div>

            <img src="images/tree.png" alt="Tree" className="tree" />
            <br />
            <table id="results" className="mt-3">
              <thead>
                <tr>
                  <th>Results</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  <td className="result horse1"></td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td className="result horse2"></td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td className="result horse3"></td>
                </tr>
                <tr>
                  <td>4th</td>
                  <td className="result horse4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default RacePage;
