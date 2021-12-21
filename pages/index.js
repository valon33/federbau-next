import Image from "next/image";
import MainLayout from "../Layout/MainLayout";
import Hero from "../sections/Hero/Hero";
import QualityIcons from "../sections/QualityIcons/QualityIcons";
import Quote from "../sections/Quote/Quote";
import AboutUs from "../sections/AboutUs/AboutUs";
import Gallery from "../sections/Gallery/Gallery";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <QualityIcons />
      <Quote />
      <AboutUs />
      <Gallery />
    </MainLayout>
  );
}
