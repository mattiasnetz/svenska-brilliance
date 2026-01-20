const Team = () => {
  const team = [
    {
      name: "Dr Marie Netz",
      role: "VD & Grundare",
      description: "15 års forskning inom data science med fokus på logistikprocesser inom hälso-sjukvård.",
      initials: "MN",
    },
    {
      name: "Mattias Netz",
      role: "CTO & Medgrundare",
      description: "Har designat IoT-lösningar i 25 år och varit pionjär inom Maingate.",
      initials: "MN",
    },
    {
      name: "Dr Christian Nordahl",
      role: "Medicinsk rådgivare",
      description: "Överläkare och senior forskare på Karolinska Institutet med brett kontaktnät.",
      initials: "CN",
    },
    {
      name: "Cuong Phung",
      role: "Senior arkitekt",
      description: "Civilingenjör med särskilt intresse för matematisk modellering och AI.",
      initials: "CP",
    },
  ];

  return (
    <section id="om-oss" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Vårt team
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Handplockat för{" "}
            <span className="text-gradient">framgång</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sownders team har levererat tjänster till industrin och vården under två decennier. 
            Vi är ett tätt sammansvetsat gäng med alla förutsättningar att lyckas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 text-center border border-border/50"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-bold mb-1 text-foreground">
                {member.name}
              </h3>
              <div className="text-primary font-medium text-sm mb-3">
                {member.role}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Svenska Intelligensfabriken har en unik kombinerad uppsättning färdigheter som 
            ser detaljer både i större och mindre perspektiv. Vårt samarbete bygger på 
            partnerskap med Blekinge Tekniska Högskola och Danderyds sjukhus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
