import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Brain, Layers, BarChart3 } from "lucide-react";

const Products = () => {
  const capabilities = [
    {
      icon: Layers,
      title: "Ligger ovanpå befintliga system",
      description: "Integreras med Heroma och andra HR-system utan att ersätta dem",
    },
    {
      icon: Brain,
      title: "Förstår er verksamhet",
      description: "Roller, kompetenser, tjänstgöringsgrader, regler och variation",
    },
    {
      icon: BarChart3,
      title: "Lär sig och förbättras",
      description: "Systemet lär sig av justeringar och förbättrar planeringen över tid",
    },
  ];

  const levels = [
    { name: "Grundschema", current: "1–2 dagar", withAI: "Oförändrat (strategiskt)" },
    { name: "6-veckorsplanering", current: "6–12 timmar", withAI: "1–2 timmar" },
    { name: "Veckoplanering", current: "2–4 timmar", withAI: "15–30 min" },
    { name: "Daglig omplanering", current: "30–90 min/dag", withAI: "5–10 min" },
    { name: "Brandkårsutryckningar", current: "3–6 timmar/vecka", withAI: "Kraftigt reducerad" },
  ];

  return (
    <section id="losning" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Vår lösning
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            En planeringsmotor{" "}
            <span className="text-gradient">som tänker</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Det är inte ett nytt HR-system. Det är en AI-baserad planeringsmotor för 
            flygplatsdrift som arbetar i samma tre nivåer som flygplatser redan har.
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {capabilities.map((cap, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                <cap.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Time Comparison Table */}
        <div className="bg-card rounded-2xl shadow-medium border border-border/50 overflow-hidden">
          <div className="p-8">
            <h3 className="font-display text-2xl font-bold mb-2">Konkret tidsbesparing</h3>
            <p className="text-muted-foreground mb-6">
              Effekt per flygplats: 10–15 timmar per vecka frigörs, 300–500 timmar per år
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left px-8 py-4 font-display font-semibold">Planeringsnivå</th>
                  <th className="text-left px-8 py-4 font-display font-semibold">Tidsåtgång idag</th>
                  <th className="text-left px-8 py-4 font-display font-semibold">Med AI</th>
                </tr>
              </thead>
              <tbody>
                {levels.map((level, i) => (
                  <tr key={i} className="border-t border-border/50">
                    <td className="px-8 py-4 font-medium">{level.name}</td>
                    <td className="px-8 py-4 text-muted-foreground">{level.current}</td>
                    <td className="px-8 py-4">
                      <span className="inline-flex items-center gap-2 text-primary font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        {level.withAI}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-8 bg-secondary/30 border-t border-border/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-display font-semibold text-foreground">Utöver tid: mindre stress, färre fel, jämnare belastning</p>
                <p className="text-muted-foreground text-sm mt-1">Motsvarar 0,25–0,4 heltidstjänst per flygplats</p>
              </div>
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <a href="#kontakt">
                  Boka en demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;