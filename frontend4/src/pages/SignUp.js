import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/feed");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <div className={styles.name}>
        <div className={styles.nameChild} />
        <div className={styles.name1}>Name</div>
      </div>
      <div className={styles.phoneNumber}>
        <div className={styles.phoneNumberChild} />
        <div className={styles.phoneNumber1}>Phone Number</div>
      </div>
      <div className={styles.submit}>
        <div className={styles.submitChild} onClick={onRectangleClick} />
        <div className={styles.submit1}>Submit</div>
      </div>
      <div className={styles.enterYourInformation}>Enter your information</div>
      <img
        className={styles.caughlackinlogo1Icon}
        alt=""
        src="/caughlackinlogo-1@2x.png"
      />
      <section className={styles.caughtlackin1} />
    </div>
  );
};

export default SignUp;
