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
  Sparkles,
  Star,
  Wrench,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import partsPoster from "@/assets/website_section.png";
import robotImage from "@/assets/robo.webp";
import storeImage from "@/assets/store.png";
import wholeHouseImage from "@/assets/whole-house-filter.png";
import heroDesktop from "@/assets/pc_hero.png";
import heroMobile from "@/assets/mobile_hero.png";
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

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden">
        <div className="site-noise pointer-events-none absolute inset-0" />
        <SiteNavbar />

        <HeroSection />
        <ContactStrip />

        <section className="border-b border-border/60 bg-secondary/35" id="about">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_1.05fr] lg:px-8 lg:py-24">
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
              <h2 className="section-title mt-4 max-w-2xl">
                Ahilyanagar's Most Trusted Water Purifier Experts
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                Janhavi Enterprises has been serving Ahilyanagar and surrounding districts for
                over 20 years. As an Eureka Forbes Authorised Service Centre, we provide genuine
                parts, certified technicians, and reliable after-sales support for all major
                water purifier brands.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
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
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="section-kicker">Water filter models</p>
              <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="section-title max-w-2xl">
                  Scroll through a curated range of Aquaguard purifier models.
                </h2>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                  Built as a horizontal showcase so visitors can compare design, use case, and
                  placement style without the section feeling static.
                </p>
              </div>
            </div>

            <div className="product-scroller mt-10 flex gap-5 overflow-x-auto pb-4">
              {products.map((product, index) => (
                <article
                  key={product.name}
                  className="product-card group flex min-h-[31rem] w-[18.75rem] shrink-0 flex-col justify-between rounded-[calc(var(--radius)+18px)] border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {product.type}
                      </span>
                      <Star className="h-4 w-4 text-primary/60" />
                    </div>
                    <div className="mt-5 grid place-items-center rounded-[calc(var(--radius)+10px)] bg-secondary/45 p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-72 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-extrabold text-foreground">{product.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.detail}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Ask for availability
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background" id="services">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
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
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="section-kicker">Robot cleaner section</p>
              <h2 className="section-title mt-4 max-w-2xl">
                Smart cleaning robots deserve their own premium showcase.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
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
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_minmax(0,1.08fr)]">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border/70 bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={wholeHouseImage}
                    alt="Whole house water filter system parts layout"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border/70 bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={partsPoster}
                    alt="Aquaguard filter awareness poster about genuine long-life filters"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="section-kicker">Parts and filter education</p>
                <h2 className="section-title mt-4 max-w-2xl">
                  Turn spare parts into a trust-building section, not just an image.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  This section explains why genuine replacement parts, filter stages, and complete
                  system care matter. It helps position Janhavi Enterprises as both a seller and a
                  knowledgeable service provider, which is stronger for conversions and better for
                  AI-driven search summaries.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Pre-filter",
                      description: "Captures visible sediment before deeper treatment stages.",
                      stage: "Stage 01",
                      icon: Filter,
                      accent: "from-sky-500/15 to-cyan-400/5",
                      ring: "ring-sky-400/30",
                      iconBg: "bg-sky-500/10 text-sky-600 dark:text-sky-300",
                      meta: "Sediment · Rust · Sand",
                    },
                    {
                      title: "Main filter",
                      description: "Supports core purification performance and water quality.",
                      stage: "Stage 02",
                      icon: Droplets,
                      accent: "from-primary/20 to-indigo-400/5",
                      ring: "ring-primary/30",
                      iconBg: "bg-primary/10 text-primary",
                      meta: "RO · UV · UF core",
                    },
                    {
                      title: "Post-filter",
                      description: "Improves taste and finishing quality after purification.",
                      stage: "Stage 03",
                      icon: Sparkles,
                      accent: "from-emerald-500/15 to-teal-400/5",
                      ring: "ring-emerald-400/30",
                      iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
                      meta: "Taste · Odour polish",
                    },
                    {
                      title: "Pressure tank",
                      description: "Supports balanced storage and dispensing in larger systems.",
                      stage: "Stage 04",
                      icon: PackageCheck,
                      accent: "from-amber-500/15 to-orange-400/5",
                      ring: "ring-amber-400/30",
                      iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
                      meta: "Storage · Flow balance",
                    },
                  ].map(({ title, description, stage, icon: Icon, accent, ring, iconBg, meta }, idx) => (
                    <article
                      key={title}
                      className={`group relative overflow-hidden rounded-[calc(var(--radius)+10px)] border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)] ring-1 ${ring} ${idx % 2 === 1 ? "sm:translate-y-4" : ""}`}
                    >
                      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`} />
                      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-foreground/[0.03] blur-2xl transition-transform duration-700 group-hover:scale-125" />
                      <div className="relative flex items-start justify-between gap-3">
                        <div className={`grid h-11 w-11 place-items-center rounded-xl ${iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                          {stage}
                        </span>
                      </div>
                      <h3 className="relative mt-5 text-lg font-extrabold tracking-tight text-foreground">
                        {title}
                      </h3>
                      <p className="relative mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                      <div className="relative mt-5 flex items-center gap-2 border-t border-border/60 pt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                        {meta}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-secondary/30" id="why-us">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-0 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left: text content */}
        <div className="py-14 pr-0 lg:py-20 lg:pr-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1a56db]">
            <BadgeCheck className="h-3.5 w-3.5" />
            Eureka Forbes Authorised Service Centre
          </div>

          {/* Headline */}
          <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem]">
            Delivering Purity,{" "}
            <span className="text-[#1a56db]">Ensuring Quality</span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
            Janhavi Enterprises helps homes and businesses choose, install, and maintain
            Aquaguard and Eureka Forbes products with owner-led support, genuine filters, and
            fast local service across Ahilyanagar.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1a56db] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1447c0] hover:shadow-lg"
            >
              <Wrench className="h-4 w-4" />
              Explore services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1a56db]/40 hover:text-[#1a56db] hover:shadow-md"
            >
              <Calendar className="h-4 w-4" />
              Book installation
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {heroFeatures.map(({ icon: Icon, title, bgColor, iconColor }) => (
              <div
                key={title}
                className="flex items-center gap-2.5 rounded-full border border-slate-100 bg-white px-3.5 py-2 shadow-sm"
              >
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${bgColor}`}>
                  <Icon className={`h-4 w-4 ${iconColor}`} strokeWidth={2.2} />
                </span>
                <span className="text-[12.5px] font-semibold text-slate-700">{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero image flush to edge */}
        <div className="relative hidden h-full min-h-[520px] lg:block">
          <img
            src={heroDesktop}
            alt="Janhavi Enterprises technician installing an Aquaguard water purifier"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
          />
          {/* subtle left fade to merge with white bg */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        </div>
      </div>

      {/* Mobile image strip */}
      <div className="lg:hidden">
        <img
          src={heroMobile}
          alt="Janhavi Enterprises Aquaguard service"
          className="h-56 w-full object-cover object-top sm:h-72"
          loading="eager"
        />
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <div className="border-y border-slate-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:gap-0 sm:divide-x sm:divide-slate-100">

          {/* Label */}
          <div className="flex items-start gap-3 sm:pr-8">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1a56db]">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">Talk to Janhavi Enterprises</p>
              <p className="mt-0.5 text-xs text-slate-500 max-w-[180px]">
                Call, WhatsApp, or visit. Open every day 9 AM – 9 PM.
              </p>
            </div>
          </div>

          {/* Primary phone */}
          <a
            href="tel:+919834085883"
            className="group flex items-center gap-2.5 sm:px-8 transition-colors hover:text-[#1a56db]"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1a56db] transition-colors group-hover:bg-[#1a56db] group-hover:text-white">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Primary</p>
              <p className="text-sm font-bold text-slate-800 group-hover:text-[#1a56db]">+91 98340 85883</p>
            </div>
          </a>

          {/* Alternate phone */}
          <a
            href="tel:+917218142702"
            className="group flex items-center gap-2.5 sm:px-8 transition-colors hover:text-[#1a56db]"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1a56db] transition-colors group-hover:bg-[#1a56db] group-hover:text-white">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Alternate</p>
              <p className="text-sm font-bold text-slate-800 group-hover:text-[#1a56db]">+91 72181 42702</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919834085883"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 sm:px-8 transition-colors"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-50 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
              <MessageCircle className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Fastest reply</p>
              <p className="text-sm font-bold text-slate-800 group-hover:text-[#25D366]">Chat on WhatsApp</p>
            </div>
          </a>

          {/* Hours */}
          <div className="flex items-center gap-2.5 sm:px-8">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1a56db]">
              <Clock className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-800">9 AM – 9 PM</p>
              <p className="text-xs text-slate-400">All days · Walk-ins welcome</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2.5 sm:pl-8">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1a56db]">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-800">Ahilyanagar, MH</p>
              <p className="text-xs text-slate-400">City &amp; surrounding districts</p>
            </div>
          </div>

        </div>
      </div>
    </div>
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
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
        <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
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
