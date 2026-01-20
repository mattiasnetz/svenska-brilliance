import { Layers, Clock, AlertTriangle } from "lucide-react";

const Services = () => {
  const problems = [
    {
      icon: Layers,
      title: "Fragmenterade verktyg",
      description: "Heroma, Excel, whiteboards och post-it-lappar. Planeringen sker i flera lager utan sammanhängande system.",
      issues: ["Manuell justering", "Personberoende kunskap", "Ingen spårbarhet"],
    },
    {
      icon: Clock,
      title: "20–30 timmar per vecka",
      description: "Tid som går åt till planering och omplanering – utfört av nyckelpersoner med hög kompetens.",
      issues: ["Hög stress", "Mycket övertid", "Sårbar drift"],
    },
    {
      icon: AlertTriangle,
      title: "Brandkårsutryckningar",
      description: "Sjukdom, förseningar, väder och variation gör att planeringen aldrig 'blir klar'.",
      issues: ["Ojämn arbetsfördelning", "Svag rotation", "Onödiga kostnader"],
    },
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Problembilden
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Verktyg från{" "}
            <span className="text-gradient">en annan tid</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Svenska flygplatser driver personalintensiv produktion med verktyg som inte 
            hänger med. Det fungerar – men det är dyrt och skört.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-shadow">
                <problem.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {problem.description}
              </p>

              {/* Issues */}
              <ul className="space-y-3">
                {problem.issues.map((issue, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {issue}
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