import React, { useState } from "react";
import ImageLayout from "../../components/ImageLayout/ImageLayout";
import styles from "./Gallery.module.css";
// import Modal from "../components/Modal";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className={styles.gallerySection} id="products">
      <div>
        <h2 className={styles.headingSecondary}>
          Check our <span>Products</span>
        </h2>
        <ImageLayout setSelectedImg={setSelectedImg} />
        {/* {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )} */}
      </div>
    </section>
  );
};

export default Gallery;
