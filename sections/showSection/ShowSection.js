import Image from "next/image";
import React from "react";
import styles from "./ShowSection.module.css";

function ShowSection() {
  return (
    <section style={{ padding: "0" }} id="gallery-images">
      <div className={styles.showroom}>
        <div className={styles.showroomImageOne}>
          <Image
            // className={styles.showroomImageOneImg}
            src={"/images/bubleBed.jpg"}
            alt="bed 2"
            // height={600}
            // width={900}
            layout="fill"
          />
        </div>
        <div className={styles.showroomImageTwo}>
          <Image
            // className={styles.showroomImageImg}
            src={"/images/bubleBed.jpg"}
            // height={600}
            // width={900}
            alt="bed 2"
            layout="fill"
          />
          <Image
            // className={styles.showroomImageImg}
            src={"/images/bubleBed.jpg"}
            // height={600}
            // width={900}
            alt="bed 3"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}

export default ShowSection;
