export const change = (amount, choice) => (state) => {
  return (dispatch) => {
    let value;
    choice === "plus"
      ? (value = state.count + amount)
      : (value = state.count - amount);
    dispatch({
      type: "counter",
      payload: value,
    });
  };
};
