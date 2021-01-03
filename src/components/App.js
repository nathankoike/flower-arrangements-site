import React from "react";
import Home from "./Home"

import {
  Route,
  Link,
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={Home}></Route>
      </Router>
    </div>
  );
};

export default App;
