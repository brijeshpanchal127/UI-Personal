import React, { Component } from "react";
import Landing from './components/pages/Landing/Landing';
import LoginPage from "./components/pages/LoginPage.jsx";
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/shopping">
            <ShoppingCart />
          </Route> 
            <Route exact path="/landing">
            <Landing />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
