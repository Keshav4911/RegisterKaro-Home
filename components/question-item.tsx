import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./question-item.module.css";

export type QuestionItemType = {
  className?: string;
  group35621?: string;
  canILegallyRegisterMyBusi?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const QuestionItem: NextPage<QuestionItemType> = ({
  className = "",
  group35621,
  propWidth,
  canILegallyRegisterMyBusi,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.questionItem, className].join(" ")}>
      <div className={styles.questionBlock}>
        <img className={styles.questionBlockChild} alt="" src={group35621} />
      </div>
      <div
        className={styles.canILegallyRegisterMyBusiWrapper}
        style={frameDivStyle}
      >
        <div className={styles.canILegally}>{canILegallyRegisterMyBusi}</div>
      </div>
    </div>
  );
};

export default QuestionItem;
