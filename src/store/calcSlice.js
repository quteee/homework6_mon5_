import {createSlice} from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: 'calcSlice',
  initialState: {
    number1: '',
    number2: '',
    text: '',
    error: ''
  },
  reducers: {
    changeNumber1: (state, action) => {
      state.number1 = action.payload
    },
    changeNumber2: (state, action) => {
      state.number2 = action.payload
    },
    textAction: (state, action) => {
      state.text = action.payload
    },
    clearError: (state, action) => {
      state.error = ''
    },
    errorAction: (state, action) => {
      state.error = action.payload
    },
    clearAllAction: (state, action) => {
      state.number1 = ''
      state.number2 = ''
      state.text = ''
      state.error = ''
    }
  }

})
export const {changeNumber1, changeNumber2, textAction,clearError, errorAction, clearAllAction} = calcSlice.actions

export default calcSlice.reducer
