import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Zap,
  Users,
  Clock,
  Award,
  Play,
  ChevronDown,
  Star,
  Check,
  ShieldCheck,
  Rocket,
  Code2,
  Database,
  Layers,
} from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { RegisterModal } from "@/components/RegisterModal";
import sqlCourse from "@/assets/course-sql.png";
import pythonCourse from "@/assets/course-python.png";
import sigmaCourse from "@/assets/course-sigma.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const courses = [
  {
    icon: Database,
    title: "Think SQL: Zero to Hero",
    subtitle: "SQL for Data Analytics",
    image: sqlCourse,
    bullets: [
      "15+ in-depth recorded sessions",
      "50+ FAANG SQL interview problems",
      "2 portfolio projects on real datasets",
      "Intro to Tableau included",
    ],
    tag: "Recorded",
  },
  {
    icon: Code2,
    title: "Data Structures with Python",
    subtitle: "Master DSA in Python",
    image: pythonCourse,
    bullets: [
      "Tracks-based structured learning",
      "Diverse coding problems per topic",
      "Premium lecture videos",
      "Completion certificate",
    ],
    tag: "Online Course",
  },
  {
    icon: Layers,
    title: "SIGMA — DSA + Web Dev",
    subtitle: "Complete MERN Full-Stack",
    image: sigmaCourse,
    bullets: [
      "Projects: Zerodha, Airbnb, Zoom, ChatGPT",
      "Docker, Kubernetes, WebRTC, AWS",
      "1:1 Live Resume Correction",
      "Quant & Aptitude prep + 2 certificates",
    ],
    tag: "Flagship",
  },
];

