import {types} from "../types";

const initialState = {
  numbersList: []
}


export default function calcReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_NUMBER:
      const sum = state.numberList.reduce((status, number) => status + number, 0);
      return { ...state, numberList: [ ...state.numberList, sum + action.payload]}
    case types.CLEAR_ALL:
      return { ...state, numberList: []}
    default: return state
  }
}