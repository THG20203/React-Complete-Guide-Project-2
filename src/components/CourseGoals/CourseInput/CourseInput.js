import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
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
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
