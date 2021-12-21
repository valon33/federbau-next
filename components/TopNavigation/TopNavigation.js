import React, { useState } from "react";
import Nav from "../Nav/Nav";
import ResNav from "../ResNav/ResNav";
import Logo from "../Logo/Logo";
import ResButton from "../ResButton/ResButton";
import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className={styles.topNavigation}>
            <Logo />
            <Nav />
            {isClicked && <ResNav setIsClicked={setIsClicked} />}
            {/* <LanguageSwitch language={language} setLanguage={setLanguage} /> */}
            <ResButton isClicked={isClicked} setIsClicked={setIsClicked} />
        </div>
    );
};

export default TopNavigation;
