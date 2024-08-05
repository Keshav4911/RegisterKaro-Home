import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./options1.module.css";

export type Options1Type = {
  className?: string;
  businessMailingAddress?: string;
  centralizedBusinessHub?: string;
  establishYourVirtualOffic?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Options1: NextPage<Options1Type> = ({
  className = "",
  propAlignSelf,
  propWidth,
  businessMailingAddress,
  centralizedBusinessHub,
  establishYourVirtualOffic,
}) => {
  const options1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.options, className].join(" ")}
      style={options1Style}
    >
      <div className={styles.businessMailingAddressWrapper}>
        <img
          className={styles.businessMailingAddressIcon}
          loading="lazy"
          alt=""
          src={businessMailingAddress}
        />
      </div>
      <div className={styles.centralizedBusinessHubParent}>
        <h2 className={styles.centralizedBusinessHub}>
          {centralizedBusinessHub}
        </h2>
        <div className={styles.establishYourVirtualOfficeWrapper}>
          <div className={styles.establishYourVirtual}>
            {establishYourVirtualOffic}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options1;
