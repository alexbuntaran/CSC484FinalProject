import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSubmitBackgroundClick = useCallback(() => {
    navigate("/feed");
  }, [navigate]);

  return (
    <section className={[styles.content, className].join(" ")}>
      <img
        className={styles.caughlackinlogo1Icon}
        loading="lazy"
        alt=""
        src="/caughlackinlogo-1@2x.png"
      />
      <div className={styles.inputFields}>
        <div className={styles.infoField}>
          <div className={styles.enterYourInformation}>
            Enter your information
          </div>
        </div>
        <button className={styles.name}>
          <div className={styles.nameChild} />
          <b className={styles.name1}>Name</b>
        </button>
        <div className={styles.phoneField}>
          <button className={styles.phoneNumber}>
            <div className={styles.phoneNumberChild} />
            <b className={styles.phoneNumber1}>Phone Number</b>
          </button>
        </div>
      </div>
      <button className={styles.submit}>
        <div
          className={styles.submitBackground}
          onClick={onSubmitBackgroundClick}
        />
        <b className={styles.submit1}>Submit</b>
      </button>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
