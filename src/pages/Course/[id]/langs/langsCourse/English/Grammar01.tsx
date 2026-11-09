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

function UsageCard({
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

/* ---------- data ---------- */

const adverbs: [string, string][] = [
  ["always", "เสมอ"],
  ["usually", "ปกติ"],
  ["often", "บ่อย"],
  ["sometimes", "บางครั้ง"],
  ["seldom", "ไม่บ่อย"],
  ["never", "ไม่เคย"],
  ["every + เวลา", "ทุก..."],
];

const suffixRules: { rule: ReactNode; examples: string[] }[] = [
  { rule: <>ปกติเติม <Hl>-s</Hl></>, examples: ["work → works", "play → plays", "read → reads"] },
  {
    rule: <>ลงท้ายด้วย <Hl>-ch, -sh, -s, -x, -o</Hl> → เติม <Hl>-es</Hl></>,
    examples: ["watch → watches", "wash → washes", "go → goes"],
  },
  { rule: <>ลงท้ายด้วย <Hl>สระ + y</Hl> → เติม <Hl>-s</Hl></>, examples: ["play → plays"] },
  {
    rule: <>ลงท้ายด้วย <Hl>พยัญชนะ + y</Hl> → เปลี่ยน y เป็น i แล้วเติม <Hl>-es</Hl></>,
    examples: ["study → studies", "fly → flies"],
  },
];

const beForms: [string, string, string][] = [
  ["I", "am", "a student."],
  ["She", "is", "a student."],
  ["They", "are", "students."],
];

/* ---------- page ---------- */

function Grammar01() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Grammar · Lesson 1
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Present Simple Tense</h1>
        <p className="mt-1 text-lg text-brand-100">ปัจจุบันกาลธรรมดา</p>
        <p className="mt-4 max-w-2xl text-white/90">
          คือรูปประโยคที่ใช้เล่าถึงความจริงพื้นฐาน ความจริงตลอดกาล กิจกรรมที่ทำเป็นประจำ/นิสัย
          หรือสิ่งที่เป็นระเบียบแบบแผน
        </p>
      </header>

      {/* 1. When to use */}
      <section className="space-y-6">
        <SectionTitle emoji="1">เมื่อไหร่ใช้ Present Simple</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2">
          <UsageCard n={1} title="ความจริงทั่วไป / ความจริงธรรมชาติ">
            <Example
              en={<>The sun <Hl>rises</Hl> in the east.</>}
              th="พระอาทิตย์ขึ้นทางทิศตะวันออก"
            />
            <Example
              en={<>Water <Hl>boils</Hl> at 100°C.</>}
              th="น้ำเดือดที่ 100 องศาเซลเซียส"
            />
          </UsageCard>

          <UsageCard n={2} title="นิสัย / กิจกรรมที่ทำเป็นประจำ" note="มักมีคำบอกเวลาประกอบ">
            <Example
              en={<>I <Hl>go</Hl> to school every day.</>}
              th="ฉันไปโรงเรียนทุกวัน"
            />
            <Example
              en={<>She <Hl>plays</Hl> tennis on Sundays.</>}
              th="เธอเล่นเทนนิสทุกวันอาทิตย์"
            />
          </UsageCard>

          <UsageCard n={3} title="ตารางเวลา / กำหนดการที่แน่นอน">
            <Example
              en={<>The train <Hl>leaves</Hl> at 7 PM.</>}
              th="รถไฟออกเวลา 19.00 น."
            />
            <Example
              en={<>The class <Hl>starts</Hl> at 9:00.</>}
              th="คาบเริ่มเวลา 9 โมง"
            />
          </UsageCard>

          <UsageCard
            n={4}
            title="ความรู้สึก ความคิด ความเชื่อ"
            note="กริยาที่ไม่ใช้ในรูปดำเนินต่อเนื่อง"
          >
            <Example en={<>I <Hl>like</Hl> pizza.</>} th="ฉันชอบพิซซ่า" />
            <Example en={<>They <Hl>know</Hl> the answer.</>} th="พวกเขารู้คำตอบ" />
          </UsageCard>
        </div>

        <div className="space-y-3">
          <SubTitle>คำบอกความถี่ที่มักเจอ</SubTitle>
          <div className="flex flex-wrap gap-2">
            {adverbs.map(([en, th]) => (
              <span
                key={en}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm"
              >
                <code className="font-semibold text-brand-700">{en}</code>{" "}
                <span className="text-slate-500">({th})</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Sentence structure */}
      <section className="space-y-8">
        <SectionTitle emoji="2">โครงสร้างประโยค</SectionTitle>
        <p className="text-slate-600">แบ่งตามประเภทประโยคและประธานได้ดังนี้</p>

        {/* Affirmative */}
        <div className="space-y-4">
          <SubTitle>✅ ประโยคบอกเล่า</SubTitle>
          <DataTable
            headers={["ประธาน", "กริยา", "หมายเหตุ"]}
            rows={[
              ["I / You / We / They", "กริยารูปเดิม", "ไม่เติมอะไรเพิ่ม"],
              [
                "He / She / It / ชื่อคนเดียว",
                <>กริยา + <Hl>-s / -es</Hl></>,
                "ต้องเติมท้ายเสมอ",
              ],
            ]}
          />
          <ExampleList>
            <Example en={<>I <Hl>eat</Hl> rice.</>} />
            <Example en={<>She <Hl>eats</Hl> rice.</>} />
            <Example en={<>We <Hl>watch</Hl> TV.</>} />
            <Example en={<>He <Hl>watches</Hl> TV.</>} />
          </ExampleList>

          <h4 className="pt-2 font-semibold text-slate-800">กฎการเติม -s / -es</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {suffixRules.map((r, i) => (
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
          <Callout tone="warning" title="กริยาต้องกลับไปเป็นรูปเดิม ห้ามมี -s">
            ใช้ <Hl>do not / don't</Hl> กับประธานกลุ่มแรก และ <Hl>does not / doesn't</Hl>{" "}
            กับประธานกลุ่มหลัง
          </Callout>
          <DataTable
            headers={["ประธาน", "คำช่วย", "กริยา"]}
            rows={[
              ["I / You / We / They", "do not / don't", "รูปเดิม"],
              ["He / She / It", "does not / doesn't", "รูปเดิม"],
            ]}
          />
          <ExampleList>
            <Example en={<>I <Hl>don't eat</Hl> spicy food.</>} />
            <Example en={<>She <Hl>doesn't eat</Hl> spicy food.</>} />
            <Example ok={false} en={<>She doesn't <s>eats</s> spicy food.</>} />
          </ExampleList>
        </div>

        {/* Question */}
        <div className="space-y-4">
          <SubTitle>❓ ประโยคคำถาม</SubTitle>
          <Callout tone="info" title="นำ Do / Does มาวางหน้าประโยค กริยากลับเป็นรูปเดิมเหมือนกัน" />
          <DataTable
            headers={["คำช่วย", "ประธาน", "กริยา"]}
            rows={[
              ["Do", "I / you / we / they", "รูปเดิม"],
              ["Does", "he / she / it", "รูปเดิม"],
            ]}
          />
          <ExampleList>
            <Example en={<><Hl>Do</Hl> you <Hl>speak</Hl> English?</>} />
            <Example en={<><Hl>Does</Hl> she <Hl>speak</Hl> English?</>} />
            <Example ok={false} en={<>Does she <s>speaks</s> English?</>} />
          </ExampleList>

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

      {/* 3. Remember */}
      <section className="space-y-6">
        <SectionTitle emoji="3">ข้อควรจำสำคัญ</SectionTitle>

        <Callout
          tone="warning"
          title="Present Simple ไม่ได้ใช้เล่าเหตุการณ์ที่กำลังทำอยู่ตอนนั้น (อันนั้นเป็น Present Continuous)"
        >
          <ul className="space-y-2.5">
            <Example ok={false} en="I eat noodles now." />
            <Example
              en={<>I <Hl>am eating</Hl> noodles now.</>}
              th="ฉันกำลังกินก๋วยเตี๋ยวตอนนี้"
            />
          </ul>
        </Callout>

        <div className="space-y-4">
          <SubTitle>
            กริยาพิเศษ <code className="rounded bg-slate-100 px-1.5 text-brand-700">be</code> (am /
            is / are)
          </SubTitle>
          <p className="text-slate-600">ใช้หลักเดียวกันแต่รูปต่างกัน</p>

          <div className="grid gap-3 sm:grid-cols-3">
            {beForms.map(([subject, verb, rest]) => (
              <div
                key={subject}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                {subject} <Hl>{verb}</Hl> {rest}
              </div>
            ))}
          </div>

          <DataTable
            headers={["รูปแบบ", "ตัวอย่าง"]}
            rows={[
              ["ปฏิเสธ", "am not / is not / are not"],
              ["คำถาม", "Am I...? / Is she...? / Are you...?"],
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Grammar01;