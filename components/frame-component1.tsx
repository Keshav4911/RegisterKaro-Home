import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.pictureHomepageSerachv2OfInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.trendingCitiesWrapper}>
          <b className={styles.trendingCities}>Trending cities</b>
        </div>
        <div className={styles.cityButtons}>
          <FrameComponent newDelhi="New Delhi" />
          <FrameComponent newDelhi="Bangalore" propMinWidth="61px" />
          <FrameComponent newDelhi="Mumbai" propMinWidth="49px" />
          <FrameComponent newDelhi="Hyderabad" propMinWidth="66px" />
          <FrameComponent newDelhi="Chennai" propMinWidth="50px" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
