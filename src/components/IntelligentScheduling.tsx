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
      title: "Tre planeringsnivåer",
      description: "Grundschema (12–18 veckor), Periodplanering (4–6 veckor), Vecka/Dag (ADO-nivå).",
    },
    {
      icon: Shield,
      title: "Kompetenshantering",
      description: "Säkerställ att rätt kompetens alltid finns tillgänglig med automatisk kvalifikationsövervakning.",
    },
    {
      icon: BarChart,
      title: "Full spårbarhet",
      description: "Vem har stått var, hur ofta, hur jämnt arbetet fördelas.",
    },
    {
      icon: Calendar,
      title: "Flexibel planering",
      description: "Reagera snabbt på sjukdom, väder och variation med intelligent omplanering.",
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
            Inspirerad av beprövad teknik från flygindustrin. Vår schemaläggningsmotor 
            genererar färdiga planeringsförslag och lär sig av era justeringar.
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
              <div className="text-sm text-muted-foreground mb-1">Tidsbesparing</div>
              <div className="text-2xl font-display font-bold text-primary">15h/vecka</div>
            </div>
            <div className="absolute -right-4 top-8 bg-card text-card-foreground rounded-xl p-4 shadow-elevated animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-sm text-muted-foreground mb-1">Minskad övertid</div>
              <div className="text-2xl font-display font-bold text-primary">-30%</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Schemaläggning på alla nivåer
            </h3>
            <p className="text-accent-foreground/70 mb-8 leading-relaxed">
              Vår planeringsmotor arbetar i samma tre nivåer som flygplatser redan har: 
              grundschema, periodplanering och daglig omplanering (ADO). Den förstår 
              roller, positioner, kompetenser, tjänstgöringsgrader, regler och beredskap.
            </p>
            <p className="text-accent-foreground/70 mb-8 leading-relaxed">
              Budskapet är enkelt: "Vi tar bort kaoset i planeringen – utan att ni byter system."
            </p>
            <Button variant="heroLight" size="lg" className="gap-2" asChild>
              <a href="#kontakt">
                Boka en demonstration
                <ArrowRight className="w-5 h-5" />
              </a>
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