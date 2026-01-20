import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import IntelligentScheduling from "@/components/IntelligentScheduling";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <IntelligentScheduling />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
