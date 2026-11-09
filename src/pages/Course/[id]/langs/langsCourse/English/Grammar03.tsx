import type { ReactNode } from "react";
import {
  Callout,
  Chip,
  DataTable,
  Example,
  ExampleList,
  Hl,
  PillList,
  SectionTitle,
  SubTitle,
  UsageCard,
} from "../../../../../../components/Grammarblocks";

/* ---------- data ---------- */

const timeWords: [string, string][] = [
  ["now", "ตอนนี้"],
  ["right now", "เดี๋ยวนี้เอง"],
  ["at the moment", "ขณะนี้"],
  ["these days", "ช่วงนี้"],
  ["look! / listen!", "ดูสิ! / ฟังสิ!"],
];

const ingRules: { rule: ReactNode; examples: string[] }[] = [
  {
    rule: <>ปกติเติม <Hl>-ing</Hl> ตรง ๆ</>,
    examples: ["go → going", "work → working", "study → studying"],
  },
  {
    rule: <>ลงท้ายด้วย <Hl>e</Hl> ที่ไม่ออกเสียง → ตัด e ทิ้งแล้วเติม <Hl>-ing</Hl></>,
    examples: ["make → making", "write → writing"],
  },
  {
    rule: <>สระเดียว + พยัญชนะเดียว (เน้นเสียง) → <Hl>ซ้ำตัวสุดท้าย</Hl></>,
    examples: ["run → running", "sit → sitting", "stop → stopping"],
  },
  {
    rule: <>ลงท้ายด้วย <Hl>ie</Hl> → เปลี่ยนเป็น <Hl>y</Hl> ก่อนเติม -ing</>,
    examples: ["lie → lying", "die → dying"],
  },
];

const shortAnswers: [string, string][] = [
  ["Yes, I am.", "No, I'm not."],
  ["Yes, she is.", "No, she isn't."],
  ["Yes, they are.", "No, they aren't."],
];

const wrong = (text: string) => <span className="text-rose-700">✕ {text}</span>;

/* ---------- page ---------- */

