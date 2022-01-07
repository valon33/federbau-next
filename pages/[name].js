import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Dyshekat from "../data/dyshekat";
import styles from "../styles/Items.module.css";
import Replay from "../components/Svg/Replay";
import LanguageContext from "../store/languageCtx";
import Image from "next/image";

function Item({ name, item }) {
  const { language } = useContext(LanguageContext);
  // const { language } = "AL";

  const [displayphoto, setDisplayPhoto] = useState(item.images[0]);
  const [imagess, setImagess] = useState(item);
  const [currImageIndex, setCurrImageIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //   useEffect(() => {
  //     if (language === "EN" || language === "AL") {
  //       document.title = `Feder Bau | ${id}`;
  //     } else if (language === "MK") {
  //       document.title = `Федер Бау | ${id}`;
  //     }
  //   }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (imagess.images) {
      const curr = imagess.images.findIndex((cur) => cur === displayphoto);
      setCurrImageIndex(curr);
    }
  }, [displayphoto]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currImageIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const nextImage = () => {
    if (imagess.images && currImageIndex === imagess.images.length - 1) {
      return setDisplayPhoto(imagess.images[0]);
    }
    setDisplayPhoto(imagess.images[currImageIndex + 1]);
  };
  const prevImage = () => {
    if (imagess.images && currImageIndex === 0) {
      return setDisplayPhoto(imagess.images[imagess.images.length - 1]);
    }
    setDisplayPhoto(imagess.images[currImageIndex - 1]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  };

  return (
    <div style={{ backgroundColor: "var(--color-google)" }}>
      <section className={styles.productDescriptionContainer}>
        {isLoading && (
          <p style={{ fontSize: "50px", textAlign: "center" }}>Loading...</p>
        )}
        {isLoading === false && (
          <>
            <div className={styles.productDescriptionSlider}>
              <div className={styles.mySlides}>
                {displayphoto && (
                  <Image
                    src={displayphoto}
                    alt={name}
                    height={500}
                    width={750}
                  />
                )}

                <button className={styles.prev} onClick={prevImage}>
                  ❮
                </button>
                <button className={styles.next} onClick={nextImage}>
                  ❯
                </button>
              </div>

              <div className={styles.thumbnailContainer}>
                {imagess.images &&
                  imagess.images.map((img, i) => {
                    console.log(displayphoto, img);
                    return (
                      <div className={styles.thumbnail} key={i}>
                        <Image
                          className={`${styles.thumbnailImg} ${
                            displayphoto === img ? styles.thumbnailOpacity : ""
                          }`}
                          src={img}
                          onClick={() => setDisplayPhoto(img)}
                          alt={`Thumbnail number ${i}`}
                          height={145}
                          width={150}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.productDescriptionText}>
              <div className={styles.productHeaderText}>
                <div className={styles.productNameContainer}>
                  <h2 className={styles.productName}>{imagess.name}</h2>
                  <div
                    onClick={() => router.back()}
                    className={styles.productNameSvg}
                  >
                    <Replay className={styles.productNameSvg} />
                  </div>
                </div>
                <p className={styles.productSlogan}>
                  {language === "EN"
                    ? imagess.slogan
                    : language === "AL"
                    ? imagess.sloganShqip
                    : imagess.sloganMaqedonisht}
                </p>
                <p className={styles.productDescription}>
                  {language === "EN"
                    ? imagess.text
                    : language === "AL"
                    ? imagess.textShqip
                    : imagess.textMaqedonisht}
                </p>
              </div>

              <div className={styles.qualityIconsContainer}>
                {imagess.icons &&
                  imagess.icons.map((img, i) => {
                    return (
                      <div className={styles.qualityIcons} key={i}>
                        <Image
                          className={styles.qualityIconsImg}
                          src={img}
                          alt={`Quality Icons numer ${i}`}
                          width={50}
                          height={50}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </section>

      <div className={styles.standardsLogoContainer}>
        {imagess.certifikats &&
          imagess.certifikats.map((cert, index) => {
            return (
              <Image
                className={styles.standardLogo}
                src={cert}
                alt={`standard-logo-${index}`}
                key={index}
                width={120}
                height={70}
              />
            );
          })}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "viscoline" } },
      { params: { name: "hyperflex" } },
      { params: { name: "dreamergold" } },
      { params: { name: "duocell" } },
      { params: { name: "comfort" } },
      { params: { name: "classic" } },
      { params: { name: "memory" } },
      { params: { name: "dreamer" } },
      { params: { name: "majestic" } },
      { params: { name: "ortopedik" } },
      { params: { name: "relax" } },
      { params: { name: "silent" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const name = params.name;
  const dysheki = Dyshekat.filter((d) => d.name.toLowerCase() === name);

  return {
    props: { name: name, item: dysheki[0] }, // will be passed to the page component as props
  };
}

export default Item;
