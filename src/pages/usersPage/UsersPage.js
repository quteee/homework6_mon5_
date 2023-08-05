import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, changeInputAction, deleteAction} from "../../redux/actions";
import User from "../../components/user/User";

function UsersPage() {

  const dispatch = useDispatch
  const {value, users} = useSelector(state => state.usersReducer)

  const changeInput = (event) => {
    dispatch(changeInputAction(event.target.value))
  }

  const addUser = () => {
    dispatch(addUserAction(value))
  }
  const deleteAll = () => {
    dispatch(deleteAction())
  }

  return (

    <div>
      <h1>{value}</h1>
      <input type="text" placeholder='name' onChange={changeInput}/>
      <button onClick={addUser}>add</button>
      <button onClick={deleteAll}>delete</button>

      {users.map((user, idx) => <User key={idx} userName={users} />)}

    </div>

  );
}

export default UsersPage;