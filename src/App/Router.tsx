import { FiberPin } from "@material-ui/icons";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MoreInfo from "./Pages/MoreInfo/MoreInfo";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/moreinfo/:id" component={MoreInfo} />
      <Route path="/search" component={Search} />
    </Switch>
  );
}
