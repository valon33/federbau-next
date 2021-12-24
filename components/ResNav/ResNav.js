import React from "react";
import Link from "next/link";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import styles from "./ResNav.module.css";

const ResNav = ({ setIsClicked }) => {
  return (
    <nav className={`${styles.resNavigation} ${styles.navigation}`}>
      <ul className={styles.resNavigationUl}>
        <Link href="/" onClick={() => setIsClicked(false)}>
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/#about" onClick={() => setIsClicked(false)}>
          <a>
            <li>About us</li>
          </a>
        </Link>
        <Link href="/#products" onClick={() => setIsClicked(false)}>
          <a>
            <li>Products</li>
          </a>
        </Link>

        <Link href="/#gallery-images" onClick={() => setIsClicked(false)}>
          <a>
            <li>Gallery</li>
          </a>
        </Link>
        <Link href="/#footer" onClick={() => setIsClicked(false)}>
          <a>
            <li>Contact</li>
          </a>
        </Link>
        <LanguageSwitch setIsClicked={setIsClicked} />
      </ul>
    </nav>
  );
};

export default ResNav;
