import { BarChart3, Brain, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Analysera",
      description: "I realtid visualiseras statistik och identifierade nyckeltal i ett behagligt gränssnitt. Välj tidsfönster och parametrar efter behov.",
      features: ["Realtidsvisualisering", "Anpassningsbara nyckeltal", "Intuitiva dashboards"],
    },
    {
      icon: Brain,
      title: "Prediktera",
      description: "Använd AI för att prediktera framtida resursbehov, patientriskgrupper och intäktsnivåer baserat på historisk data.",
      features: ["Riskgruppsprediktion", "Resursbehovsprognos", "Intäktsprediktion"],
    },
    {
      icon: Zap,
      title: "Optimera",
      description: "Vår schemaläggningsmotor fördelar resurser på uppgifter så att fler aktiviteter kan utföras på kortast möjliga tid.",
      features: ["Smart resursfördelning", "Realtidsuppdatering", "Upp till 30% effektivare"],
    },
  ];

  return (
    <section id="tjanster" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Våra tjänster
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tre grundtjänster för{" "}
            <span className="text-gradient">intelligent vårdlogistik</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Svenska Intelligensfabriken bygger sina lösningar på tre kraftfulla grundtjänster 
            som tillsammans skapar effektivare processer inom hälso- och sjukvården.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-shadow">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
