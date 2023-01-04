import { Helmet } from "react-helmet"
import Footer from "../Components/Footer"
import Definition from "../Components/Healthpass/Definition"
import Design from "../Components/Healthpass/Design"
import NextProject from "../Components/Healthpass/NextProject"
import Overview from "../Components/Healthpass/Overview"
import Prototype from "../Components/Healthpass/Prototype"
import SolutionChallenge from "../Components/Healthpass/SolutionChallenge"
import Takeaway from "../Components/Healthpass/Takeaway"
import TailNav from "../Components/TailNav"

const HealthPass = () => {
    return (
        <>
            <Helmet>
                <script src="https://cdn.tailwindcss.com"></script>
            </Helmet>
            <TailNav />
            <Overview />
            <Design />
            <SolutionChallenge />
            <Definition />
            <Prototype />
            <Takeaway />
            <NextProject />
            <Footer />
        </>
    )
}

export default HealthPass