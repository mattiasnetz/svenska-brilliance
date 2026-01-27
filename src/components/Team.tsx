import christianNordahl from "@/assets/christian-nordahl.png";
import mattiasNetz from "@/assets/mattias-netz.png";

const Team = () => {
  const team = [
    {
      name: "Dr Christian Nordahl",
      role: "VD & Medgrundare",
      description: "Doktorerad inom AI och ansvarig för matematiska modeller och framtagande av optimal planering.",
      image: christianNordahl,
    },
    {
      name: "Mattias Netz",
      role: "PdM & Medgrundare",
      description: "Omfattande erfarenhet som affärs- och systemarkitekt.",
      image: mattiasNetz,
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
            Vårt team har levererat tjänster till industrin och flygsektorn under två decennier. 
            Vi är ett tätt sammansvetsat gäng med alla förutsättningar att lyckas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 text-center border border-border/50"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
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
            partnerskap med Blekinge Tekniska Högskola och erfarenhet från flygplatsdrift.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
