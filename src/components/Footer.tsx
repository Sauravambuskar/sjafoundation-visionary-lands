import { Building2, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                <span className="font-display text-lg font-bold text-secondary-foreground">S</span>
              </div>
              <span className="font-display text-lg font-bold">SJA Foundation</span>
            </div>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Building futures in real estate and delivering excellence in cleaning solutions. Based in Pune, serving across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Businesses", "Why Us", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-primary-foreground/70 font-body text-sm hover:text-secondary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="font-display text-base font-bold mb-4">Our Businesses</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
                <Building2 className="w-4 h-4 text-secondary" />
                SJA Lands & Developers
              </li>
              <li>
                <a href="https://jyotishine.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm hover:text-secondary transition-colors">
                  <Building2 className="w-4 h-4 text-secondary" />
                  Jyoti Shine Cleaners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/70 font-body text-sm">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                Pune, Maharashtra, India
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                +91 99999 99999
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                info@sjafoundation.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} SJA Foundation. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 font-body text-xs">
            Crafted with excellence in Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
