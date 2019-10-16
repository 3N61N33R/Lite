import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="-container">
        <div className="hstyle">
          <h1>Ask,Answer,Grow!</h1>
          <p>Proin a laoreet nulla.</p>
        </div>
        <form id="signin-form" action="questions.html">
          <div id="alert-message" className="alert" />
          <div className="form-parameters">
            <h3 className="form-title">Sign In</h3>
            <div className="field">
              <input
                type="text"
                id="email"
                placeholder="Enter email address"
                name="email"
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                name="password"
                required
              />
            </div>
            <div className="field">
              <button className="button" type="button">
                <span>
                  <b> Sign In</b>
                </span>
              </button>
              <hr />
              <label>
                <span>
                  New here?
                  <a href="/signup">Click here </a> to sign up.
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
