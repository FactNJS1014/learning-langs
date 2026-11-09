import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Atom,
  Braces,
  Check,
  FileCode,
  Flame,
  Languages,
  Layers,
  Mountain,
  Server,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";

/* ---------- data ---------- */

const INK = "text-[#12143A]";

const SLIDES = [
  { id: "title", label: "Welcome" },
  { id: "courses", label: "Courses" },
  { id: "lessons", label: "Lessons" },
  { id: "start", label: "Start" },
];

// The same word, said in five languages. The hero cycles through these rows.
const HELLO_ROWS = [
  { tag: "EN", text: "Hello, world", code: false },
  { tag: "TH", text: "สวัสดีชาวโลก", code: false },
  { tag: "JS", text: 'console.log("Hello")', code: true },
  { tag: "PHP", text: 'echo "Hello";', code: true },
  { tag: "PY", text: 'print("Hello")', code: true },
];

interface Language {
  name: string;
  kind: "Human language" | "Programming";
  tagline: string;
  icon: LucideIcon;
  color: string;
}

const LANGUAGES: Language[] = [
  { name: "English", kind: "Human language", tagline: "Grammar, vocabulary and everyday sentences", icon: Languages, color: "from-sky-500 to-indigo-600" },
  { name: "React JS", kind: "Programming", tagline: "Components, hooks and routing", icon: Atom, color: "from-cyan-400 to-sky-600" },
  { name: "Node.js", kind: "Programming", tagline: "JavaScript on the server", icon: Server, color: "from-green-500 to-emerald-700" },
  { name: "Vue", kind: "Programming", tagline: "Reactive interfaces, step by step", icon: Layers, color: "from-emerald-400 to-teal-600" },
  { name: "Nuxt", kind: "Programming", tagline: "Vue apps with routing built in", icon: Mountain, color: "from-teal-400 to-cyan-700" },
  { name: "Laravel", kind: "Programming", tagline: "The PHP framework for full apps", icon: Flame, color: "from-red-500 to-rose-700" },
  { name: "PHP", kind: "Programming", tagline: "Server-side basics", icon: FileCode, color: "from-indigo-400 to-violet-700" },
  { name: "JavaScript", kind: "Programming", tagline: "The language of the web", icon: Braces, color: "from-yellow-400 to-amber-600" },
  { name: "Python", kind: "Programming", tagline: "Readable code for scripts and data", icon: Terminal, color: "from-blue-500 to-sky-700" },
];

const STEPS = [
  { title: "Pick a course", text: "Choose English or any programming language from the course list." },
  { title: "Open a lesson", text: "Lessons sit in a sidebar. Jump to any of them, in any order." },
  { title: "Check the examples", text: "Right and wrong examples sit side by side, so the mistake is easy to spot." },
];

const SAMPLE_LESSONS = [
  "Present Simple Tense",
  "Past Simple Tense",
  "Present Continuous Tense",
  "Verb Have",
  "Articles",
];

/* ---------- hooks ---------- */

// Which slide is in the middle of the screen (drives the dot navigation)
function useActiveSlide() {
  const [active, setActive] = useState(SLIDES[0].id);

  useEffect(() => {
    const elements = SLIDES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

// Moves the highlight down the "hello" rows every couple of seconds
function useHighlightRow(length: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % length), 1900);
    return () => window.clearInterval(timer);
  }, [length]);

  return index;
}

/* ---------- building blocks ---------- */

const tones = {
  light: "bg-white ring-1 ring-[#12143A]/10",
  tint: "bg-[#EEF0FF] ring-1 ring-[#4F46E5]/10",
  dark: "bg-[#12143A] text-white",
} as const;

function Slide({
  id,
  tone,
  full = false,
  children,
}: {
  id: string;
  tone: keyof typeof tones;
  /** Fill the screen on desktop (used for the title slide only) */
  full?: boolean;
  children: ReactNode;
}) {
  const position = SLIDES.findIndex((s) => s.id === id) + 1;
  const label = SLIDES[position - 1].label;

  return (
    <section
      id={id}
      aria-label={label}
      className={`relative flex scroll-mt-20 items-center overflow-hidden rounded-3xl shadow-sm ${
        full ? "lg:min-h-[calc(100svh-9rem)]" : ""
      } ${tones[tone]} ${tone === "dark" ? "" : INK}`}
    >
      <p
        className={`absolute right-5 top-4 font-mono text-xs tracking-wide ${
          tone === "dark" ? "text-white/50" : "text-[#12143A]/45"
        }`}
      >
        {position} / {SLIDES.length} · {label}
      </p>
      <div className="w-full p-6 pt-14 sm:p-10 sm:pt-16 lg:p-14">{children}</div>
    </section>
  );
}

