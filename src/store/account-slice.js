import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    formAccounts: [],
    balance: 0,
    error: false,
    depositSuccess: false,
    withdrawSuccess: false,
    // changed: false,
    // totalAmount: 0,
    // formData: [],
  },
  reducers: {
    createAccount(state, action) {
      const newFormData = action.payload;
      // state.totalQuantity = action.payload.totalQuantity;
      // state.items = action.payload.items;
      // state.totalAmount = action.payload.totalAmount;
      state.formAccounts.push({
        name: newFormData.enteredName,
        email: newFormData.enteredEmail,
        password: newFormData.enteredPassword,
        id: newFormData.enteredName.slice(0, 2),
      });
    },
    deposit(state, action) {
      const { amount } = action.payload;
      const deposit = Number(amount);
      state.balance = state.balance + deposit;
      state.depositSuccess = true;
    },
    withdraw(state, action) {
      const { amount } = action.payload;
      const withdraw = Number(amount);
      if (state.balance > withdraw) {
        state.balance = state.balance - withdraw;
        state.withdrawSuccess = true;
        state.error = false;
      } else {
        state.error = true;
        return;
      }
    },
    closeDepositSuccess(state) {
      state.depositSuccess = false;
    },
    closeWithdrawalSuccess(state) {
      state.withdrawSuccess = false;
    },
  },
});

export const accountActions = accountSlice.actions;

export default accountSlice;
