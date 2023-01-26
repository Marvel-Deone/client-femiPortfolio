// import { Helmet } from "react-helmet"
import Script from "@gumgum/react-script-tag";
import Footer from "../Components/Footer";
// import Definition from "../Components/Healthpass/Definition";
import Design from "../Components/Healthpass/Design";
import Hero from "../Components/Healthpass/Hero";
import NextProject from "../Components/Healthpass/NextProject";
import Overview from "../Components/Healthpass/Overview";
import Prototype from "../Components/Healthpass/Prototype";
import SolutionChallenge from "../Components/Healthpass/SolutionChallenge";
import Takeaway from "../Components/Healthpass/Takeaway";
import TailNav from "../Components/TailNav";

const HealthPass = () => {
    return (
        <>
            <Script src="https://cdn.tailwindcss.com"></Script>
            <TailNav />
            <Hero />
            <Overview />
            <Design />
            <SolutionChallenge />
            {/* <Definition /> */}
            <Prototype />
            <Takeaway />
            <NextProject />
            <Footer />
        </>
    )
}

export default HealthPass