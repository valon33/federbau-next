import React from "react";
import styles from "./Catalog.module.css";

const Catalog = () => {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.catallogi}>
        <h3 className={styles.catallogiH3}>
          Check out our last product catalogue
        </h3>
        <button className={styles.catallogiButton}>DOWNLOAD NOW</button>
        {/* <button className={styles.catallogiButton}>VERY SOON ...</button> */}
      </div>
    </section>
  );
};

export default Catalog;
