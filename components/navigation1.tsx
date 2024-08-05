import type { NextPage } from "next";
import styles from "./navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.headerLogo884459461Wrapper}>
        <img
          className={styles.headerLogo884459461Icon}
          loading="lazy"
          alt=""
          src="/headerlogo88445946-1.svg"
        />
      </div>
      <div className={styles.navigationInner}>
        <div className={styles.frameParent}>
          <div className={styles.workspaceServicesParent}>
            <a className={styles.workspaceServices}>{`Workspace & Services`}</a>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
          <div className={styles.getStartedParent}>
            <a className={styles.getStarted}>Get started</a>
            <div className={styles.moreParent}>
              <a className={styles.more}>More</a>
              <img className={styles.enquireNowBtn} alt="" src="/frame-1.svg" />
            </div>
            <a className={styles.help}>Help</a>
          </div>
        </div>
      </div>
      <div className={styles.navigationChild}>
        <div className={styles.enquireButtonParent}>
          <div className={styles.enquireButton}>
            <img
              className={styles.enquireButtonChild}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <button className={styles.link}>
            <a className={styles.enquireNow}>ENQUIRE NOW</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
