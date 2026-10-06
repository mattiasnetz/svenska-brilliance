import SeoPage from "@/components/SeoPage";

export const Bemanningsplanering = () => (
  <SeoPage
    path="/bemanningsplanering-flygplatser"
    title="Bemanningsplanering för flygplatser | Svenska Intelligensfabriken"
    description="Svenska Intelligensfabriken erbjuder AI-baserad bemanningsplanering och personalplanering för svenska flygplatser. Rätt personal, rätt kompetens, rätt tid."
    eyebrow="Bemanningsplanering för flygplatser"
    h1="Bemanningsplanering för flygplatser med AI"
    intro="Svenska Intelligensfabriken hjälper svenska flygplatser att planera bemanning och personal smartare. Vår AI-baserade bemanningsplanering ser till att rätt person med rätt kompetens finns på rätt plats – utan att ni behöver byta HR-system."
    sections={[
      {
        heading: "Varför bemanningsplanering på flygplatser är svårt",
        paragraphs: [
          "En flygplats är personalintensiv produktion där säkerhet, trafikvariation, väder och sjukfrånvaro ständigt påverkar behovet av personal. Planeringen sker ofta i Heroma, Excel och på whiteboards, vilket gör personalplaneringen personberoende och sårbar.",
          "Planerare lägger 20–30 timmar per vecka på att planera och omplanera. Svenska Intelligensfabriken tar bort den största delen av det manuella arbetet.",
        ],
      },
      {
        heading: "Så fungerar Svenska Intelligensfabrikens personalplanering",
        paragraphs: [
          "Planeringsmotorn från Svenska Intelligensfabriken förstår roller, positioner, kompetenser, tjänstgöringsgrader, vilotider och beredskap. Den genererar färdiga bemanningsförslag som planeraren granskar och justerar.",
        ],
        bullets: [
          "Automatisk bemanning utifrån trafikprognos och behov",
          "Kompetens- och certifikatkontroll för varje pass",
          "Lagkrav, vilotider och kollektivavtal inbyggda",
          "Jämn arbetsfördelning och rotation mellan positioner",
          "Integration ovanpå Heroma och befintliga HR-system",
        ],
      },
      {
        heading: "För Swedavia, kommunala och privata flygplatser",
        paragraphs: [
          "Svenska Intelligensfabriken är byggd för svenska förhållanden – från stora flygplatser till mindre regionala och kommunala flygplatser. Effekten per flygplats är 10–15 timmar frigjord planeringstid per vecka, 300–500 timmar per år.",
        ],
      },
    ]}
  />
);

export const AiSchemalaggning = () => (
  <SeoPage
    path="/ai-schemalaggning"
    title="AI-baserad schemaläggning | Svenska Intelligensfabriken"
    description="AI-baserad schemaläggning från Svenska Intelligensfabriken: automatiska scheman, realtidsomplanering och mindre övertid för flygplatspersonal."
    eyebrow="AI-baserad schemaläggning"
    h1="AI-baserad schemaläggning som lär sig er verksamhet"
    intro="Med AI-baserad schemaläggning från Svenska Intelligensfabriken skapas grundscheman, periodplaner och dagliga omplaneringar automatiskt. Systemet lär sig av era justeringar och blir bättre över tid."
    sections={[
      {
        heading: "Schemaläggning på tre nivåer",
        paragraphs: [
          "Svenska Intelligensfabrikens schemaläggningsmotor arbetar i samma nivåer som flygplatser redan använder:",
        ],
        bullets: [
          "Grundschema (12–18 veckor) – strategisk schemaläggning",
          "Periodplanering (4–6 veckor) – från 6–12 timmar till 1–2 timmar",
          "Vecka och dag – daglig omplanering på 5–10 minuter",
        ],
      },
      {
        heading: "Realtidsomplanering vid sjukdom och störningar",
        paragraphs: [
          "När någon blir sjuk, ett flyg försenas eller vädret slår om föreslår AI-schemaläggningen direkt hur resurser ska omdisponeras. Planeraren godkänner med ett klick i stället för att ringa runt.",
          "Resultatet är upp till 30 % minskad övertid, färre fel och mindre stress för både planerare och personal.",
        ],
      },
      {
        heading: "Matematisk optimering och AI",
        paragraphs: [
          "Svenska Intelligensfabriken kombinerar matematiska optimeringsmodeller med maskininlärning. Det innebär scheman som tar hänsyn till regler, kompetenser och rättvisa – samtidigt som de anpassas efter hur just er flygplats arbetar.",
        ],
      },
    ]}
  />
);

export const Kapacitetsplanering = () => (
  <SeoPage
    path="/kapacitetsplanering"
    title="Kapacitetsplanering och produktionsplanering | Svenska Intelligensfabriken"
    description="Kapacitetsplanering och produktionsstyrning för flygplatser från Svenska Intelligensfabriken. Matcha personal mot trafik och frigör 0,25–0,4 heltidstjänst."
    eyebrow="Kapacitetsplanering"
    h1="Kapacitetsplanering och produktionsstyrning för flygplatser"
    intro="Svenska Intelligensfabriken ger flygplatser en AI-baserad kapacitetsplanering som matchar personalresurser mot trafikbehov – timme för timme, vecka för vecka."
    sections={[
      {
        heading: "Från trafikprognos till kapacitetsbehov",
        paragraphs: [
          "Kapacitetsplaneringen i Svenska Intelligensfabriken utgår från trafikprogram och historiska data för att beräkna hur många personer, med vilka kompetenser, som behövs i varje funktion – säkerhetskontroll, ramp, terminal och brand och räddning.",
        ],
      },
      {
        heading: "Produktionsplanering med full spårbarhet",
        paragraphs: [
          "Se vem som har stått var, hur ofta och hur jämnt arbetet fördelas. Produktionsplaneringen ger ledningen underlag för beslut om bemanning, rekrytering och budget.",
        ],
        bullets: [
          "Över- och underkapacitet synliggörs i förväg",
          "Scenarioplanering för säsong och trafikförändringar",
          "Rapporter om övertid, rotation och kompetensbehov",
          "Motsvarar 0,25–0,4 frigjord heltidstjänst per flygplats",
        ],
      },
      {
        heading: "Utan att byta system",
        paragraphs: [
          "Svenska Intelligensfabriken lägger sig ovanpå befintliga system som Heroma. Ni behåller era verktyg och får en intelligent kapacitetsplanering som tänker åt er.",
        ],
      },
    ]}
  />
);
