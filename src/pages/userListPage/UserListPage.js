import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userRequest} from "../../redux/actions";
import {Spinner} from "react-bootstrap";

function UserListPage() {

  const dispatch = useDispatch();
  const {users, error} = useSelector(state => state.userListReducer)

  useEffect(() => {
    dispatch(userRequest());
  }, [dispatch]);

  if (error) {
    return <Spinner animation="border" role="status">
      <span className="visually-hidden">ERROR</span>
    </Spinner>
  }

  return (
    <div>
      <h1>Users List</h1>
      <table className="table">
        <thead>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListPage;