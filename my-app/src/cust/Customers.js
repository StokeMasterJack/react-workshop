import React, { Component } from "react";

const style = {
  background: "cyan",
  height: "30rem",
  padding:"1rem",
  margin:"1rem",
  width:"30rem"
};

/**
 * props:
 *    rows:array,
 *    onRowSelected:(index:number)=>void
 */
export default class Customers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = this.props.rows;
    return (
      <div style={style}>
        <h1>Cust</h1>
        {!rows ? "Loading..." : this.rows()}
      </div>
    );
  }

  onRowClick = index => {
    this.props.onRowSelected(index);
  };

  rows() {
    const rows = this.props.rows;
    return rows.map( (row,i) => <div 
      key={row.id}
      onClick={this.onRowClick}

      onClick={(event)=> this.onRowClick(i)  }

    >
    {row.name}
    </div> );
  }

}
