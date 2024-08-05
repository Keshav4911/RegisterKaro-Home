import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  newDelhi?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  newDelhi,
  propMinWidth,
}) => {
  const newDelhiStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.newDelhiWrapper}>
        <div className={styles.newDelhi} style={newDelhiStyle}>
          {newDelhi}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
