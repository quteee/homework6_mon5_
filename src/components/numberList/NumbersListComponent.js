import React from 'react';
import { useSelector } from 'react-redux';

const NumbersListComponent = () => {
  const numbersList = useSelector(state => state.numbersList);

  return (
    <ul>
      {numbersList.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}

export default NumbersListComponent;
