import Link from "next/link";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <Link href="/">
                    <a>
                        <li>Home</li>
                    </a>
                </Link>
                <Link href="/#about">
                    <a>
                        <li>About us</li>
                    </a>
                </Link>
                <Link href="/#products">
                    <a>
                        <li>Products</li>
                    </a>
                </Link>

                <Link href="/#gallery-images">
                    <a>
                        <li>Gallery</li>
                    </a>
                </Link>
                <Link href="/#footer">
                    <a>
                        <li>Contact</li>
                    </a>
                </Link>
                <LanguageSwitch />
            </ul>
        </nav>
    );
};

export default Nav;
