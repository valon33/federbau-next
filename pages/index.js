import Image from "next/image";
import MainLayout from "../Layout/MainLayout";
import Hero from "../sections/Hero/Hero";
import QualityIcons from "../sections/QualityIcons/QualityIcons";
import Quote from "../sections/Quote/Quote";
import AboutUs from "../sections/AboutUs/AboutUs";
import Gallery from "../sections/Gallery/Gallery";
import ShowSection from "../sections/showSection/ShowSection";
import Catalog from "../sections/Catalog.js/Catalog";
import Map from "../sections/Map/Map";

export default function Home() {
  return (
    <>
      <Hero />
      <QualityIcons />
      <Quote />
      <AboutUs />
      <Gallery />
      <Catalog />
      {/* <ShowSection /> */}
      <Map />
    </>
  );
}
