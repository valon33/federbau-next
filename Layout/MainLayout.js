import Head from "next/head";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../sections/Footer.js/Footer";

const MainLayout = ({ children }) => {
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
            <TopNavigation />
            <main>{children}</main>

            <Footer />
        </div>
    );
};

export default MainLayout;
