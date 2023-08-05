import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleWithParams, changeInputAction, clearInput, deleteTitle} from "../../store/titleSlice";

function MainPage() {

  const {title, inputValue} = useSelector(state => state.titleReducer)
  const dispatch = useDispatch()

  const changeInput = (event) => {
    dispatch(changeInputAction(event.target.value))
  }

  const withParams = () => {
    dispatch(changeTitleWithParams(inputValue))
  }


  return (
    <div>
      <h1>{title}</h1>
      <input value={inputValue} type="text"  onChange={changeInput}/>
      <button onClick={() => dispatch(clearInput())}>clear</button>
      <button onClick={() => dispatch(deleteTitle())}>delete title</button>
      <button onClick={withParams}>add</button>
    </div>
  );
}

export default MainPage;