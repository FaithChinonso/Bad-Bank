import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../store/account-slice";
import useInput from "../../Hooks/user-input";
import Lottie from "lottie-react";
import animationData from "../../Lottie/success.json";
import "./style.css";

// const isNotEmpty = (enteredName) => enteredName.trim() !== "";
// const isEmail = (enteredEmail) =>
//   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail);
// const isStrong = (enteredPassword) => enteredPassword.trim().length > 8;

// const CreateAccount = (props) => {
//   const [formData, setFormData] = useState({});
//   const [submitForm, setSubmitForm] = useState(false);
//   const dispatch = useDispatch();
//   const formAccounts = useSelector((state) => state.account.formAccounts);

//   const {
//     ennteredInput: enteredName,
//     hasError: nameHasError,
//     reset: nameReset,
//     isTouched: nameIsTouched,
//     inputIsValid: nameIsValid,
//     updateInputHandler: nameInputHandler,
//     inputBlurHandler: nameBlurHandler,
//   } = useInput(isNotEmpty);
//   const {
//     ennteredInput: enteredEmail,
//     hasError: emailHasError,
//     reset: emailReset,
//     isTouched: emailIsTouched,
//     inputIsValid: emailIsValid,
//     updateInputHandler: emailInputHandler,
//     inputBlurHandler: emailBlurHandler,
//   } = useInput(isEmail);
//   const {
//     ennteredInput: enteredPassword,
//     hasError: passwordHasError,
//     reset: passwordReset,
//     isTouched: passwordIsTouched,
//     inputIsValid: passwordIsValid,
//     updateInputHandler: passwordInputHandler,
//     inputBlurHandler: passwordBlurHandler,
//   } = useInput(isStrong);

//   //   if (nameIsValid && emailIsValid && passwordIsValid) {
//   //     formisValid = true;
//   //   }
//   const submitFormHandler = (e) => {
//     e.preventDefault();
//     // setFormIsTouched(true);

//     if (nameIsValid && emailIsValid && passwordIsValid) {
//       setFormData({
//         enteredName,
//         enteredEmail,
//         enteredPassword,
//       });
//       console.log(formData);
//       dispatch(accountActions.createAccount(formData));
//       setSubmitForm(true);
//       //   nameReset();
//       //   emailReset();
//       //   passwordReset();
//       console.log(formAccounts);
//     } else {
//       return;
//     }
//   };
//   const nameInputClasses = nameHasError
//     ? "form-control invalid"
//     : "form-control";
//   const emailInputClasses = emailHasError
//     ? "form-control invalid"
//     : "form-control";
//   const passwordlInputClasses = passwordHasError
//     ? "form-control invalid"
//     : "form-control";
//   const closeLottieHandler = () => {
//     setSubmitForm(false);
//   };
//   const SuccessModal = (
//     <div className="lottieContainer">
//       <Lottie
//         animationData={animationData}
//         autoPlay
//         loop
//         className="lottieSuccess"
//       />
//       <button className="button" onClick={closeLottieHandler}>
//         Close
//       </button>
//     </div>
//   );
//   return (
//     <Fragment>
//       {submitForm ? (
//         SuccessModal
//       ) : (
//         <form onSubmit={submitFormHandler}>
//           <div className={nameInputClasses}>
//             <input
//               type="text"
//               onBlur={nameBlurHandler}
//               onChange={nameInputHandler}
//               value={enteredName}
//               placeholder="Your Name"
//             />
//             {nameHasError && (
//               <p className="error-text">Name must not be empty</p>
//             )}
//           </div>
//           <div className={emailInputClasses}>
//             <input
//               type="text"
//               onBlur={emailBlurHandler}
//               onChange={emailInputHandler}
//               value={enteredEmail}
//               placeholder="Your Email Address"
//             />
//             {emailHasError && (
//               <p className="error-text">Not a valid email address</p>
//             )}
//           </div>
//           <div className={passwordlInputClasses}>
//             <input
//               type="text"
//               onBlur={passwordBlurHandler}
//               onChange={passwordInputHandler}
//               value={enteredPassword}
//               placeholder="Your Password"
//             />
//             {passwordHasError && (
//               <p className="error-text">
//                 {" "}
//                 password must be more than characters
//               </p>
//             )}
//           </div>
//           <div className="form-actions">
//             <button type="submit">Create Account</button>
//           </div>
//         </form>
//       )}
//     </Fragment>
//   );
// };
// export default CreateAccount;

