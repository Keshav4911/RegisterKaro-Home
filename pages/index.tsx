import type { NextPage } from "next";
import Navigation1 from "../components/navigation1";
import FormContainer from "../components/form-container";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import LocationImages from "../components/location-images";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent7 from "../components/frame-component7";
import Footer from "../components/footer";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Navigation1 />
      <section className={styles.pictureHomepageSerachv2OfWrapper}>
        <div className={styles.pictureHomepageSerachv2Of}>
          <FormContainer />
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent3 />
      <div className={styles.officeMembershipHeadingParent}>
        <div className={styles.officeMembershipHeading} />
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <LocationImages />
      </div>
      <FrameComponent4 />
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
      <Footer />
      <div className={styles.homePageChild} />
    </div>
  );
};

export default HomePage;
