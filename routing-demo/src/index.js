import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

window.addEventListener("popstate", function(e) {
  daveRender();
});

function daveRender() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

daveRender();
