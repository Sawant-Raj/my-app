import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [price, setPrice] = useState(props.price);

  // const clickHandler = () => {
  //   setPrice("100");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        {/* <div className="expense-item__location">{props.location}</div> */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Expense</button> */}
      </Card>
    </li> //using li will not change anything visually but it is symmentically better
  );
};

export default ExpenseItem;
