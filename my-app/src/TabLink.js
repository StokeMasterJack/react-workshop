import React from "react";

/**
 * props:
 *   tab: string
 *   selected: boolean
 *   onTabClick: (tab:string)=>void
 */
export default function TabLink(props) {
  const onClick = event => {
    event.preventDefault();
    console.log("onTabClick", props.tab);
    props.onTabClick(props.tab);
  };

  const style = {
    padding: "1rem",
    fontWeight: props.selected?"bold":"normal"
  };

  return (
    <a style={style} href={"/" + props.tab} onClick={onClick}>
      {props.tab}
    </a>
  );
}
