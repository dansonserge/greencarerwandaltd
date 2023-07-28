
import BookOurConsultancy from "../components/BookOurConsultancy";
import IntroCarousel from "../components/IntroCarousel";
import Layout from "../components/Layout";
import OurProducts from "../components/OurProducts";
import SmallAboutUs from "../components/SmallAboutUs";
import TopMenu from "../components/TopMenu";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
    return(
        <Layout>
            <IntroCarousel/>
           {/*  <OurProducts/>
            <BookOurConsultancy/>
            <SmallAboutUs/>
            <WhoWeAre/>
            <OurProducts/> */}
        </Layout>
    )
}

export default Home;