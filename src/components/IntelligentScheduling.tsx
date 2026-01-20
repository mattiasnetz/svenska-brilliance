import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Zap, Shield, BarChart, Calendar } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const IntelligentScheduling = () => {
  const features = [
    {
      icon: Users,
      title: "Rätt personal",
      description: "Schemalägg kvalificerade och utvilade resurser. Lagkrav och vilotider inkluderas automatiskt.",
    },
    {
      icon: Zap,
      title: "Realtidsoptimering",
      description: "Förläng och omdisponera resurser i realtid vid oförutsedda händelser eller frånvaro.",
    },
    {
      icon: Clock,
      title: "Processhantering",
      description: "Dela upp processer i delmoment som tilldelas specifika resurser i optimal ordning.",
    },
    {
      icon: Shield,
      title: "Kvalifikationer",
      description: "Säkerställ att rätt kompetens alltid finns tillgänglig med automatisk kvalifikationsövervakning.",
    },
    {
      icon: BarChart,
      title: "Säsongsvariationer",
      description: "Förbered dig för toppar och dalar med smart kapacitetsplanering.",
    },
    {
      icon: Calendar,
      title: "Flexibel planering",
      description: "Reagera snabbt på oförutsedda händelser med flexibel omplanering.",
    },
  ];

  return (
    <section id="intelligent-scheduling" className="py-24 bg-gradient-dark text-accent-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground/80 text-sm font-medium mb-6 border border-accent-foreground/20">
            Kapacitets- & Produktionsstyrning
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Intelligent Scheduling
          </h2>
          <p className="text-lg text-accent-foreground/70">
            Vår unika schemaläggningsmotor tilldelar resurser till processer och delprocesser 
            på ett sådant sätt att produktionen kan öka med upp till 30% utan extra resurser.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Dashboard Preview */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-accent-foreground/10">
              <img 
                src={dashboardImage} 
                alt="Intelligent Scheduling Dashboard" 
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -left-4 bottom-8 bg-card text-card-foreground rounded-xl p-4 shadow-elevated animate-float">
              <div className="text-sm text-muted-foreground mb-1">Aktiva resurser</div>
              <div className="text-2xl font-display font-bold text-primary">127</div>
            </div>
            <div className="absolute -right-4 top-8 bg-card text-card-foreground rounded-xl p-4 shadow-elevated animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-sm text-muted-foreground mb-1">Processer idag</div>
              <div className="text-2xl font-display font-bold text-primary">89</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Schemaläggning på operationell nivå
            </h3>
            <p className="text-accent-foreground/70 mb-8 leading-relaxed">
              Intelligent Scheduling innefattar schemaläggning av resurser och processer på 
              operationell nivå. Processer kan delas upp i delprocesser som bör utföras i en 
              viss ordning, och vissa processer kan endast utföras av specifika resurser.
            </p>
            <p className="text-accent-foreground/70 mb-8 leading-relaxed">
              Vårt användarvänliga gränssnitt låter användaren ändra och justera resurser och 
              processer på ett lätt och smidigt sätt. Tjänsten är även tillgänglig för mobila enheter.
            </p>
            <Button variant="heroLight" size="lg" className="gap-2">
              Boka en demonstration
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-accent/50 border border-accent-foreground/10 hover:bg-accent/70 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold mb-2 text-accent-foreground">
                {feature.title}
              </h4>
              <p className="text-accent-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentScheduling;
