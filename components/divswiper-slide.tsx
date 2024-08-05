import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./divswiper-slide.module.css";

export type DivswiperSlideType = {
  className?: string;
  pictureOfficeSpaceCardSta?: string;
  heading2PrivateOffices?: string;
  aRangeOfReadyToUseFullyEq?: string;
  officesWithEverythingYouN?: string;
  started?: string;
  calendarsvg?: string;
  byMonthOrYear?: string;
  from89PerPersonPerMonth?: string;
  getAQuote?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const DivswiperSlide: NextPage<DivswiperSlideType> = ({
  className = "",
  pictureOfficeSpaceCardSta,
  propAlignSelf,
  propFlex,
  heading2PrivateOffices,
  propDisplay,
  propMinWidth,
  propWidth,
  propAlignSelf1,
  aRangeOfReadyToUseFullyEq,
  officesWithEverythingYouN,
  started,
  propHeight,
  calendarsvg,
  byMonthOrYear,
  propDisplay1,
  propMinWidth1,
  propHeight1,
  propWidth1,
  from89PerPersonPerMonth,
  propFlex1,
  getAQuote,
  propMinWidth2,
}) => {
  const cardContainersStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const cardContentStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const heading2Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth, propWidth]);

  const aRangeOfContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const cardIconsOneStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const byMonthOrStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const cardIconsTwoStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const cardColumnThreeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const from89Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const getAQuoteStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={[styles.divswiperSlide, className].join(" ")}>
      <img
        className={styles.pictureOfficeSpaceCardSt}
        loading="lazy"
        alt=""
        src={pictureOfficeSpaceCardSta}
      />
      <div className={styles.cardContainers} style={cardContainersStyle}>
        <div className={styles.cardContent} style={cardContentStyle}>
          <div className={styles.heading2} style={heading2Style}>
            {heading2PrivateOffices}
          </div>
          <div
            className={styles.aRangeOfContainer}
            style={aRangeOfContainerStyle}
          >
            <p className={styles.aRangeOf}>{aRangeOfReadyToUseFullyEq}</p>
            <p className={styles.aRangeOf}>{officesWithEverythingYouN}</p>
            <p className={styles.aRangeOf}>{started}</p>
          </div>
        </div>
      </div>
      <div className={styles.pricingCards}>
        <div className={styles.cardRowOne}>
          <div className={styles.cardColumnOne}>
            <div className={styles.cardIconsOne} style={cardIconsOneStyle}>
              <img
                className={styles.calendarsvgIcon}
                alt=""
                src={calendarsvg}
              />
            </div>
            <div className={styles.byMonthOr} style={byMonthOrStyle}>
              {byMonthOrYear}
            </div>
          </div>
          <div className={styles.cardColumnOne}>
            <div className={styles.cardIconsOne} style={cardIconsTwoStyle}>
              <img
                className={styles.teamssvgIcon}
                alt=""
                src="/teamssvg@2x.png"
              />
            </div>
            <div className={styles.teamsOfAny}>Teams of any size</div>
          </div>
        </div>
      </div>
      <div className={styles.cardColumnThree} style={cardColumnThreeStyle}>
        <div className={styles.from89} style={from89Style}>
          {from89PerPersonPerMonth}
        </div>
      </div>
      <div className={styles.cardRowTwo}>
        <div className={styles.cardColumnFour}>
          <button className={styles.link}>
            <div className={styles.getAQuote} style={getAQuoteStyle}>
              {getAQuote}
            </div>
          </button>
          <button className={styles.link1}>
            <div className={styles.learnMore}>Learn more</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DivswiperSlide;
