import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import styles from "./IncrementDecrement.module.css";

const IncrementDrecrement = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.Increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.Decrement());
  };

  return (
    <div className={`${styles["add-sub"]}`}>
      <button
        type="button"
        className={`btn btn-dark ${styles["button-style"]} ${styles["myBtn"]}`}
        onClick={handleIncrement}
      >
        Increment
      </button>

      <button
        type="button"
        className={`btn btn-dark ${styles["button-style"]} ${styles["myBtn"]}`}
        style={{ marginLeft: "40px" }}
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default IncrementDrecrement;
