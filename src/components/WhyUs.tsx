import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Gem, Handshake, Leaf, Clock, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: Shield, title: "Trusted Legacy", desc: "Over a decade of unwavering commitment to quality and customer satisfaction in Pune." },
  { icon: Gem, title: "Premium Quality", desc: "Whether it's real estate or cleaning products — we never compromise on quality." },
  { icon: Handshake, title: "Customer First", desc: "Every decision is driven by our clients' needs. Your success is our success." },
  { icon: Leaf, title: "Eco Conscious", desc: "Sustainable practices in construction and eco-friendly cleaning formulations." },
  { icon: Clock, title: "Timely Delivery", desc: "On-time project handovers and reliable supply chains you can count on." },
  { icon: HeartHandshake, title: "Community Driven", desc: "Deeply rooted in Pune's community, contributing to local growth and development." },
];

const WhyUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".why-card").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0, rotateX: 10 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, delay: i * 0.1, scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-us" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            The SJA <span className="text-gradient-gold">Advantage</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="why-card group bg-card border border-border rounded-2xl p-8 card-elevated">
              <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-gold-gradient transition-all duration-300 flex items-center justify-center mb-5">
                <r.icon className="w-7 h-7 text-foreground group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
