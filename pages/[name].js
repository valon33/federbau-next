import React, { useState, useEffect, useContext } from "react";
import Dyshekat from "../data/dyshekat";
// import { FaReply } from "react-icons/fa";
// import LanguageContext from "../store/languageCtx";
// import "../assets/style/item.css";

function Item({ name, item }) {
  console.log(name);
  console.log(item);
  //   const { language } = useContext(LanguageContext);
  const { language } = "EN";

    const [displayphoto, setDisplayPhoto] = useState();
  //   const [imagess, setImagess] = useState([]);
  //   const [currImageIndex, setCurrImageIndex] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   console.log("wtffff", imagess);

  //   const getPhotos = () => {
  //     setIsLoading(true);
  //     const dysheki = Dyshekat.filter((d) => d.name === id);
  //     setImagess(dysheki[0]);
  //     dysheki && setDisplayPhoto(dysheki[0].images[0]);
  //     setIsLoading(false);
  //   };
  //   useEffect(() => {
  //     getPhotos();
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //   useEffect(() => {
  //     if (language === "EN" || language === "AL") {
  //       document.title = `Feder Bau | ${id}`;
  //     } else if (language === "MK") {
  //       document.title = `Федер Бау | ${id}`;
  //     }
  //   }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  //   useEffect(() => {
  //     if (imagess.images) {
  //       const curr = imagess.images.findIndex((cur) => cur === displayphoto);
  //       setCurrImageIndex(curr);
  //     }
  //   }, [displayphoto]); // eslint-disable-line react-hooks/exhaustive-deps

  //   useEffect(() => {
  //     window.addEventListener("keydown", handleKeyDown);
  //     return () => window.removeEventListener("keydown", handleKeyDown);
  //   }, [currImageIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  //   const nextImage = () => {
  //     if (imagess.images && currImageIndex === imagess.images.length - 1) {
  //       return setDisplayPhoto(imagess.images[0]);
  //     }
  //     setDisplayPhoto(imagess.images[currImageIndex + 1]);
  //   };
  //   const prevImage = () => {
  //     if (imagess.images && currImageIndex === 0) {
  //       return setDisplayPhoto(imagess.images[imagess.images.length - 1]);
  //     }
  //     setDisplayPhoto(imagess.images[currImageIndex - 1]);
  //   };

  //   const handleKeyDown = (e) => {
  //     if (e.key === "ArrowLeft") {
  //       prevImage();
  //     } else if (e.key === "ArrowRight") {
  //       nextImage();
  //     }
  //   };

  return (
    <h1>Prov...{name}</h1>
    // <div style={{ backgroundColor: "var(--color-google)" }}>
    //   <section className="produckt_description-container">
    //     {isLoading && (
    //       <p style={{ fontSize: "50px", textAlign: "center" }}>Loading...</p>
    //     )}
    //     {isLoading === false && (
    //       <>
    //         <div className="product-description-slider">
    //           <div className="mySlides">
    //             {displayphoto && <img src={displayphoto} alt={"npm"} />}

    //             <button className="prev" onClick={prevImage}>
    //               ❮
    //             </button>
    //             <button className="next" onClick={nextImage}>
    //               ❯
    //             </button>
    //           </div>

    //           <div className="thumbnail-container">
    //             {imagess.images &&
    //               imagess.images.map((img, i) => {
    //                 return (
    //                   <div className="thumbnail" key={i}>
    //                     <img
    //                       className="thumbnail-img"
    //                       src={img}
    //                       style={{
    //                         opacity: `${displayphoto === img ? "1" : ""}`,
    //                       }}
    //                       onClick={() => setDisplayPhoto(img)}
    //                       alt={`Thumbnail number ${i}`}
    //                     />
    //                   </div>
    //                 );
    //               })}
    //           </div>
    //         </div>
    //         <div className="product-description-text">
    //           <div className="product-header-text">
    //             <div className="product-name-container">
    //               <h2 className="product-name">{imagess.name}</h2>

    //               <FaReply onClick={() => history.goBack()} />
    //             </div>
    //             <p className="product-slogan">
    //               {language === "EN"
    //                 ? imagess.slogan
    //                 : language === "AL"
    //                 ? imagess.sloganShqip
    //                 : imagess.sloganMaqedonisht}
    //             </p>
    //             <p className="product-decription">
    //               {language === "EN"
    //                 ? imagess.text
    //                 : language === "AL"
    //                 ? imagess.textShqip
    //                 : imagess.textMaqedonisht}
    //             </p>
    //           </div>

    //           <div className="quality-icons-container">
    //             {imagess.icons &&
    //               imagess.icons.map((img, i) => {
    //                 return (
    //                   <div className="quality-icons" key={i}>
    //                     <img
    //                       className="quality-icons-img"
    //                       src={img}
    //                       alt={`Quality Icons numer ${i}`}
    //                     />
    //                   </div>
    //                 );
    //               })}
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </section>

    //   <div className="standards-logo-container">
    //     {imagess.certifikats &&
    //       imagess.certifikats.map((cert, index) => {
    //         return (
    //           <img
    //             className="standard-logo"
    //             src={cert}
    //             alt={`standard-logo-${index}`}
    //             key={index}
    //           />
    //         );
    //       })}
    //   </div>
    // </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "viscoline" } },
      { params: { name: "hyperflex" } },
      { params: { name: "dreamerGold" } },
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
  console.log(name);
  const dysheki = Dyshekat.filter((d) => d.name.toLowerCase() === name);

  return {
    props: { name: name, item: dysheki[0] }, // will be passed to the page component as props
  };
}

export default Item;
