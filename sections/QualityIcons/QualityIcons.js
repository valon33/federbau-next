import Image from "next/image";
import styles from "./QualityIcons.module.css";

const QualityIcons = () => {
  return (
    <section>
      <div className={styles.qualityLogosContainer}>
        <div className={styles.qualityLogos}>
          <div className={styles.qualityLogosImage}>
            <Image
              src="/images/1.png"
              alt="quality icon 1"
              height={100}
              width={100}
            />
          </div>
          <p className={styles.qualityLogosText}>Eco Materials</p>
        </div>
        <div className={styles.qualityLogos}>
          <div className={styles.qualityLogosImage}>
            <Image
              src="/images/2.png"
              alt="quality icon 2"
              height={100}
              width={100}
            />
          </div>
          <p className={styles.qualityLogosText}>Antibacterial</p>
        </div>
        <div className={styles.qualityLogos}>
          <div className={styles.qualityLogosImage}>
            <Image
              src="/images/3.png"
              alt="quality icon 1"
              height={100}
              width={100}
            />
          </div>
          <p className={styles.qualityLogosText}>Orthopedic</p>
        </div>
        <div className={styles.qualityLogos}>
          <div className={styles.qualityLogosImage}>
            <Image
              src="/images/4.png"
              alt="quality icon 4"
              height={100}
              width={150}
            />
          </div>
          <p className={styles.qualityLogosText}>Perfectly quit</p>
        </div>
        <div className={styles.qualityLogos}>
          <div className={styles.qualityLogosImage}>
            <Image
              src="/images/5.png"
              alt="quality icon 5"
              height={100}
              width={100}
            />
          </div>
          <p className={styles.qualityLogosText}>Cooling Top</p>
        </div>
      </div>
    </section>
  );
};

export default QualityIcons;
