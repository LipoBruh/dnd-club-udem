import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const CounterComponent = () => {
  const counter = useSelector(state => state.counter.value); //hook from react-redux for react components
  const dispatch = useDispatch(); //we get the dispatcher from the store so we can trigger the right action

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button> {/* the increment() action is called */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
//The action will be processed by the store and the consequences will be defined in the slice
//once processed by the slice and the store, the re render event will be counter variable that uses useSelector



export default CounterComponent;
