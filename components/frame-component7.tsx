import type { NextPage } from "next";
import QuestionItem from "./question-item";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.statsWrapper}>
        <div className={styles.stats}>
          <div className={styles.clientsContainer}>
            <img
              className={styles.dividerIcon}
              loading="lazy"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className={styles.statsListContainer}>
              <div className={styles.statsItems}>
                <div className={styles.statsData}>
                  <div className={styles.statsNumber}>10,000+</div>
                  <div className={styles.clientsServed}>Clients Served</div>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.div}>200+</div>
                  <div className={styles.locationsAcrossIndia}>
                    Locations Across India
                  </div>
                </div>
                <div className={styles.statsData}>
                  <div className={styles.count}>150+</div>
                  <div className={styles.consultants}>Consultants</div>
                </div>
                <div className={styles.statsData}>
                  <div className={styles.div}>500+</div>
                  <div className={styles.partners}>Partners</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.delegateContainer}>
            <div className={styles.delegateParent}>
              <div className={styles.delegateGrandparent}>
                <h1 className={styles.whyOptFor}>Why Opt for Launchwise?</h1>
                <div className={styles.delegateWorkspaceCustomizati}>
                  Delegate workspace customization and management to us,
                  allowing you to concentrate on your core business activities
                  while we ensure your workspace is primed for growth.
                </div>
              </div>
              <div className={styles.solutionsContainer}>
                <div className={styles.solutionsParent}>
                  <div className={styles.solutionsGrandparent}>
                    <div className={styles.placeholder} />
                    <div className={styles.solutionsTypes}>
                      <img
                        className={styles.solutionItemIcon}
                        alt=""
                        src="/frame-2@2x.png"
                      />
                      <img
                        className={styles.solutionItemIcon}
                        alt=""
                        src="/frame-2@2x.png"
                      />
                      <img
                        className={styles.solutionItemIcon}
                        alt=""
                        src="/frame-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.typeName}>
                  <div className={styles.exploreContainer}>
                    <h1 className={styles.primeNationwideOptions}>
                      Prime Nationwide Options
                    </h1>
                    <div className={styles.exploreOurDiverse}>
                      Explore our diverse and unparalleled portfolio of office
                      spaces, offering the finest options strategically located
                      across the nation
                    </div>
                  </div>
                  <h3 className={styles.comprehensiveOfficeSolutions}>
                    Comprehensive Office Solutions
                  </h3>
                  <h3 className={styles.strategicallyLocatedPremium}>
                    Strategically Located Premium Spaces
                  </h3>
                  <h3 className={styles.strategicallyLocatedPremium}>
                    Cost-Effective Solutions with Modern Amenities
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.questionsContainer}>
        <div className={styles.questionsParent}>
          <div className={styles.questionsGrandparent}>
            <h1 className={styles.questionsInMind}>Questions in mind?</h1>
          </div>
          <h1 className={styles.readOurFaq}>Read our FAQ</h1>
        </div>
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.faqParent}>
          <div className={styles.faqGrandparent}>
            <div className={styles.questionItem}>
              <div className={styles.benefitParent}>
                <div className={styles.howCanA}>
                  How can a virtual office benefit my business in India?
                </div>
              </div>
              <img
                className={styles.questionItemChild}
                loading="lazy"
                alt=""
                src="/group-35622.svg"
              />
              <div className={styles.fAQDivider}>
                <div className={styles.divider} />
                <div className={styles.divider1} />
              </div>
            </div>
            <QuestionItem
              group35621="/group-35621.svg"
              canILegallyRegisterMyBusi="Can I legally register my business using a virtual office address in India?"
            />
            <QuestionItem
              group35621="/group-35621.svg"
              propWidth="582.2px"
              canILegallyRegisterMyBusi="How will I receive my business mail and packages with a virtual office?"
            />
            <QuestionItem
              group35621="/group-35621-2.svg"
              propWidth="573.6px"
              canILegallyRegisterMyBusi="Can I use a virtual office address for official correspondence and marketing materials?"
            />
            <QuestionItem
              group35621="/group-35621-2.svg"
              propWidth="574.5px"
              canILegallyRegisterMyBusi="Do virtual office services in India include call answering and forwarding?"
            />
          </div>
          <div className={styles.cancellationContainer}>
            <div className={styles.questionItem1}>
              <div className={styles.howCanI}>
                How can I cancel my virtual office service if needed?
              </div>
              <img
                className={styles.questionItemItem}
                alt=""
                src="/group-35622-1.svg"
              />
            </div>
            <div className={styles.questionItem2}>
              <div className={styles.isItPossible}>
                Is it possible to upgrade or downgrade my virtual office plan as
                my business needs change?
              </div>
              <img
                className={styles.questionItemInner}
                alt=""
                src="/group-35621-4.svg"
              />
            </div>
            <div className={styles.questionItem2}>
              <div className={styles.canIAccess}>
                Can I access meeting rooms and conference facilities with a
                virtual office plan?
              </div>
              <img
                className={styles.groupIcon}
                alt=""
                src="/group-35621-5.svg"
              />
            </div>
            <div className={styles.questionItem2}>
              <div className={styles.areThereAny}>
                Are there any additional fees or hidden costs associated with
                virtual office services in India?
              </div>
              <img
                className={styles.questionItemChild1}
                alt=""
                src="/group-35621-6.svg"
              />
            </div>
            <div className={styles.questionItem2}>
              <div className={styles.whatKindOf}>
                What kind of documentation do I need to provide to set up a
                virtual office in India?
              </div>
              <img
                className={styles.questionItemInner}
                alt=""
                src="/group-35621-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
