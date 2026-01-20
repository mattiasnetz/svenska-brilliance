const Stats = () => {
  const stats = [
    { value: "15+", label: "År av forskning", suffix: "" },
    { value: "30", label: "Produktionsökning", suffix: "%" },
    { value: "24/7", label: "Realtidsuppdatering", suffix: "" },
    { value: "100", label: "Nöjda användare", suffix: "+" },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
                <span className="text-primary/70">{stat.suffix}</span>
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
