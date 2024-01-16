import styles from "./CounterDisplay.module.css";

const CounterDisplay = ({counterValue}) => {
  return (
    <div className={`${styles["counter"]}`}>Counter Value : {counterValue}</div>
  );
};

export default CounterDisplay;
