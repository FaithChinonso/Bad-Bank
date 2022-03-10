import React from "react";
import CreateAccount from "../CreateAccount";
import { Card, Table } from "react-bootstrap";
import styles from "./style.module.css";
import { useSelector } from "react-redux";

const AllData = () => {
  const formAccounts = useSelector((state) => state.account.formAccounts);
  return (
    <div className={styles.container}>
      <Table striped bordered hover className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {formAccounts.map((acc) => (
            <tr>
              <td>{acc.id}</td>
              <td>{acc.name}</td>
              <td>{acc.email}</td>
              <td>{acc.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default AllData;
