import { createStore } from "redux";
import { produce } from "immer";
const initialState = {
  value: 0,
};
export const addNumber = (number) => ({
  type: "ADD_NUMBER",
  payload: number,
});
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return produce(state, (draft) => {
        draft.number = action.payload;
      });
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
