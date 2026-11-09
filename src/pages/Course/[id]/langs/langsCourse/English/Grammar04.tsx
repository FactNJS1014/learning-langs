import type { ReactNode } from "react";
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

/* ---------- data ---------- */

const basicExamples: { en: ReactNode; th: string }[] = [
  { en: <>I <Hl>have</Hl> a new phone.</>, th: "ฉันมีโทรศัพท์เครื่องใหม่" },
  { en: <>You <Hl>have</Hl> a nice house.</>, th: "คุณมีบ้านที่น่ารัก" },
  { en: <>We <Hl>have</Hl> two cats.</>, th: "พวกเรามีแมว 2 ตัว" },
  { en: <>They <Hl>have</Hl> a meeting.</>, th: "พวกเขามีการประชุม" },
  { en: <>She <Hl>has</Hl> a car.</>, th: "เธอมีรถ" },
  { en: <>He <Hl>has</Hl> a pen.</>, th: "เขามีปากกา" },
  { en: <>It <Hl>has</Hl> a long tail.</>, th: "มันมีหางยาว" },
  { en: <>Tom <Hl>has</Hl> a sister.</>, th: "ทอมมีน้องสาว" },
];

const otherMeanings: { pattern: string; meaning: string; examples: { en: ReactNode; th: string }[] }[] = [
  {
    pattern: "have / has + อาหาร/เครื่องดื่ม",
    meaning: "กิน / ทาน / ดื่ม",
    examples: [{ en: <>I <Hl>have</Hl> breakfast at 7.</>, th: "ฉันทานอาหารเช้า 7 โมง" }],
  },
  {
    pattern: "have / has + เวลา",
    meaning: "มีเวลา",
    examples: [{ en: <>She <Hl>has</Hl> free time today.</>, th: "เธอมีเวลาว่างวันนี้" }],
  },
  {
    pattern: "have / has + อาการป่วย",
    meaning: "ป่วยเป็น...",
    examples: [{ en: <>He <Hl>has</Hl> a headache.</>, th: "เขาปวดหัว" }],
  },
  {
    pattern: "have / has to + กริยา",
    meaning: "ต้องทำ...",
    examples: [
      { en: <>I <Hl>have to</Hl> go now.</>, th: "ฉันต้องไปแล้วนะ" },
      { en: <>She <Hl>has to</Hl> work.</>, th: "เธอต้องทำงาน" },
    ],
  },
];

const contractions: [string, string][] = [
  ["I have", "I've"],
  ["You have", "You've"],
  ["We have", "We've"],
  ["They have", "They've"],
  ["He has", "He's"],
  ["She has", "She's"],
  ["It has", "It's"],
];

/* ---------- page ---------- */

