import { useCallback } from "react";
import styles from "./Feed1.module.css";

const Feed1 = () => {
  const onGroupIconClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='component2Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.feed}>
      <div className={styles.component2Parent}>
        <div className={styles.component2} data-scroll-to="component2Container">
          <img
            className={styles.component2Child}
            alt=""
            src="/rectangle-17@2x.png"
          />
          <div className={styles.component2Item} />
          <div className={styles.dog}>Dog</div>
          <img className={styles.component2Inner} alt="" src="/frame-5.svg" />
        </div>
        <div className={styles.component6}>
          <img
            className={styles.component6Child}
            alt=""
            src="/rectangle-17-1@2x.png"
          />
          <div className={styles.component6Item} />
          <div className={styles.dog1}>Dog</div>
          <img className={styles.component6Inner} alt="" src="/frame-5.svg" />
        </div>
        <div className={styles.component3}>
          <img
            className={styles.component3Child}
            alt=""
            src="/rectangle-17-2@2x.png"
          />
          <div className={styles.component3Item} />
          <div className={styles.dog2}>Dog</div>
          <img className={styles.component3Inner} alt="" src="/frame-5.svg" />
        </div>
        <div className={styles.component4}>
          <img
            className={styles.component4Child}
            alt=""
            src="/rectangle-17-3@2x.png"
          />
          <div className={styles.component4Item} />
          <div className={styles.dog3}>Dog</div>
          <img className={styles.component4Inner} alt="" src="/frame-5.svg" />
        </div>
        <div className={styles.component5}>
          <img
            className={styles.component5Child}
            alt=""
            src="/rectangle-17-4@2x.png"
          />
          <div className={styles.component5Item} />
          <div className={styles.dog4}>Dog</div>
          <img className={styles.component5Inner} alt="" src="/frame-5.svg" />
        </div>
      </div>
      <div className={styles.feedChild} />
      <img
        className={styles.caughlackinlogo1Icon}
        alt=""
        src="/caughlackinlogo-1@2x.png"
      />
      <img className={styles.navbarIcon} alt="" src="/navbar.svg" />
      <img
        className={styles.caughtlackin1Icon}
        alt=""
        src="/caughtlackin-12@2x.png"
      />
      <img
        className={styles.groupIcon}
        alt=""
        src="/group.svg"
        onClick={onGroupIconClick}
      />
    </div>
  );
};

export default Feed1;
