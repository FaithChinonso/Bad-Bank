import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accountActions } from "../../store/account-slice";
import { Card } from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from "../../Lottie/successPayment.json";
import styles from "./style.module.css";
// import styles from "./style.module.css";

const Deposit = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.account.balance);
  const success = useSelector((state) => state.account.depositSuccess);
  const [amount, setAmount] = useState();
  const amountHandler = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };
  const depositHandler = () => {
    dispatch(accountActions.deposit({ amount }));
  };
  const closeLottieHandler = () => {
    dispatch(accountActions.closeDepositSuccess());
  };
  const numberWithCommas = (x) => {
    return Number(x).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    });
  };
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
      {success ? (
        SuccessModal
      ) : (
        <div className={styles.depositContainer}>
          <h1>DEPOSIT</h1>
          <Card style={{ width: "70vw" }}>
            <Card.Body>
              <Card.Title>Balance</Card.Title>
              <Card.Text className={styles.depositBalance}>
                ₦{numberWithCommas(balance.toFixed(2))}
              </Card.Text>
              <Card.Title>Deposit</Card.Title>
              <div className={styles.depositGroup}>
                <input
                  type="number"
                  placeholder="Input Amount"
                  onChange={amountHandler}
                  className={styles.depositInput}
                />
                <button
                  onClick={depositHandler}
                  className={styles.depositButton}
                >
                  DEPOSIT
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </Fragment>
  );
};
export default Deposit;
