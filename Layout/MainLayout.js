import React, { useEffect, useState } from "react";
import Head from "next/head";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../sections/Footer.js/Footer";
import BackToTop from '../components/BackToTop/BackToTop'

const MainLayout = ({ children }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Feder-Bau fabrika per prodhimin e dyshekve"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {offset > 400 ? <BackToTop /> : ""}
            <TopNavigation />
            <main>{children}</main>

            <Footer />
        </div>
    );
};

export default MainLayout;
