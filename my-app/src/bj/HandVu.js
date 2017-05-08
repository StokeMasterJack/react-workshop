import React from "react";

const style = {
  height: "10rem",
  margin: "1rem",
  width: "20rem",
  border: "solid 1px black"
};

export default function HandVu(props) {

  const onClick = event => {
    console.log("click");
    props.g.hitPlayer();
  };

  return (
    <div style={style}>
      <div >
        {props.g.playerHand.cards.map(c => (
          <div key={c.toString()}>{c.toString()}</div>
        ))}
      </div>
      <div>
          <b>{props.g.playerHand.msg}</b>
      </div>
      <button onClick={onClick}>Hit</button>
    </div>
  );
}
