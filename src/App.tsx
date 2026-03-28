import { Fragment } from "react";
import ReactGA from "react-ga";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import TitleBar from "./containers/TitleBar/TitleBar";
import WelcomeScreen from "./containers/WelcomeScreen/WelcomeScreen";
import ContactScreen from "./containers/ContactScreen/ContactScreen";
import SiteMap from "./containers/SiteMap/SiteMap";

const trackingId = "UA-158882003-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Fragment>
                <TitleBar active="home" />
                <WelcomeScreen />
              </Fragment>
            );
          }}
        />
        <Route
          exact
          path="/contact"
          render={() => {
            return (
              <Fragment>
                <TitleBar active="contact" />
                <ContactScreen />
              </Fragment>
            );
          }}
        />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
      <SiteMap />
    </div>
  );
};

export default App;
