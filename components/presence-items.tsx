import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./presence-items.module.css";

export type PresenceItemsType = {
  className?: string;
  nationwidePresence?: string;
  establishAPresenceInMulti?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
};

const PresenceItems: NextPage<PresenceItemsType> = ({
  className = "",
  propPadding,
  propHeight,
  propWidth,
  nationwidePresence,
  propFlex,
  propHeight1,
  establishAPresenceInMulti,
  propWidth1,
}) => {
  const presenceItemsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
    };
  }, [propPadding, propHeight]);

  const nationwidePresenceStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const benefitIconsTwoStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight1,
    };
  }, [propFlex, propHeight1]);

  const establishAPresenceStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={[styles.presenceItems, className].join(" ")}
      style={presenceItemsStyle}
    >
      <h3 className={styles.nationwidePresence} style={nationwidePresenceStyle}>
        <span className={styles.nationwidePresenceTxtContainer}>
          <ul className={styles.nationwidePresence1}>
            <li>{nationwidePresence}</li>
          </ul>
        </span>
      </h3>
      <div className={styles.benefitIconsTwo} style={benefitIconsTwoStyle}>
        <div className={styles.presenceDetailsShape} />
        <div
          className={styles.establishAPresence}
          style={establishAPresenceStyle}
        >
          {establishAPresenceInMulti}
        </div>
      </div>
    </div>
  );
};

export default PresenceItems;
