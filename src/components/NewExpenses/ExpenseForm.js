import { useState } from "react";
import "./ExpenseForm.css";
import Button from "../UI/Button";

const ExpenseForm = (props) => {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    SetEnteredTitle("");
    SetEnteredAmount("");
    SetEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
