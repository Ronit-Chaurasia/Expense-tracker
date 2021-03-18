import React, { useState } from "react";
import { useGlobalContext } from "../context/AppContext";

export const BudgetForm = () => {
  const { dispatch } = useGlobalContext();

  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BUDGET", payload: budget });
    setBudget("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Enter Budget</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          ></input>
        </div>
      </div>
      <div>
        <div className="col-sm">
          <div className="btn-container">
            <button type="submit" className="btn btn-primary mt-1 mb-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
