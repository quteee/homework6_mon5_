import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import {changeInput, addUser, clearAction, deleteAllAction} from "../../store/usersSlice";
import User from "../../components/User";

function UsersPage() {

  const dispatch = useDispatch()

  const { inputValue, users} = useSelector(state => state.usersReducer)

  const changeInputFunc = (event) => {
    dispatch(changeInput(event.target.value))
  }

  const addUserFunc = () => {
    dispatch(addUser(inputValue))
  }


  return (
    <div>
      <input value={inputValue} type="text" placeholder='name' onChange={changeInputFunc}/>
      <button onClick={addUserFunc}>add user</button>
      <button onClick={() => dispatch(clearAction())}>clear</button>
      <button onClick={() => dispatch(deleteAllAction())}>delete all</button>

      {users.map(user => <User name={user} />)}
    </div>

  );
}


export default UsersPage;