function DotNav() {
  const active = useActiveSlide();

  return (
    <nav
      aria-label="Slides"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {SLIDES.map((s) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to ${s.label}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="group flex items-center justify-end gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          >
            <span className="rounded bg-[#12143A] px-2 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all ${
                isActive ? "h-6 w-2.5 bg-[#4F46E5]" : "h-2.5 w-2.5 bg-[#12143A]/25 group-hover:bg-[#12143A]/50"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}

/* ---------- slides ---------- */

function TitleSlide() {
  const row = useHighlightRow(HELLO_ROWS.length);

  return (
    <Slide id="title" tone="light" full>
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <p className="text-sm font-medium text-[#4F46E5]">Learning All Langs · Course deck</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Say{" "}
            <mark className="rounded-md bg-[#FFD84D] px-2 text-[#12143A]">hello</mark> in every
            language.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            English and programming courses made of short lessons. Read the slide, check the
            examples, move to the next one.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#12143A] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#4F46E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Browse all courses
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() =>
                document.getElementById("lessons")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-[#12143A]/20 px-6 py-3.5 font-semibold transition-colors hover:bg-[#12143A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              See how lessons work
            </button>
          </div>
        </div>

        {/* Same word, five languages */}
        <figure className="rounded-2xl bg-[#12143A] p-5 text-white shadow-xl sm:p-6">
          <figcaption className="mb-4 font-mono text-xs uppercase tracking-widest text-white/50">
            Same word, five languages
          </figcaption>
          <ul className="space-y-2">
            {HELLO_ROWS.map((r, i) => {
              const isActive = i === row;
              return (
                <li
                  key={r.tag}
                  className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300 ${
                    isActive ? "bg-[#FFD84D] text-[#12143A]" : "bg-white/5 text-white/80"
                  }`}
                >
                  <span className="w-9 shrink-0 font-mono text-xs font-bold opacity-70">{r.tag}</span>
                  <span className={r.code ? "font-mono text-sm sm:text-base" : "text-base sm:text-lg"}>
                    {r.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </figure>
      </div>
    </Slide>
  );
}

function CoursesSlide() {
  return (
    <Slide id="courses" tone="tint">
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {LANGUAGES.length} courses. Pick one language.
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Start with the language you need this week. Every course opens the same way, so switching
        later feels familiar.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LANGUAGES.map((lang) => {
          const Icon = lang.icon;
          return (
            <li key={lang.name}>
              <Link
                to="/courses"
                className="group flex h-full items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#12143A]/10 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br text-white ${lang.color}`}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-semibold">{lang.name}</span>
                  <span className="mt-0.5 block text-sm text-slate-600">{lang.tagline}</span>
                  <span className="mt-2 block font-mono text-[11px] uppercase tracking-wider text-[#4F46E5]">
                    {lang.kind}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="ml-auto mt-1 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#4F46E5]"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Slide>
  );
}

function LessonsSlide() {
  return (
    <Slide id="lessons" tone="light">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            One lesson at a time.
          </h2>
          <ol className="mt-8 space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#12143A] font-mono text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* A small preview of the real lesson layout */}
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-2xl border border-[#12143A]/10 bg-slate-50 shadow-lg sm:grid sm:grid-cols-[13rem_1fr]"
        >
          {/* Phones: lessons are a row of tabs. Wider screens: a sidebar. */}
          <div className="flex gap-1.5 overflow-hidden border-b border-[#12143A]/10 bg-white p-2.5 sm:block sm:space-y-1 sm:border-b-0 sm:border-r">
            {SAMPLE_LESSONS.map((l, i) => (
              <p
                key={l}
                className={`shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ${
                  i === 1 ? "bg-brand-50 text-brand-700" : "text-slate-500"
                }`}
              >
                {l}
              </p>
            ))}
          </div>
          <div className="p-4 sm:p-6">
            <div className="rounded-xl bg-linear-to-br from-brand-600 to-indigo-500 p-5 text-white">
              <p className="font-mono text-[10px] uppercase tracking-wider text-brand-100">
                Grammar · Lesson 2
              </p>
              <p className="mt-1 font-display text-xl font-bold">Past Simple Tense</p>
            </div>
            <ul className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-white p-4 text-base">
              <li className="flex items-center gap-2.5">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>
                  I <strong className="rounded bg-brand-50 px-1 text-brand-700">didn't go</strong> to the
                  party.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-700">
                  <X size={12} strokeWidth={3} />
                </span>
                <span>
                  I didn't <s>went</s> to the party.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function StartSlide() {
  return (
    <Slide id="start" tone="dark">
      <div className="max-w-3xl">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Pick one course.
          <br />
          Finish one lesson.
        </h2>
        <p className="mt-5 text-lg text-white/70">
          {LANGUAGES.length} courses are ready. The first lesson takes a few minutes.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFD84D] px-7 py-4 font-semibold text-[#12143A] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Choose a course
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Back to the first slide
          </button>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- page ---------- */

export default function Home() {
  return (
    <div className="space-y-8">
      <DotNav />
      <TitleSlide />
      <CoursesSlide />
      <LessonsSlide />
      <StartSlide />
    </div>
  );
}