import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: MapPin, label: "Address", value: "SJA Foundation, Pune, Maharashtra, India" },
  { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
  { icon: Mail, label: "Email", value: "info@sjafoundation.com", href: "mailto:info@sjafoundation.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".contact-animate").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="contact-animate text-secondary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Get in Touch</span>
          <h2 className="contact-animate font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Let's <span className="text-gradient-gold">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="contact-animate flex items-start gap-5 bg-card border border-border rounded-2xl p-6 card-elevated">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <span className="text-muted-foreground font-body text-xs tracking-wider uppercase block mb-1">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="text-foreground font-body font-medium hover:text-secondary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-foreground font-body font-medium">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map / CTA */}
          <div className="contact-animate bg-card border border-border rounded-3xl overflow-hidden card-elevated">
            <iframe
              title="SJA Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14199025947!2d73.72288455!3d18.524564399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              className="w-full h-64 lg:h-full min-h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
