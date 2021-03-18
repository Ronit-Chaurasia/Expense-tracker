import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
  budget: 0,
  expenses: [],
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//!Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
