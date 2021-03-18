import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Budget } from "./components/Budget";
import { Remaining } from "./components/Remaining";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { BudgetForm } from "./components/BudgetForm";
const App = () => {
  return (
    <div className="container">
      <h1 className="head">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <hr />
      <h1 className="mt-3">Set Your Budget</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <BudgetForm />
        </div>
      </div>
      <h1 className="mt-3">Expenses</h1>
      <hr />
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h1 className="mt-3">Add Expenses</h1>
      <hr />
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;
