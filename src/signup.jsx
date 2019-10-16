import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "./actions/registerActions";
import "./App.css";
import Message from "./message";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // State is read-only:
      // The only way to change the state is to emit an action, an object describing what happened.
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    } = this.state;
    const user = {
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    };
    const { registerUser } = this.props;
    registerUser(user);
  }
  render() {
    const { visible, message, success } = this.props;
    return (
      <div>
        <div className="-container">
          <div className="hstyle">
            <h1>Ask,Answer,Grow!</h1>
            <p>Proin a laoreet nulla.</p>
          </div>
          <form id="signup-form" action="index.html">
            <div id="alert-message" className="alert" />
            <div className="form-parameters">
              <h3 className="form-title">Sign Up</h3>
              {visible && (
                <Message
                  visible={visible}
                  message={message}
                  success={success}
                />
              )}

              <div className="field">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <input
                  required
                  type="text"
                  placeholder="Enter email address"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <input
                  required
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  required
                  type="password"
                  placeholder="Confirm password"
                  name="confirmpassword"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <button className="button" type="submit">
                  <span>
                    <b>Sign up</b>
                  </span>
                </button>
                <hr />

                <div>
                  Already a member?
                  <a href="/" className="text-primary">
                    Login here
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.registerReducer.visible,
  message: state.registerReducer.message,
  success: state.registerReducer.success
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Signup);
