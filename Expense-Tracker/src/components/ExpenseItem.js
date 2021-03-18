import React from "react";
import { TiDelete } from "react-icons/ti";
import { useGlobalContext } from "../context/AppContext";

export const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useGlobalContext();

  const handleDeleteExpense = () => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">${cost}</span>
        <TiDelete
          size="1.5em"
          className="icon"
          onClick={handleDeleteExpense}
        ></TiDelete>
      </div>
    </li>
  );
};
