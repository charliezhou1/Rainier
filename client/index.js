import React from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App.jsx";
// import { Provider } from "react-redux";
// import store from "./store";
import ReactDOM from "react-dom";

import styles from "./stylesheet/styles.scss";
console.log("client here ");

//createRoot(document.getElementById("root")).render(<App />);
ReactDOM.render(
  <App />,

  document.getElementById("root")
);
