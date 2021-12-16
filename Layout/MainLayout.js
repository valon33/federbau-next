import Head from "next/head";
import Logo from "../components/Logo/Logo";

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
            <Logo />
            <main>{children}</main>

            <footer></footer>
        </div>
    );
};

export default MainLayout;
