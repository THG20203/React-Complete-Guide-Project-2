import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    /* Then we could target our input and set the border color to red */
    background-color: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  /* adding useState -> has the user submitted and entered something valid or not? True or
  false choice hence boolean. Initially trust the user hence true -> as long as ture, consider
  the input as valid. */

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    /* function above is the reset function for the input */
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
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        {/* for className on the div NOW need curly braces -> since need dynamic value. 
        String is always a string -> its a hard coded value. */}
        {/* now what we feed in can be a string, need to sometimes add invalid to this, so utilise
        backticks. */}
        {/* // BACKTICKS -> default JavaScript feature, called a TEMPLATE LITERAL -> constructs a 
        string, but have have backticks rather than single quotes. Whatever you type between there 
        will be treated as regular string. */}
        {/* We can inject a dynamic value into that string. with syntax ${}. What we pass between 
        curly braces can be any javascript expression. */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
