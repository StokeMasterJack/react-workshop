import React, { Component } from "react";
import Game from "./Game";
import HandVu from "./HandVu";

export default class BlackjackVu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      g: new Game()
    };
  }

  onDealClick = event => {
    this.state.g.deal();
    this.setState({ g: this.state.g });
  };

  onHitClick = event => {
    this.state.g.hitPlayer();
    this.setState({ g: this.state.g });
  };

  onStayClick = event => {
    this.state.g.stay();
    this.setState({ g: this.state.g });
  };

  render() {
    const g = this.state.g;
    return (
      <div>
        <h1>Blackjack</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button disabled={g.active} onClick={this.onDealClick}>Deal</button>
          <button disabled={!g.active}  onClick={this.onHitClick}>Hit</button>
          <button disabled={!g.active}  onClick={this.onStayClick}>Stay</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <HandVu g={g} />
          <HandVu g={g} />
        </div>
        <div>{g.msg}</div>
      </div>
    );
  }
}
