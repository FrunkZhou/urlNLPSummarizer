import React, { useState } from "react";
import {
  Container,
  Jumbotron,
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

function SendInfo(props) {
  const [summarizeURL, setSummarizeURL] = useState("");
  const [numSentence, setNumSentence] = useState(3);

  const send = e => {
    props.history.push(
      "/showResult/" + numSentence + "/" + encodeURIComponent(summarizeURL)
    );
  };

  return (
    <Container>
      <Jumbotron>
        <h2 className="text-center mb-3">URL to Summarize</h2>
        <Form onSubmit={send} className="text-center">
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              URL:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                placeholder="http://website.to/summarize"
                onChange={e => setSummarizeURL(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
              <Form.Label># of Sentences:</Form.Label>
              <ButtonGroup className="ml-5">
                <Button variant="secondary" onClick={e => setNumSentence(3)}>
                  3
                </Button>
              </ButtonGroup>
              <ButtonGroup className="ml-3">
                <Button variant="secondary" onClick={e => setNumSentence(5)}>
                  5
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-5">
            Summarize Contents
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
}

export default withRouter(SendInfo);
