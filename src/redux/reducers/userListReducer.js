import {types} from "../types";

const initialState = {
  users: [],
  error: null,
};

export default function userListReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_SUCCES:
      return { ...state, users: action.payload,};
    case types.USER_ERROR:
      return { ...state, error: action.payload,};
    default: return state;
  }
};