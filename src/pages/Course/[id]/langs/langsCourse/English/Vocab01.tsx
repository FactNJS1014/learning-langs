import type { ReactNode } from "react";
import { Callout, Chip, DataTable, Hl, SectionTitle, SubTitle } from "../../../../../../components/Grammarblocks";

/* ---------- local helpers ---------- */

type Word = { word: string; pos?: string; th: string };

// One prefix/suffix with its meaning and a list of words
function WordCard({
  affix,
  meaning,
  th,
  words,
}: {
  affix: string;
  meaning: string;
  th: string;
  words: Word[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-brand-50 px-5 py-4">
        <p className="text-2xl font-bold text-brand-700">{affix}</p>
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-800">{meaning}</span> ({th})
        </p>
      </div>
      <ul className="divide-y divide-slate-100">
        {words.map((w) => (
          <li key={w.word} className="flex items-baseline gap-3 px-5 py-3">
            <span className="font-semibold text-slate-900">{w.word}</span>
            {w.pos && <span className="text-xs italic text-slate-400">{w.pos}</span>}
            <span className="ml-auto text-right text-slate-600">{w.th}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// A group of affixes that share one kind of meaning / function
function AffixGroup({
  title,
  desc,
  affixes,
  examples,
}: {
  title: string;
  desc?: string;
  affixes: string[];
  examples: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {desc && <p className="mt-1 text-sm text-slate-500">{desc}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {affixes.map((a) => (
          <span
            key={a}
            className="rounded-full bg-brand-100 px-2.5 py-0.5 font-mono text-sm font-semibold text-brand-700"
          >
            {a}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">เช่น</p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {examples.map((ex) => (
          <Chip key={ex}>{ex}</Chip>
        ))}
      </div>
    </div>
  );
}

// "hopeful — มีความหวัง" with the suffix coloured
function wordCell(stem: string, suffix: string, th: string): ReactNode {
  return (
    <>
      <span className="font-semibold text-slate-900">
        {stem}
        <span className="text-brand-700">{suffix}</span>
      </span>{" "}
      <span className="text-slate-500">— {th}</span>
    </>
  );
}

/* ---------- data ---------- */

const prefixGroups = [
  {
    title: "เปลี่ยนไปในทางตรงกันข้าม / ความหมายเชิงปฏิเสธ",
    affixes: ["a-", "im-", "in-", "ir-", "un-", "dis-"],
    examples: ["amoral", "impossible", "inconvenient", "irreparable", "unfair", "dislike"],
  },
  {
    title: "ความหมายเกี่ยวกับสถานที่ / ตำแหน่ง",
    affixes: ["super-", "sub-", "inter-"],
    examples: ["superstructure", "subway", "international"],
  },
  {
    title: "ความหมายเกี่ยวกับเวลา",
    affixes: ["pre-", "fore-", "post-"],
    examples: ["prehistory", "foretell", "post-war"],
  },
  {
    title: "ความหมายเกี่ยวกับจำนวน",
    affixes: ["mono-", "bi-", "tri-", "multi-"],
    examples: ["monopoly", "bicycle", "triangle", "multimedia"],
  },
];

const prefixA: Word[] = [
  { word: "amoral", pos: "adj.", th: "ไร้ศีลธรรม" },
  { word: "anonymous", pos: "adj.", th: "นิรนาม, ไม่เปิดเผย" },
  { word: "atypical", pos: "adj.", th: "ผิดแบบ, ผิดพวก, ผิดปกติ" },
  { word: "achromatic", pos: "adj.", th: "ไม่มีสี" },
  { word: "asymmetrical", pos: "adj.", th: "ไม่สมดุล, ไม่สมมาตร, ไม่ได้ส่วนสัด" },
  { word: "asymmetry", pos: "n.", th: "ไม่สมส่วนกัน" },
];

const prefixAnnu: Word[] = [
  { word: "annual", pos: "adj.", th: "ประจำปี" },
  { word: "anniversary", pos: "n.", th: "วันครบรอบปี" },
  { word: "biannual", pos: "adj.", th: "สองครั้งต่อปี" },
  { word: "annals", pos: "n.", th: "บันทึกเหตุการณ์ประจำปี" },
  { word: "millennium", pos: "n.", th: "วันครบรอบพันปี" },
];

const suffixGroups = [
  {
    title: "Noun suffixes",
    desc: "เติมแล้วเปลี่ยนให้เป็นคำนาม",
    affixes: ["-ee", "-er / -or", "-ness", "-sion / -tion"],
    examples: ["employee", "singer", "director", "happiness", "expression", "collection"],
  },
  {
    title: "Adjective suffixes",
    desc: "เติมแล้วเปลี่ยนให้เป็นคำคุณศัพท์",
    affixes: ["-able / -ible", "-ful", "-less", "-ly", "-ous"],
    examples: ["comfortable", "horrible", "beautiful", "hopeless", "daily", "fabulous"],
  },
  {
    title: "Verb suffixes",
    desc: "เติมแล้วเปลี่ยนให้เป็นคำกริยา",
    affixes: ["-ate", "-en", "-ify", "-ise / -ize"],
    examples: ["activate", "soften", "identify", "realise", "categorize"],
  },
  {
    title: "Adverb suffixes",
    desc: "เติมแล้วเปลี่ยนให้เป็นกริยาวิเศษณ์",
    affixes: ["-ly", "-ward(s)", "-wise"],
    examples: ["quickly", "forwards", "lengthwise"],
  },
];

// [stem, meaning with -ful, meaning with -less]
const fulLess: [string, string, string][] = [
  ["hope", "มีความหวัง", "สิ้นหวัง"],
  ["use", "มีประโยชน์", "ไร้ประโยชน์"],
  ["care", "ระมัดระวัง", "ไม่ใส่ใจ"],
  ["pain", "เจ็บปวด", "ไม่เจ็บปวด"],
  ["thought", "รอบคอบ", "สะเพร่า"],
  ["mind", "ให้ความสนใจ", "ไม่สนใจ"],
  ["power", "มีพลัง", "อ่อนแอ"],
  ["rest", "ผ่อนคลาย", "ร้อนใจ"],
];

/* ---------- page ---------- */

function Vocab01() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Vocabulary · Lesson 1
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Prefix &amp; Suffix</h1>
        <p className="mt-1 text-lg text-brand-100">อุปสรรคและปัจจัย</p>
        <p className="mt-4 max-w-2xl text-white/90">
          ส่วนที่เติมหน้าคำและท้ายคำเพื่อเปลี่ยนความหมายหรือหน้าที่ของคำศัพท์
          ช่วยให้เดาความหมายของคำใหม่ได้
        </p>
      </header>

      {/* 1. Prefix */}
      <section className="space-y-8">
        <SectionTitle emoji="1">Prefix — อุปสรรค</SectionTitle>
        <Callout tone="info" title="Prefix แปลว่า อุปสรรค — วางไว้ด้านหน้าคำศัพท์">
          ทำให้ความหมายของคำนั้นเปลี่ยนไป เช่น เปลี่ยนไปในทางตรงกันข้าม เปลี่ยนไปในทางที่แย่ลง
          หรือช่วยบอกตำแหน่ง เวลา และจำนวน
        </Callout>

        <div className="space-y-4">
          <SubTitle>กลุ่มความหมายของ Prefix</SubTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {prefixGroups.map((g) => (
              <AffixGroup key={g.title} {...g} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SubTitle>Prefix ที่ควรรู้</SubTitle>
          <WordCard affix="a-" meaning="not, without" th="ไม่" words={prefixA} />
          <WordCard affix="annu- / enni-" meaning="year" th="ปี" words={prefixAnnu} />
        </div>
      </section>

      {/* 2. Suffix */}
      <section className="space-y-8">
        <SectionTitle emoji="2">Suffix — ปัจจัย</SectionTitle>
        <Callout tone="info" title="Suffix แปลว่า ปัจจัย — วางไว้ด้านหลังคำศัพท์">
          ทำให้ความหมายชัดเจนขึ้น และส่วนใหญ่จะทำให้หน้าที่ของคำเปลี่ยนไปด้วย เช่น
          เปลี่ยนกริยาเป็นคำนาม หรือเปลี่ยนคำนามเป็นคำคุณศัพท์
        </Callout>

        <div className="space-y-4">
          <SubTitle>ประเภทของ Suffix</SubTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {suffixGroups.map((g) => (
              <AffixGroup key={g.title} {...g} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SubTitle>Suffix -ful และ -less เทียบกัน</SubTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-2xl font-bold text-emerald-700">-ful</p>
              <p className="mt-1 text-slate-700">
                <strong>full of</strong> (เต็มไปด้วย)
              </p>
            </div>
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-2xl font-bold text-rose-700">-less</p>
              <p className="mt-1 text-slate-700">
                <strong>without</strong> (ปราศจาก)
              </p>
            </div>
          </div>

          <DataTable
            headers={["รากคำ", "+ -ful", "+ -less"]}
            rows={fulLess.map(([stem, ful, less]) => [
              <code key={stem} className="font-mono text-slate-600">
                {stem}
              </code>,
              wordCell(stem, "ful", ful),
              wordCell(stem, "less", less),
            ])}
          />
        </div>

        <Callout tone="success" title="เทคนิคเดาศัพท์">
          เจอคำใหม่ให้ลองแยกเป็น prefix + รากคำ + suffix เช่น <Hl>un</Hl> + fair = ไม่ยุติธรรม
        </Callout>
      </section>
    </div>
  );
}

export default Vocab01;