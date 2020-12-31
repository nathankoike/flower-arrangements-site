import React from "react";

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
        <Route exact path="/" component={Home}></Route>
      </Router>
    </div>
  );
};

export default App;
