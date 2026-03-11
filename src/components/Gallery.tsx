import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    alt: "Real estate development site visit",
    label: "Real Estate",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Wedding decoration setup",
    label: "Wedding Décor",
  },
  {
    src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
    alt: "Security personnel on duty",
    label: "Security Services",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    alt: "Professional cleaning service",
    label: "Floor Cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    alt: "Micro finance meeting with clients",
    label: "Micro Finance",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "SJA Foundation team collaboration",
    label: "Our Team",
  },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((el, i) => {
        gsap.fromTo(el,
          { rotateY: 90, opacity: 0 },
          {
            rotateY: 0, opacity: 1, duration: 0.9, delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setLightboxIdx((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIdx]);

  return (
    <>
      <section ref={sectionRef} id="gallery" className="section-padding bg-background" style={{ perspective: "1200px" }}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-secondary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Our Work</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Our <span className="text-gradient-gold">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={img.alt}
                className="gallery-item relative group cursor-pointer rounded-2xl overflow-hidden border border-border card-elevated aspect-[4/3]"
                onClick={() => openLightbox(idx)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <span className="p-4 text-primary-foreground font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 sm:left-8 text-primary-foreground/80 hover:text-primary-foreground">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 sm:right-8 text-primary-foreground/80 hover:text-primary-foreground">
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={galleryImages[lightboxIdx].src.replace("w=800", "w=1400")}
            alt={galleryImages[lightboxIdx].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/70 font-body text-sm">
            {galleryImages[lightboxIdx].label} — {lightboxIdx + 1}/{galleryImages.length}
          </span>
        </div>
      )}
    </>
  );
};

export default Gallery;
