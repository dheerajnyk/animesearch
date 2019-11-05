import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import { HashRouter as Router, Route } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import DashboardPage from "./pages/DashboardPage";
import App1 from "./pages/main";
import PrivateRoute from "./pages/main";
ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path ="/" component={App1}></Route>
        <Route key="index" exact path="/index" component={DashboardPage} />
        <Route key="explore" path="/App" component={App} />
      </Switch>
  </Router>,
  document.getElementById("root")
); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//      <Route key="index" exact path="/" component={DashboardPage} />
//      <Route key="explore" path="/explore" component={ExplorePage} />
serviceWorker.unregister();
