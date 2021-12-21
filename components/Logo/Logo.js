import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <Link href="http://feder-bau.com.mk/">
            <a target="_blank" rel="noreferrer">
                <Image
                    src="/images/logowb-removebg.png"
                    alt="logo"
                    className={styles.logo}
                    width={120}
                    height={70}
                />
            </a>
        </Link>
    );
};

export default Logo;
