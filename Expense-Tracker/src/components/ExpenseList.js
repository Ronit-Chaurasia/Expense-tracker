import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { useGlobalContext } from "../context/AppContext";

export const ExpenseList = () => {
  const { expenses } = useGlobalContext();

  return (
    <ul className="list-group">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
