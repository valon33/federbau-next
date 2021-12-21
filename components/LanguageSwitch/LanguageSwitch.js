import React, { useState, useEffect, useContext } from "react";
import styles from "./LanguageSwitch.module.css";
// import LanguageContext from "../store/languageCtx";
// const LanguageSwitch = ({ language, setLanguage }) => {
const LanguageSwitch = ({ setIsClicked }) => {
    const [listOfLanguage, setListOfLanguage] = useState(["EN", "AL", "MK"]);
    const [show, setShow] = useState(false);
    // const { language, changeLanguage } = useContext(LanguageContext);
    let language = "EN";

    useEffect(() => {
        if (language === "EN") {
            setListOfLanguage(["AL", "MK"]);
        } else if (language === "AL") {
            setListOfLanguage(["EN", "MK"]);
        } else if (language === "MK") {
            setListOfLanguage(["EN", "AL"]);
        }
    }, [language]);

    const handleClick = () => {
        setShow(!show);
    };

    const languageHandler = (lang) => {
        changeLanguage(lang);
        setShow(false);
        if (setIsClicked) {
            setIsClicked(false);
        }
    };

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={handleClick}>
                {language}
            </button>
            {show && (
                <div id="myDropdown" className={styles.dropdownContent}>
                    {listOfLanguage.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => languageHandler(lang)}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitch;
