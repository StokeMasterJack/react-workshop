import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import validator from "email-validator";

const style = {
  width: "20rem",
  padding: "1rem",
  border: "solid black 1px"
};

const inputStyle = {
  width: "100%"
};

export default class CustForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: "",
      isNew: true
    };
  }

  errors() {
    const s = this.state;
    const e = {
      name: "",
      email: "",
      password1: "",
      password2: ""
    };
    if (this.state.isNew) {
      return e;
    }
    if (!s.name) e.name = "Enter your name";
    if (!s.email) {
      e.email = "Enter your email";
    }else if(!validator.validate(s.email)){
      e.email = "Enter a valid email address";
    }
    if (!s.password1) {
      e.password1 = "Enter your password1";
    } else {
      if (s.password1.length < 6) {
        e.password1 = "Passwords must be at least 6 characters.";
      }
    }
    if (!s.password2) e.password2 = "Enter your password2";
    if (s.password2 !== s.password1) e.password2 = "Passwords must match";
    return e;
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ isNew: false });
  };

  ch = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const s = this.state;
    const errors = this.errors();
    const errorsString = JSON.stringify(errors);
    return (
      <div style={style}>
        <h2>Create Account</h2>
        <form autoComplete="off">
          <TextField
            name="name"
            style={inputStyle}
            errorText={errors.name}
            floatingLabelText="Your name"
            value={s.name}
            onChange={this.ch}
          />
          <TextField
            name="email"
            style={inputStyle}
            errorText={errors.email}
            floatingLabelText="Email"
            value={s.email}
            multiLine={false}
            onChange={this.ch}
          />
          <TextField
            name="password1"
            type="password"
            style={inputStyle}
            hintText="at least 6 characters"
            errorText={errors.password1}
            floatingLabelText="Password"
            value={s.password1}
            onChange={this.ch}
          />
          <TextField
            name="password2"
            type="password"
            style={inputStyle}
            errorText={errors.password2}
            floatingLabelText="Re-enter password"
            value={s.password2}
            onChange={this.ch}
          />

          <FlatButton
            label="Create your Amazon account"
            style={{ width: "100%" }}
            onClick={this.onSubmit}
            title={errorsString}
          />

        </form>
      </div>
    );
  }
}