function Grammar04() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Grammar · Lesson 4
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">have / has</h1>
        <p className="mt-1 text-lg text-brand-100">กริยาที่ใช้บ่อยที่สุดตัวหนึ่ง</p>
        <p className="mt-4 max-w-2xl text-white/90">
          แปลว่า <strong>มี, ได้รับ, กิน/ดื่ม, มีอาการ</strong> เป็นหนึ่งในกริยาที่ใช้บ่อยที่สุด
          และมีหลักการใช้ชัดเจน
        </p>
      </header>

      {/* 1. Basic difference */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ความแตกต่างพื้นฐาน</SectionTitle>
        <Callout tone="info" title="ใช้แยกตามประธานใน Present Simple เท่านั้น" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-3xl font-bold text-emerald-700">have</p>
            <p className="mt-2 text-slate-700">I / You / We / They</p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-3xl font-bold text-sky-700">has</p>
            <p className="mt-2 text-slate-700">
              He / She / It / ชื่อคนเดียว / สิ่งของเอกพจน์
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <SubTitle>ตัวอย่าง</SubTitle>
          <ExampleList>
            {basicExamples.map((ex, i) => (
              <Example key={i} en={ex.en} th={ex.th} />
            ))}
          </ExampleList>
        </div>
      </section>

      {/* 2. Sentence structure */}
      <section className="space-y-8">
        <SectionTitle emoji="2">โครงสร้างประโยค</SectionTitle>

        {/* Affirmative */}
        <div className="space-y-4">
          <SubTitle>✅ ประโยคบอกเล่า</SubTitle>
          <DataTable
            headers={["ประธาน", "รูป", "ตัวอย่าง"]}
            rows={[
              ["I / You / We / They", <Hl>have</Hl>, <>I <Hl>have</Hl> a book.</>],
              ["He / She / It / ชื่อ", <Hl>has</Hl>, <>She <Hl>has</Hl> a book.</>],
            ]}
          />
        </div>

        {/* Negative */}
        <div className="space-y-4">
          <SubTitle>❌ ประโยคปฏิเสธ</SubTitle>
          <Callout tone="warning" title="เปลี่ยนกลับเป็น have เสมอ ห้ามใช้ has ต่อจาก doesn't">
            ใช้ <Hl>do not / don't</Hl> กับ have และ <Hl>does not / doesn't</Hl> กับ has
          </Callout>
          <DataTable
            headers={["ประธาน", "รูป", "ตัวอย่าง"]}
            rows={[
              ["I / You / We / They", "don't + have", <>I <Hl>don't have</Hl> time.</>],
              ["He / She / It", "doesn't + have", <>He <Hl>doesn't have</Hl> time.</>],
            ]}
          />
          <ExampleList>
            <Example en={<>She <Hl>doesn't have</Hl> a car.</>} />
            <Example ok={false} en={<>She doesn't <s>has</s> a car.</>} />
          </ExampleList>
        </div>

        {/* Question */}
        <div className="space-y-4">
          <SubTitle>❓ ประโยคคำถาม</SubTitle>
          <Callout tone="info" title="ใช้ Do / Does ข้างหน้า กริยากลับเป็น have ทั้งหมด" />
          <DataTable
            headers={["Do / Does", "ประธาน", "รูป", "ตัวอย่าง"]}
            rows={[
              ["Do", "I / you / we / they", "have", <><Hl>Do</Hl> you <Hl>have</Hl> a ruler?</>],
              ["Does", "he / she / it", "have", <><Hl>Does</Hl> she <Hl>have</Hl> a ruler?</>],
            ]}
          />

          <div>
            <h4 className="mb-2 font-semibold text-slate-800">คำตอบสั้น</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <span className="text-emerald-700">Yes, I do.</span>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-rose-700">No, I don't.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <span className="text-emerald-700">Yes, she does.</span>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-rose-700">No, she doesn't.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Past */}
      <section className="space-y-6">
        <SectionTitle emoji="3">การใช้ในอดีต (Past Simple)</SectionTitle>
        <Callout tone="info" title="ในอดีตเปลี่ยนเป็น had ทั้งหมด ไม่สนใจประธาน" />
        <DataTable
          headers={["ประเภท", "โครงสร้าง", "ตัวอย่าง"]}
          rows={[
            ["บอกเล่า", "ประธาน + had", <>I / She <Hl>had</Hl> a bike before.</>],
            ["ปฏิเสธ", "didn't + have", <>I / She <Hl>didn't have</Hl> a bike before.</>],
            ["คำถาม", "Did + ประธาน + have", <><Hl>Did</Hl> you <Hl>have</Hl> a bike?</>],
          ]}
        />
      </section>

      {/* 4. Other meanings */}
      <section className="space-y-6">
        <SectionTitle emoji="4">ความหมายอื่นที่ไม่ได้แปลว่า “มี”</SectionTitle>
        <p className="text-slate-600">have / has ใช้เป็นกริยาร่วมกับคำอื่นได้อีกมาก</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {otherMeanings.map((m) => (
            <div
              key={m.pattern}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <Chip>{m.pattern}</Chip>
              <p className="mt-3 font-semibold text-slate-900">{m.meaning}</p>
              <ul className="mt-3 space-y-2.5">
                {m.examples.map((ex, i) => (
                  <Example key={i} en={ex.en} th={ex.th} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Callout tone="warning" title="have to ก็แยกใช้เหมือนกัน">
          ประธาน He / She / It → <Hl>has to</Hl>
        </Callout>
      </section>

      {/* 5. Remember */}
      <section className="space-y-8">
        <SectionTitle emoji="5">ข้อควรจำสำคัญ</SectionTitle>

        <div className="space-y-4">
          <SubTitle>1. Present Continuous (กำลังทำ)</SubTitle>
          <p className="text-slate-600">ถ้าแปลว่า “มี” ห้ามใช้ having</p>
          <ExampleList>
            <Example en={<>I <Hl>have</Hl> a car.</>} />
            <Example ok={false} en={<>I <s>am having</s> a car.</>} />
          </ExampleList>
          <Callout tone="success" title="แต่ถ้าเป็นกิจกรรม/การกระทำ ใช้ได้">
            <Hl>having lunch</Hl> (กำลังทานข้าว), <Hl>having fun</Hl> (กำลังสนุก)
          </Callout>
        </div>

        <div className="space-y-4">
          <SubTitle>2. หลัง do / does / did</SubTitle>
          <p className="text-slate-600">กริยาต้องเป็น have เสมอ ไม่ใช้ has / had</p>
          <ExampleList>
            <Example en={<>Does she <Hl>have</Hl> ...?</>} />
            <Example ok={false} en={<>Does she <s>has</s> ...?</>} />
          </ExampleList>
        </div>

        <div className="space-y-4">
          <SubTitle>3. การย่อที่พบบ่อย</SubTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {contractions.map(([full, short]) => (
              <div
                key={full}
                className="rounded-xl border border-slate-200 bg-white p-3 text-center text-sm shadow-sm"
              >
                <span className="text-slate-600">{full}</span>
                <span className="mx-1.5 text-slate-300">→</span>
                <Hl>{short}</Hl>
              </div>
            ))}
          </div>
          <Callout tone="warning" title="ระวัง: 's อาจย่อมาจาก is ด้วย">
            ดูบริบทช่วยแยก
          </Callout>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-6">
        <SectionTitle emoji="★">สรุปสั้น ๆ</SectionTitle>
        <DataTable
          headers={["ประธาน", "ปัจจุบัน บอกเล่า", "ปัจจุบัน ปฏิเสธ", "อดีตทุกประธาน"]}
          rows={[
            ["I / You / We / They", <Hl>have</Hl>, "don't have", <Hl>had</Hl>],
            ["He / She / It / ชื่อ", <Hl>has</Hl>, "doesn't have", <Hl>had</Hl>],
          ]}
        />
        <Callout tone="success" title="จำให้ขึ้นใจ">
          <ul className="list-disc space-y-1 pl-5">
            <li>หลัง Do / Does → <Hl>have</Hl> เสมอ</li>
            <li>แปลได้ทั้ง มี, ทาน, มีอาการ, ต้อง (have to)</li>
            <li>“กำลังมี” ไม่มีรูป having — ใช้ Present Simple แทน</li>
          </ul>
        </Callout>
      </section>
    </div>
  );
}

export default Grammar04;