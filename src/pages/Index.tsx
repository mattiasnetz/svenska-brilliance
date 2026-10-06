import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import IntelligentScheduling from "@/components/IntelligentScheduling";
import ROICalculator from "@/components/ROICalculator";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI-baserad bemanningsplanering för flygplatser | Svenska Intelligensfabriken</title>
        <link rel="canonical" href="https://swefab.lovable.app/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <IntelligentScheduling />
        <ROICalculator />
        <Stats />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
