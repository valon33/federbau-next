import Image from "next/image";
import MainLayout from "../Layout/MainLayout";
import Hero from "../sections/Hero/Hero";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
        </MainLayout>
    );
}
