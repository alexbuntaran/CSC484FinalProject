import { useCallback } from "react";
import styles from "./Feed.module.css";

const Feed = () => {
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
            className={styles.component2Child}
            alt=""
            src="/rectangle-171@2x.png"
          />
          <div className={styles.component2Item} />
          <div className={styles.dog}>Dog</div>
          <img className={styles.component2Inner} alt="" src="/frame-5.svg" />
        </div>
        <div className={styles.component3}>
          <img
            className={styles.component2Child}
            alt=""
            src="/rectangle-172@2x.png"
          />
          <div className={styles.component2Item} />
          <div className={styles.dog}>Dog</div>
          <img className={styles.component2Inner} alt="" src="/frame-5.svg" />
        </div>
        <div className={styles.component4}>
          <img
            className={styles.component2Child}
            alt=""
            src="/rectangle-173@2x.png"
          />
          <div className={styles.component2Item} />
          <div className={styles.dog}>Dog</div>
          <img className={styles.component2Inner} alt="" src="/frame-5.svg" />
        </div>
        <div className={styles.component5}>
          <img
            className={styles.component2Child}
            alt=""
            src="/rectangle-174@2x.png"
          />
          <div className={styles.component2Item} />
          <div className={styles.dog}>Dog</div>
          <img className={styles.component2Inner} alt="" src="/frame-5.svg" />
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
        src="/caughtlackin-11@2x.png"
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

export default Feed;
