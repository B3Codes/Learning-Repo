import React from "react";
function Button({children, backgroundColor}) {
  return <button style={{backgroundColor}}>{children}</button>
}

export default Button;