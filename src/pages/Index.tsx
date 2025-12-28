import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EasyOps Studio | Startup Support & Operations Partner</title>
        <meta 
          name="description" 
          content="EasyOps Studio helps startups and small businesses grow by handling their operational and creative tasks. Affordable pitch decks, websites, marketing, and more." 
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <HowItWorks />
        <FAQ />
      </Layout>
    </>
  );
};

export default Index;
