import classes from "./Counter.module.css";
import {  useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index.js";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showVlaue = useSelector((state) => state.counter.showCounter);


  const dispatch = useDispatch();

  function hanldeIncrement() {
    dispatch( counterActions.increment());
  }

  function hanldeIncrease() {
    dispatch( counterActions.increase(10));//{type:sdfasgdfhasgkf , payload:10}
  }

  function hanldeDecrement() {
    dispatch( counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showVlaue && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={hanldeDecrement}>decrement</button>
        <button onClick={hanldeIncrease}>increase by 10</button>
        <button onClick={hanldeIncrement}>increment</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {showVlaue ? "Hide Counter" : "Show Counter"}
      </button>
    </main>
  );
};

export default Counter;
