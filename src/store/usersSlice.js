import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'usersSLice',
  initialState: {
    users: [],
    inputValue: ''
  },
  reducers: {
    changeInput: (state, action) => {
      state.inputValue = action.payload
    },
    addUser: (state, action) => {
      state.users = [ ...state.users, action.payload ]
    },
    clearAction: (state, action) => {
      state.inputValue = ''
    },
    deleteAllAction: (state, action) => {
      state.inputValue = ''
      state.users = []
    }
  }
})

export const {changeInput, addUser, clearAction, deleteAllAction} = usersSlice.actions

export default usersSlice.reducer