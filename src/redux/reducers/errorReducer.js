const initialState = "empty";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      return "value";
    default:
      return state;
  }
};

export default reducer;
