import React from "react";

import "./App.css";
import { Switch, Route, HashRouter, BrowserRouter } from "react-router-dom";
// 引用组件
import Home from "./views/Home";
import About from "./views/About.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/"></Route>
          <Route component={About} exact path="/about"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
