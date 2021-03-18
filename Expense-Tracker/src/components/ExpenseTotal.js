import React from "react";
import { useGlobalContext } from "../context/AppContext";
export const ExpenseTotal = () => {
  const { expenses } = useGlobalContext();
  const expenseTotal = expenses.reduce((total, item) => {
    total += item.cost;
    return total;
  }, 0);
  return (
    <div className="alert alert-primary budget-style">
      <span>Spent so far: ${expenseTotal}</span>
    </div>
  );
};
