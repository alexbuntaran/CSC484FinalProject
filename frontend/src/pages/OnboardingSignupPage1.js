import Content from "../components/Content";
import styles from "./OnboardingSignupPage1.module.css";

const OnboardingSignupPage = () => {
  return (
    <div className={styles.onboardingSignupPage}>
      <img
        className={styles.caughtlackin1Icon}
        alt=""
        src="/caughtlackin-1@2x.png"
      />
      <Content />
    </div>
  );
};

export default OnboardingSignupPage;
