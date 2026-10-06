import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export type SeoSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type SeoPageProps = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: SeoSection[];
};

const SITE = "https://swefab.lovable.app";

export const seoLinks = [
  { to: "/bemanningsplanering-flygplatser", label: "Bemanningsplanering för flygplatser" },
  { to: "/ai-schemalaggning", label: "AI-baserad schemaläggning" },
  { to: "/kapacitetsplanering", label: "Kapacitetsplanering" },
];

const SeoPage = ({ path, title, description, eyebrow, h1, intro, sections }: SeoPageProps) => {
  const url = `${SITE}${path}`;
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Svenska Intelligensfabriken", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: eyebrow, item: url },
            ],
          })}
        </script>
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Svenska Intelligensfabriken</Link> / {eyebrow}
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">{h1}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{intro}</p>
          {sections.map((s) => (
            <section key={s.heading} className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              {s.bullets && (
                <ul className="space-y-3 mt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="bg-secondary/40 rounded-2xl p-8 border border-border/50">
            <h2 className="font-display text-xl font-bold mb-4">Läs mer från Svenska Intelligensfabriken</h2>
            <ul className="space-y-2 mb-6">
              {seoLinks.filter((l) => l.to !== path).map((l) => (
                <li key={l.to}><Link to={l.to} className="text-primary hover:underline">{l.label}</Link></li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="gap-2" asChild>
              <Link to="/#roi-kalkylator">Räkna på er besparing <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SeoPage;
