import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CustomerMain from "./cust/CustomerMain";
import CreateAccountForm from "./CreateAccountForm";
import BlackjackVu from "./bj/BlackjackVu";
import Red from "./Red";
import Blue from "./Blue";
import Green from "./Green";
import TabLink from "./TabLink";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "customerMain",
      x: 10,
      y: 10
    };
  }

  render() {
    const tabs = ["customerMain","createAccount", "blackjack", "red", "blue", "green"];

    return (
      <MuiThemeProvider>
        <div>
          <div>
            {tabs.map(tab => (
              <TabLink
                key={tab}
                tab={tab}
                onTabClick={this.onTabClick2}
                selected={this.state.tab === tab}
              />
            ))}
          </div>
          <div style={{ padding: "1rem" }}>
            {this.route(this.state.tab)}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  tabLink = tab => {
    const style = { padding: "1rem" };
    return (
      <a
        key={tab}
        style={style}
        href={"/" + tab}
        onClick={event => {
          this.onTabClick(event, tab);
        }}
      >
        {tab}
      </a>
    );
  };

  route(tab) {
    if (tab === "customerMain") return <CustomerMain />;
    if (tab === "createAccount") return <CreateAccountForm />;
    if (tab === "blackjack") return <BlackjackVu />;
    if (tab === "red") return <Red msg="Yo dude!" />;
    if (tab === "blue") return <Blue />;
    if (tab === "green") return <Green />;
    return <div>Bad Tab Man</div>;
  }

  onTabClick = (event, tab) => {
    event.preventDefault();
    this.setState({ tab: tab });
  };

  onTabClick2 = tab => {
    this.setState({ tab: tab });
  };
}