function Grammar03() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Grammar · Lesson 3
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Present Continuous Tense</h1>
        <p className="mt-1 text-lg text-brand-100">ปัจจุบันกาลดำเนินต่อเนื่อง</p>
        <p className="mt-4 max-w-2xl text-white/90">
          คือรูปประโยคที่เน้นว่าเหตุการณ์ <strong>กำลังเกิดขึ้นอยู่ในขณะนี้</strong> หรือ{" "}
          <strong>กำลังดำเนินอยู่ในช่วงเวลานี้</strong> และยังไม่จบ
        </p>
      </header>

      {/* 1. When to use */}
      <section className="space-y-6">
        <SectionTitle emoji="1">เมื่อไหร่ใช้ Present Continuous</SectionTitle>

        <div className="space-y-4">
          <UsageCard n={1} title="เหตุการณ์ที่กำลังทำอยู่ ณ เวลาที่พูด" note="ยังไม่เสร็จ">
            <Example
              en={<>I <Hl>am eating</Hl> rice now.</>}
              th="ฉันกำลังกินข้าวตอนนี้"
            />
            <Example
              en={<>Look! She <Hl>is running</Hl>.</>}
              th="ดูสิ! เธอกำลังวิ่งอยู่"
            />
          </UsageCard>

          <UsageCard
            n={2}
            title="เหตุการณ์ที่อยู่ในช่วงกำลังดำเนิน"
            note="อาจไม่ได้ทำตรงนี้ตรงนั้น แต่เป็นเรื่องที่ทำอยู่ในช่วงนี้"
          >
            <Example
              en={<>You <Hl>are studying</Hl> English these days.</>}
              th="ช่วงนี้คุณกำลังเรียนภาษาอังกฤษอยู่"
            />
            <Example
              en={<>He <Hl>is writing</Hl> a book this year.</>}
              th="ปีนี้เขากำลังเขียนหนังสืออยู่"
            />
          </UsageCard>

          <UsageCard n={3} title="แผน/การนัดหมายที่แน่นอนในอนาคตอันใกล้">
            <Example
              en={<>We <Hl>are going</Hl> to the cinema tonight.</>}
              th="คืนนี้พวกเราจะไปดูหนังกัน — นัดแล้ว"
            />
            <Example
              en={<>She <Hl>is meeting</Hl> her friend tomorrow.</>}
              th="พรุ่งนี้เธอจะไปพบเพื่อน"
            />
          </UsageCard>
        </div>

        <div className="space-y-3">
          <SubTitle>คำบอกเวลาที่มักเจอ</SubTitle>
          <PillList items={timeWords} />
        </div>
      </section>

      {/* 2. Sentence structure */}
      <section className="space-y-8">
        <SectionTitle emoji="2">โครงสร้างประโยค</SectionTitle>

        {/* Formula */}
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-center font-semibold text-brand-700">
          <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">to be (am / is / are)</span>
          <span>+</span>
          <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">กริยา</span>
          <span>+</span>
          <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">-ing</span>
        </div>

        {/* Affirmative */}
        <div className="space-y-4">
          <SubTitle>✅ ประโยคบอกเล่า</SubTitle>
          <DataTable
            headers={["ประธาน", "to be", "กริยา + -ing"]}
            rows={[
              ["I", <Hl>am</Hl>, "doing / eating / going"],
              ["He / She / It / ชื่อคนเดียว", <Hl>is</Hl>, "doing / eating / going"],
              ["We / You / They", <Hl>are</Hl>, "doing / eating / going"],
            ]}
          />
          <ExampleList>
            <Example en={<>I <Hl>am reading</Hl> a book.</>} />
            <Example en={<>She <Hl>is cooking</Hl> dinner.</>} />
            <Example en={<>They <Hl>are playing</Hl> games.</>} />
          </ExampleList>

          <h4 className="pt-2 font-semibold text-slate-800">กฎการเติม -ing</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {ingRules.map((r, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-700">{r.rule}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.examples.map((ex) => (
                    <Chip key={ex}>{ex}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Negative */}
        <div className="space-y-4">
          <SubTitle>❌ ประโยคปฏิเสธ</SubTitle>
          <Callout tone="info" title="เติม not หลัง am / is / are" />
          <DataTable
            headers={["ประธาน", "to be + not", "กริยา + -ing"]}
            rows={[
              ["I", "am not", "doing"],
              ["He / She / It", "is not / isn't", "doing"],
              ["We / You / They", "are not / aren't", "doing"],
            ]}
          />
          <ExampleList>
            <Example en={<>I <Hl>am not watching</Hl> TV.</>} />
            <Example en={<>He <Hl>isn't sleeping</Hl>.</>} />
            <Example en={<>We <Hl>aren't going</Hl> out tonight.</>} />
          </ExampleList>
        </div>

        {/* Question */}
        <div className="space-y-4">
          <SubTitle>❓ ประโยคคำถาม</SubTitle>
          <Callout tone="info" title="ย้าย am / is / are มาวางหน้าประโยค" />
          <DataTable
            headers={["to be", "ประธาน", "กริยา + -ing"]}
            rows={[
              ["Am", "I", "doing?"],
              ["Is", "he / she / it", "doing?"],
              ["Are", "we / you / they", "doing?"],
            ]}
          />
          <ExampleList>
            <Example en={<><Hl>Are</Hl> you <Hl>listening</Hl> to me?</>} />
            <Example en={<><Hl>Is</Hl> she <Hl>coming</Hl> to the party?</>} />
            <Example en={<><Hl>What</Hl> <Hl>are</Hl> you <Hl>doing</Hl>?</>} />
          </ExampleList>

          <div>
            <h4 className="mb-2 font-semibold text-slate-800">คำตอบสั้น</h4>
            <div className="grid gap-3 sm:grid-cols-3">
              {shortAnswers.map(([yes, no]) => (
                <div
                  key={yes}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <span className="text-emerald-700">{yes}</span>
                  <span className="mx-2 text-slate-300">/</span>
                  <span className="text-rose-700">{no}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Remember */}
      <section className="space-y-8">
        <SectionTitle emoji="3">ข้อควรจำสำคัญ</SectionTitle>

        <div className="space-y-4">
          <SubTitle>❌ กริยาที่ห้ามใช้ในรูป Continuous</SubTitle>
          <Callout
            tone="warning"
            title="กริยาที่แสดงสภาพ / ความรู้สึก / ความคิด / ความเป็นเจ้าของ ไม่ใช้ -ing"
          >
            แม้จะหมายถึงตอนนี้ก็ตาม ให้ใช้ <Hl>Present Simple</Hl> แทน
          </Callout>
          <DataTable
            headers={["กลุ่ม", "ตัวอย่าง", "ถูก", "ผิด"]}
            rows={[
              ["ความรู้สึก", "like, love, hate, want", <>I <Hl>like</Hl> coffee.</>, wrong("I am liking")],
              [
                "ความรู้/ความคิด",
                "know, understand, believe, remember",
                <>I <Hl>know</Hl> him.</>,
                wrong("I am knowing"),
              ],
              [
                "ความเป็นเจ้าของ",
                "have, own, belong",
                <>She <Hl>has</Hl> a car.</>,
                wrong("She is having"),
              ],
              ["การรับรู้", "see, hear, smell", <>I <Hl>see</Hl> a bird.</>, wrong("I am seeing")],
            ]}
          />
          <Callout tone="success" title="ยกเว้น: have เมื่อไม่ได้แปลว่า “มี”">
            เช่น <Hl>having dinner</Hl> (กำลังทานอาหาร), <Hl>having fun</Hl> (กำลังสนุก) ✓ ใช้ได้
          </Callout>
        </div>

        <div className="space-y-4">
          <SubTitle>เปรียบเทียบ Present Simple vs Present Continuous</SubTitle>
          <DataTable
            headers={["หัวข้อ", "Present Simple", "Present Continuous"]}
            rows={[
              ["ความหมาย", "นิสัย / ความจริง", "กำลังทำอยู่ตอนนี้ / ช่วงนี้"],
              [
                "ตัวอย่าง",
                <>
                  I <Hl>eat</Hl> rice every day.
                  <span className="block text-xs text-slate-500">กินทุกวัน</span>
                </>,
                <>
                  I <Hl>am eating</Hl> rice now.
                  <span className="block text-xs text-slate-500">กินอยู่ตอนนี้</span>
                </>,
              ],
              ["กริยา", "รูปเดิม / +s", "am/is/are + -ing"],
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Grammar03;