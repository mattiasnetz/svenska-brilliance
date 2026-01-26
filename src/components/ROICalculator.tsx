import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, Clock, TrendingDown, Users } from "lucide-react";

const ROICalculator = () => {
  const [employees, setEmployees] = useState([50]);
  const [planningHours, setPlanningHours] = useState([20]);
  const [hourlyCost, setHourlyCost] = useState([450]);

  const results = useMemo(() => {
    const emp = employees[0];
    const hours = planningHours[0];
    const cost = hourlyCost[0];

    // Calculations based on 60-70% time savings
    const weeklyTimeSaved = hours * 0.65;
    const yearlyTimeSaved = weeklyTimeSaved * 52;
    const yearlyCostSaved = yearlyTimeSaved * cost;
    const fteEquivalent = yearlyTimeSaved / 1720; // Standard FTE hours per year

    return {
      weeklyTimeSaved: Math.round(weeklyTimeSaved),
      yearlyTimeSaved: Math.round(yearlyTimeSaved),
      yearlyCostSaved: Math.round(yearlyCostSaved),
      fteEquivalent: fteEquivalent.toFixed(2),
    };
  }, [employees, planningHours, hourlyCost]);

  return (
    <section id="roi-kalkylator" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            ROI-kalkylator
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Räkna ut er{" "}
            <span className="text-gradient">potentiella besparing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Se hur mycket tid och pengar ni kan spara med AI-driven kapacitetsplanering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <div className="bg-card rounded-2xl p-8 shadow-medium border border-border/50">
            <h3 className="font-display text-xl font-bold mb-8 text-foreground">
              Ange era förutsättningar
            </h3>

            <div className="space-y-8">
              {/* Employees Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Antal anställda att schemalägga
                  </label>
                  <span className="text-lg font-display font-bold text-primary">
                    {employees[0]} st
                  </span>
                </div>
                <Slider
                  value={employees}
                  onValueChange={setEmployees}
                  min={10}
                  max={500}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {/* Planning Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Planeringstid per vecka (timmar)
                  </label>
                  <span className="text-lg font-display font-bold text-primary">
                    {planningHours[0]} h
                  </span>
                </div>
                <Slider
                  value={planningHours}
                  onValueChange={setPlanningHours}
                  min={5}
                  max={60}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>5 h</span>
                  <span>60 h</span>
                </div>
              </div>

              {/* Hourly Cost Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-primary" />
                    Genomsnittlig timkostnad (kr)
                  </label>
                  <span className="text-lg font-display font-bold text-primary">
                    {hourlyCost[0]} kr
                  </span>
                </div>
                <Slider
                  value={hourlyCost}
                  onValueChange={setHourlyCost}
                  min={300}
                  max={800}
                  step={25}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>300 kr</span>
                  <span>800 kr</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              * Beräkningen baseras på 65% tidsbesparing, vilket är ett konservativt estimat baserat på våra kundcase.
            </p>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-display text-lg font-medium mb-2 opacity-90">
                Årlig kostnadsbesparing
              </h3>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                {results.yearlyCostSaved.toLocaleString("sv-SE")} kr
              </div>
              <p className="text-sm opacity-80">
                Baserat på era angivna förutsättningar
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                <div className="text-sm text-muted-foreground mb-2">Veckovis tidsbesparing</div>
                <div className="font-display text-2xl font-bold text-primary">
                  {results.weeklyTimeSaved} h
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                <div className="text-sm text-muted-foreground mb-2">Årlig tidsbesparing</div>
                <div className="font-display text-2xl font-bold text-primary">
                  {results.yearlyTimeSaved} h
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 col-span-2">
                <div className="text-sm text-muted-foreground mb-2">Motsvarar heltidstjänster (FTE)</div>
                <div className="font-display text-2xl font-bold text-primary">
                  {results.fteEquivalent} FTE
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Tid som kan omfördelas till verksamhetsutveckling
                </p>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full gap-2" asChild>
              <a href="#kontakt">
                Boka en Proof of Value
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
