import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  /* adding useState -> has the user submitted and entered something valid or not? True or
  false choice hence boolean. Initially trust the user hence true -> as long as ture, consider
  the input as valid. */

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      /* If make it into the length is 0 block can call setIsValid to false. Why? What the user 
      entered and submitted definitely is not valid. */
      return;
    }
    /* Want to check something valid was entered before we triggered that on add goal 
    function, so that function we got on this on add goal prop. Simple if statement in the 
    form submit handler, and check if the enteredValue Trim = built in method, removes
    excess white space at beginning or the end - use it here, to rule out that user just entered
    a lot of blanks. */
    /* Then check the length -> if length is equal to 0 we know the input is essentially 
    empty. In that case want to return -> so props.onAddGoal will not be executed because functional
    execution stops when you return. */
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        {/* Applying styles to label - inline style prop wants object as a value hence {{}} */}
        {/* In that object, you target different CSS style props in JavaScript that you can set 
        for this element/ component. */}
        {/* color: red -> On provision the input is invalid- so, color: !valid ? red -> if not
        isValid -> set this to red, otherwise set to black -> default color. */}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
