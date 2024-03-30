import React from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App.jsx";

import styles from './stylesheet/styles.scss';
console.log("client here ");

//render(<App />, document.getElementById("root"));
createRoot(document.getElementById("root")).render(<App />);
