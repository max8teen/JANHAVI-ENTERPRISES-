import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Droplets,
  Filter,
  Clock,
  Users,
  Award,
  Quote,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Building2,
  TestTube,
  PackageCheck,
  Zap,
  Calendar,
  MapPin,
  Phone,
  ShieldCheck,
  GraduationCap,
  Trophy,
  Send,
  Star,
  Wrench,
  Menu,
  X,
} from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

import partsPoster from "@/assets/website_section.png";
import robotImage from "@/assets/robo.webp";
import storeImage from "@/assets/store.png";
import heroDesktop from "@/assets/pc_hero.png";
import waterFilterOne from "@/assets/water_filter_1.png";
import waterFilterTwo from "@/assets/water_filter_2.png";
import waterFilterThree from "@/assets/water_filter_3.png";
import waterFilterFour from "@/assets/water_filter_4.png";
import waterFilterFive from "@/assets/water_filter_5.png";
import waterFilterSix from "@/assets/water_filter_6.png";

const products = [
  {
    name: "Aquaguard Gravity",
    type: "Storage purifier",
    image: waterFilterOne,
    detail: "For daily safe drinking water with low-maintenance operation.",
  },
  {
    name: "Aquaguard Neo",
    type: "Smart wall purifier",
    image: waterFilterTwo,
    detail: "Slim black-glass profile for modern kitchens and compact spaces.",
  },
  {
    name: "Aquaguard Copper",
    type: "Copper-enriched purifier",
    image: waterFilterThree,
    detail: "Premium copper-finish model with strong visual presence.",
  },
  {
    name: "Aquaguard Nova",
    type: "Designer purifier",
    image: waterFilterFour,
    detail: "Elegant front profile with premium finish and modern dispensing design.",
  },
  {
    name: "Aquaguard Edge",
    type: "Minimal wall unit",
    image: waterFilterFive,
    detail: "Angular body and clean geometry for minimalist interiors.",
  },
  {
    name: "Aquaguard Floor Series",
    type: "High-capacity dispenser",
    image: waterFilterSix,
    detail: "Useful for heavy-use spaces and families that need larger storage volume.",
  },
];

