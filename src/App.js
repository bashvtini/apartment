import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Provider from "./components/Context";
import TotheTop from "./components/other/toTheTop";

import Search from "./components/Search";
import Apartment from "./components/Apartment";

import NotFound from "./components/other/NotFound";

export default function App() {
  return (
    <Provider>
      <Router>
        <TotheTop />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/apartment/:apartmentId" component={Apartment} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
