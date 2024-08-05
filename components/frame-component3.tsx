import type { NextPage } from "next";
import BenefitItems from "./benefit-items";
import BenefitItems1 from "./benefit-items1";
import PresenceItems from "./presence-items";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.expertContentParent, className].join(" ")}>
      <div className={styles.expertContent}>
        <div className={styles.shapeParent}>
          <div className={styles.shape} />
          <img className={styles.shapeIcon} alt="" src="/shape@2x.png" />
          <img
            className={styles.shapeIcon1}
            loading="lazy"
            alt=""
            src="/rectangle-2140@2x.png"
          />
        </div>
      </div>
      <div className={styles.expertButton}>
        <div className={styles.buttonContent}>
          <div className={styles.talkToAn}>{`Talk to an expert >`}</div>
        </div>
        <div className={styles.after} />
      </div>
      <div className={styles.solutionContentWrapper}>
        <div className={styles.solutionContent}>
          <div className={styles.solutionContainer}>
            <div className={styles.solutionDescription}>
              <h1 className={styles.discoverTheUltimate}>
                Discover the Ultimate Workspace Solution
              </h1>
              <div className={styles.descriptionSpacer}>
                <div className={styles.div}>.</div>
              </div>
            </div>
            <div className={styles.fromSoloEntrepreneurs}>
              From solo entrepreneurs to growing teams, find everything you need
              under one roof. Whether it's pay-per-use plans or fixed desks, our
              flexible options cater to your unique work style, ensuring
              seamless productivity and success.
            </div>
          </div>
          <div className={styles.benefitsListParent}>
            <div className={styles.benefitsList}>
              <BenefitItems
                prestigiousBusinessAddres="Prestigious Business Addresses"
                accessToPrestigiousBusine="Access to prestigious business addresses in key locations, enhancing your brand image and credibility."
              />
              <BenefitItems1
                mailHandlingServices="Mail Handling Services"
                efficientManagementOfMail="Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication."
              />
              <BenefitItems
                propPadding="unset"
                prestigiousBusinessAddres="Flexibility and Cost-Effectiveness"
                propWidth="370px"
                propPadding1="0px 20px 0px 0px"
                accessToPrestigiousBusine="Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases."
                propDisplay="inline-block"
                propMinWidth="177px"
              />
              <BenefitItems1
                propWidth="370px"
                propWidth1="243px"
                mailHandlingServices="Business Expansion"
                efficientManagementOfMail="Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability."
              />
            </div>
            <div className={styles.presenceList}>
              <PresenceItems
                nationwidePresence="Nationwide Presence"
                establishAPresenceInMulti="Establish a presence in multiple cities across India without the need for physical office space."
              />
              <PresenceItems
                propPadding="0px 15px 0px 0px"
                propHeight="unset"
                propWidth="328px"
                nationwidePresence="Professional Call Answering"
                propFlex="unset"
                propHeight1="78px"
                establishAPresenceInMulti="Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business."
                propWidth1="297px"
              />
              <PresenceItems
                propPadding="unset"
                propHeight="120px"
                propWidth="287px"
                nationwidePresence="Meeting Room Facilities"
                propFlex="1"
                propHeight1="unset"
                establishAPresenceInMulti="Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings."
                propWidth1="312px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
