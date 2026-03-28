import { Fragment } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as ga from "./ga";
import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import TitleBar from "./containers/TitleBar/TitleBar";
import WelcomeScreen from "./containers/WelcomeScreen/WelcomeScreen";
import ContactScreen from "./containers/ContactScreen/ContactScreen";
import SiteMap from "./containers/SiteMap/SiteMap";

ga.initialize();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ga.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <TitleBar active="home" />
              <WelcomeScreen />
            </Fragment>
          }
        />
        <Route
          path="/contact"
          element={
            <Fragment>
              <TitleBar active="contact" />
              <ContactScreen />
            </Fragment>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteMap />
    </div>
  );
};

export default App;
