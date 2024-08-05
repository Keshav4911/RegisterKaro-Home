import type { NextPage } from "next";
import DivswiperSlide from "./divswiper-slide";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-48095431@2x.png"
        />
      </div>
      <div className={styles.section}>
        <div className={styles.heading2FlexibleWorkspaceParent}>
          <h1 className={styles.heading2}>
            Flexible workspace designed around your needs
          </h1>
          <div className={styles.pricesContainer}>
            <div className={styles.imageContainer}>
              <img
                className={styles.spanrtlM4q803ImagecontainerIcon}
                alt=""
                src="/spanrtlm4q803imagecontainer@2x.png"
              />
              <div className={styles.iconWrapper}>
                <img className={styles.icon} alt="" src="/icon-1.svg" />
              </div>
            </div>
            <div className={styles.talkToExpertBtn}>
              <div className={styles.pricesForIndia}>Prices for India</div>
              <div className={styles.searchForA}>
                Search for a city or area to refine pricing
              </div>
            </div>
          </div>
        </div>
        <div className={styles.officeTypes}>
          <div className={styles.listWrapper}>
            <div className={styles.list}>
              <button className={styles.itemButton}>
                <div className={styles.officeSpace}>Office Space</div>
              </button>
              <h1 className={styles.itemButton1}>Coworking</h1>
              <h1 className={styles.itemButton2}>Virtual Offices</h1>
              <h1 className={styles.itemButton3}>Meeting rooms</h1>
            </div>
          </div>
          <div className={styles.ourFlexibleFullyCustomisab}>
            Our flexible, fully-customisable office rentals are available by the
            hour, day, or as long as you need.
          </div>
        </div>
        <div className={styles.onDemandOffice}>
          <DivswiperSlide
            pictureOfficeSpaceCardSta="/picture--office-space-card-stacked-1png@2x.png"
            heading2PrivateOffices="Private offices"
            aRangeOfReadyToUseFullyEq="A range of ready-to-use, fully equipped"
            officesWithEverythingYouN="offices with everything you need to get"
            started="started."
            calendarsvg="/calendarsvg.svg"
            byMonthOrYear="By month or year"
            from89PerPersonPerMonth="From $ 89 per person per month"
            getAQuote="Get a quote"
          />
          <DivswiperSlide
            pictureOfficeSpaceCardSta="/picture--office-space-card-stacked-1png1@2x.png"
            propAlignSelf="unset"
            propFlex="unset"
            heading2PrivateOffices="Custom Offices"
            propDisplay="flex"
            propMinWidth="unset"
            propWidth="123.5px"
            propAlignSelf1="unset"
            aRangeOfReadyToUseFullyEq="When off-the-shelf simply isn't"
            officesWithEverythingYouN="enough. Customise all aspects of your"
            started="space, including furniture and branding."
            propHeight="16px"
            calendarsvg="/brandedsvg.svg"
            byMonthOrYear="By month or year + customised"
            propDisplay1="unset"
            propMinWidth1="unset"
            propHeight1="16px"
            propWidth1="267.8px"
            from89PerPersonPerMonth="From $ 89 per person per month"
            propFlex1="1"
            getAQuote="Get a quote"
            propMinWidth2="77px"
          />
          <DivswiperSlide
            pictureOfficeSpaceCardSta="/picture--office-space-card-stacked-1png2@2x.png"
            propAlignSelf="unset"
            propFlex="unset"
            heading2PrivateOffices="Day Offices"
            propDisplay="inline-block"
            propMinWidth="91.5px"
            propWidth="unset"
            propAlignSelf1="unset"
            aRangeOfReadyToUseFullyEq="A professional on-demand office"
            officesWithEverythingYouN="space. Perfect when you need to get"
            started="your head down and do your best work."
            propHeight="16px"
            calendarsvg="/24houraccesssvg.svg"
            byMonthOrYear="By the hour or day"
            propDisplay1="inline-block"
            propMinWidth1="124.2px"
            propHeight1="16px"
            propWidth1="unset"
            from89PerPersonPerMonth="From $ 25 per day"
            propFlex1="unset"
            getAQuote="Book now"
            propMinWidth2="67px"
          />
          <div className={styles.divswiperSlide}>
            <img
              className={styles.pictureOfficeSpaceCardSt}
              loading="lazy"
              alt=""
              src="/picture--office-space-card-stacked-4png@2x.png"
            />
            <div className={styles.divswiperSlideInner}>
              <div className={styles.frameGroup}>
                <div className={styles.membershipHeaderParent}>
                  <div className={styles.membershipHeader}>
                    <div className={styles.heading21}>Office membership</div>
                    <div className={styles.flexibleAccessToContainer}>
                      <p className={styles.flexibleAccessTo}>
                        Flexible access to Day Offices where
                      </p>
                      <p className={styles.flexibleAccessTo}>
                        and when you choose, at thousands of
                      </p>
                      <p className={styles.flexibleAccessTo}>
                        locations worldwide.
                      </p>
                    </div>
                  </div>
                  <div className={styles.paymentOptions}>
                    <div className={styles.flexiblepaymentsvgWrapper}>
                      <img
                        className={styles.flexiblepaymentsvgIcon}
                        alt=""
                        src="/flexiblepaymentsvg.svg"
                      />
                    </div>
                    <div className={styles.orUnlimitedDays}>
                      5, 10 or unlimited days per month
                    </div>
                  </div>
                </div>
                <div className={styles.from225PerMonthParent}>
                  <div className={styles.heading21}>From $ 225 per month</div>
                  <div className={styles.customButtons}>
                    <button className={styles.link}>
                      <div className={styles.buyNow}>Buy now</div>
                    </button>
                    <button className={styles.link1}>
                      <div className={styles.learnMore}>Learn more</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divswiperSlide1}>
            <img
              className={styles.pictureOfficeSpaceCardSt}
              loading="lazy"
              alt=""
              src="/picture--office-space-card-stacked-5png@2x.png"
            />
            <div className={styles.beforeParent}>
              <div className={styles.before} />
              <div className={styles.heading2NeedAHelpingHanParent}>
                <div className={styles.agentsAvailableWorldwide}>
                  Need a helping hand?
                </div>
                <div className={styles.arrangeA11Container}>
                  <p className={styles.flexibleAccessTo}>
                    Arrange a 1:1 call with a professional
                  </p>
                  <p className={styles.flexibleAccessTo}>advisor.</p>
                </div>
              </div>
              <div className={styles.dayOffices}>
                <div className={styles.item}>
                  <img
                    className={styles.teamSizeWhite16svgFillIcon}
                    loading="lazy"
                    alt=""
                    src="/teamsizewhite16svg-fill@2x.png"
                  />
                  <div className={styles.agentsAvailableWorldwide}>
                    Agents available worldwide
                  </div>
                </div>
                <div className={styles.item1}>
                  <img
                    className={styles.teamSizeWhite16svgFillIcon}
                    alt=""
                    src="/teamsizewhite16svg-fill@2x.png"
                  />
                  <div className={styles.discussDifferentOptions}>
                    Discuss different options
                  </div>
                </div>
                <div className={styles.item2}>
                  <img
                    className={styles.teamSizeWhite16svgFillIcon}
                    alt=""
                    src="/teamsizewhite16svg-fill@2x.png"
                  />
                  <div className={styles.agentsAvailableWorldwide}>
                    Receive a personalised quote
                  </div>
                </div>
                <div className={styles.item}>
                  <img
                    className={styles.teamSizeWhite16svgFillIcon}
                    alt=""
                    src="/teamsizewhite16svg-fill@2x.png"
                  />
                  <div className={styles.agentsAvailableWorldwide}>
                    Sign up and get started
                  </div>
                </div>
              </div>
              <button className={styles.link2}>
                <div className={styles.talkToAn}>Talk to an expert</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
