import React, { useContext } from "react";
import styles from "./Hero.module.css";
// import LanguageContext from "../store/languageCtx";

const Hero = () => {
    // const { language } = useContext(LanguageContext);
    let language = "EN";

    return (
        <header id="home" className={styles.header}>
            <div className={styles.heroContainer}>
                {language === "EN" ? (
                    <h1 className={styles.headingPrimary}>
                        ...for a{" "}
                        <span style={{ color: "var(--color-secondary)" }}>
                            better dream
                        </span>
                    </h1>
                ) : language === "AL" ? (
                    <h1 className={styles.headingPrimary}>
                        ...për gjum{" "}
                        <span style={{ color: "var(--color-secondary)" }}>
                            më të rehatshëm
                        </span>
                    </h1>
                ) : (
                    <h1 className={styles.headingPrimary}>
                        ...за{" "}
                        <span style={{ color: "var(--color-secondary)" }}>
                            подобар сон
                        </span>
                    </h1>
                )}
            </div>
        </header>
    );
};

export default Hero;
