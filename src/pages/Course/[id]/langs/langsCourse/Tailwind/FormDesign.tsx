import {
  Callout,
  Chip,
  DataTable,
  Example,
  ExampleList,
  Hl,
  SectionTitle,
  SubTitle,
} from "../../../../../../components/Grammarblocks";
import { CodeBlock } from "../../../../../../components/Codeblocks";


function TailwindForm01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Tailwind CSS · Components
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Form: ฟอร์มบันทึกทั่วไป &amp; ฟอร์มใหญ่ 50+ ช่อง</h1>
        <p className="mt-1 text-lg text-brand-100">จากพื้นฐานถึงมืออาชีพ พร้อมคำอธิบายทุกคลาส</p>
        <p className="mt-4 max-w-2xl text-white/90">
          เริ่มจากช่องกรอกเดียว ไปถึงฟอร์มบันทึกที่ตรวจข้อมูลได้ และฟอร์มรายละเอียดมากกว่า 50 หัวข้อ
          ที่แบ่งส่วน มีแถบความคืบหน้า สรุปข้อผิดพลาด และบันทึกฉบับร่างอัตโนมัติ
        </p>
      </header>

      {/* ===== ส่วนที่ 1: ภาพรวม ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ภาพรวม: ฟอร์มเล็ก vs ฟอร์มใหญ่</SectionTitle>

        <DataTable
          headers={["หัวข้อ", "ฟอร์มบันทึกทั่วไป (3–5 ช่อง)", "ฟอร์มใหญ่ (50+ ช่อง)"]}
          rows={[
            ["จัดการค่า", "useState แยกต่อช่อง", "state เดียวเป็น object + ฟังก์ชันเดียว"],
            ["เขียน JSX", "เขียนทีละช่องตรง ๆ", "วนจาก config (array ของช่อง)"],
            ["จัดหน้า", "คอลัมน์เดียว", "แบ่งส่วน fieldset + grid 2 คอลัมน์"],
            ["ตรวจข้อมูล", "ตอนกดบันทึก ข้อความใต้ช่อง", "รวมศูนย์ + สรุปข้อผิดพลาดด้านบน + พาไปช่องแรกที่ผิด"],
            ["ช่วยผู้ใช้", "ตัวนับตัวอักษร", "แถบความคืบหน้า, เมนูข้างลัดไปแต่ละส่วน, ฉบับร่างอัตโนมัติ"],
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="text-xs font-semibold text-emerald-700">ระดับพื้นฐาน</p>
            <p className="mt-1 font-semibold text-slate-900">ช่องกรอกที่อ่านง่าย</p>
            <p className="mt-1 text-sm text-slate-600">label, input, focus ring</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">ระดับกลาง</p>
            <p className="mt-1 font-semibold text-slate-900">ฟอร์มบันทึก + ตรวจข้อมูล</p>
            <p className="mt-1 text-sm text-slate-600">error, aria, ตัวนับตัวอักษร</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
            <p className="text-xs font-semibold text-rose-700">ระดับมืออาชีพ</p>
            <p className="mt-1 font-semibold text-slate-900">ฟอร์ม 50+ ช่อง</p>
            <p className="mt-1 text-sm text-slate-600">config, sticky, autosave</p>
          </div>
        </div>
      </section>

      {/* ===== ส่วนที่ 2: พื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: label + input ที่อ่านง่าย</SectionTitle>

          <CodeBlock
            filename="Input.tsx"
            highlight={[1, 5, 8]}
            code={`
<label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
  อีเมล
</label>
<input
  id="email"
  type="email"
  placeholder="you@example.com"
  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
/>
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"mb-1 block text-sm font-medium"}</Chip>, "label เป็นบล็อกอยู่เหนือช่อง เว้นระยะล่างเล็กน้อย"],
            [<Chip>{"w-full"}</Chip>, "ช่องกว้างเต็มกล่องที่ครอบ"],
            [<Chip>{"rounded-lg border border-slate-300"}</Chip>, "ขอบมนสีเทา"],
            [<Chip>{"px-3 py-2 text-sm"}</Chip>, "ระยะในช่อง ให้พิมพ์สบายและกดง่ายบนมือถือ"],
            [<Chip>{"placeholder:text-slate-400"}</Chip>, "สีของข้อความตัวอย่าง (จางกว่าข้อความจริง)"],
            [<Chip>{"focus:ring-2 focus:ring-indigo-600/20"}</Chip>, "วงเรืองแสงโปร่งใส 20% ตอนโฟกัส"],
            [<Chip>{"focus:outline-none"}</Chip>, "ปิดกรอบเดิมของเบราว์เซอร์ เพราะเราแทนด้วย ring + border แล้ว"],
          ]}
        />

        <Callout tone="warning" title="label ต้องผูกกับช่องด้วย htmlFor ↔ id">
          ผูกแล้วคลิกที่ข้อความ label จะโฟกัสช่องได้ และ screen reader อ่านชื่อช่องถูกต้อง —
          ถ้าไม่ผูก ผู้ใช้จะกดโดนยากและเครื่องอ่านหน้าจอไม่รู้ว่าช่องนี้คืออะไร
        </Callout>
      </section>

      {/* ===== ส่วนที่ 3: สถานะและชนิดช่อง ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="3">สถานะของช่อง และชนิดช่องอื่น ๆ</SectionTitle>

        <div className="space-y-3">
          <SubTitle>ปกติ / error / ปิดใช้งาน</SubTitle>
          <CodeBlock
            highlight={[5, 8]}
            code={`
// ปกติ
"border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/20"

// error
"border-rose-500 focus:border-rose-600 focus:ring-rose-500/20"

// ปิดใช้งาน
"disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
`}
          />
          <Callout tone="success" title="เลือกคลาสแบบครบชุดด้วย ternary">
            แยกชุด “ปกติ” กับ “error” เป็นสองชุดสมบูรณ์ แล้วเลือกด้วย <Hl>error ? inputErr : inputOk</Hl> —
            ไม่ต้องกังวลว่า border-slate-300 กับ border-rose-500 ใส่ซ้อนกันแล้วอันไหนชนะ
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>ข้อความ error และข้อความช่วยเหลือ</SubTitle>
          <CodeBlock
            highlight={[2, 3, 7]}
            code={`
<input
  aria-invalid={hasError ? true : undefined}
  aria-describedby={hasError ? "email-error" : undefined}
/>

{hasError && (
  <p id="email-error" className="mt-1 text-sm text-rose-600">
    รูปแบบอีเมลไม่ถูกต้อง
  </p>
)}

{/* ข้อความช่วยเหลือ (ไม่ใช่ error) */}
<p className="mt-1 text-xs text-slate-500">ใช้อีเมลที่เปิดอ่านอยู่เป็นประจำ</p>
`}
          />
          <ExampleList>
            <Example
              en={
                <>
                  <Chip>aria-invalid</Chip> บอกว่าช่องนี้ค่าไม่ถูกต้อง
                </>
              }
            />
            <Example
              en={
                <>
                  <Chip>aria-describedby</Chip> ชี้ไปที่ id ของข้อความ error ให้ screen reader อ่านต่อจากชื่อช่อง
                </>
              }
            />
          </ExampleList>
        </div>

        <div className="space-y-3">
          <SubTitle>select, textarea และ checkbox</SubTitle>
          <CodeBlock
            highlight={[11]}
            code={`
{/* select */}
<select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm">
  <option>ทั่วไป</option>
