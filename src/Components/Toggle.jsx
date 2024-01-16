import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { privacyActions } from "../store/privacy";
import styles from "./Toggle.module.css";

const Toggle = () => {

    const dispatch = useDispatch();

    const handleToggle = () => { 
        dispatch(privacyActions.toggle());
    }

  return (
      <div className={`${styles["mul-div"]}`}>
        <button
          type="button"
          className={`btn btn-dark ${styles["button-style"]} ${styles["myBtn"]}`}
          onClick={handleToggle}
        >
          Privacy
        </button>
      </div>
  );
};

export default Toggle;
