import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dentalImage from "@/assets/dental-ai.jpg";

const Products = () => {
  const features = [
    "Kraftfullt analysverktyg för realtidsvisualisering",
    "Prediktioner om framtida vårdbehov och riskgrupper",
    "Simulerat resursbehov baserat på historiska data",
    "Optimerad prissättning och schemaläggning",
    "AI-funktion som predicerar intäktsnivåer",
    "Specialanpassat för tandvården",
  ];

  return (
    <section id="produkter" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={dentalImage} 
                alt="OptiDental AI Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end">
                <div className="p-8">
                  <div className="text-accent-foreground/80 text-sm font-medium mb-2">Produktserie</div>
                  <div className="font-display text-3xl font-bold text-accent-foreground">OptiDental</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 -top-4 bg-card rounded-xl p-4 shadow-elevated animate-float">
              <div className="text-sm text-muted-foreground mb-1">Produktionsökning</div>
              <div className="text-2xl font-display font-bold text-primary">+30%</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              OptiDental
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Intelligent analys för{" "}
              <span className="text-gradient">tandvården</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Med vårt verktyg kan tandvården i realtid enkelt följa intäkter, produktion och 
              kösituation. Vi är extra stolta över vår AI-funktion som predicerar framtida 
              resursbehov och intäktsnivå.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="gap-2">
              Läs mer om OptiDental
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
