import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./ImageLayout.module.css";
import ChevronDoubleRight from "../Svg/ChevronDoubleRight";

const Images = [
    {
        id: 1,
        name: "Viscoline",
        path: "/images/Viscoline.jpg",
    },
    {
        id: 2,
        name: "Hyperflex",
        path: "/images/Hyperflex.jpg",
    },

    {
        id: 3,
        name: "DreamerGold",
        path: "/images/DreamerGold.jpg",
    },
    {
        id: 4,
        name: "Duocell",
        path: "/images/Duocell.jpg",
    },
    {
        id: 5,
        name: "Comfort",
        path: "/images/Comfort.jpg",
    },
    {
        id: 6,
        name: "Classic",
        path: "/images/Classic.jpg",
    },
    {
        id: 7,
        name: "Memory",
        path: "/images/memory.jpg",
    },
    {
        id: 8,
        name: "Dreamer",
        path: "/images/Dreamer.jpg",
    },

    {
        id: 9,
        name: "Majestic",
        path: "/images/Majestic.jpg",
    },
    {
        id: 10,
        name: "Ortopedik",
        path: "/images/Ortopedik.jpg",
    },
    {
        id: 11,
        name: "Relax",
        path: "/images/Relax.jpg",
    },
    {
        id: 12,
        name: "Silent",
        path: "/images/Silent.jpg",
    },
];

const ImageLayout = ({ setSelectedImg }) => {
    const [images, setImages] = useState(null);
    const [vieMore, setViewMore] = useState(false);

    useEffect(() => {
        if (Images) {
            const sliced = Images.slice(0, 6);
            setImages(sliced);
        }
    }, []);

    const displayAllimages = () => {
        setImages(Images);
        setViewMore(true);
    };
    const displayLessimages = () => {
        setImages(Images.slice(0, 6));
        setViewMore(false);
    };

    return (
        <>
            <div className={styles.imgContainer}>
                {images &&
                    images.map((img) => {
                        return (
                            <React.Fragment key={img.id}>
                                <div className={styles.image}>
                                    <Image
                                        src={img.path}
                                        alt={img.name}
                                        key={img.id}
                                        height={350}
                                        width={520}
                                        onClick={() => setSelectedImg(img.path)}
                                        // eager={true}
                                    />

                                    <div className={styles.imageBtn}>
                                        <p>{img.name}</p>
                                        <div className={styles.tooltip}>
                                            <span
                                                className={styles.tooltiptext}
                                            >
                                                More info
                                            </span>
                                            {/* <Link href={`/dyshek/${img.name.toLowerCase()}`}> */}
                                            <Link
                                                href={`/${img.name.toLowerCase()}`}
                                            >
                                                <a>
                                                    <ChevronDoubleRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}

                {/* <div>
        <button
          onClick={vieMore === false ? displayAllimages : displayLessimages}
        >
          {vieMore === false ? "View More" : "View Less"}
        </button>
      </div> */}
            </div>
            <div>
                <button
                    className={styles.duhetTaNdreciSiDuhet}
                    onClick={
                        vieMore === false ? displayAllimages : displayLessimages
                    }
                >
                    {vieMore === false ? "View More" : "View Less"}
                </button>
            </div>
        </>
    );
};

export default ImageLayout;
