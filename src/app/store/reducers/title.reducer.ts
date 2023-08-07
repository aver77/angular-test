import {Action, createReducer, on} from "@ngrx/store";
import * as actions from "../actions/title.actions";

const initialState = "Hello, angular!"

const _titleReducer = createReducer(
  initialState,
  on(actions.setTitle, (state, payload) => {
    return payload.title;
  })
)

export default function titleReducer(state: any, action: Action) {
  return _titleReducer(state, action)
}
