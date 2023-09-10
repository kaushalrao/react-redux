import { ADD_ONE, MINUS_ONE } from "../actions";

export type CounterState = {
  readonly counter: number;
};
const initialState: CounterState = {
  counter: 0,
};
const counterReducer = (state = initialState, action: { type: string }) => {
  console.info(action);
  switch (action.type) {
    case ADD_ONE:
      return {
        counter: state.counter + 1,
      };
    case MINUS_ONE:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
