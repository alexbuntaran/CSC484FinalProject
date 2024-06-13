import Content from "../components/Content";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <img
        className={styles.caughtlackin1Icon}
        alt=""
        src="/caughtlackin-1@2x.png"
      />
      <Content />
    </div>
  );
};

export default SignUp;
