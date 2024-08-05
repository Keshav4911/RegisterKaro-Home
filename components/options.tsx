import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./options.module.css";

export type OptionsType = {
  className?: string;
  companyRegistration?: string;
  companyRegistration1?: string;
  enhanceYourProfessionalIm?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const Options: NextPage<OptionsType> = ({
  className = "",
  propWidth,
  companyRegistration,
  companyRegistration1,
  propDisplay,
  enhanceYourProfessionalIm,
}) => {
  const optionsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const companyRegistrationStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={[styles.options, className].join(" ")} style={optionsStyle}>
      <div className={styles.registrationIcons}>
        <img
          className={styles.companyRegistrationIcon}
          loading="lazy"
          alt=""
          src={companyRegistration}
        />
      </div>
      <div className={styles.registrationHeadings}>
        <h2
          className={styles.companyRegistration}
          style={companyRegistrationStyle}
        >
          {companyRegistration1}
        </h2>
        <div className={styles.registrationDetails}>
          <div className={styles.enhanceYourProfessional}>
            {enhanceYourProfessionalIm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
