import React from "react";
import Page from "./Page"

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
        <Route path="/" component={Page}></Route>
      </Router>
    </div>
  );
};

export default App;
