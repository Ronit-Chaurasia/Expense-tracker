import React from "react";
import { useGlobalContext } from "../context/AppContext";

export const Budget = () => {
  const { budget } = useGlobalContext();
  return (
    <div className="alert alert-secondary budget-style">
      <span> Budget : ${budget}</span>
    </div>
  );
};
