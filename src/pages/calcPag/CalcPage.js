import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeNumber1, changeNumber2, textAction, clearError, errorAction, clearAllAction} from "../../store/calcSlice";

function CalcPage() {

  const dispatch = useDispatch()
  const { number1, number2 ,text, error} = useSelector(state => state.calcReducer)


  const handleOperation = (operation) => {
    dispatch(clearError());

    if (number1 === '' || number2 === '') {
      dispatch(errorAction('Поля должны быть заполнеными'));
      return;
    }

    let operationResult = 0;

    switch (operation) {
      case '+':
        operationResult = number1 + number2;
        break;
      case '-':
        operationResult = number1 - number2;
        break;
      case '*':
        operationResult = number1 * number2;
        break;
      case '/':
        operationResult = number1 / number2;
        break;
      default:
        break;
    }

    dispatch(textAction(operationResult));
  };

  const changeNum1 = (event) => {
    dispatch(changeNumber1(event.target.value))
  }
  const changeNum2 = (event) => {
    dispatch(changeNumber2(event.target.value))
  }

  return (
    <div>
      <input type="number"  value={number1} onChange={changeNum1} />
      <input type="number" value={number2}  onChange={changeNum2}/>
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleOperation('*')}>*</button>
      <button onClick={() => handleOperation('/')}>/</button>
      <button onClick={() => dispatch(clearAllAction())}>Clear ALl</button>
      <h3>{text}</h3>
      <h3>{error}</h3>
    </div>
  );
}

export default CalcPage;