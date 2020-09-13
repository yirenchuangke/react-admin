import React from "react";

import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// 引用组件
import Login from "./views//login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Login} exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
