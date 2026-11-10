import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowBigLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Grammar01 from "./langsCourse/English/Grammar01";
import { Link } from "react-router-dom";
import Grammar02 from "./langsCourse/English/Grammar02";
import Grammar03 from "./langsCourse/English/Grammar03";
import Grammar04 from "./langsCourse/English/Grammar04";
import Grammar05 from "./langsCourse/English/Grammar05";
import Grammar06 from "./langsCourse/English/Grammar06";
import Vocab01 from "./langsCourse/English/Vocab01";
import GrammarVocab01 from "./langsCourse/English/GrammarVocab01";
import Vocab02 from "./langsCourse/English/Vocab02";

const lessons = [
  { id: "G01", title: "Present Simple Tense" },
  { id: "G02", title: "Past Simple Tense" },
  { id: "G03", title: "Present Continuous Tense" },
  { id: "G04", title: "Verb Have/Has" },
  { id: "G05", title: "The Article A/An/The" },
  { id: "G06", title: "Date and Times" },
  { id: "V01", title: "Prefix Suffix" },
  { id: "GV01", title: "Giving opinions" },
  { id: "V02", title: "Agreeing and disagreeing" },
];

function English() {
  const [activeId, setActiveId] = useState(lessons[0].id);
  const active = lessons.find((l) => l.id === activeId) ?? lessons[0];

  const navRef = useRef<HTMLElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  // เช็กว่ามีแท็บซ่อนอยู่ซ้าย/ขวาหรือไม่
  const updateArrows = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      observer.disconnect();
    };
  }, [updateArrows]);

  // เลื่อนแท็บที่เลือกให้มาอยู่กลางแถบ (เลื่อนเฉพาะแถบ ไม่ดึงทั้งหน้า)
  useEffect(() => {
    const el = navRef.current;
    const btn = el?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!el || !btn) return;
    el.scrollTo({
      left: btn.offsetLeft - (el.clientWidth - btn.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  const scrollByStep = (dir: 1 | -1) => {
    const el = navRef.current;
    el?.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div className="">       
     
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
        
        

        {/* Sidebar */}
        <aside className=" relative md:w-64 md:shrink-0">
          {canLeft && (
            <button
              type="button"
              aria-label="Scroll lessons left"
              onClick={() => scrollByStep(-1)}
              className="absolute -left-2 lg:-left-7 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md hover:bg-slate-100 md:hidden"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
          )}
          

          <nav
            ref={navRef}
            aria-label="Lessons"
            className="relative flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:sticky md:top-20 md:flex-col md:overflow-visible md:rounded-xl md:border md:border-slate-200 md:bg-white md:p-3 md:shadow-sm"
          >
            <h1 className="text-xl hidden lg:block font-bold text-slate-900 mb-2 text-center ">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-linear-to-r from-blue-400 to-blue-600 text-white p-2 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <p>English Course</p>
              </div>
            </h1>
            {lessons.map((lesson) => {
              const isActive = lesson.id === activeId;
              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => setActiveId(lesson.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`whitespace-nowrap rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sky-600 text-sky-50"
                      : "border border-slate-200 rounded-full hover:bg-slate-100 cursor-pointer bg-blue-100 text-blue-800"
                  }`}
                >
                  {lesson.title}
                </button>
              );
            })}
          </nav>
          {canRight && (
            <button
              type="button"
              aria-label="Scroll lessons right"
              onClick={() => scrollByStep(1)}
              className="absolute -right-2 lg:-right-8 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md hover:bg-slate-100 md:hidden"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          )}
        </aside>

        {/* Content */}
        <section className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          {/* <h2 className="text-xl font-semibold text-slate-900">{active.title}</h2> */}
          <div>
            {active.id === "G01" && <Grammar01 />}
            {active.id === "G02" && <Grammar02 />}
            {active.id === "G03" && <Grammar03 />}
            {active.id === "G04" && <Grammar04 />}
            {active.id === "G05" && <Grammar05 />}
            {active.id === "G06" && <Grammar06 />}
            {active.id === "V01" && <Vocab01 />}
            {active.id === "GV01" && <GrammarVocab01 />}
            {active.id === "V02" && <Vocab02 />}
          </div>
        </section>
      </div>
    </div>
  );
}

export default English;
