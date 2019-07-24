import { FETCH_MONTH_INFO } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MONTH_INFO:
      return action.payload;
    default:
      return state;
  }
}