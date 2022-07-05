export const change = (amount, choice) => (state) => {
  if (choice === "plus") {
    const value = state.count + amount;
    return (dispatch) => {
      dispatch({
        type: "counter",
        payload: value,
      });
    };
  } else {
    const value = state.count - amount;
    return (dispatch) => {
      dispatch({
        type: "counter",
        payload: value,
      });
    };
  }
};
