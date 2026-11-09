import type { ReactNode } from "react";

/* ---------- small building blocks ---------- */

// Highlighted word inside an example sentence
export function Hl({ children }: { children: ReactNode }) {
  return (
    <strong className="rounded bg-brand-50 px-1 font-semibold text-brand-700">
      {children}
    </strong>
  );
}

export function SectionTitle({ emoji, children }: { emoji: string; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 border-b border-slate-200 pb-3 text-2xl font-bold text-slate-900">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-lg text-white">
        {emoji}
      </span>
      {children}
    </h2>
  );
}

export function SubTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-slate-800">{children}</h3>;
}

// One example line with a correct / incorrect badge
export function Example({ en, th, ok = true }: { en: ReactNode; th?: string; ok?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-label={ok ? "correct" : "incorrect"}
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-bold ${
          ok ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
        }`}
      >
        {ok ? "✓" : "✕"}
      </span>
      <span className="text-slate-800">
        {en}
        {th && <span className="block text-sm text-slate-500">{th}</span>}
      </span>
    </li>
  );
}

export function ExampleList({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2.5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {children}
    </ul>
  );
}

const calloutTones = {
  info: "border-sky-200 bg-sky-50 text-sky-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
} as const;

export function Callout({
  tone,
  title,
  children,
}: {
  tone: keyof typeof calloutTones;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className={`rounded-xl border p-4 ${calloutTones[tone]}`}>
      <p className="font-semibold">{title}</p>
      {children && <div className="mt-2 text-sm leading-relaxed">{children}</div>}
    </div>
  );
}

export function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Small monospace tag, e.g. "walk → walked"
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-700">
      {children}
    </span>
  );
}

// Numbered card holding example lines (use <Example> as children)
export function UsageCard({
  n,
  title,
  note,
  children,
}: {
  n: number;
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">
          {n}
        </span>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      {note && <p className="mt-2 text-sm text-slate-500">{note}</p>}
      <ul className="mt-3 space-y-2.5">{children}</ul>
    </div>
  );
}

// Row of pills: English word + Thai meaning
export function PillList({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([en, th]) => (
        <span
          key={en}
          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm"
        >
          <code className="font-semibold text-brand-700">{en}</code>{" "}
          <span className="text-slate-500">({th})</span>
        </span>
      ))}
    </div>
  );
}