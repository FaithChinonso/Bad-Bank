import { useState } from "react";

const useInput = (validateFunction, error) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const updateInputHandler = (e) => {
    setEnteredInput(e.target.value);
    console.log(enteredInput);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const inputIsValid = validateFunction(enteredInput);
  const hasError = !inputIsValid && isTouched;
  const reset = () => {
    setEnteredInput("");
    setIsTouched(false);
  };
  const errorMessage = hasError && <p className="error-text">{error}</p>;
  return {
    enteredInput,
    hasError,
    inputIsValid,
    errorMessage,
    updateInputHandler,
    reset,
    inputBlurHandler,
  };
};
export default useInput;
