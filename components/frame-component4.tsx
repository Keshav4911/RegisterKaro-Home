import type { NextPage } from "next";
import Options from "./options";
import Options1 from "./options1";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.registrationOptions}>
            <h1 className={styles.useVirtualAddress}>
              Use Virtual Address For
            </h1>
            <Options
              companyRegistration="/companyregistration@2x.png"
              companyRegistration1="Company Registration"
              enhanceYourProfessionalIm=" Enhance your professional image and organizational presence by choosing a virtual address over your residential one."
            />
            <Options
              propWidth="757.4px"
              companyRegistration="/gstregistration@2x.png"
              companyRegistration1="Streamlined GST Registration"
              propDisplay="inline-block"
              enhanceYourProfessionalIm="Simplify your GST registration process through the use of a virtual address, meeting government requirements efficiently and affordably."
            />
            <Options1
              businessMailingAddress="/businessmailingaddress@2x.png"
              centralizedBusinessHub="Centralized Business Hub"
              establishYourVirtualOffic="Establish your virtual office as the hub of your business operations, utilizing it as your official business and mailing address, ensuring efficient mail handling without physical office space constraints."
            />
            <Options
              propWidth="772.5px"
              companyRegistration="/businessmailingaddress-1@2x.png"
              companyRegistration1="Efficient Call Management"
              propDisplay="inline-block"
              enhanceYourProfessionalIm="Ensure seamless communication with clients and stakeholders by routing all calls to your virtual address, where a virtual receptionist provides professional and prompt responses."
            />
            <Options1
              propAlignSelf="unset"
              propWidth="772.5px"
              businessMailingAddress="/businessmailingaddress-2@2x.png"
              centralizedBusinessHub="Flexible Meeting Solutions"
              establishYourVirtualOffic="Impress investors and clients with access to fully-equipped meeting facilities, including boardrooms and conference rooms, available on-demand without the commitment of traditional office leases."
            />
          </div>
          <img
            className={styles.sectionChild}
            loading="lazy"
            alt=""
            src="/group-48095425@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
