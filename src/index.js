import React from "react";
import ReactDOM from "react-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./App/store";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
