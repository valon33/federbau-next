import Image from "next/image";
import React, { useContext } from "react";
import styles from "./Quote.module.css";

const Quote = () => {
  //   const { language } = useContext(LanguageContext);
  let language = "EN";

  return (
    <section style={{ backgroundColor: "var(--color-google)" }}>
      <div className={styles.quoteContainer}>
        <div className={styles.quoteText}>
          <h3>
            {language === "EN"
              ? "One of third of the"
              : language === "AL"
              ? "Një të tretën"
              : "Една третина од "}
            <span style={{ color: "var(--color-secondary)" }} className="life">
              {language === "EN"
                ? "life"
                : language === "AL"
                ? " jetës"
                : "животот "}
            </span>{" "}
            {language === "EN"
              ? "we spend"
              : language === "AL"
              ? "e kalojmë duke"
              : " го поминуваме"}
            <span
              style={{ color: "var(--color-secondary)" }}
              className="sleeping"
            >
              {language === "EN"
                ? "sleeping!"
                : language === "AL"
                ? " fjetur!"
                : " спиејќи!"}
            </span>
          </h3>
          {language === "EN" ? (
            <p>
              Be sure to spend the life in quality! The mattress play a huge
              role for your sleep! Invest In It...
            </p>
          ) : language === "AL" ? (
            <p>
              Siguroheni që të jetoni një jetë të shëndetshme! Gjumi luan një
              rol shumë të rëndsishëm në jetën tuaj! Investo në të...
            </p>
          ) : (
            <p>
              Осигурувајте се да го живете животот квалитетно! Душекот игра
              огромна улога за вашиот сон! Инвестирајте во него...
            </p>
          )}
        </div>
        <div className={styles.quotePhoto}>
          {/* <img src={photo} alt="alarm clock" /> */}
          <Image
            src="/images/woman-bed-travel-alarm-clock-shutterstock_357371138-1024x683.jpg"
            alt="alarm clock"
            height={540}
            width={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Quote;
