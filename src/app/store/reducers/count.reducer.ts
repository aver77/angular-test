import {Action, createReducer, on} from "@ngrx/store";
import * as actions from "../actions/count.actions";

const initialState = 0;

const _countReducer = createReducer(
  initialState,
  on(actions.increment, state => {
    return state + 1;
  }),
  on(actions.decrement, state => {
    return state - 1;
  }),
  on(actions.reset, state => {
    return 0;
  })
)

export default function countReducer(state: any, action: Action) {
  return _countReducer(state, action)
}
