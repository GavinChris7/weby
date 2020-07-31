import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const element = <h1 className="testClass">Welcome to React Programming...</h1>;

ReactDOM.render(element, document.getElementById("root"));

const newElement = (
  <h1 className="testClass">Understanding React Programming</h1>
);

ReactDOM.render(newElement, document.getElementById("app"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
