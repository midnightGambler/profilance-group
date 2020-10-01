import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./styles/index.scss";
import { App } from "./components/App";

Modal.setAppElement("#app");

Modal.defaultStyles.content = {
  ...Modal.defaultStyles.content,
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  padding: "2rem",
  minWidth: 250,
};

Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 46%)";

ReactDOM.render(<App />, document.getElementById("app"));
