"use client";
import BookOurConsultancy from "../components/BookOurConsultancy";
import ContactUsSection from "../components/Footer/ContactUsSection";
import IntroCarousel from "../components/IntroCarousel";
import Layout from "../components/Layout";
import OurPartners from "../components/OurPartners";
import OurProducts from "../components/OurProducts";
import SmallAboutUs from "../components/SmallAboutUs";
import TopMenu from "../components/TopMenu";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <Layout>
      <IntroCarousel />
      <OurProducts />
      <BookOurConsultancy />
      <SmallAboutUs />
      <WhoWeAre />
      <OurPartners />
      <ContactUsSection />
    </Layout>
  );
};

export default Home;
