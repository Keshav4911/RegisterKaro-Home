import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./benefit-items.module.css";

export type BenefitItemsType = {
  className?: string;
  prestigiousBusinessAddres?: string;
  accessToPrestigiousBusine?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const BenefitItems: NextPage<BenefitItemsType> = ({
  className = "",
  propPadding,
  prestigiousBusinessAddres,
  propWidth,
  propPadding1,
  accessToPrestigiousBusine,
  propDisplay,
  propMinWidth,
}) => {
  const benefitItemsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const benefitIconsOneStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
    };
  }, [propWidth, propPadding1]);

  const accessToPrestigiousStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.benefitItems, className].join(" ")}
      style={benefitItemsStyle}
    >
      <h3 className={styles.prestigiousBusinessAddressesContainer}>
        <ul className={styles.prestigiousBusinessAddresses}>
          <li>{prestigiousBusinessAddres}</li>
        </ul>
      </h3>
      <div className={styles.benefitIconsOne} style={benefitIconsOneStyle}>
        <div className={styles.detailsShapes} />
        <div
          className={styles.accessToPrestigious}
          style={accessToPrestigiousStyle}
        >
          {accessToPrestigiousBusine}
        </div>
      </div>
    </div>
  );
};

export default BenefitItems;
