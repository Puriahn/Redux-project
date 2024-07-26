import classes from "./Counter.module.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showVlaue = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  function hanldeIncrement() {
    dispatch({ type: "increment" });
  }

  function hanldeIncrease() {
    dispatch({ type: "increase", amount: 10 });
  }

  function hanldeDecrement() {
    dispatch({ type: "decrement" });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: "counterValue" });
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
