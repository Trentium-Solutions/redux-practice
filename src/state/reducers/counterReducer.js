const counterReducer = (state = 1, action) => {
  if (action.type === "counter") {
    return (state = action.payload);
  } else {
    return state;
  }
};

export default counterReducer;
