import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTABanner = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-animate",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-primary"
    >
      {/* Decorative background circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="cta-animate text-secondary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
          Ready to Connect?
        </span>
        <h2 className="cta-animate font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Let's Build Something{" "}
          <span className="text-gradient-gold">Together</span>
        </h2>
        <p className="cta-animate text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto mb-10">
          Whether you're looking for your dream home, reliable security, stunning
          wedding décor, or financial support — SJA Foundation is just one call
          away.
        </p>
        <div className="cta-animate flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919699346910"
            className="flex items-center gap-2 bg-gold-gradient text-secondary-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:scale-105 transition-transform shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call +91 96993 46910
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:bg-primary-foreground/10 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
