import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "@/assets/hero-main.jpg";
import { ArrowDown } from "lucide-react";

const heroStats = [
  { value: "5+", label: "Business Verticals" },
  { value: "1000+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(overlayRef.current, { scaleX: 1 }, { scaleX: 0, duration: 1.2, ease: "power4.inOut" })
        .fromTo(titleRef.current, { y: 80, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }, { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1 }, "-=0.5")
        .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(statsRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.2");

      // Floating animation on stats
      gsap.utils.toArray<HTMLElement>(".hero-stat").forEach((el, i) => {
        gsap.to(el, {
          y: -8,
          duration: 2 + i * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.4,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="SJA Foundation Headquarters" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div ref={overlayRef} className="absolute inset-0 bg-foreground origin-right z-10" />

      <div className="relative z-20 container-wide px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-body tracking-wide">Building Dreams Since Day One</span>
          </div>

          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
            Building Futures,{" "}
            <span className="text-gradient-gold">Empowering Lives</span>
          </h1>

          <p ref={subtitleRef} className="text-lg sm:text-xl text-primary-foreground/80 font-body max-w-xl mb-10 leading-relaxed">
            SJA Foundation — Pune's trusted name in real estate, floor cleaning solutions, 
            security services, wedding decorations & micro finance. Five visions, one commitment to excellence.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#businesses"
              className="bg-gold-gradient text-secondary-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:scale-105 transition-transform shadow-lg"
            >
              Explore Our Businesses
            </a>
            <a
              href="#about"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Floating Stats */}
        <div ref={statsRef} className="mt-16 flex flex-wrap gap-6">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="hero-stat bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl px-6 py-4"
            >
              <span className="block font-display text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</span>
              <span className="text-primary-foreground/70 font-body text-xs tracking-wider uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-primary-foreground/60 text-xs font-body tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
