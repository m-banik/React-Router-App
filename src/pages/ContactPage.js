import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css";
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isSent: false,
      isWrong: false
    };
    this.index = null;
  }
  handleInputChange = () => {
    const value = this.refs.field.value;
    this.setState({
      value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.value.length >= 3) {
      this.setState({
        value: "",
        isSent: true,
        isWrong: false
      });
      this.index = setTimeout(
        () =>
          this.setState({
            isSent: false
          }),
        3000
      );
    } else {
      clearTimeout(this.index);
      this.setState({
        isSent: false,
        isWrong: true
      });
    }
  };
  render() {
    return (
      <div className="contactPage">
        <h1>write us</h1>
        <form onSubmit={this.handleFormSubmit}>
          <textarea
            value={this.state.value}
            ref="field"
            onChange={this.handleInputChange}
            placeholder="Write here..."
          />
          <button>Send</button>
        </form>
        {this.state.isWrong && (
          <h2 className="errorMessage">
            message must count at least three signs!
          </h2>
        )}
        {this.state.isSent && <h2>message has been sent!</h2>}
        <Prompt
          when={Boolean(this.state.value)}
          message="You have started, but didn't fill the form. Do you want to leave the site anyway?"
        />
      </div>
    );
  }
}
export default ContactPage;
