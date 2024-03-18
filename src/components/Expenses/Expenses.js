import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

    const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //Fileterd year has date as string but date is object that's why toString()
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear} //isse state value wapis bhej di ExpenseFilter ko using props
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => {
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
      </Card>
    </div>
  );
};

export default Expenses;