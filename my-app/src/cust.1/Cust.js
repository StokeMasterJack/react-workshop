import React, { Component } from "react";

const style = {
  background: "cyan",
  height: "30rem"
};

export default class Cust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: null
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchCustomers();
  }

  fetchCustomers = () => {
    const url =
      "http://52.203.142.138:81/api/customer/customersQuery.jsp?query=f&active=true&state=None&queryType=FILTER&offset=0&limit=10&orderBy=id%20asc";

    fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({ rows: json.rows });
        });
  };

  render() {
    return (
      <div style={style}>
        <h1>Cust</h1>
        {!this.state.rows ? "Loading..." : this.rows()}
      </div>
    );
  }

  rows() {
    return this.state.rows.map( row => <div key={row.id}>{row.name}</div> );
  }
}
