import styled from "styled-components";
/* use styled components package since we just installed it */

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
/* the two back tickets after button -> a tagged template literal. Its a default 
JavaScript feature, its not specific to this package and its not specific to react. */
/* button is simply a method on this styled object. Styled is an object we're importing
from styled components -> there we can access the button method. */
/* Instead of parentheses, I've added backticks after the button method. */
/* What we pass in the backticks will end up in the button method. Provide styles in the backticks */
/* Styled package has methods for all HTML elements -> i.e. styled.p`` */
/* back tick syntax -> can write multi line string without any extra syntax */

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
