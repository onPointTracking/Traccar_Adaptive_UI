import React from "react";
import Home from "./Home";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import SocketController from "./socketController";

function App() {
  return (
    <>
      <SocketController />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
