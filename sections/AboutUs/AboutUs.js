import Image from "next/image";
import React, { useState, useContext } from "react";
import styles from "./AboutUs.module.css";

const texti = {
  nenTitulli1: `The story of FederBau is one of people, dreams and dedication`,
  nenTitulli2: `FederBau today`,

  text: `It all began in 1993, when Mr.Kadri Bajrami decided to leave the company he worked for, dedicating his self to a more ambitious project: the production of superior quality spring & mattresses. And so the first ever FederBau products were created in a small garage in the village Golema Recica Tetovo, made with the same taste and manual skill that distinguish homeland artisans.

    From Tetovo to the entire country and then onto the international market along a constant, organic and patient growth trajectory. One step at a time, with a vision rigorously focused on quality. This choice inspired significant investments in scientific research, technologies and above all, people.`,
  text2: `    Today FederBau produces mattresses, bed bases and pillows.
Its offering also includes collections for the hotelier world, student dormitories and hospital. With 50 workers and over 500 reseller stores in North Macedonia and in the world, it is increasingly expanding across the ocean, with the steady, unshakeable certainty of continuing production where the great dream of Mr.Kadri Bajrami first began.`,
};

const AboutUs = () => {
  //   const { language } = useContext(LanguageContext);
  const [moreText, setMoreText] = useState(false);
  let language = "EN";

  return (
    <section id="about">
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsImage}>
          <Image
            src="/images/federBauFabrika.jpg"
            alt="factory"
            className={styles.factory}
            height={500}
            width={740}
          />
        </div>
        <div className={styles.aboutUsText}>
          <div className={styles.text}>
            <h3 className={styles.headingTertiary}>
              About <span>Us</span>
            </h3>
            <div className={styles.aboutUsP}>
              <h3 className={styles.subHeading}>
                {language === "EN"
                  ? texti.nenTitulli1
                  : language === "AL"
                  ? texti.nenTitulliAl1
                  : texti.nenTitulliMk1}
              </h3>
              {/* <p className="about_us-p"> */}
              <p>
                {language === "EN"
                  ? texti.text
                  : language === "AL"
                  ? texti.texttAl
                  : texti.textMk}
              </p>

              {moreText && (
                <>
                  <h3 className={styles.subHeading}>
                    {language === "EN"
                      ? texti.nenTitulli2
                      : language === "AL"
                      ? texti.nenTitulliAl2
                      : texti.nenTitulliMk2}
                  </h3>
                  <p>
                    {language === "EN"
                      ? texti.text2
                      : language === "AL"
                      ? texti.texttAl2
                      : texti.textMk2}
                  </p>
                </>
              )}
              <div className={styles.aboutUsBtnContainer}>
                <button
                  className={styles.aboutUsBtn}
                  onClick={() => setMoreText(!moreText)}
                >
                  {moreText ? "less..." : "more..."}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
