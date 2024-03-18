import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.price}
              location={expense.location}
            />
          );
        })}
      </ul>
      {props.expenses.length === 1 && (
        <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
      )}
    </div>
  );
};

export default ExpensesList;
