import { FiberPin } from "@material-ui/icons";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MoreInfo from "./Pages/MoreInfo/MoreInfo";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/moreinfo/:id" component={MoreInfo} />
    </Switch>
  );
}
