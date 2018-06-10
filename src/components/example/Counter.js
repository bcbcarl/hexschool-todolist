import React from 'react';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';

// const Button = styled.button`
//   margin-left: 0.25rem;
// `;

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <p>
    Clicked: {value} times
    <Button onClick={onIncrement}>+</Button>{' '}
    <Button onClick={onDecrement}>-</Button>{' '}
    <Button onClick={onIncrementAsync}>Increment async</Button>
  </p>
);

export default Counter;
