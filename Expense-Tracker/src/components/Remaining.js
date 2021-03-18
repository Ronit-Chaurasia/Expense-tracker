import React from "react";
import { useGlobalContext } from "../context/AppContext";
export const Remaining = () => {
  const { budget, expenses } = useGlobalContext();
  const totalExpenses = expenses.reduce((total, item) => {
    total += item.cost;
    return total;
  }, 0);
  const alertType = totalExpenses > budget ? "danger" : "budget-style";
  let remaining = budget - totalExpenses;
  return (
    <div className={`alert ${alertType} alert-success`}>
      <span>Remaining : ${remaining}</span>
    </div>
  );
};
