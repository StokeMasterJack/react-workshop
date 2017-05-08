import React, { Component } from "react";
import Customers from "./Customers";
import CustomerForm from "./CustomerForm";

const style = {
  background: "#CCCCCC",
  display: "flex"
};

export default class CustomerMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: null,
      index: 0
    };
  }

  onInputChange = event => {
    const rows = this.state.rows;
    const index = this.state.index;

    const v = event.target.value; //checkboxes use checked instead of value
    const n = event.target.name; //id|name|state
    const c = rows[index];

    // c.id = v;
    // c.name = v;
    // c.state = v;
    c[n] = v;

    this.setState({ rows: rows, index: index });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchCustomers();
  }

  fetchCustomers = () => {
    const url =
      "http://52.203.142.138:81/api/customer/customersQuery.jsp?query=f&active=true&state=None&queryType=FILTER&offset=0&limit=10&orderBy=id%20asc";

    fetch(url).then(response => response.json()).then(json => {
      this.setState({ rows: json.rows });
    });
  };

  onRowSelected = index => {
    this.setState({ index: index });
  };

  render() {
    if (!this.state.rows) return <div>Loading...</div>;
    const c = this.state.rows[this.state.index];
    return (
      <div style={style}>
        <Customers rows={this.state.rows} onRowSelected={this.onRowSelected} />
        <CustomerForm {...c} onInputChange={this.onInputChange} />
      </div>
    );
  }
}
