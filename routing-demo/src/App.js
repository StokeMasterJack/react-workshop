import React, { Component } from "react";
import Red from "./Red";
import Blue from "./Blue";

class App extends Component {
  onTabClick = (event, route) => {
    event.preventDefault();
    console.log("a",route);
    // window.history.href = route;
    window.history.pushState(null, null, route);
    window.dispatchEvent(new window.PopStateEvent("popstate"));
  };

  render() {
    const route = window.location.pathname;
    const search = window.location.search;
    console.log("route", route);
    console.log("search", search);

    return (
      <div>
        <div style={{ display: "flex" }}>
          <a
            href="/red"
            onClick={event => {
              this.onTabClick(event, "/red");
            }}
          >
            red
          </a><br />
          <a
            href="/blue"
            onClick={event => {
              this.onTabClick(event, "/blue");
            }}
          >
            blue
          </a><br />
        </div>
        <div>
          {this.router(route)}
        </div>
      </div>
    );
  }

  router = route => {
    if (route === "/red") return <Red />;
    if (route === "/blue") return <Blue />;
  };
}

export default App;
