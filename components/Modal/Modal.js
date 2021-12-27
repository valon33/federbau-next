import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { motion } from "framer-motion";
import Images from "../../data/gallery";
import ChevronRight from "../Svg/ChevronRight";
import ChevronLeft from "../Svg/ChevronLeft";
import CloseX from "../Svg/CloseX";

const Modal = ({ setSelectedImg, selectedImg }) => {
    const [indexOfCurrentImg, setIndexOfCurrentImg] = useState(null);

    useEffect(() => {
        const index = Images.findIndex((img) => img.path === selectedImg);
        setIndexOfCurrentImg(index);
    }, [selectedImg]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [indexOfCurrentImg]); // eslint-disable-line react-hooks/exhaustive-deps

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    // }, []);

    const handleClick = (e) => {
        if (e.target.classList.contains(`${styles.backdrop}`)) {
            setSelectedImg(null);
            document.body.style.overflow = "visible";
        }
    };

    const nextImage = () => {
        if (indexOfCurrentImg === Images.length - 1) {
            return setSelectedImg(Images[0].path);
        }
        setSelectedImg(Images[indexOfCurrentImg + 1].path);
    };

    const prevImage = () => {
        if (indexOfCurrentImg === 0) {
            return setSelectedImg(Images[Images.length - 1].path);
        }
        setSelectedImg(Images[indexOfCurrentImg - 1].path);
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            prevImage();
        } else if (e.key === "ArrowRight") {
            nextImage();
        } else if (e.key === "Escape") {
            setSelectedImg(null);
        }
    };

    return ReactDOM.createPortal(
        <motion.div
            className={styles.backdrop}
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                className={styles.backdropImg}
                src={selectedImg}
                alt="enlarged pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                // classList="taprovojm"
            />
            <button
                className={`${styles.modalBtn} ${styles.modalBtnNext}`}
                onClick={nextImage}
            >
                <ChevronRight />
            </button>
            <button
                className={`${styles.modalBtn} ${styles.modalBtnPrev}`}
                onClick={prevImage}
            >
                <ChevronLeft />
            </button>
            <button
                className={`${styles.modalBtn} ${styles.modalBtnClose}`}
                onClick={() => {
                    setSelectedImg(null);
                    document.body.style.overflow = "visible";
                }}
            >
                <CloseX />
            </button>
        </motion.div>,
        document.getElementById("modal")
    );
};

export default Modal;
