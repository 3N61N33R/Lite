import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./login";
import Signup from "./signup";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
