import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <Link href="http://feder-bau.com.mk/">
            <a target="_blank" rel="noreferrer">
                <img
                    src="/images/logowb-removebg.png"
                    alt="logo"
                    className={styles.logo}
                />
            </a>
        </Link>
    );
};

export default Logo;
