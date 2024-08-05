import type { NextPage } from "next";
import styles from "./form-container.module.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: NextPage<FormContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.formContainer, className].join(" ")}>
      <div className={styles.searchNearbyBtn}>
        <div className={styles.searchNearbyBtnChild} />
        <div className={styles.searchInputs}>
          <div className={styles.fromASingle}>
            From a single desk to a whole building. The choice is yours.
          </div>
          <div className={styles.trendingCities}>.</div>
        </div>
        <div className={styles.citySearch}>
          <h1 className={styles.discoverTheUltimate}>
            Discover the Ultimate Workspace Solution
          </h1>
        </div>
      </div>
      <div className={styles.divrtl1l2eiwbFormholdercss}>
        <div className={styles.form}>
          <div className={styles.label}>
            <div className={styles.divrtlOie8m1Iconalignmentcs}>
              <div className={styles.button}>
                <div className={styles.searchNearby}>Search Nearby</div>
              </div>
            </div>
            <input
              className={styles.searchCity}
              placeholder="Search city"
              type="text"
            />
          </div>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.search}>Search</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
