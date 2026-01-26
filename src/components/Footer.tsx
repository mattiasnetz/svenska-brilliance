const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">SI</span>
              </div>
              <div>
                <span className="font-display font-semibold text-accent-foreground">Svenska</span>
                <span className="font-display font-semibold text-primary ml-1">Intelligensfabriken</span>
              </div>
            </div>
            <p className="text-accent-foreground/70 max-w-md leading-relaxed">
              AI-baserad kapacitets- och produktionsplanering för svenska flygplatser. 
              Vi tar bort kaoset i planeringen – utan att ni byter system.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-accent-foreground">Lösningar</h4>
            <ul className="space-y-2">
              <li><a href="#problem" className="text-accent-foreground/70 hover:text-primary transition-colors">Problembilden</a></li>
              <li><a href="#losning" className="text-accent-foreground/70 hover:text-primary transition-colors">Vår lösning</a></li>
              <li><a href="#intelligent-scheduling" className="text-accent-foreground/70 hover:text-primary transition-colors">Intelligent Scheduling</a></li>
              <li><a href="#go-to-market" className="text-accent-foreground/70 hover:text-primary transition-colors">Affärsmodell</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-accent-foreground">Målgrupp</h4>
            <ul className="space-y-2">
              <li><span className="text-accent-foreground/70">Swedavia</span></li>
              <li><span className="text-accent-foreground/70">Kommunala flygplatser</span></li>
              <li><span className="text-accent-foreground/70">Privata flygplatser</span></li>
              <li><a href="#kontakt" className="text-accent-foreground/70 hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/50 text-sm">
            © 2025 Svenska Intelligensfabriken. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-accent-foreground/50 hover:text-primary transition-colors">Integritetspolicy</a>
            <a href="#" className="text-accent-foreground/50 hover:text-primary transition-colors">Användarvillkor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;