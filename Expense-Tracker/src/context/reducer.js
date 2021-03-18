const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return { ...state, expenses: [...state.expenses, action.payload] };
  }
  if (action.type === "DELETE_EXPENSE") {
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload
      ),
    };
  }
  if (action.type === "ADD_BUDGET") {
    return { ...state, budget: action.payload };
  }
  return state;
};
export default reducer;
