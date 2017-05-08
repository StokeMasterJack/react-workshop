import React, { Component } from "react";

const style = {
  background: "cyan",
  height: "30rem",
  margin: "1rem",
  padding: "1rem",
  width: "100%"
};

export default class CustomerForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {
      event.preventDefault();
      console.log("onSubmit",this.props);
  };

  render() {
    const s = this.props;
    return (
      <div style={style}>
        <h1>Customer Form</h1>
        <form onSubmit={this.onSubmit}>
          <input name="id" value={s.id} onChange={s.onInputChange} />
          <input name="name" value={s.name} onChange={s.onInputChange} />
          <input name="state" value={s.state} onChange={s.onInputChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
