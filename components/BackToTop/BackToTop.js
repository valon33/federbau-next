import ChevronUp from "../Svg/ChevronUp";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
    return (
        <div>
            <div
                className={styles.backToTop}
                onClick={() => window.scrollTo(0, 0)}
            >
                {/* <FaArrowUp /> */}
                <ChevronUp />
            </div>
        </div>
    );
};

export default BackToTop;
