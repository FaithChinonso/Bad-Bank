import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accountActions } from "../../store/account-slice";
import { Card } from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from "../../Lottie/successPayment.json";
import styles from "./style.module.css";

const Deposit = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.account.balance);
  const success = useSelector((state) => state.account.withdrawSuccess);
  const error = useSelector((state) => state.account.error);
  const [amount, setAmount] = useState();
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const withdrawalHandler = () => {
    dispatch(accountActions.withdraw({ amount }));
  };
  const closeLottieHandler = () => {
    dispatch(accountActions.closeWithdrawalSuccess());
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
        <div className={styles.withdrawContainer}>
          <h1>WITHDRAWAL</h1>
          <Card style={{ width: "70vw" }}>
            <Card.Body>
              <Card.Title>Balance</Card.Title>
              <Card.Text className={styles.withdrawBalance}>
                ₦{numberWithCommas(balance.toFixed(2))}
              </Card.Text>
              <Card.Title>Withdraw</Card.Title>
              <div className={styles.withdrawGroup}>
                <input
                  type="number"
                  placeholder="Input Amount"
                  onChange={amountHandler}
                />
                <button onClick={withdrawalHandler}>Withdraw</button>
              </div>
              {error && <p className="error-text"> Insufficient Fund</p>}
            </Card.Body>
          </Card>
        </div>
      )}
    </Fragment>
  );
};
export default Deposit;
