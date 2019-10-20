import React, { Component, Fragment } from 'react';
import './App.css';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import TitleBar from './containers/TitleBar/TitleBar'
import WelcomeScreen from './containers/WelcomeScreen/WelcomeScreen'
// import LearnMore from './containers/LearnMore/LearnMore'
import SiteMap from './containers/SiteMap/SiteMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home"/>}/>
          <Route exact path="/home" render={() => {
            return (
              <Fragment>
                <TitleBar active="home"/>
                <WelcomeScreen />
              </Fragment>
            )
          }}/>
          <Route exact path="/contact" render={() => {
            return (
              <Fragment>
                <TitleBar active="contact"/>
              </Fragment>
            )
          }}/>
        </Switch>
        <SiteMap />
      </div>
    )
  }
}

export default withRouter(App);
