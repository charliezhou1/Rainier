import React from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App.jsx";
import ReactDOM from "react-dom";

import styles from "./stylesheet/styles.scss";
console.log("client here ");

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
