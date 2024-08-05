import type { NextPage } from "next";
import styles from "./location-images.module.css";

export type LocationImagesType = {
  className?: string;
};

const LocationImages: NextPage<LocationImagesType> = ({ className = "" }) => {
  return (
    <div className={[styles.locationImages, className].join(" ")}>
      <div className={styles.cityOne}>
        <div className={styles.cityContentOne}>
          <img
            className={styles.cityContentOneChild}
            alt=""
            src="/rectangle-2@2x.png"
          />
          <div className={styles.cityNameOne}>
            <div className={styles.noida}>Noida</div>
          </div>
        </div>
      </div>
      <img
        className={styles.bangalore1Icon}
        loading="lazy"
        alt=""
        src="/bangalore-1.svg"
      />
      <div className={styles.imagePairOne}>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.imagePairOne1}>
        <img className={styles.image3Icon} alt="" src="/image-2@2x.png" />
      </div>
      <div className={styles.cityOne}>
        <img className={styles.image3Icon1} alt="" src="/image-3-1@2x.png" />
      </div>
    </div>
  );
};

export default LocationImages;
