import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import styles from "./Counter.module.css";
import CounterDisplay from "./CounterDisplay";
import IncrementDrecrement from "./IncrementDecremnent";
import Private from "./Private";
import Toggle from "./Toggle";

const Counter = () => {

  let { counter } = useSelector((state) => state.counter);
  let { privacy } = useSelector((state) => state.privacy);

  let add = useRef();
  let sub = useRef();
  let mul = useRef();
  let div = useRef();

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(counterActions.Add({ value: add.current.value }));
    add.current.value = "";
  };

  const handleSub = () => {
    dispatch(counterActions.Sub({ value: sub.current.value }));
    sub.current.value = "";
  };

  const handleMul = () => {
    dispatch(counterActions.Mul({ value: mul.current.value }));
    mul.current.value = "";
  };

  const handleDiv = () => {
    dispatch(counterActions.Div({ value: div.current.value }));
    div.current.value = "";
  };

  return (
    <center className={`${styles.MainDiv}`}>
      {privacy ? <Private /> : <CounterDisplay counterValue={counter} />}

      <IncrementDrecrement></IncrementDrecrement>

      <div className={`${styles["add-sub"]}`}>
        <button
          type="button"
          className={`btn btn-primary ${styles["button-style"]} ${styles["myBtn"]}`}
          onClick={handleAdd}
        >
          Addition
        </button>
        <input
          className={`${styles["input-num"]}`}
          type="number"
          ref={add}
          name="add-num"
          id="add-num"
        />

        <button
          type="button"
          className={`btn btn-danger ${styles["button-style"]} ${styles["myBtn"]}`}
          style={{ marginLeft: "40px" }}
          onClick={handleSub}
        >
          Subtract
        </button>
        <input
          className={`${styles["input-num"]}`}
          type="number"
          ref={sub}
          name="sub-num"
          id="sub-num"
        />
      </div>

      <div className={`${styles["mul-div"]}`}>
        <button
          type="button"
          className={`btn btn-success ${styles["button-style"]} ${styles["myBtn"]}`}
          onClick={handleMul}
        >
          Multiple
        </button>
        <input
          className={`${styles["input-num"]}`}
          type="number"
          name="mul-num"
          ref={mul}
          id="mul-num"
        />

        <button
          type="button"
          className={`btn btn-warning ${styles["button-style"]} ${styles["myBtn"]}`}
          style={{ marginLeft: "40px" }}
          onClick={handleDiv}
        >
          Divide
        </button>
        <input
          className={`${styles["input-num"]}`}
          type="number"
          ref={div}
          name="mul-num"
          id="mul-num"
        />
      </div>

      <Toggle></Toggle>
    </center>
  );
};

export default Counter;
