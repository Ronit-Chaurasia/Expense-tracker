import React, { useState } from "react";
import { useGlobalContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export const AddExpenseForm = () => {
  const { dispatch } = useGlobalContext();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({ type: "ADD_ITEM", payload: expense });
    setName("");
    setCost("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
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
