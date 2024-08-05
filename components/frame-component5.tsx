import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.imageGalleryParent, className].join(" ")}>
      <div className={styles.imageGallery}>
        <h1 className={styles.trustedByThe}>
          Trusted by the world’s largest companies
        </h1>
        <div className={styles.headingSpacerTwo}>
          <div className={styles.div}>.</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.group44Parent}>
          <img
            className={styles.group44Icon}
            loading="lazy"
            alt=""
            src="/group44@2x.png"
          />
          <div className={styles.logoPairOne}>
            <img
              className={styles.slackRgbIcon}
              loading="lazy"
              alt=""
              src="/slack-rgb@2x.png"
            />
          </div>
          <div className={styles.logoTwo}>
            <img className={styles.weWork1} alt="" src="/we-work-1.svg" />
          </div>
          <div className={styles.logoPairOne1}>
            <img className={styles.slackRgbIcon} alt="" src="/image-7@2x.png" />
          </div>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
          <div className={styles.logoThree}>
            <img
              className={styles.iciciBankLogoSymbol1Icon}
              alt=""
              src="/icici-bank-logo-symbol-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
