import { FETCH_MONTHS } from "../actions/types";


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MONTHS:
      return action.payload;
    default:
      return state;
  }
}