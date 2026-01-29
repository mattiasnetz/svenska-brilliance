import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Tack för din förfrågan!",
        description: "Vi återkommer så snart som möjligt.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Något gick fel",
        description: "Försök igen eller kontakta oss direkt via telefon.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="kontakt" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Kontakta oss
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Redo att{" "}
              <span className="text-gradient">ta bort kaoset</span>
              <br />i planeringen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Boka en Proof of Value för att se hur Svenska Intelligensfabriken kan 
              spegla ert verkliga planeringsflöde och visa var AI kan ta över.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <a href="tel:+46101234567" className="font-medium text-foreground hover:text-primary transition-colors">0703-201303</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-post</div>
                  <a href="mailto:kontakt@intelligensfabriken.se" className="font-medium text-foreground hover:text-primary transition-colors">
                    kontakt@intelligensfabriken.se
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Målgrupp</div>
                  <div className="font-medium text-foreground">Swedavia, kommunala & privata flygplatser</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-medium border border-border/50">
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              Boka en Proof of Value
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Namn
                  </label>
                  <Input id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} placeholder="Ditt namn" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-post
                  </label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="din@email.se" required />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Flygplats / Organisation
                </label>
                <Input id="company" value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} placeholder="Er flygplats eller organisation" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Meddelande
                </label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} placeholder="Berätta om era utmaningar med planering..." rows={4} />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Skickar...
                  </>
                ) : (
                  <>
                    Skicka förfrågan
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;