const services = [
  { icon: Wrench, title: "RO Installation", text: "Professional RO installation at your home or office by certified Eureka Forbes technicians." },
  { icon: Droplets, title: "RO Sales", text: "Genuine Aquaguard and Eureka Forbes water purifiers — sold and supported by an authorised partner." },
  { icon: Calendar, title: "AMC — Annual Maintenance", text: "Hassle-free yearly maintenance plans to keep your purifier running at peak performance." },
  { icon: Filter, title: "Filter Cartridge Replacement", text: "Original Aquaguard and Eureka Forbes filter cartridges. No duplicate parts, ever." },
  { icon: TestTube, title: "Water Quality Testing", text: "On-site TDS and water purity testing to check and confirm your water quality." },
  { icon: Building2, title: "Commercial Services", text: "Aquaguard and Eureka Forbes purification solutions for offices, restaurants, hospitals, and industries." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Authorised Centre", text: "Officially authorised by Eureka Forbes. Trained and certified technicians only." },
  { icon: PackageCheck, title: "Genuine Spare Parts", text: "We use only original manufacturer parts — no local or duplicate components." },
  { icon: Zap, title: "Fast Response", text: "Same-day service available. We respect your time and arrive on schedule." },
  { icon: Award, title: "Aquaguard & Eureka Forbes Only", text: "We exclusively sell and service Aquaguard and Eureka Forbes products — no other brands." },
];

const testimonials = [
  { name: "Rahul Deshmukh", area: "Savedi, Ahilyanagar", text: "Excellent installation service. The technician was on time, professional, and explained everything clearly. Highly recommend Janhavi Enterprises!", rating: 5 },
  { name: "Priya Kulkarni", area: "Kedgaon", text: "Got my Aquaguard AMC done here. Genuine parts and very honest pricing. Best Eureka Forbes service in Ahilyanagar.", rating: 5 },
  { name: "Sandeep Patil", area: "MIDC Ahilyanagar", text: "Quick response, same-day filter replacement. Owner himself guided me through the right model for my office. Truly trustworthy.", rating: 5 },
];

const highlights = [
  "Authorised Aquaguard / Eureka Forbes support",
  "20+ years of local service experience",
  "Genuine parts and annual maintenance support",
  "Cleaner installations with modern kitchen-friendly finishes",
];

function ProductCarousel() {
  // Clone first 4 at end + last 4 at start for infinite loop illusion
  const VISIBLE_PC = 4;
  const VISIBLE_MOBILE = 1;
  const total = products.length;

  // We render: [...last4, ...products, ...first4]
  const cloned = [
    ...products.slice(-VISIBLE_PC),
    ...products,
    ...products.slice(0, VISIBLE_PC),
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // real index into `products` (0-based)
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_PC);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect mobile vs desktop
  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 1024 ? VISIBLE_MOBILE : VISIBLE_PC);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const offset = visibleCount === VISIBLE_PC ? VISIBLE_PC : VISIBLE_MOBILE;
  // clonedIndex is position in cloned array = offset + realIndex
  const clonedIndex = offset + index;

  const getItemWidth = useCallback(() => {
    if (!containerRef.current) return 0;
    return containerRef.current.clientWidth / visibleCount;
  }, [visibleCount]);

  const applyTranslate = useCallback((idx: number, animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animate ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)" : "none";
    track.style.transform = `translateX(-${idx * getItemWidth()}px)`;
  }, [getItemWidth]);

  // Jump silently after transition ends to maintain infinite loop
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    const track = trackRef.current;
    if (!track) return;
    // If we went past end clones, jump to real start
    if (index >= total) {
      const newIdx = index - total;
      setIndex(newIdx);
      applyTranslate(offset + newIdx, false);
    } else if (index < 0) {
      const newIdx = index + total;
      setIndex(newIdx);
      applyTranslate(offset + newIdx, false);
    }
  }, [index, total, offset, applyTranslate]);

  // Slide to a real index (may temporarily go into clones)
  const slideTo = useCallback((newRealIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex(newRealIndex);
    applyTranslate(offset + newRealIndex, true);
  }, [isTransitioning, offset, applyTranslate]);

  const next = useCallback(() => slideTo(index + 1), [slideTo, index]);
  const prev = useCallback(() => slideTo(index - 1), [slideTo, index]);

  // Auto-swipe
  useEffect(() => {
    autoTimer.current = setInterval(next, 4000);
    return () => { if (autoTimer.current) clearInterval(autoTimer.current); };
  }, [next]);

  const resetAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(next, 4000);
  }, [next]);

  // Apply translate whenever index or visibleCount changes (no animation on resize)
  useEffect(() => {
    applyTranslate(offset + index, false);
  }, [visibleCount]); // eslint-disable-line

  // Drag/swipe handlers
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    dragDelta.current = e.clientX - dragStartX.current;
    const track = trackRef.current;
    if (track) {
      track.style.transition = "none";
      track.style.transform = `translateX(${-(clonedIndex * getItemWidth()) - dragDelta.current * -1}px)`;
    }
  };
  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = getItemWidth() * 0.25;
    if (dragDelta.current < -threshold) {
      next(); resetAuto();
    } else if (dragDelta.current > threshold) {
      prev(); resetAuto();
    } else {
      applyTranslate(clonedIndex, true);
    }
  };

  const itemWidth = `${100 / visibleCount}%`;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden select-none pb-10">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex"
        style={{ willChange: "transform" }}
        onTransitionEnd={handleTransitionEnd}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {cloned.map((product, i) => (
          <div
            key={`${product.name}-${i}`}
            className="relative shrink-0"
            style={{ width: itemWidth }}
          >
            <div className="relative mx-1 overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
                draggable={false}
                loading="lazy"
              />
              {/* Name overlay at bottom of image */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10">
                <p className="text-base font-extrabold text-white">{product.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { slideTo(i); resetAuto(); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              ((index % total) + total) % total === i
                ? "w-6 bg-primary"
                : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden">
        <div className="site-noise pointer-events-none absolute inset-0" />
        <SiteNavbar />

        <HeroSection />

        <section className="border-b border-border/60 bg-secondary/35" id="about">
          <div className="w-full grid gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_1.05fr] lg:px-8 xl:px-16 lg:py-24">
            <div className="overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border/70 bg-card shadow-[var(--shadow-card)]">
              <img
                src={storeImage}
                alt="Janhavi Enterprises store and authorised service center signboard"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="section-kicker">About us</p>
              <h2 className="section-title mt-4 max-w-4xl">
                Ahilyanagar's Most Trusted Water Purifier Experts
              </h2>
              <p className="mt-5 max-w-2xl lg:max-w-none text-base leading-8 text-muted-foreground">
                Janhavi Enterprises has been serving Ahilyanagar and surrounding districts for
                over 20 years. As an Eureka Forbes Authorised Service Centre, we provide genuine
                parts, certified technicians, and reliable after-sales support for all major
                water purifier brands.
              </p>
              <p className="mt-4 max-w-2xl lg:max-w-none text-base leading-8 text-muted-foreground">
                Our mission is simple — deliver pure water and complete peace of mind to every
                household and business we serve.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Award, value: "20+", label: "Years in Business" },
                  { icon: Users, value: "10,000+", label: "Customers Served" },
                  { icon: Clock, value: "9 AM–9 PM", label: "Working Hours" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="group rounded-[var(--radius-lg)] border border-border/70 bg-background px-4 py-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                    <Icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                    <p className="mt-3 text-2xl font-extrabold text-primary">{value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <BadgeCheck className="h-4 w-4" />
                Authorised by Eureka Forbes
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-secondary/25" id="products">
          <div className="w-full px-4 py-16 sm:px-6 lg:px-8 xl:px-16 lg:py-24">
            <div>
              <p className="section-kicker">Water filter models</p>
              <h2 className="section-title mt-4">Aquaguard purifier models</h2>
            </div>
          </div>
          <ProductCarousel />
        </section>

        <section className="border-b border-border/60 bg-background" id="services">
          <div className="w-full px-4 py-16 sm:px-6 lg:px-8 xl:px-16 lg:py-24">
            <div>
              <p className="section-kicker">Our services</p>
              <h2 className="section-title mt-4">End-to-end water purifier care</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Backed by Eureka Forbes certification — sales, installation, AMC, genuine
                filters, water testing, and full commercial support.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-[calc(var(--radius)+16px)] border border-border/70 bg-card px-6 py-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.text}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-secondary/30" id="robot-cleaners">
          <div className="w-full grid gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_0.95fr] lg:px-8 xl:px-16 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="section-kicker">Robot cleaner section</p>
              <h2 className="section-title mt-4 max-w-4xl">
                Smart cleaning robots deserve their own premium showcase.
              </h2>
              <p className="mt-5 max-w-2xl lg:max-w-none text-base leading-8 text-muted-foreground">
                Since you also provide robot cleaner selling and service, this section separates
                the category from water systems and gives it the same premium treatment. That makes
                the homepage clearer for users and much easier for search engines to understand.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Auto cleaning station guidance",
                  "Sales help for modern home cleaning robots",
                  "Maintenance and troubleshooting support",
                  "High-visual section for product-led browsing",
                ].map((item) => (
                  <div key={item} className="rounded-[var(--radius-lg)] border border-border/70 bg-card px-4 py-4 text-sm text-foreground shadow-[var(--shadow-card)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border/70 bg-card p-4 shadow-[var(--shadow-elevated)]">
              <img
                src={robotImage}
                alt="Robot cleaner with automatic cleaning station"
                className="h-full w-full rounded-[calc(var(--radius)+10px)] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background" id="parts">
          {/* Heading above image — same style as other sections */}
          <div className="w-full px-4 pt-16 pb-10 sm:px-6 lg:px-8 xl:px-16 lg:pt-24 lg:pb-12">
            <p className="section-kicker">Water purification</p>
            <h2 className="section-title mt-4">Why Water Purification Is Important</h2>
          </div>
          {/* Full image — block, w-full, no height/crop constraints at all */}
          <img
            src={partsPoster}
            alt="Why water purification is important"
            className="block w-full"
            loading="lazy"
          />
        </section>

        <section className="border-b border-border/60 bg-secondary/30" id="why-us">
          <div className="w-full px-4 py-16 sm:px-6 lg:px-8 xl:px-16 lg:py-24">
            <div>
              <p className="section-kicker">Why us</p>
              <h2 className="section-title mt-4">Why Choose Janhavi Enterprises?</h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[calc(var(--radius)+16px)] border border-border/70 bg-card px-6 py-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <BookingSection />
        <SiteFooter />
        <FloatingContact />
      </div>
    </main>
  );
}

function TestimonialsSection() {
  return (
    <section className="border-b border-border/60 bg-background" id="testimonials">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8 xl:px-16 lg:py-24">
        <div>
          <p className="section-kicker">Testimonials</p>
          <h2 className="section-title mt-4">What Our Customers Say</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Real feedback from households and businesses across Ahilyanagar.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="product-card group relative rounded-[calc(var(--radius)+16px)] border border-border/70 bg-card px-6 py-7 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elevated)]"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-foreground/90">"{t.text}"</p>
              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="text-sm font-extrabold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    service: "",
    brand: "",
    date: "",
    slot: "",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.area || !form.service || !form.date || !form.slot) return;
    const message = [
      "*New Booking Request — Janhavi Enterprises*",
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Area:* ${form.area}`,
      `*Service:* ${form.service}`,
      form.brand && `*Brand:* ${form.brand}`,
      `*Date:* ${form.date}`,
      `*Time Slot:* ${form.slot}`,
      form.notes && `*Notes:* ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/919834085883?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <section className="border-b border-border/60 bg-secondary/30" id="book-now">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8 xl:px-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <p className="section-kicker">Book now</p>
            <h2 className="section-title mt-4">Book Your Service</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Fill in your details and we'll confirm via WhatsApp. Same-day visits available
              across Ahilyanagar for installations, AMC, and filter replacements.
            </p>
            <div className="mt-8 rounded-[var(--radius-lg)] border border-primary/20 bg-primary/5 px-5 py-5 text-sm leading-7 text-foreground/90">
              <p className="font-semibold text-primary">Prefer to talk?</p>
              <p className="mt-1 text-muted-foreground">
                Scroll down to the contact section for our phone numbers, working hours, and live
                map location, or tap WhatsApp anytime on the bottom right.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[calc(var(--radius)+18px)] border border-border/70 bg-card p-6 shadow-[var(--shadow-elevated)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5 text-sm">
                <span className="font-semibold text-foreground">Full Name *</span>
                <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Your name" maxLength={80} />
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="font-semibold text-foreground">Phone Number *</span>
                <input required type="tel" pattern="[0-9+\- ]{7,15}" value={form.phone} onChange={update("phone")} className={inputCls} placeholder="10-digit mobile" maxLength={15} />
              </label>
              <label className="space-y-1.5 text-sm sm:col-span-2">
                <span className="font-semibold text-foreground">Your Area / Address *</span>
                <input required value={form.area} onChange={update("area")} className={inputCls} placeholder="Area, landmark, city" maxLength={200} />
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="font-semibold text-foreground">Service Required *</span>
                <select required value={form.service} onChange={update("service")} className={inputCls}>
                  <option value="">Select a Service</option>
                  <option>RO Installation</option>
                  <option>RO Servicing</option>
                  <option>Filter Cartridge Replacement</option>
                  <option>Water Quality Testing</option>
                  <option>AMC Enquiry</option>
                  <option>RO Purchase</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="font-semibold text-foreground">Purifier Brand</span>
                <select value={form.brand} onChange={update("brand")} className={inputCls}>
                  <option value="">Select Brand (optional)</option>
                  <option>Aquaguard / Eureka Forbes</option>
                  <option>Other / Don't Know</option>
                </select>
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="font-semibold text-foreground">Preferred Date *</span>
                <input required type="date" value={form.date} onChange={update("date")} className={inputCls} />
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="font-semibold text-foreground">Preferred Time Slot *</span>
                <select required value={form.slot} onChange={update("slot")} className={inputCls}>
                  <option value="">Select Time Slot</option>
                  <option>Morning (9 AM – 12 PM)</option>
                  <option>Afternoon (12 PM – 3 PM)</option>
                  <option>Evening (3 PM – 6 PM)</option>
                </select>
              </label>
              <label className="space-y-1.5 text-sm sm:col-span-2">
                <span className="font-semibold text-foreground">Additional Notes (Optional)</span>
                <textarea value={form.notes} onChange={update("notes")} rows={3} className={inputCls} placeholder="Anything we should know in advance" maxLength={500} />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="h-4 w-4" />
              Send Booking on WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Opens WhatsApp with your details pre-filled. No data is stored on this site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/60">Janhavi Enterprises</p>
            <h3 className="mt-3 text-2xl font-extrabold">Pure water. Complete peace of mind.</h3>
            <p className="mt-4 text-sm leading-7 text-background/70">
              Eureka Forbes Authorised Service Centre serving Ahilyanagar with Aquaguard sales,
              installation, AMC, genuine filters, and robot cleaner support.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-background/80">
              <BadgeCheck className="h-3.5 w-3.5" /> Authorised by Eureka Forbes
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {[
                ["About", "#owner"],
                ["Services", "#services"],
                ["Models", "#products"],
                ["Why Us", "#why-us"],
                ["Testimonials", "#testimonials"],
                ["Book Now", "#book-now"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-background">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-extrabold">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>RO Installation</li>
              <li>RO Sales</li>
              <li>AMC Plans</li>
              <li>Filter Replacement</li>
              <li>Water Testing</li>
              <li>Commercial Solutions</li>
              <li>Robot Cleaner Service</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-extrabold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <a href="tel:9834085883" className="block hover:text-background">+91 98340 85883</a>
                  <a href="tel:7218142702" className="block hover:text-background">+91 72181 42702</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Ahilyanagar, Maharashtra</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Mon – Sun: 9 AM – 9 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="mailto:janhavienterprises@gmail.com" className="break-all hover:text-background">janhavienterprises@gmail.com</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a aria-label="WhatsApp" href="https://wa.me/919834085883" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-background/20 transition-colors hover:bg-background hover:text-foreground">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-background/20 transition-colors hover:bg-background hover:text-foreground">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="Instagram" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-background/20 transition-colors hover:bg-background hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Janhavi Enterprises. All rights reserved.</p>
          <p>Aquaguard & Eureka Forbes Authorised Service Centre — Ahilyanagar</p>
        </div>
      </div>
    </footer>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Models", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Robots", href: "#robot-cleaners" },
  { label: "Parts", href: "#parts" },
  { label: "Contact", href: "#contact" },
];

const heroFeatures = [
  {
    icon: GraduationCap,
    title: "Expert Certified Technicians",
    bgColor: "bg-blue-50",
    iconColor: "text-[#1a56db]",
  },
  {
    icon: Wrench,
    title: "RO Installation & Service",
    bgColor: "bg-blue-50",
    iconColor: "text-[#1a56db]",
  },
  {
    icon: Trophy,
    title: "20+ Years Experience",
    bgColor: "bg-blue-50",
    iconColor: "text-[#1a56db]",
  },
];

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden lg:min-h-[min(90vh,700px)]">

      {/* Background image
          Desktop: anchored right (text left, man right)
          Mobile: anchored to 85% x so man is visible on right, filter center-left */}
      <img
        src={heroDesktop}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[85%_center] lg:object-right"
        loading="eager"
      />

      {/* Desktop gradient: white left → transparent right */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 28%, rgba(255,255,255,0.7) 48%, rgba(255,255,255,0.15) 65%, rgba(255,255,255,0) 80%)",
        }}
      />
      {/* Mobile gradient: clear until 52%, then white from 62% */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 56%, rgba(255,255,255,0.92) 66%, rgba(255,255,255,1) 73%)",
        }}
      />

      {/* ── DESKTOP layout ── */}
      <div className="relative z-10 hidden lg:flex lg:items-center lg:px-8 xl:px-16" style={{ minHeight: "min(90vh, 700px)" }}>
        <div className="w-full max-w-xl">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1a56db] backdrop-blur-sm">
            <BadgeCheck className="h-3.5 w-3.5" />
            Eureka Forbes Authorised Service Centre
          </div>
          <h1 className="mt-5 text-[2.2rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Delivering Purity,{" "}
            <span className="text-[#1a56db]">Ensuring Quality</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Janhavi Enterprises helps homes and businesses choose, install, and maintain
            Aquaguard and Eureka Forbes products with owner-led support, genuine filters, and
            fast local service across Ahilyanagar.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1a56db] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1447c0] hover:shadow-lg">
              <Wrench className="h-4 w-4" />
              Explore services
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1a56db]/40 hover:text-[#1a56db] hover:shadow-md">
              <Calendar className="h-4 w-4" />
              Book installation
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {heroFeatures.map(({ icon: Icon, title, bgColor, iconColor }) => (
              <div key={title} className="flex items-center gap-2.5 rounded-full border border-slate-100 bg-white/85 px-3.5 py-2 shadow-sm backdrop-blur-sm">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${bgColor}`}>
                  <Icon className={`h-4 w-4 ${iconColor}`} strokeWidth={2.2} />
                </span>
                <span className="text-[12.5px] font-semibold text-slate-700">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="relative z-10 lg:hidden">

        {/* Badge — pinned top left */}
        <div className="px-5 pt-5">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1a56db] backdrop-blur-sm">
            <BadgeCheck className="h-3.5 w-3.5" />
            Eureka Forbes Authorised Service Centre
          </div>
        </div>

        {/* Content pushed down with padding-top so man+filter shows above */}
        <div className="flex flex-col items-start px-5 pb-8" style={{ paddingTop: "52vw" }}>
          <h1 className="text-[1.85rem] font-extrabold tracking-tight text-slate-900" style={{ lineHeight: 1.15 }}>
            Delivering Purity,<br />
            <span className="text-[#1a56db]">Ensuring Quality</span>
          </h1>
          <div className="mt-4 flex w-full flex-col gap-3">
            <a href="#services" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1a56db] px-6 py-3.5 text-sm font-bold text-white shadow-md active:scale-95">
              <Wrench className="h-4 w-4" />
              Explore services
            </a>
            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm active:scale-95">
              <Calendar className="h-4 w-4" />
              Book installation
            </a>
          </div>
          <div className="mt-4 flex flex-col items-start gap-2 w-full">
            {heroFeatures.map(({ icon: Icon, title, bgColor, iconColor }) => (
              <div key={title} className="flex items-center gap-2.5 rounded-full border border-slate-100 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${bgColor}`}>
                  <Icon className={`h-3.5 w-3.5 ${iconColor}`} strokeWidth={2.2} />
                </span>
                <span className="text-[12px] font-semibold text-slate-700">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6 md:hidden print:hidden">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/919834085883"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_-10px_oklch(0.65_0.2_150)] ring-2 ring-white/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-[0_18px_44px_-10px_oklch(0.7_0.22_150)] active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
      <a
        aria-label="Call Janhavi Enterprises"
        href="tel:9834085883"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-white shadow-[0_14px_32px_-10px_oklch(0.65_0.2_30)] ring-2 ring-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-10px_oklch(0.7_0.22_25)] active:scale-95"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8 xl:px-16">
        {/* Logo */}
        <a href="#" className="group flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#1a56db] shadow-md transition-transform duration-300 group-hover:scale-105">
            <Droplets className="h-5 w-5 text-white" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-extrabold leading-tight tracking-tight text-slate-900">
              Janhavi Enterprises
            </span>
            <span className="block truncate text-[10px] font-semibold text-slate-500">
              Aquaguard · Eureka Forbes
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#1a56db] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-[#1a56db] after:transition-all after:duration-200 hover:after:w-5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919834085883"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d] hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="tel:9834085883"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#1a56db] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1447c0] hover:shadow-md"
          >
            <Phone className="h-4 w-4" />
            Call now
          </a>
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="w-full px-4 py-3 sm:px-6 lg:px-8 xl:px-16">
          <ul className="grid gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-[#1a56db]"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 pb-2">
            <a
              href="https://wa.me/919834085883"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="tel:9834085883"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#1a56db] px-4 py-2.5 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" />
              Call now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
