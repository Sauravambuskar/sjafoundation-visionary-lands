import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rajesh Patil",
    business: "SJA Lands & Developers",
    rating: 5,
    text: "Bought our dream villa through SJA Lands. The quality of construction and transparency throughout the process was outstanding. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    business: "SJA Flour Cleaner",
    rating: 5,
    text: "SJA Flour Cleaner products are a game-changer for our hotel. The floor cleaners leave surfaces sparkling without harsh chemical odors.",
  },
  {
    name: "Amit Deshmukh",
    business: "SJA Security Services",
    rating: 4,
    text: "Our society has been using SJA Security for 3 years now. Professional guards, punctual shifts, and excellent management. We feel completely safe.",
  },
  {
    name: "Sneha & Vikram Joshi",
    business: "SJA Wedding Decorations",
    rating: 5,
    text: "Our wedding was a fairy tale, thanks to SJA's decoration team. The mandap setup and floral arrangements exceeded every expectation!",
  },
  {
    name: "Sunil Gaikwad",
    business: "SJA Micro Finance",
    rating: 5,
    text: "SJA Micro Finance helped me start my small business with a quick loan and minimal paperwork. They truly empower the common man.",
  },
  {
    name: "Meena Kulkarni",
    business: "SJA Flour Cleaner",
    rating: 4,
    text: "I've been using SJA cleaning products at home for over a year. Eco-friendly, affordable, and effective. Will never switch to another brand.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-secondary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-card border border-border rounded-2xl p-6 sm:p-8 card-elevated"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-secondary fill-secondary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <span className="block font-display text-base font-bold text-foreground">{t.name}</span>
                <span className="text-secondary font-body text-xs tracking-wider uppercase">{t.business}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
