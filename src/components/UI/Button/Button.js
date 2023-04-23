import React from "react";
import styled from "styled-components";
/* use styled components package since we just installed it */

const Button = styled.button``;
/* the two back tickets after button -> a tagged template literal. Its a default 
JavaScript feature, its not specific to this package and its not specific to react. */
/* button is simply a method on this styled object. Styled is an object we're importing
from styled components - there we can access the button method. */
/* Instead of parentheses, I've added backticks */

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
