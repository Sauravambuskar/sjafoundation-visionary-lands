import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, Droplets, ArrowRight } from "lucide-react";
import realEstateImg from "@/assets/hero-realestate.jpg";
import chemicalsImg from "@/assets/hero-chemicals.jpg";

gsap.registerPlugin(ScrollTrigger);

const businesses = [
  {
    icon: Building,
    title: "SJA Lands & Developers",
    subtitle: "Real Estate",
    description:
      "Premium residential and commercial developments across Pune. From luxurious villas to modern apartments, we craft spaces that inspire living. Our projects are known for superior construction quality, strategic locations, and thoughtful design.",
    features: ["Premium Villas & Apartments", "Commercial Spaces", "NA Plots & Land Development", "Trusted Locations in Pune"],
    image: realEstateImg,
    link: "#contact",
  },
  {
    icon: Droplets,
    title: "Jyoti Shine",
    subtitle: "Chemical Cleaning Solutions",
    description:
      "Industrial-grade and household chemical cleaning products trusted by thousands. From floor cleaners to degreasers, Jyoti Shine delivers powerful cleaning that's safe and effective for every environment.",
    features: ["Floor & Surface Cleaners", "Industrial Degreasers", "Dish & Laundry Care", "Eco-Friendly Formulas"],
    image: chemicalsImg,
    link: "https://jyotishine.vercel.app/",
  },
];

const Businesses = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".biz-card").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 1, delay: i * 0.2,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="businesses" className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Our Ventures</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Two Businesses, <span className="text-gradient-gold">One Vision</span>
          </h2>
        </div>

        <div className="space-y-8">
          {businesses.map((biz, idx) => (
            <div
              key={biz.title}
              className={`biz-card bg-card rounded-3xl overflow-hidden border border-border card-elevated grid lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-64 lg:h-auto min-h-[320px] overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={biz.image}
                  alt={biz.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-gold-gradient rounded-xl p-3">
                    <biz.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-secondary font-body text-xs font-semibold tracking-[0.15em] uppercase mb-2">{biz.subtitle}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">{biz.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">{biz.description}</p>
                <ul className="space-y-2 mb-8">
                  {biz.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground font-body text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={biz.link}
                  target={biz.link.startsWith("http") ? "_blank" : undefined}
                  rel={biz.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 bg-gold-gradient text-secondary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:scale-105 transition-transform self-start"
                >
                  {biz.link.startsWith("http") ? "Visit Website" : "Get in Touch"}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;
