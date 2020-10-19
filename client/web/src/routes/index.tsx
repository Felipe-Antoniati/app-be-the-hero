import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/p_login";
import Register from "../pages/p_register";
import Profile from "../pages/p_profile";
import NewIncident from "../pages/p_new_incident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
