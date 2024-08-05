import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section className={[styles.teamContainerWrapper, className].join(" ")}>
      <div className={styles.teamContainer}>
        <div className={styles.section}>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCards}>
              <div className={styles.surajContainer}>
                <div className={styles.container}>
                  <div className={styles.frameParent}>
                    <div className={styles.profileShapesParent}>
                      <img
                        className={styles.profileShapesIcon}
                        alt=""
                        src="/profile-shapes@2x.png"
                      />
                      <img
                        className={styles.profileShapesIcon1}
                        loading="lazy"
                        alt=""
                        src="/rectangle-2134@2x.png"
                      />
                    </div>
                    <b className={styles.suraj}>SURAJ</b>
                  </div>
                </div>
              </div>
              <div className={styles.cardRowOne}>
                <div className={styles.member}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.backgroundShapesIcon}
                      alt=""
                      src="/background-shapes@2x.png"
                    />
                    <img
                      className={styles.imageShapesIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-2136@2x.png"
                    />
                  </div>
                  <b className={styles.amit}>AMIT</b>
                </div>
              </div>
              <div className={styles.cardRowOne1}>
                <div className={styles.frameGroup}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.backgroundShapesIcon}
                      alt=""
                      src="/rectangle-2128@2x.png"
                    />
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/rectangle-21361@2x.png"
                    />
                  </div>
                  <b className={styles.vartika}>vARTIKA</b>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.shrutiParent}>
                  <div className={styles.shrutiGrandparent}>
                    <div className={styles.ceo}>{`CEO `}</div>
                  </div>
                  <b className={styles.shruti}>SHRUTI</b>
                </div>
                <div className={styles.testimonialInner}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-48095366.svg"
                  />
                </div>
              </div>
              <div className={styles.cardRowOne1}>
                <div className={styles.frameGroup}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.backgroundShapesIcon}
                      alt=""
                      src="/rectangle-2133@2x.png"
                    />
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/rectangle-21362@2x.png"
                    />
                  </div>
                  <b className={styles.lokesh}>LOKESH</b>
                </div>
              </div>
              <div className={styles.cardRowOne3}>
                <div className={styles.member}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.backgroundShapesIcon}
                      alt=""
                      src="/rectangle-2132@2x.png"
                    />
                    <img
                      className={styles.imageShapesIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-21363@2x.png"
                    />
                  </div>
                  <b className={styles.lauren}>Lauren</b>
                </div>
              </div>
              <div className={styles.kartikContainer}>
                <div className={styles.testimonialInfo}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.backgroundShapesIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-2131@2x.png"
                    />
                    <div className={styles.imagePlaceholder} />
                  </div>
                  <b className={styles.kartik}>KARTIK</b>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.emptyTestimonialIcon}
            loading="lazy"
            alt=""
            src="/frame-52@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
