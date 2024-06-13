import { FunctionComponent, useCallback } from "react";
import NavbarIcon from "../components/NavbarIcon";
import styles from "./Feed.module.css";

const Feed: FunctionComponent = () => {
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
      <section className={styles.frameParent}>
        <div className={styles.component2Parent}>
          <div
            className={styles.component2}
            data-scroll-to="component2Container"
          >
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-17@2x.png"
              />
              <b className={styles.dog}>Dog</b>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/frame-5.svg"
              />
            </div>
            <div className={styles.component2Child} />
          </div>
          <div className={styles.component6}>
            <div className={styles.rectangleGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-17-1@2x.png"
              />
              <b className={styles.dog1}>Dog</b>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame-5.svg"
              />
            </div>
            <footer className={styles.component6Child} />
          </div>
          <div className={styles.component3}>
            <div className={styles.rectangleContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-17-2@2x.png"
              />
              <b className={styles.dog2}>Dog</b>
              <img className={styles.frameChild1} alt="" src="/frame-5.svg" />
            </div>
            <div className={styles.component3Child} />
          </div>
        </div>
        <div className={styles.component4}>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild2}
              alt=""
              src="/rectangle-17-3@2x.png"
            />
            <b className={styles.dog3}>Dog</b>
            <img className={styles.frameChild3} alt="" src="/frame-5.svg" />
          </div>
          <div className={styles.component4Child} />
        </div>
        <div className={styles.component5}>
          <div className={styles.rectangleParent1}>
            <img
              className={styles.frameChild4}
              alt=""
              src="/rectangle-17-4@2x.png"
            />
            <b className={styles.dog4}>Dog</b>
            <img className={styles.frameChild5} alt="" src="/frame-5.svg" />
          </div>
          <div className={styles.component5Child} />
        </div>
      </section>
      <header className={styles.frameHeader}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.caughlackinlogo1Icon}
          loading="lazy"
          alt=""
          src="/caughlackinlogo-1@2x.png"
        />
      </header>
      <NavbarIcon />
      <img
        className={styles.caughtlackin1Icon}
        alt=""
        src="/caughtlackin-1@2x.png"
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
