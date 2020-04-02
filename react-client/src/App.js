import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";

import Form from "./components/UrlForm";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <div className="vertical-center">
        <Route render={() => <Form />} path="/form" />
        <Route
          render={() => <Result />}
          path="/showResult/:numSentence/:summarizeURL"
        />
      </div>
      <div className="text-center mt-5">
        <Button href="/form" variant="primary">
          Go Summarize
        </Button>
        <p className="text-center mt-5">Hang Li, Frank Zhou, COMP308, Lab 5</p>
      </div>
    </Router>
  );
}

export default App;