const testimonials = [
  {
    name: "Ananya R.",
    role: "Data Analyst @ Flipkart",
    text: "Cleared 3 SQL rounds back-to-back. The interview problems were basically what I was asked in real interviews.",
    rating: 5,
  },
  {
    name: "Rohan K.",
    role: "SDE-1 @ Razorpay",
    text: "The SIGMA track is unreal for the price. The MERN projects gave me actual talking points in interviews.",
    rating: 5,
  },
  {
    name: "Meera S.",
    role: "CS Final Year, IIIT",
    text: "I paid ₹119 and got more than what my seniors paid ₹15k for elsewhere. No-brainer.",
    rating: 5,
  },
  {
    name: "Vikram T.",
    role: "Software Engineer",
    text: "Docker + Kubernetes module alone was worth 10x the price. Clear, hands-on, no fluff.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is this really ₹119 for all 3 courses?",
    a: "Yes. This is a one-time launch offer for the first 1000 students. After that, the price returns to ₹8,000. No hidden fees, no upsells.",
  },
  {
    q: "How long do I have access?",
    a: "Lifetime access to all recorded content, updates, and the private community. You can revisit anytime.",
  },
  {
    q: "Do I need prior programming experience?",
    a: "No. All three courses start from absolute scratch and ramp up to advanced concepts.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes, you receive completion certificates for each course, trusted by hiring partners.",
  },
  {
    q: "What if I don't like it?",
    a: "We offer a 7-day no-questions-asked refund. Just email us and we'll process it.",
  },
  {
    q: "How is payment handled?",
    a: "Payments are processed securely via Razorpay — UPI, Cards, Netbanking, and Wallets are supported.",
  },
];

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [seatsLeft, setSeatsLeft] = useState(147);

  useEffect(() => {
    // Simulate slow seat drop for social proof
    const id = setInterval(() => {
      setSeatsLeft((s) => (s > 27 ? s - 1 : s));
    }, 45_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] hero-glow" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      {/* Announcement bar */}
      <div className="relative z-10 border-b border-white/5 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:text-sm">
          <Sparkles className="h-4 w-4 shrink-0 text-primary" />
          <span className="text-muted-foreground">
            Launch pricing ends soon —{" "}
            <span className="font-semibold text-foreground">Only {seatsLeft} seats left</span> at
            ₹119
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-5 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-bg">
              <Rocket className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="truncate font-[Sora] text-lg font-bold">CodeSprint</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#courses" className="hover:text-foreground">Courses</a>
            <a href="#curriculum" className="hover:text-foreground">Curriculum</a>
            <a href="#instructor" className="hover:text-foreground">Instructor</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <button
            onClick={() => setModalOpen(true)}
            className="shrink-0 rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
          >
            Get for ₹119
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">
                Live now · First{" "}
                <span className="font-semibold text-foreground">1000 students</span> only
              </span>
            </div>

            <h1 className="mt-5 font-[Sora] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Master{" "}
              <span className="gradient-text">SQL, Python DSA</span> &{" "}
              <span className="gradient-text">Full-Stack</span> —
              <br className="hidden sm:block" /> for the price of coffee.
            </h1>

            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              3 flagship courses. 100+ hours of content. Real interview problems. Lifetime access.
              Launch offer for the first 1000 seats.
            </p>

            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="font-[Sora] text-5xl font-black gradient-text sm:text-6xl">
                ₹119
              </span>
              <span className="text-xl text-muted-foreground line-through decoration-destructive/70 decoration-2 sm:text-2xl">
                ₹8,000
              </span>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                98% OFF
              </span>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Offer expires in
              </p>
              <CountdownTimer />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="animate-pulse-glow group flex items-center gap-2 rounded-xl gradient-bg px-7 py-4 text-base font-bold text-primary-foreground shadow-xl transition hover:opacity-95"
              >
                Pay ₹119 & Register Now
                <Zap className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <a href="#courses" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
                <Play className="h-4 w-4" /> See what you get
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> 7-day money back
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" /> 12,400+ students
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary text-primary" /> 4.9 average rating
              </div>
            </div>
          </motion.div>

          {/* Hero card stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] gradient-bg opacity-30 blur-2xl" />
              <div className="glass relative rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Bundle · 3 courses
                  </span>
                  <span className="text-xs text-muted-foreground">Lifetime</span>
                </div>
                <div className="mt-5 space-y-3">
                  {courses.map((c, i) => (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3"
                    >
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-bg">
                        <c.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{c.title}</p>
                        <p className="truncate text-xs text-muted-foreground">{c.subtitle}</p>
                      </div>
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      Total value
                    </p>
                    <p className="text-lg font-bold text-muted-foreground line-through">
                      ₹8,000
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-widest text-primary">
                      You pay
                    </p>
                    <p className="font-[Sora] text-3xl font-black gradient-text">₹119</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
          {[
            { k: "12,400+", v: "Students enrolled" },
            { k: "100+ hrs", v: "Video content" },
            { k: "500+", v: "Interview problems" },
            { k: "4.9 / 5", v: "Average rating" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <p className="font-[Sora] text-2xl font-bold gradient-text sm:text-3xl">{s.k}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            What you get
          </p>
          <h2 className="mt-2 font-[Sora] text-3xl font-bold sm:text-4xl">
            3 premium courses, one launch price
          </h2>
          <p className="mt-3 text-muted-foreground">
            Handpicked flagship programs — SQL for analytics, Python DSA, and full-stack MERN.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl transition hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-[Sora] text-xl font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.subtitle}</p>
                <ul className="mt-4 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Curriculum
          </p>
          <h2 className="mt-2 font-[Sora] text-3xl font-bold sm:text-4xl">
            A path from zero to job-ready
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {[
            {
              n: "01",
              t: "Foundations",
              d: "SQL syntax, Python fundamentals, Git & GitHub, terminal basics.",
            },
            {
              n: "02",
              t: "Data & Algorithms",
              d: "Data structures in Python, algorithmic thinking, 200+ curated problems.",
            },
            {
              n: "03",
              t: "SQL for Analytics",
              d: "Advanced joins, window functions, FAANG interview problems, Tableau intro.",
            },
            {
              n: "04",
              t: "Full-Stack Web Dev",
              d: "React, Node, Express, MongoDB. Auth, deployments, and production patterns.",
            },
            {
              n: "05",
              t: "Real-World Projects",
              d: "Clone Zerodha, Airbnb, Zoom, ChatGPT — full end-to-end builds.",
            },
            {
              n: "06",
              t: "Infra & Interview Prep",
              d: "Docker, Kubernetes, AWS basics, WebRTC. Mock interviews & resume review.",
            },
          ].map((m) => (
            <div
              key={m.n}
              className="glass grid grid-cols-[auto_1fr] items-start gap-4 rounded-2xl p-5 transition hover:border-primary/40 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6"
            >
              <span className="font-[Sora] text-2xl font-black gradient-text sm:text-3xl">
                {m.n}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground">{m.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
              </div>
              <ChevronDown className="hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section id="instructor" className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="glass grid gap-8 rounded-3xl p-8 md:grid-cols-[280px_1fr] md:items-center md:p-12">
          <div className="relative mx-auto aspect-square w-48 md:w-full">
            <div className="absolute -inset-2 rounded-full gradient-bg opacity-40 blur-xl" />
            <div className="relative grid h-full w-full place-items-center rounded-full gradient-bg text-6xl font-black text-primary-foreground">
              AS
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Your Instructor
            </p>
            <h2 className="mt-2 font-[Sora] text-3xl font-bold sm:text-4xl">Aditya Sharma</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Ex-Amazon · Ex-Uber · 10+ years shipping data & full-stack systems
            </p>
            <p className="mt-4 text-foreground/90">
              I've spent a decade interviewing engineers at top product companies. These 3 courses
              are the exact playbook I wish I'd had when I started — condensed, no fluff, and
              built around what actually gets people hired.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>10+ yrs experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Mentored 12,400+ devs</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span>4.9 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Loved by learners
          </p>
          <h2 className="mt-2 font-[Sora] text-3xl font-bold sm:text-4xl">
            Real students. Real outcomes.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="glass flex flex-col rounded-2xl p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm text-foreground/90">"{t.text}"</p>
              <div className="mt-4 border-t border-white/5 pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-3xl px-4 py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-2 font-[Sora] text-3xl font-bold sm:text-4xl">
            Questions, answered.
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition ${open ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-32 pt-8">
        <div className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 hero-glow" />
          <div className="relative">
            <h2 className="font-[Sora] text-3xl font-bold sm:text-5xl">
              Only <span className="gradient-text">{seatsLeft} seats</span> left at{" "}
              <span className="gradient-text">₹119</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Lock in lifetime access before the timer hits zero. Price jumps back to ₹8,000 after
              1000 registrations.
            </p>
            <div className="mt-8 flex justify-center">
              <CountdownTimer />
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="animate-pulse-glow mt-8 rounded-xl gradient-bg px-8 py-4 text-base font-bold text-primary-foreground shadow-xl"
            >
              Pay ₹119 & Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} CodeSprint. All rights reserved. · Secure payments by Razorpay
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 p-3 backdrop-blur-xl sm:p-4">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="hidden min-w-0 flex-1 sm:block">
            <div className="flex items-baseline gap-2">
              <span className="font-[Sora] text-xl font-black gradient-text">₹119</span>
              <span className="text-sm text-muted-foreground line-through">₹8,000</span>
              <span className="ml-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> Only {seatsLeft} seats left
              </span>
            </div>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="animate-pulse-glow flex flex-1 items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg sm:flex-none sm:px-8"
          >
            Pay ₹119 & Register Now <Zap className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Spacer for sticky CTA */}
      <div className="h-24" />

      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
