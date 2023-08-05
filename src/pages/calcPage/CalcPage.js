import React from 'react';
import {useDispatch} from "react-redux";
import {addNumberAction, clearAllAction} from "../../redux/actions";
import {useState} from "react";
import NumbersListComponent from "../../components/numberList/NumbersListComponent";

function CalcPage() {

  const dispatch = useDispatch()
  const [number, setNumber] = useState('')

  const addNumber = () => {
    if (number !== '') {
      dispatch(addNumberAction(number));
      setNumber('')
    }
  }

  const handleChange = (event) => {
    setNumber(event.target.value)
  }


  const clearAll = () => {
    dispatch(clearAllAction())
  }

  return (


    <div>
      <input type="number" placeholder='number' value={number} onChange={handleChange}/>
      <button onClick={addNumber}>add</button>
      <button onClick={clearAll}>clear</button>
      <NumbersListComponent />
    </div>
  );
}

export default CalcPage;