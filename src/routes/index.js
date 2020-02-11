import React from "react";
import { Switch, Route } from "react-router-dom";

import { Overview, Tickets } from '../pages'
// possibility passing parameters in routes
const routes = () => (
  <Switch>
    <Route path="/" exact component={Overview} />
    <Route path="/tickets" component={Tickets} />
  </Switch>
);

export default routes;
