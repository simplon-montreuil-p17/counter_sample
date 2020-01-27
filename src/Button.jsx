import React from "react";

function Button(props) {
  console.log("props", props);
  return <button onClick={props.handleClick}>+1</button>;
}
export default Button;
