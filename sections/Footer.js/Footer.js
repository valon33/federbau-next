import React from "react";
import styles from "./Footer.module.css";

// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FaceBook from "../../components/Svg/Facebook";
import InstaGram from "../../components/Svg/InstaGram";
import LinkedIn from "../../components/Svg/LinkedIn";

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerInfo}>
                    <h3>Feder Bau</h3>
                    <p>
                        Skopski Pat 100 Br. BB <br />
                        1200 Tetovo, North Macedonia <br />
                        <br />
                        <br />
                        <strong>Phone:</strong> +389 44 482 141
                        <br />
                        <strong>Mobile:</strong> +389 71 224 803
                        <br />
                        <strong>Email:</strong> info@feder-bau.com.mk
                        <br />
                    </p>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.facebook.com/FederBau/?ref=page_internal"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaceBook />
                        </a>
                        <a
                            href="https://www.instagram.com/feder_bau/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <InstaGram />
                        </a>

                        <a
                            href="https://www.instagram.com/feder_bau/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.copyright}>
                    © Copyright{" "}
                    <strong>
                        <span>Feder Bau</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className={styles.credits}>
                    Designed by <a href="http://100perqind.com">Valon Saidi</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
