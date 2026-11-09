import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useMatch } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface NavItem {
  to: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "All Courses" },
];

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-brand-50 text-brand-700"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");

const mobileLink = ({ isActive }: { isActive: boolean }) =>
  [
    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
    isActive
      ? "bg-brand-50 text-brand-700"
      : "text-slate-700 hover:bg-slate-100",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  // Hooks must be called inside the component
  const isCoursePage = useMatch("/course/:id") !== null;

  // Close the mobile menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
          {/* Back button: only on a course page */}
          {isCoursePage && (
            <>
              <Link
                to="/courses"
                aria-label="Back to all courses"
                className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <ArrowLeft size={18} aria-hidden="true" />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <span aria-hidden="true" className="h-6 w-px bg-slate-200" />
            </>
          )}

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-slate-900"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
              L
            </span>
            Learning All Langs
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={desktopLink}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 md:inline-block"
        >
          Get started
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-2 focus:outline-brand-500 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-200 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 border-t border-slate-200 px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={mobileLink}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                tabIndex={open ? 0 : -1}
                className="block rounded-md bg-brand-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-brand-700"
              >
                Get started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}