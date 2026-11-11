import type { ReactNode } from "react";
import {
  Bullets,
  Callout,
  Chip,
  DataTable,
  EmailCard,
  EmailLine,
  Example,
  ExampleList,
  Hl,
  SectionTitle,
  Signature,
  SubTitle,
} from "../../../../../../components/Grammarblocks";
import { ArrowDown, Check, Link2, Mail, Phone, X } from "lucide-react";

/* ---------- local building blocks ---------- */

// Numbered part of an email (the order matches the order inside an email)
function Part({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-100 font-mono text-sm font-bold text-brand-700">
          {n}
        </span>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function PhraseList({ phrases }: { phrases: string[] }) {
  return (
    <ul className="space-y-2.5">
      {phrases.map((p) => (
        <li
          key={p}
          className="rounded-xl border border-slate-200 border-l-4 border-l-brand-500 bg-white px-4 py-3 text-slate-800 shadow-sm"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

function RuleList({ items, ok }: { items: ReactNode[]; ok: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            aria-label={ok ? "do" : "don't"}
            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
              ok ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
            }`}
          >
            {ok ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
          </span>
          <span className="text-slate-800">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- data ---------- */

const greetings: [string, ReactNode][] = [
  ["ทราบชื่อผู้รับ", <Hl key="g1">Dear Mr. Somsak,</Hl>],
  ["ไม่ทราบชื่อ / ส่งถึงแผนก", <Hl key="g2">Dear Hiring Manager,</Hl>],
  ["ส่งถึงลูกค้า (สุภาพ)", <Hl key="g3">Dear Khun Somsak,</Hl>],
  ["ถึงผู้จัดการที่คุ้นเคย", <Hl key="g4">Hi John, / Hello Nara,</Hl>],
];

const openings = [
  {
    to: "ถึงผู้จัดการ",
    en: "I hope this email finds you well. I am writing to request your approval on the budget for next month.",
    th: "หวังว่าคุณจะสบายดีนะครับ ผมเขียนอีเมลนี้เพื่อขออนุมัติงบประมาณเดือนหน้า",
  },
  {
    to: "ถึงลูกค้า",
    en: "Dear Mr. Somsak, Thank you for your recent inquiry. Please find the details as follows.",
    th: "เรียนคุณสมศักดิ์ ขอบคุณสำหรับข้อสอบถาม ด้านล่างเป็นรายละเอียดครับ",
  },
];

const bodyRules = [
  { title: "1 ย่อหน้า = 1 ประเด็น", text: "แยกเรื่องเป็นย่อหน้า อ่านง่ายและไม่หลุดประเด็น" },
  { title: "ใช้ bullet point", text: "เมื่อมีหลายรายการ" },
  { title: "ระบุสิ่งที่ต้องการให้ทำชัดเจน", text: "Call to Action" },
];

const closingPhrases = [
  "Thank you for your time and support.",
  "Please feel free to contact me if you have any questions.",
  "Looking forward to your reply.",
];

const signOffs = [
  {
    level: "สุภาพมาก / เป็นทางการ",
    when: "ลูกค้า, คนที่ไม่คุ้นเคย",
    examples: ["Sincerely,", "Yours sincerely,"],
    card: "border-indigo-200 bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    level: "มาตรฐานทั่วไป",
    when: "ผู้จัดการ, เพื่อนร่วมงาน, ลูกค้า",
    examples: ["Best regards,", "Kind regards,"],
    card: "border-sky-200 bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    level: "เป็นกันเอง",
    when: "คนที่ทำงานด้วยกันบ่อย",
    examples: ["Best,", "Thanks,"],
    card: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
];

const scenarios = [
  { id: "example-1", to: "ถึงผู้จัดการ", title: "ขออนุมัติ / รายงานงาน" },
  { id: "example-2", to: "ถึงลูกค้า", title: "ยืนยันการสั่งซื้อ / ให้ข้อมูล" },
  { id: "example-3", to: "ถึงลูกค้า", title: "แจ้งปัญหา / ล่าช้า" },
];

const doList: ReactNode[] = [
  "หัวข้อชัดเจนที่สุด",
  "เขียนกระชับ ไม่เยอะเกินไป",
  "แบ่งย่อหน้า ง่ายต่อการอ่าน",
  "ระบุสิ่งที่ต้องการให้ทำ + กำหนดเวลา (ถ้ามี)",
  "ตรวจสอบคำผิดก่อนส่ง",
  <>
    แนบไฟล์เสมอถ้าเกี่ยวข้อง และเขียนว่า <Hl>Attached please find...</Hl> ในเนื้อหาด้วย
  </>,
];

const dontList: ReactNode[] = [
  <>
    ห้ามใช้ตัวอักษรทั้งหมดเป็นตัวใหญ่ <Chip>IT LOOKS LIKE SHOUTING</Chip>
  </>,
  <>
    ห้ามใช้ภาษาพูด / คำย่อแชท <Chip>thx, wanna, u r</Chip>
  </>,
  "ห้ามส่งเมื่อโกรธ — พัก 5 นาทีแล้วกลับมาอ่านใหม่",
  "ห้ามลืมแนบไฟล์ถ้าบอกว่าแนบมาให้",
  <>
    ห้ามใช้คำว่า <Chip>Hey</Chip> กับลูกค้าหรือผู้จัดการ
  </>,
];

const standardPhrases: [string, string][] = [
  ["ขอบคุณล่วงหน้า", "Thank you in advance for your help."],
  ["ขอความกรุณา", "Could you please...? / I would appreciate it if you could..."],
  ["ขอโทษในความล่าช้า", "We apologize for the delay and appreciate your patience."],
  ["แนบไฟล์มาให้", "Please find attached the document you requested."],
  ["ติดต่อกลับได้ตลอด", "Please do not hesitate to contact me if you need further information."],
  ["รอการตอบกลับ", "Looking forward to hearing from you soon."],
];

/* ---------- page ---------- */

function Writing01() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Writing · Lesson 1
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Writing Email</h1>
        <p className="mt-1 text-lg text-brand-100">
          การเขียนอีเมลอย่างมืออาชีพมีโครงสร้างชัดเจน — เริ่มต้นชัดเจน → เนื้อหากระชับ →
          ปิดท้ายสุภาพ
        </p>
      </header>

      {/* 1. Structure: 7 parts */}
      <section className="space-y-10">
        <SectionTitle emoji="1">โครงสร้างมาตรฐาน 7 ส่วน</SectionTitle>

        {/* 1. Subject */}
        <Part n={1} title="หัวข้ออีเมล (Subject Line)">
          <ExampleList>
            <Example ok={false} en={<>Hello / Question / Update</>} />
            <Example en={<Hl>Request: Approval for Q4 Budget — [ชื่อคุณ]</Hl>} />
            <Example en={<Hl>Update: Project Status — Order #1234</Hl>} />
            <Example en={<Hl>Meeting Request: Discussion on New Schedule — 15 Nov</Hl>} />
          </ExampleList>
        </Part>

        {/* 2. Greeting */}
        <Part n={2} title="คำทักทาย (Greeting / Salutation)">
          <DataTable headers={["สถานการณ์", "ตัวอย่าง"]} rows={greetings.map(([a, b]) => [a, b])} />
        </Part>

        {/* 3. Opening */}
        <Part n={3} title="ประโยคเปิดตัว (Opening Line)">
          <p className="text-slate-700">แนะนำตัวและวัตถุประสงค์สั้น ๆ</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {openings.map((o) => (
              <div key={o.to} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-brand-600">{o.to}</p>
                <p className="mt-2 text-slate-900">{o.en}</p>
                <p className="mt-2 text-sm text-slate-500">({o.th})</p>
              </div>
            ))}
          </div>
        </Part>

        {/* 4. Body */}
        <Part n={4} title="เนื้อหา (Body)">
          <Callout tone="info" title="กฎสำคัญ: กระชับ ชัดเจน แบ่งย่อหน้า อย่าเขียนยาวติดกัน" />
          <div className="grid gap-3 sm:grid-cols-3">
            {bodyRules.map((r) => (
              <div key={r.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">{r.title}</p>
                <p className="mt-1 text-sm text-slate-500">{r.text}</p>
              </div>
            ))}
          </div>

          <EmailCard label="ตัวอย่าง" subject="Project progress update">
            <p>We would like to inform you about the progress of the project:</p>
            <Bullets
              items={[
                "Phase 1: Completed on schedule ✅",
                "Phase 2: In progress, expected finish: 20 Nov",
                "Issue: Need your approval on the attached document by tomorrow noon",
              ]}
            />
            <p>
              Could you please review and confirm by <strong>12:00 PM tomorrow</strong>? Thank you.
            </p>
          </EmailCard>
        </Part>

        {/* 5. Closing */}
        <Part n={5} title="ประโยคปิด (Closing)">
          <p className="text-slate-700">สรุปสิ่งที่ต้องการและขอบคุณ</p>
          <PhraseList phrases={closingPhrases} />
        </Part>

        {/* 6. Sign-off */}
        <Part n={6} title="คำลงท้าย (Sign-off)">
          <div className="grid gap-3 sm:grid-cols-3">
            {signOffs.map((s) => (
              <div key={s.level} className={`rounded-xl border p-4 ${s.card}`}>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.badge}`}>
                  {s.level}
                </span>
                <p className="mt-3 text-sm text-slate-600">ใช้เมื่อ: {s.when}</p>
                <ul className="mt-3 space-y-1">
                  {s.examples.map((ex) => (
                    <li key={ex} className="font-semibold text-slate-900">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Part>

        {/* 7. Signature */}
        <Part n={7} title="ลายเซ็น (Signature)">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-semibold text-slate-900">ชื่อ-นามสกุล</p>
            <p className="text-slate-600">ตำแหน่ง | ชื่อบริษัท</p>
            <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} aria-hidden="true" className="text-brand-600" />
                เบอร์ติดต่อ
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} aria-hidden="true" className="text-brand-600" />
                อีเมล
              </span>
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-600">
              <Link2 size={14} aria-hidden="true" className="text-brand-600" />
              เว็บไซต์ / LinkedIn (ถ้ามี)
            </p>
          </div>
        </Part>
      </section>

      {/* Jump to an example */}
      <div className="space-y-6">
        <nav aria-label="Examples" className="space-y-3">
          <p className="text-sm font-medium text-slate-500">เลือกสถานการณ์</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {scenarios.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                <span>
                  <span className="block text-xs font-semibold text-brand-600">{s.to}</span>
                  <span className="mt-1 block font-semibold text-slate-900">{s.title}</span>
                </span>
                <ArrowDown
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-slate-300 transition-colors group-hover:text-brand-600"
                />
              </a>
            ))}
          </div>
        </nav>

        <Callout tone="info" title="ป้ายด้านซ้ายของแต่ละอีเมลบอกว่าบรรทัดนั้นทำหน้าที่อะไร">
          ดูแล้วลองเขียนอีเมลของตัวเองตามลำดับเดียวกัน: Greeting → Opening → Body → Closing →
          Sign-off → Signature
        </Callout>
      </div>

      {/* 2. Manager */}
      <section className="space-y-6">
        <SectionTitle emoji="2">ตัวอย่างฉบับสมบูรณ์ — ถึงผู้จัดการ</SectionTitle>

        <EmailCard
          id="example-1"
          label="ตัวอย่างที่ 1: ขออนุมัติ / รายงานงาน"
          subject="Request for Approval — November Schedule — [ชื่อคุณ]"
        >
          <EmailLine tag="Greeting">
            <p>Dear Manager,</p>
          </EmailLine>
          <EmailLine tag="Opening">
            <p>I hope you are doing well.</p>
          </EmailLine>
          <EmailLine tag="Body">
            <p>
              I have prepared the work schedule for November as attached. Could you please review
              and approve it at your earliest convenience?
            </p>
            <p>Key points:</p>
            <Bullets
              items={[
                "All team members are covered",
                "Public holidays are included",
                "Deadline for confirmation: Nov 10",
              ]}
            />
          </EmailLine>
          <EmailLine tag="Closing">
            <p>Please let me know if you have any suggestions or changes.</p>
          </EmailLine>
          <EmailLine tag="Sign-off">
            <p>Thank you and best regards,</p>
          </EmailLine>
          <EmailLine tag="Signature">
            <Signature bare lines={["[ชื่อคุณ]", "[ตำแหน่ง]", "[เบอร์ติดต่อ]"]} />
          </EmailLine>
        </EmailCard>
      </section>

      {/* 3. Customer */}
      <section className="space-y-6">
        <SectionTitle emoji="3">ตัวอย่างฉบับสมบูรณ์ — ถึงลูกค้า</SectionTitle>

        <EmailCard
          id="example-2"
          label="ตัวอย่างที่ 2: ยืนยันการสั่งซื้อ / ให้ข้อมูล"
          subject="Confirmation — Order #4567 — Your Company Name"
        >
          <EmailLine tag="Greeting">
            <p>Dear Mr. Somsak,</p>
          </EmailLine>
          <EmailLine tag="Opening">
            <p>
              Thank you for choosing our service. We are pleased to confirm your order as follows:
            </p>
          </EmailLine>
          <EmailLine tag="Body">
            <p>
              <strong>Order Details:</strong>
            </p>
            <Bullets
              items={[
                "Order No: #4567",
                "Date: 11 November 2026",
                "Items: Office Chair × 2",
                "Delivery Date: 15 November 2026",
                "Total Amount: 5,000 THB",
              ]}
            />
          </EmailLine>
          <EmailLine tag="Closing">
            <p>
              If you have any questions or need to make changes, please contact us anytime at
              [เบอร์ติดต่อ].
            </p>
            <p>Thank you for your business. We look forward to serving you again.</p>
          </EmailLine>
          <EmailLine tag="Sign-off">
            <p>Best regards,</p>
          </EmailLine>
          <EmailLine tag="Signature">
            <Signature bare lines={["[ชื่อคุณ]", "[ตำแหน่ง]", "[ชื่อบริษัท]"]} />
          </EmailLine>
        </EmailCard>

        <EmailCard
          id="example-3"
          label="ตัวอย่างที่ 3: แจ้งปัญหา / ล่าช้า (สุภาพและมีทางออก)"
          subject="Update — Delivery Schedule for Order #123"
        >
          <EmailLine tag="Greeting">
            <p>Dear Ms. Nara,</p>
          </EmailLine>
          <EmailLine tag="Opening">
            <p>First, thank you for your patience regarding Order #123.</p>
          </EmailLine>
          <EmailLine tag="Body">
            <p>
              We would like to inform you that there has been a slight delay due to transportation
              issues. The new expected delivery date is <strong>16 November 2026</strong>.
            </p>
            <p>
              We sincerely apologize for the inconvenience. To make up for this, we would like to
              offer you a 10% discount on your next order.
            </p>
          </EmailLine>
          <EmailLine tag="Closing">
            <p>Should you have any concerns, please feel free to contact me directly.</p>
            <p>Thank you for your understanding.</p>
          </EmailLine>
          <EmailLine tag="Sign-off">
            <p>Best regards,</p>
          </EmailLine>
          <EmailLine tag="Signature">
            <Signature bare lines={["[ชื่อคุณ]"]} />
          </EmailLine>
        </EmailCard>
      </section>

      {/* 4. Rules */}
      <section className="space-y-8">
        <SectionTitle emoji="4">กฎเหล็ก &amp; ข้อผิดพลาดที่พบบ่อย</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>ควรทำ</SubTitle>
            <div className="mt-4">
              <RuleList ok items={doList} />
            </div>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>ห้ามทำ</SubTitle>
            <div className="mt-4">
              <RuleList ok={false} items={dontList} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <SubTitle>ประโยคมาตรฐานที่ใช้บ่อย</SubTitle>
          <DataTable
            headers={["สถานการณ์", "ประโยคภาษาอังกฤษมาตรฐาน"]}
            rows={standardPhrases.map(([situation, sentence]) => [
              situation,
              <Hl key={situation}>{sentence}</Hl>,
            ])}
          />
        </div>
      </section>
    </div>
  );
}

export default Writing01;