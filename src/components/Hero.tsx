import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-driven optimering för hälso- och sjukvård
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Intelligenta tjänster för{" "}
              <span className="text-gradient">effektivare vård</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Svenska Intelligensfabriken utvecklar AI-drivna lösningar för schemaläggning, 
              prediktion och optimering. Vi hjälper vårdgivare att öka produktionen med upp 
              till 30% utan extra resurser.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#kontakt" className="gap-2">
                  Boka demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                <Play className="w-5 h-5" />
                Se hur det fungerar
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-4">Beprövad forskning från</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-foreground font-medium">Blekinge Tekniska Högskola</div>
                <div className="w-px h-6 bg-border hidden sm:block" />
                <div className="text-foreground font-medium">Karolinska Institutet</div>
                <div className="w-px h-6 bg-border hidden sm:block" />
                <div className="text-foreground font-medium">Region Blekinge</div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { value: "30%", label: "Ökad produktion", desc: "utan extra resurser" },
              { value: "15+", label: "År av forskning", desc: "inom data science" },
              { value: "10M€", label: "Potentiella intäkter", desc: "årlig marknadspotential" },
              { value: "24/7", label: "Realtidsuppdatering", desc: "av schemaläggning" },
            ].map((stat, i) => (
              <div 
                key={i}
                className="glass rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow animate-scale-in"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
