import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, Phone } from "lucide-react";
import sjaLogo from "@/assets/sja-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Businesses", href: "#businesses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(mobileMenuRef.current, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    }
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
          <img src={sjaLogo} alt="SJA Foundation Logo" className="w-10 h-10 rounded-lg object-contain" />
          <div className="text-left">
            <span className={`font-display text-lg font-bold leading-tight block transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              SJA Foundation
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
              Pune, India
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className={`nav-link py-1 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 bg-gold-gradient text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="lg:hidden overflow-hidden h-0 opacity-0 bg-card/95 backdrop-blur-md">
        <div className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-4 py-3 text-foreground font-body font-medium rounded-lg hover:bg-muted transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+919999999999"
            className="flex items-center justify-center gap-2 bg-gold-gradient text-secondary-foreground px-5 py-3 rounded-full text-sm font-semibold font-body mt-3"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
