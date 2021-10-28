import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/help" component={Help} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
