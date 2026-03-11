import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Award, Users, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Building2, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years of Trust" },
  { icon: Target, value: "6", label: "Business Verticals" },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-animate").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, scrollTrigger: { trigger: el, start: "top 85%" } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="about-animate text-secondary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">About Us</span>
            <h2 className="about-animate font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              A Foundation Built on{" "}
              <span className="text-gradient-gold">Trust & Vision</span>
            </h2>
            <p className="about-animate text-muted-foreground font-body text-lg leading-relaxed mb-4">
              SJA Foundation is a Pune-based enterprise with a bold vision — transforming 
              the landscape of real estate through <strong className="text-foreground">SJA Lands & Developers</strong>, 
              delivering powerful cleaning solutions with <strong className="text-foreground">SJA Flour Cleaner</strong>, 
              ensuring safety with <strong className="text-foreground">SJA Security Services</strong>, creating dream weddings with <strong className="text-foreground">SJA Wedding Decorations</strong>, and empowering communities through <strong className="text-foreground">SJA Micro Finance</strong>.
            </p>
            <p className="about-animate text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Our commitment to quality, innovation, and customer satisfaction has made us a 
              trusted name across Maharashtra. We believe in building lasting relationships and 
              delivering excellence in everything we do.
            </p>
            <div className="about-animate flex items-center gap-4">
              <div className="w-12 h-1 bg-gold-gradient rounded-full" />
              <span className="text-muted-foreground font-body text-sm italic">Headquartered in Pune, Maharashtra</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="about-animate card-elevated bg-card rounded-2xl p-6 sm:p-8 text-center border border-border"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold-gradient flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <span className="block font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </span>
                <span className="text-muted-foreground font-body text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
