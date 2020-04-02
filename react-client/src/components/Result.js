import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, Jumbotron, ListGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function Display(props) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl =
    "http://localhost:8000/api/processNLP?summarizeURL=" +
    decodeURIComponent(props.match.params.summarizeURL) +
    "&numSentence=" +
    props.match.params.numSentence;

  useEffect(() => {
    setShowLoading(false);
    console.log(apiUrl);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Jumbotron>
        <h2 className="text-center mb-3">Summarize Result</h2>
        <ListGroup>
          {data.map((item, index) => (
            <p>{item}</p>
          ))}
        </ListGroup>
      </Jumbotron>
    </Container>
  );
}

export default withRouter(Display);