const isNotEmpty = (enteredInput) => enteredInput.trim() !== "";
const isEmail = (enteredInput) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredInput);
const isStrong = (enteredInput) => enteredInput.trim().length > 8;

const CreateAccount = (props) => {
  const [formisValid, setFormIsValid] = useState(false);
  const [formisTouched, setFormIsTouched] = useState(false);
  const [formData, setFormData] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  const dispatch = useDispatch();
  const formAccounts = useSelector((state) => state.account.formAccounts);

  const {
    enteredInput: enteredName,
    hasError: nameHasError,
    reset: nameReset,
    errorMessage: nameError,
    inputIsValid: nameIsValid,
    updateInputHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty, "Name cannot be empty");

  const {
    enteredInput: enteredEmail,
    hasError: emailHasError,
    reset: emailReset,
    errorMessage: emailError,
    inputIsValid: emailIsValid,
    updateInputHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail, "Please enter a valid email");

  const {
    enteredInput: enteredPassword,
    hasError: passwordHasError,
    reset: passwordReset,
    errorMessage: passwordError,
    isTouched: passwordIsTouched,
    inputIsValid: passwordIsValid,
    updateInputHandler: passwordInputHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isStrong, "Password must be atleast 8 characters");

  const submitFormHandler = (e) => {
    e.preventDefault();
    setFormIsTouched(true);

    if (nameIsValid && emailIsValid && passwordIsValid) {
      //   props.onOrder({
      //     name: enteredName,
      //     email: enteredEmail,
      //     address: enteredAddress,
      //     number: enteredNumber,
      //     delivery: enteredDeliveryInput,
      //     payment: enteredPaymentInput,
      //   });

      console.log(formData);
      dispatch(
        accountActions.createAccount({
          enteredName,
          enteredEmail,
          enteredPassword,
        })
      );
      console.log(formAccounts);
      setFormIsValid(true);
      setSubmitForm(true);
      nameReset();
      emailReset();
      passwordReset();
    } else {
      setFormIsValid(false);
      return;
    }
  };
  const closeLottieHandler = () => {
    setSubmitForm(false);
  };
  const nameGroupStyles = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailGroupStyles = emailHasError
    ? "form-control invalid"
    : "form-control";
  const passwordGroupStyles = passwordHasError
    ? "form-control invalid"
    : "form-control";

  const showFormError = !formisValid && formisTouched;
  const SuccessModal = (
    <div className="lottieContainer">
      <Lottie
        animationData={animationData}
        autoPlay
        loop
        className="lottieSuccess"
      />
      <div className="form-actions">
        <button onClick={closeLottieHandler}>Close</button>
      </div>
    </div>
  );
  return (
    <Fragment>
      {submitForm ? (
        SuccessModal
      ) : (
        <form onSubmit={submitFormHandler}>
          {showFormError && (
            <p className="error-text">Fill form correctly to summit</p>
          )}

          <div className={nameGroupStyles}>
            {/* <label htmlFor="name"> Full Name</label> */}
            <input
              type="text"
              id="name"
              onBlur={nameBlurHandler}
              onChange={nameInputHandler}
              value={enteredName}
              placeholder="Your Full Name"
            />
          </div>
          {nameError}
          <div className={emailGroupStyles}>
            {/* <label htmlFor="email">Email Address</label> */}
            <input
              type="text"
              id="email"
              onBlur={emailBlurHandler}
              onChange={emailInputHandler}
              value={enteredEmail}
              placeholder="Your Email"
            />
          </div>
          {emailError}
          <div className={passwordGroupStyles}>
            {/* <label htmlFor="password">Your Password</label> */}
            <input
              type="text"
              id="password"
              onBlur={passwordBlurHandler}
              onChange={passwordInputHandler}
              value={enteredPassword}
              placeholder="Your Password"
            />
          </div>
          {passwordError}

          <div className="form-actions">
            <button type="submit">Confirm</button>
          </div>
        </form>
      )}
    </Fragment>
  );
};
export default CreateAccount;
