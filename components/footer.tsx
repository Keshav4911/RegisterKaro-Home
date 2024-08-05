import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.columns}>
            <img
              className={styles.headerLogo884459461Icon}
              alt=""
              src="/headerlogo88445946-1-1.svg"
            />
            <div className={styles.socialLinks}>
              <img
                className={styles.linkFacebook}
                loading="lazy"
                alt=""
                src="/link--facebook.svg"
              />
              <img
                className={styles.linkFacebook}
                loading="lazy"
                alt=""
                src="/link--instagram.svg"
              />
              <img
                className={styles.linkFacebook}
                loading="lazy"
                alt=""
                src="/link--linkedin.svg"
              />
              <img
                className={styles.linkTwitter}
                loading="lazy"
                alt=""
                src="/link--twitter.svg"
              />
            </div>
          </div>
          <div className={styles.siteInfo}>
            <div className={styles.columnInfo}>
              <b className={styles.services}>Services</b>
              <div className={styles.pageLinks}>
                <div className={styles.virtualOffice}>Virtual Office</div>
                <div className={styles.gstRegistration}>GST Registration</div>
                <div className={styles.coworkingSpaces}>Coworking Spaces</div>
                <div className={styles.businessRegistration}>
                  Business Registration
                </div>
                <div className={styles.mailingAddress}>Mailing Address</div>
                <div className={styles.dedicatedDesk}>Dedicated Desk</div>
              </div>
            </div>
            <div className={styles.columnInfo}>
              <b className={styles.virtualOffice}>Other Pages</b>
              <div className={styles.pageLinks}>
                <div className={styles.home}>Home</div>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.contactUs}>Contact Us</div>
                <div className={styles.blog}>Blog</div>
                <div className={styles.findLocation}>Find Location</div>
                <div className={styles.faqs}>FAQ's</div>
              </div>
            </div>
            <div className={styles.columnInfo}>
              <b className={styles.otherLink}>Other Link</b>
              <div className={styles.pageLinks}>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div className={styles.disclaimer}>Disclaimer</div>
                <div
                  className={styles.businessRegistration}
                >{`Terms & Conditions`}</div>
                <div className={styles.cookies}>Cookies</div>
                <div className={styles.findLocation}>Refund policy</div>
              </div>
            </div>
          </div>
          <div className={styles.newsletter}>
            <div className={styles.content}>
              <div className={styles.joinTheNewsletter}>
                Join the newsletter
              </div>
              <div className={styles.form}>
                <input
                  className={styles.emailSubscription}
                  placeholder="Enter your email"
                  type="text"
                />
                <button className={styles.emailSubscription1}>
                  <b className={styles.subscribe}>Subscribe</b>
                </button>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.joinTheNewsletter}>
                Feel free to connect with us
              </div>
              <div className={styles.contactInfo}>
                <img
                  className={styles.emailDetailsIcon}
                  alt=""
                  src="/frame-5.svg"
                />
                <div className={styles.emailDetails}>+91 93112 21210</div>
                <img
                  className={styles.email1Icon}
                  loading="lazy"
                  alt=""
                  src="/email-1.svg"
                />
                <div className={styles.virtualofficeteamcowork}>
                  virtualoffice@teamco.work
                </div>
                <img
                  className={styles.navigation21Icon}
                  loading="lazy"
                  alt=""
                  src="/navigation2-1.svg"
                />
                <div className={styles.palmCourtMehrauliGurgaon}>
                  704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.cityLinks}>
          <div className={styles.cityCategories}>
            <b className={styles.businessRegistration}>
              Virtual Office in Major Cities
            </b>
            <div className={styles.virtualOfficeIn1}>
              Virtual Office in Delhi | Virtual Office in Gurgaon | Virtual
              Office in Bangalore | Virtual Office in Mumbai | Virtual Office in
              Pune | Virtual Office in Kolkata | Virtual Office in
              Chennai | Virtual Office in Noida | Virtual Office in
              Kochi | Virtual Office in Jaipur | Virtual Office in
              Hyderabad | Virtual Office in Chandigarh | Virtual Office in
              Lucknow | Virtual Office in Mohali
            </div>
          </div>
          <div className={styles.cityCategories}>
            <b className={styles.businessRegistration}>
              Virtual Office for GST in Major Cities
            </b>
            <div className={styles.virtualOfficeIn1}>
              Virtual Office for GST in Delhi | Virtual Office for GST in
              Gurgaon | Virtual Office for GST in Bangalore | Virtual Office for
              GST in Mumbai | Virtual Office for GST in Pune | Virtual Office
              for GST in Kolkata | Virtual Office for GST in Chennai | Virtual
              Office for GST in Noida | Virtual Office for GST in
              Kochi | Virtual Office for GST in Jaipur | Virtual Office for GST
              in Hyderabad | Virtual Office for GST in Lucknow | Virtual Office
              for GST in Chandigarh | Virtual Office for GST in Mohali
            </div>
          </div>
          <div className={styles.cityCategories}>
            <b className={styles.businessRegistration}>
              Virtual Office for Business in Major Cities
            </b>
            <div className={styles.virtualOfficeIn1}>
              Virtual Office for Business in Delhi | Virtual Office for Business
              in Gurgaon | Virtual Office for Business in Bangalore | Virtual
              Office for Business in Mumbai | Virtual Office for Business in
              Pune | Virtual Office for Business in Kolkata | Virtual Office for
              Business in Chennai | Virtual Office for Business in
              Noida | Virtual Office for Business in Kochi | Virtual Office for
              Business in Jaipur | Virtual Office for Business in
              Hyderabad | Virtual Office for Business in Lucknow | Virtual
              Office for Business in Chandigarh | Virtual Office for Business in
              Mohali
            </div>
          </div>
          <div className={styles.cityCategories3}>
            <b className={styles.virtualOfficeWith}>
              Virtual Office with Mailing Address in Major Cities
            </b>
            <div className={styles.virtualOfficeIn1}>
              Virtual Office with Mailing Address in Delhi | Virtual Office with
              Mailing Address in Gurgaon | Virtual Office with Mailing Address
              in Bangalore | Virtual Office with Mailing Address in
              Mumbai | Virtual Office with Mailing Address in Pune | Virtual
              Office with Mailing Address in Kolkata | Virtual Office with
              Mailing Address in Chennai | Virtual Office with Mailing Address
              in Noida | Virtual Office with Mailing Address in Kochi | Virtual
              Office with Mailing Address in Jaipur | Virtual Office with
              Mailing Address in Hyderabad | Virtual Office with Mailing Address
              in Lucknow | Virtual Office with Mailing Address in
              Chandigarh | Virtual Office with Mailing Address in Mohali
            </div>
          </div>
        </div>
        <div className={styles.bottomFooterChild} />
        <div className={styles.copyrightInfoWrapper}>
          <div className={styles.copyrightInfo}>
            <div className={styles.virtualOfficeWith}>
              Copyright © 2019, Team Cowork. All Rights Reserved
            </div>
            <div className={styles.businessRegistration}>
              Powered by MXN Realspaces Pvt Ltd
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
