import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import "../styles/LoginPage.css";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      password: "",
      error: false
    };
  }
  handleInputChange = e => {
    const propertyName = e.target.type;
    const { value } = e.target;
    this.setState({
      [propertyName]: value
    });
  };
  handleSubmitForm = e => {
    e.preventDefault();
    const users = [...this.props.users];
    users.forEach(user => {
      if (
        user.name === this.state.text &&
        user.password === this.state.password &&
        user.status === "admin"
      ) {
        this.props.handleLogin();
      } else
        this.setState({
          text: "",
          password: "",
          error: true
        });
    });
  };
  render() {
    return (
      <Fragment>
        {this.props.isLogged ? (
          <Redirect to="/admin" />
        ) : (
          <div className="loginPage">
            <h1>login panel</h1>
            <form onSubmit={this.handleSubmitForm}>
              <label htmlFor="login">
                <span>Login: </span>
                <input
                  type="text"
                  value={this.state.text}
                  id="login"
                  onChange={this.handleInputChange}
                  placeholder="Login..."
                />
              </label>
              <label htmlFor="password">
                <span>Password: </span>
                <input
                  type="password"
                  value={this.state.password}
                  id="password"
                  onChange={this.handleInputChange}
                />
              </label>
              <button>Log in</button>
            </form>
            {this.state.error && (
              <h2 className="errorMessage">
                There is no such user in the rank of admin or you provided
                incorrect login or/and password.
              </h2>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}
export default LoginPage;
