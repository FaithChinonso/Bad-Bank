import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import heroImage from "../../images/heroImage.jpg";
import deposit from "../../images/deposit.jpg";
import withdraw from "../../images/withdraw.jpg";
import styles from "./style.module.css";

const LandingPage = () => {
  return (
    <Container className="p-3" className={styles.Container}>
      <img src={heroImage} alt="heroImage" className={styles.heroImage} />
      <div className={styles.heroContainer}>
        <h1 className={styles.header}>Welcome To The Bad Bank</h1>
        <div className={styles.heroContent}>
          <Card className="m-4" style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={deposit}
              className={styles.depositImage}
            />
            <Card.Body>
              <Card.Title>Deposit</Card.Title>
              <Card.Text>
                Get intrest when you deposit ₦50,000 and above
              </Card.Text>
              <Button variant="primary">
                <Link to="/deposit" className={styles.depositButton}>
                  Make a Deposit
                </Link>
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-4" style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={withdraw}
              className={styles.depositImage}
            />
            <Card.Body>
              <Card.Title>Withdrawal</Card.Title>
              <Card.Text>
                You can withdraw money with no hidden charges
              </Card.Text>
              <Button variant="primary">
                <Link to="/withdraw" className={styles.depositButton}>
                  Make a Withdrawal
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};
export default LandingPage;
