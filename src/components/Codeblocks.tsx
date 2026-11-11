/* ---------- code block ---------- */
import { useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";

const TOKEN =
  /(\/\/.*$|'[^']*'|"[^"]*"|`[^`]*`|\buse[A-Z]\w*\b|\b(?:import|from|export|default|function|const|let|return|if|for|true|false)\b)/;

function tokenize(line: string): ReactNode[] {
  return line.split(TOKEN).map((part, i) => {
    if (i % 2 === 0) return part;
    if (part.startsWith("//"))
      return <span key={i} className="italic text-slate-500">{part}</span>;
    if (/^['"`]/.test(part))
      return <span key={i} className="text-emerald-300">{part}</span>;
    if (/^use[A-Z]/.test(part))
      return <span key={i} className="font-semibold text-amber-300">{part}</span>;
    return <span key={i} className="text-sky-300">{part}</span>;
  });
}

const codeTones = {
  neutral: { bar: "border-slate-600", label: null },
  good: {
    bar: "border-emerald-500",
    label: { text: "ใช้ useMemo", cls: "bg-emerald-500/15 text-emerald-300" },
  },
  bad: {
    bar: "border-rose-500",
    label: { text: "ไม่ใช้ useMemo", cls: "bg-rose-500/15 text-rose-300" },
  },
} as const;

export function CodeBlock({
  code,
  filename,
  tone = "neutral",
  highlight = [],
  badge,
}: {
  code: string;
  filename?: string;
  tone?: keyof typeof codeTones;
  /** overrides the default tone label, e.g. "ใช้ useCallback" */
  badge?: string;
  /** 1-based line numbers to highlight */
  highlight?: number[];
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/^\n|\n$/g, "").split("\n");
  const { bar, label } = codeTones[tone];
 
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked (insecure context, permissions): do nothing
    }
  };
 
  return (
    <figure className={`overflow-hidden rounded-xl border-t-4 bg-[#0F172A] text-slate-100 shadow-sm ${bar}`}>
      <figcaption className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2">
        <span className="flex min-w-0 items-center gap-2 text-xs">
          {filename && <span className="truncate font-mono text-slate-400">{filename}</span>}
          {(badge ?? label) && (
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 font-semibold ${
                label?.cls ?? "bg-white/10 text-slate-300"
              }`}
            >
              {badge ?? label?.text}
            </span>
          )}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs text-slate-300 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-brand-500"
        >
          {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <pre className="max-h-[32rem] overflow-auto py-3 text-[13px] leading-6">
        <code className="font-mono">
          {lines.map((line, i) => (
            <span
              key={i}
              className={`flex px-4 ${
                highlight.includes(i + 1) ? "bg-amber-300/10 shadow-[inset_3px_0_0_#FFD84D]" : ""
              }`}
            >
              <span aria-hidden="true" className="w-8 shrink-0 select-none pr-3 text-right text-slate-500">
                {i + 1}
              </span>
              <span className="whitespace-pre">{line === "" ? " " : tokenize(line)}</span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
 