</select>

{/* textarea: ให้ผู้ใช้ปรับความสูงเองได้ */}
<textarea rows={4} className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-sm" />

{/* checkbox: accent-* เปลี่ยนสีติ๊กถูกโดยไม่ต้องเขียน CSS เอง */}
<label className="flex items-center gap-2 text-sm text-slate-700">
  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-indigo-600" />
  ยอมรับเงื่อนไข
</label>
`}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 4: ฟอร์มบันทึกทั่วไป ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">ฟอร์มบันทึกทั่วไป: หัวข้อ + หมวดหมู่ + เนื้อหา</SectionTitle>

        <Callout tone="info" title="ฟอร์มเล็กไม่ต้องคิดมาก">
          3–5 ช่อง ใช้ <Hl>useState</Hl> แยกต่อช่องและเขียน JSX ตรง ๆ อ่านง่ายที่สุด
        </Callout>

          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="NoteForm.tsx"
            highlight={[23, 38, 44, 58, 60, 92, 116]}
            code={`
import { useState, type FormEvent } from "react";

const categories = ["ทั่วไป", "งาน", "ส่วนตัว"];

const inputBase =
  "w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2";
const inputOk = " border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/20";
const inputErr = " border-rose-500 focus:border-rose-600 focus:ring-rose-500/20";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [content, setContent] = useState("");
  const [pinned, setPinned] = useState(false);
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(false);

    const next: typeof errors = {};
    if (!title.trim()) next.title = "กรุณาใส่หัวข้อ";
    if (!content.trim()) next.content = "กรุณาใส่เนื้อหา";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // ส่งข้อมูลไปเก็บ (API / localStorage) ตรงนี้
    setSaved(true);
    setTitle("");
    setContent("");
    setPinned(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-lg space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-bold text-slate-900">บันทึกใหม่</h2>

      {saved && (
        <p role="status" className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          บันทึกเรียบร้อยแล้ว
        </p>
      )}

      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-700">
          หัวข้อ <span className="text-rose-600">*</span>
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="เช่น ประชุมทีมวันจันทร์"
          aria-invalid={errors.title ? true : undefined}
          aria-describedby={errors.title ? "title-error" : undefined}
          className={inputBase + (errors.title ? inputErr : inputOk)}
        />
        {errors.title && (
          <p id="title-error" className="mt-1 text-sm text-rose-600">
            {errors.title}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="mb-1 block text-sm font-medium text-slate-700">
          หมวดหมู่
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={inputBase + inputOk}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="content" className="mb-1 block text-sm font-medium text-slate-700">
          เนื้อหา <span className="text-rose-600">*</span>
        </label>
        <textarea
          id="content"
          rows={5}
          maxLength={500}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          aria-invalid={errors.content ? true : undefined}
          aria-describedby={errors.content ? "content-error" : undefined}
          className={inputBase + " resize-y" + (errors.content ? inputErr : inputOk)}
        />
        <div className="mt-1 flex justify-between gap-3">
          {errors.content ? (
            <p id="content-error" className="text-sm text-rose-600">
              {errors.content}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs tabular-nums text-slate-500">{content.length}/500</span>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={pinned}
          onChange={(e) => setPinned(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
        />
        ปักหมุดบันทึกนี้
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 sm:w-auto"
      >
        บันทึก
      </button>
    </form>
  );
}
`}
          />

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"noValidate"}</Chip>, "ปิดการตรวจของเบราว์เซอร์ เพื่อใช้ข้อความ error ภาษาไทยและสไตล์ของเราเอง"],
            [<Chip>{"e.preventDefault()"}</Chip>, "กันหน้าโหลดใหม่ตอนกดส่ง"],
            [<Chip>{".trim()"}</Chip>, "ตัดช่องว่าง ไม่ให้ผ่านด้วยการพิมพ์แค่ spacebar"],
            [<Chip>{"max-w-lg mx-auto"}</Chip>, "ฟอร์มบันทึกกว้างพอดี ไม่ยืดเต็มจอ"],
            [<Chip>{"space-y-5"}</Chip>, "ระยะห่างแนวตั้งระหว่างช่อง"],
            [<Chip>{"maxLength + ตัวนับ"}</Chip>, "จำกัดความยาวและบอกผู้ใช้ว่าเหลือเท่าไร"],
            [<Chip>{"role=status"}</Chip>, "ข้อความสำเร็จถูกอ่านออกเสียงโดย screen reader โดยไม่ต้องย้ายโฟกัส"],
            [<Chip>{"w-full sm:w-auto"}</Chip>, "ปุ่มเต็มความกว้างบนมือถือ กดง่าย แต่พอดีตัวบนจอใหญ่"],
          ]}
        />
      </section>

      {/* ===== ส่วนที่ 5: โครงฟอร์มใหญ่ ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="5">ฟอร์มใหญ่ 50+ ช่อง: จัดโครงสร้างให้ดูแลได้</SectionTitle>

        <Callout tone="warning" title="อย่าเขียนทีละช่อง">
          50 ช่อง × (label + input + error + onChange) = โค้ดหลายร้อยบรรทัดที่แก้ยาก
          ให้เก็บ “ข้อมูลของช่อง” ไว้ใน array แล้ววนแสดงผล
        </Callout>

        <div className="space-y-3">
          <SubTitle>1) แบ่งเป็นส่วนด้วย fieldset + grid 2 คอลัมน์</SubTitle>
          <CodeBlock
            highlight={[2, 3, 6]}
            code={`
<fieldset className="rounded-2xl border border-slate-200 bg-white p-5">
  <legend className="px-2 text-base font-bold">ข้อมูลส่วนตัว</legend>
  <div className="mt-2 grid gap-4 sm:grid-cols-2">
    <div>ชื่อ</div>
    <div>นามสกุล</div>
    <div className="sm:col-span-2">ที่อยู่ (กินทั้งแถว)</div>
  </div>
</fieldset>
`}
          />
          <DataTable
            headers={["คลาส / แท็ก", "ความหมาย"]}
            rows={[
              [<Chip>{"fieldset + legend"}</Chip>, "จัดกลุ่มช่องที่เกี่ยวข้อง และ screen reader อ่านชื่อกลุ่มให้"],
              [<Chip>{"grid gap-4"}</Chip>, "ช่องเรียงเป็นตาราง เว้นระยะ 1rem"],
              [<Chip>{"sm:grid-cols-2"}</Chip>, "มือถือ 1 คอลัมน์ ตั้งแต่ sm ขึ้นไป 2 คอลัมน์"],
              [<Chip>{"sm:col-span-2"}</Chip>, "ช่องยาว (ที่อยู่, หมายเหตุ) กินทั้งแถว"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>2) เก็บช่องทั้งหมดไว้ใน config</SubTitle>
          <CodeBlock
            filename="bigFormConfig.ts"
            highlight={[7, 24]}
            code={`
export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "number" | "select" | "textarea" | "checkbox";
  options?: string[];
  required?: boolean;
  span?: 2; // กินทั้งแถว (2 คอลัมน์)
};

export type Section = { id: string; title: string; fields: Field[] };

export const sections: Section[] = [
  {
    id: "personal",
    title: "ข้อมูลส่วนตัว",
    fields: [
      { name: "prefix", label: "คำนำหน้า", type: "select", options: ["นาย", "นาง", "นางสาว"], required: true },
      { name: "firstName", label: "ชื่อ", required: true },
      { name: "lastName", label: "นามสกุล", required: true },
      { name: "nickname", label: "ชื่อเล่น" },
      { name: "birthDate", label: "วันเกิด", type: "date", required: true },
      { name: "nationality", label: "สัญชาติ" },
      { name: "religion", label: "ศาสนา" },
      { name: "email", label: "อีเมล", type: "email", required: true },
      { name: "phone", label: "เบอร์โทร", type: "tel", required: true },
      { name: "lineId", label: "LINE ID" },
    ],
  },
  // ... ส่วนอื่นเพิ่มรูปแบบเดียวกัน (address, education, work, emergency, preferences, consent)
];
`}
          />
          <Callout tone="info" title="ในโค้ดทดสอบมีครบ 53 ช่อง ใน 7 ส่วน">
            ตัวอย่างนี้ตัดเหลือส่วนแรกให้อ่านง่าย — ส่วนอื่นเขียนรูปแบบเดียวกัน
            เพิ่มช่องใหม่ = เพิ่ม 1 บรรทัด
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>3) วนแสดงผลจาก config</SubTitle>
          <CodeBlock
            highlight={[1, 5]}
            code={`
{sections.map((s) => (
  <fieldset key={s.id}>
    <legend>{s.title}</legend>
    <div className="mt-2 grid gap-4 sm:grid-cols-2">
      {s.fields.map((f) => (
        <FieldControl key={f.name} field={f} value={values[f.name]} onChange={setValue} />
      ))}
    </div>
  </fieldset>
))}
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>4) state เดียวสำหรับทุกช่อง</SubTitle>
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 3, 7, 8]}
            code={`
// ❌ 50 ช่อง = useState 50 ตัว + onChange 50 ฟังก์ชัน
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
// ...อีก 48 ตัว

// ✅ state เดียว + ฟังก์ชันเดียว ใช้ name เป็นกุญแจ
const [values, setValues] = useState<Values>({});
const setValue = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));
`}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 6: มืออาชีพ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="6">ระดับมืออาชีพ: BigForm ฉบับเต็ม</SectionTitle>

        <ExampleList>
          <Example en="แถบความคืบหน้าติดบน (กรอกแล้ว x/53 ช่อง) พร้อม role=progressbar" />
          <Example en="เมนูลัดไปแต่ละส่วนที่ติดข้างจอใหญ่ / เลื่อนแนวนอนบนมือถือ พร้อมนับช่องที่กรอกแล้ว" />
          <Example en="สรุปข้อผิดพลาดด้านบน คลิกแล้วโฟกัสช่องนั้น และกดส่งแล้วพาไปช่องแรกที่ผิดอัตโนมัติ" />
          <Example en="แถบปุ่มส่งติดล่างจอ ไม่ต้องเลื่อนลงไปสุดฟอร์ม" />
          <Example en="บันทึกฉบับร่างอัตโนมัติใน localStorage — รีเฟรชแล้วข้อมูลไม่หาย" />
        </ExampleList>

          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="BigForm.tsx"
            highlight={[133, 141, 156, 175, 190, 200, 212, 215, 233, 258, 283]}
            code={`
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { sections, type Field } from "./bigFormConfig";

type Values = Record<string, string | boolean>;

const STORAGE_KEY = "big-form-draft";
const allFields = sections.flatMap((s) => s.fields);

const inputBase =
  "w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2";
const inputOk = " border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/20";
const inputErr = " border-rose-500 focus:border-rose-600 focus:ring-rose-500/20";

// อ่านฉบับร่างที่บันทึกไว้ (เบราว์เซอร์อาจบล็อก storage จึงต้อง try/catch)
function loadDraft(): Values {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as Values;
  } catch {
    return {};
  }
}

const isFilled = (v: string | boolean | undefined) =>
  v === true || (typeof v === "string" && v.trim() !== "");

function validate(values: Values) {
  const errors: Record<string, string> = {};
  for (const f of allFields) {
    const v = values[f.name];
    if (f.required && !isFilled(v)) {
      errors[f.name] = f.type === "checkbox" ? "กรุณายอมรับก่อนส่งฟอร์ม" : "กรุณากรอก" + f.label;
    } else if (f.type === "email" && isFilled(v) && !/^\S+@\S+\.\S+$/.test(String(v))) {
      errors[f.name] = "รูปแบบอีเมลไม่ถูกต้อง";
    }
  }
  return errors;
}

function FieldControl({
  field,
  value,
  error,
  onChange,
}: {
  field: Field;
  value: string | boolean | undefined;
  error?: string;
  onChange: (name: string, value: string | boolean) => void;
}) {
  const id = "f-" + field.name;
  const errId = id + "-error";
  const common = {
    id,
    name: field.name,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
  };
  const cls = inputBase + (error ? inputErr : inputOk);
  const text = typeof value === "string" ? value : "";

  const message = error && (
    <p id={errId} className="mt-1 text-sm text-rose-600">
      {error}
    </p>
  );

  if (field.type === "checkbox") {
    return (
      <div className="sm:col-span-2">
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            {...common}
            checked={value === true}
            onChange={(e) => onChange(field.name, e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-indigo-600"
          />
          <span>
            {field.label}
            {field.required && <span className="text-rose-600"> *</span>}
          </span>
        </label>
        {message}
      </div>
    );
  }

  let control;
  if (field.type === "select") {
    control = (
      <select {...common} value={text} onChange={(e) => onChange(field.name, e.target.value)} className={cls}>
        <option value="">เลือก…</option>
        {field.options?.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    );
  } else if (field.type === "textarea") {
    control = (
      <textarea
        {...common}
        rows={3}
        value={text}
        onChange={(e) => onChange(field.name, e.target.value)}
        className={cls + " resize-y"}
      />
    );
  } else {
    control = (
      <input
        {...common}
        type={field.type ?? "text"}
        value={text}
        onChange={(e) => onChange(field.name, e.target.value)}
        className={cls}
      />
    );
  }

  return (
    <div className={field.span === 2 ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">
        {field.label}
        {field.required && <span className="text-rose-600"> *</span>}
      </label>
      {control}
      {message}
    </div>
  );
}

export default function BigForm() {
  const [values, setValues] = useState<Values>(loadDraft);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // บันทึกฉบับร่างอัตโนมัติ (หน่วง 500ms หลังหยุดพิมพ์)
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      } catch {
        // storage ใช้ไม่ได้ → ข้ามไป ฟอร์มยังทำงานปกติ
      }
    }, 500);
    return () => window.clearTimeout(t);
  }, [values]);

  const filledCount = useMemo(
    () => allFields.filter((f) => isFilled(values[f.name])).length,
    [values],
  );
  const percent = Math.round((filledCount / allFields.length) * 100);

  // ฟังก์ชันเดียวใช้กับทุกช่อง → ไม่ต้องมี useState 50 ตัว
  const setValue = (name: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const focusField = (name: string) => document.getElementById("f-" + name)?.focus();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    const first = allFields.find((f) => found[f.name]);
    if (first) {
      focusField(first.name); // พาไปที่ช่องแรกที่ผิด
      return;
    }
    setSubmitted(true);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ข้าม
    }
  };

  const errorList = Object.entries(errors);

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-5xl">
      <div className="sticky top-0 z-20 -mx-4 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-900">
            กรอกแล้ว {filledCount}/{allFields.length} ช่อง
          </span>
          <span className="tabular-nums text-slate-500">{percent}%</span>
        </div>
        <div
          role="progressbar"
          aria-label="ความคืบหน้าการกรอกฟอร์ม"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200"
        >
          <div
            className="h-full rounded-full bg-indigo-600 transition-[width] duration-300"
            style={{ width: percent + "%" }}
          />
        </div>
      </div>

      <div className="mt-6 gap-8 lg:grid lg:grid-cols-[13rem_1fr]">
        <nav
          aria-label="ส่วนของฟอร์ม"
          className="mb-6 flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-24 lg:mb-0 lg:flex-col lg:self-start lg:overflow-visible"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={"#sec-" + s.id}
              className="flex shrink-0 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 lg:border-0 lg:bg-transparent"
            >
              <span>{s.title}</span>
              <span className="text-xs tabular-nums text-slate-500">
                {s.fields.filter((f) => isFilled(values[f.name])).length}/{s.fields.length}
              </span>
            </a>
          ))}
        </nav>

        <div className="space-y-6">
          {errorList.length > 0 && (
            <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="font-semibold text-rose-800">พบ {errorList.length} ช่องที่ต้องแก้ไข</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-rose-700">
                {errorList.map(([name, message]) => (
                  <li key={name}>
                    <a
                      href={"#f-" + name}
                      onClick={(e) => {
                        e.preventDefault();
                        focusField(name);
                      }}
                      className="underline"
                    >
                      {message}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {sections.map((s) => (
            <fieldset
              key={s.id}
              id={"sec-" + s.id}
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <legend className="px-2 text-base font-bold text-slate-900">{s.title}</legend>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                {s.fields.map((f) => (
                  <FieldControl
                    key={f.name}
                    field={f}
                    value={values[f.name]}
                    error={errors[f.name]}
                    onChange={setValue}
                  />
                ))}
              </div>
            </fieldset>
          ))}

          {submitted && (
            <p role="status" className="rounded-xl bg-emerald-50 p-4 text-emerald-700">
              ส่งฟอร์มเรียบร้อยแล้ว
            </p>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 -mx-4 mt-6 flex items-center justify-between gap-3 border-t border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
        <p className="text-xs text-slate-500">บันทึกฉบับร่างอัตโนมัติในเบราว์เซอร์นี้</p>
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          ส่งฟอร์ม
        </button>
      </div>
    </form>
  );
}
`}
          />

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"useState<Values>(loadDraft)"}</Chip>, "ส่งฟังก์ชันให้ useState (lazy init) → อ่านฉบับร่างครั้งเดียวตอนเริ่ม ไม่อ่านทุกครั้งที่เรนเดอร์"],
            [<Chip>{"setValues((prev) => ({ ...prev, [name]: value }))"}</Chip>, "อัปเดตเฉพาะช่องที่เปลี่ยน โดยคงค่าช่องอื่น"],
            [<Chip>{"setTimeout + clearTimeout"}</Chip>, "debounce: รอ 500ms หลังหยุดพิมพ์ค่อยบันทึก ไม่เขียน storage ทุกตัวอักษร"],
            [<Chip>{"try / catch รอบ localStorage"}</Chip>, "โหมดส่วนตัวหรือ storage ถูกบล็อกจะโยน error — ฟอร์มต้องทำงานต่อได้"],
            [<Chip>{"sticky top-0 / bottom-0"}</Chip>, "แถบความคืบหน้าและปุ่มส่งติดขอบ ใช้ -mx-4 ให้พื้นหลังเต็มความกว้าง"],
            [<Chip>{"lg:grid-cols-[13rem_1fr]"}</Chip>, "จอใหญ่: คอลัมน์ซ้ายกว้างคงที่ 13rem คอลัมน์ขวากินที่เหลือ"],
            [<Chip>{"scroll-mt-24"}</Chip>, "เวลากดลิงก์ลัดไปแต่ละส่วน เว้นที่ด้านบนให้พ้นแถบ sticky"],
            [<Chip>{"role=alert"}</Chip>, "สรุป error ถูกอ่านทันทีที่โผล่ขึ้นมา"],
          ]}
        />
      </section>

      {/* ===== ส่วนที่ 7: ข้อผิดพลาด ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="7">ข้อผิดพลาดที่พบบ่อย &amp; เช็กลิสต์</SectionTitle>

          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5, 6]}
            code={`
// ❌ ใช้ placeholder แทน label → พิมพ์แล้วข้อความหาย และ screen reader อ่านไม่ได้
<input placeholder="อีเมล" />

// ✅ มี label เสมอ ส่วน placeholder ใช้เป็นตัวอย่างค่า
<label htmlFor="email">อีเมล</label>
<input id="email" placeholder="you@example.com" />
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5, 6]}
            code={`
// ❌ type="number" กับเบอร์โทร/รหัสไปรษณีย์ → ตัดเลข 0 นำหน้า และเลื่อนล้อเมาส์แล้วค่าเปลี่ยน
<input type="number" name="phone" />

// ✅ ใช้ tel หรือ inputMode เพื่อให้มือถือขึ้นแป้นตัวเลข
<input type="tel" name="phone" />
<input inputMode="numeric" name="postcode" />
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5, 6]}
            code={`
// ❌ ประกอบชื่อคลาสด้วยตัวแปร → Tailwind สแกนไม่เจอ ไม่มี CSS
className={"border-" + color + "-500"}

// ✅ เก็บคลาสเต็ม ๆ ไว้ในค่าคงที่
const inputErr = " border-rose-500 focus:border-rose-600";
className={inputBase + (error ? inputErr : inputOk)}
`}
          />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>อาการที่เจอ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="คลิก label แล้วไม่โฟกัสช่อง → ไม่ได้ผูก htmlFor กับ id" />
                <Example ok={false} en="กด Enter แล้วหน้ารีโหลด → ลืม e.preventDefault()" />
                <Example ok={false} en="เบอร์โทรเลข 0 หาย → ใช้ type=number" />
                <Example ok={false} en="ฟอร์มช้าตอนพิมพ์ → เขียน storage ทุกตัวอักษร (ไม่ debounce)" />
                <Example ok={false} en="กดลิงก์ลัดแล้วหัวข้อถูกแถบบัง → ลืม scroll-mt" />
              </ExampleList>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>เช็กลิสต์ก่อนส่งงาน</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example en="ทุกช่องมี label ที่ผูกกับ id" />
                <Example en="ช่องที่ต้องกรอกมีเครื่องหมาย * และ error ที่บอกวิธีแก้" />
                <Example en="ใส่ autoComplete ที่เหมาะสม (email, tel, name) ให้เบราว์เซอร์ช่วยกรอก" />
                <Example en="ทดสอบที่ 390px — ช่องและปุ่มกดง่าย ไม่ล้นจอ" />
                <Example en="กด Tab ไล่ทั้งฟอร์ม ลำดับโฟกัสสมเหตุผล เห็นวงโฟกัสชัดเจน" />
                <Example en="ส่งฟอร์มเปล่า ดู error ทุกช่อง แล้วแก้ทีละช่อง error ต้องหายไปเอง" />
              </ExampleList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TailwindForm01;