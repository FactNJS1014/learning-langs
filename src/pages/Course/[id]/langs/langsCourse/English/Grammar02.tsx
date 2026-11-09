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

const timeWords: [string, string][] = [
  ["yesterday", "เมื่อวาน"],
  ["last week/month/year", "สัปดาห์/เดือน/ปีที่แล้ว"],
  ["ago", "...ที่แล้ว"],
  ["in 2020", "ในปี 2020"],
  ["then", "ตอนนั้น"],
  ["once", "ครั้งหนึ่ง"],
];

const regularExamples = ["walk → walked", "play → played", "watch → watched", "study → studied"];

const spellingRules: { rule: ReactNode; example: string }[] = [
  { rule: <>ลงท้าย <Hl>e</Hl> เติมแค่ <Hl>d</Hl></>, example: "live → lived" },
  {
    rule: <>พยัญชนะเดียว + สระเดียว + พยัญชนะ → <Hl>ซ้ำตัวสุดท้าย</Hl></>,
    example: "stop → stopped",
  },
  {
    rule: <>พยัญชนะ + <Hl>y</Hl> → เปลี่ยน y เป็น i แล้วเติม <Hl>ed</Hl></>,
    example: "cry → cried",
  },
];

const irregularVerbs: [string, string, string][] = [
  ["go", "went", "ไป"],
  ["eat", "ate", "กิน"],
  ["see", "saw", "เห็น"],
  ["do", "did", "ทำ"],
  ["have", "had", "มี"],
  ["is", "was", "เป็น/อยู่"],
  ["are", "were", "เป็น/อยู่"],
  ["buy", "bought", "ซื้อ"],
  ["write", "wrote", "เขียน"],
];

const storySteps = ["I got up,", "took a shower,", "and had breakfast."];

/* ---------- page ---------- */

function Grammar02() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Grammar · Lesson 2
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Past Simple Tense</h1>
        <p className="mt-1 text-lg text-brand-100">อดีตกาลธรรมดา</p>
        <p className="mt-4 max-w-2xl text-white/90">
          คือรูปประโยคที่ใช้เล่าเหตุการณ์ที่ <strong>เกิดขึ้นและจบลงแล้วในอดีต</strong>{" "}
          โดยมีเวลาที่ระบุชัดเจน หรือเป็นเหตุการณ์ที่ผ่านไปแล้ว
        </p>
      </header>

      {/* 1. When to use */}
      <section className="space-y-6">
        <SectionTitle emoji="1">เมื่อไหร่ใช้ Past Simple</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "เหตุการณ์ที่เกิดและจบลงแล้วในเวลาที่ระบุ เช่น เมื่อวาน เมื่อปีก่อน เวลาที่แน่นอน",
            "เหตุการณ์ที่เกิดต่อเนื่องกันในอดีต",
            "ข้อเท็จจริงหรือนิสัยที่เคยเป็นในอดีต แต่ปัจจุบันไม่เป็นแล้ว",
          ].map((text, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">
                {i + 1}
              </span>
              <p className="mt-3 text-sm text-slate-700">{text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <SubTitle>คำบอกเวลาที่มักเจอ</SubTitle>
          <div className="flex flex-wrap gap-2">
            {timeWords.map(([en, th]) => (
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

      {/* 2. Verb forms */}
      <section className="space-y-8">
        <SectionTitle emoji="2">รูปแบบกริยา</SectionTitle>
        <p className="text-slate-600">แบ่งเป็น 2 ประเภท</p>

        <div className="space-y-4">
          <SubTitle>✅ กริยาปกติ</SubTitle>
          <p className="text-slate-700">
            เติม <Hl>-ed</Hl> ท้ายกริยารูปเดิม
          </p>
          <div className="flex flex-wrap gap-2">
            {regularExamples.map((ex) => (
              <Chip key={ex}>{ex}</Chip>
            ))}
          </div>

          <h4 className="pt-2 font-semibold text-slate-800">กฎเล็กน้อย</h4>
          <div className="grid gap-3 sm:grid-cols-3">
            {spellingRules.map((r) => (
              <div
                key={r.example}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm text-slate-700">{r.rule}</p>
                <div className="mt-3">
                  <Chip>{r.example}</Chip>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SubTitle>✅ กริยาไม่ปกติ</SubTitle>
          <p className="text-slate-700">เปลี่ยนรูปไปเลย ต้องจำ ตัวอย่างที่ใช้บ่อย:</p>
          <DataTable
            headers={["รูปเดิม", "อดีต", "คำแปล"]}
            rows={irregularVerbs.map(([base, past, th]) => [
              <code key="b" className="font-mono">{base}</code>,
              <Hl key="p">{past}</Hl>,
              th,
            ])}
          />
        </div>
      </section>

      {/* 3. Sentence structure */}
      <section className="space-y-8">
        <SectionTitle emoji="3">โครงสร้างประโยค</SectionTitle>

        {/* Affirmative */}
        <div className="space-y-4">
          <SubTitle>✅ ประโยคบอกเล่า</SubTitle>
          <Callout tone="info" title="ประธาน + กริยารูปอดีต">
            ไม่สนใจประธาน ทุกชนิดใช้รูปเดียวกันทั้งหมด
          </Callout>
          <ExampleList>
            <Example en={<>I / You / We / They <Hl>walked</Hl> to school.</>} />
            <Example en={<>He / She / It <Hl>walked</Hl> to school.</>} />
            <Example en={<>She <Hl>went</Hl> to Bangkok yesterday.</>} />
            <Example en={<>They <Hl>played</Hl> football last Sunday.</>} />
          </ExampleList>
        </div>

        {/* Negative */}
        <div className="space-y-4">
          <SubTitle>❌ ประโยคปฏิเสธ</SubTitle>
          <Callout tone="warning" title="ห้ามใช้รูปอดีตต่อจาก did เด็ดขาด!">
            ใช้ <Hl>did not / didn't</Hl> + กริยารูปเดิม
          </Callout>
          <DataTable
            headers={["ประธาน", "คำช่วย", "กริยา (รูปเดิม)"]}
            rows={[["ทุกประเภท", "did not / didn't", "รูปเดิม"]]}
          />
          <ExampleList>
            <Example en={<>I <Hl>didn't go</Hl> to the party.</>} />
            <Example ok={false} en={<>I didn't <s>went</s> to the party.</>} />
            <Example en={<>She <Hl>didn't eat</Hl> breakfast this morning.</>} />
            <Example en={<>We <Hl>didn't watch</Hl> TV last night.</>} />
          </ExampleList>
        </div>

        {/* Question */}
        <div className="space-y-4">
          <SubTitle>❓ ประโยคคำถาม</SubTitle>
          <Callout tone="info" title="นำ Did มาวางหน้าประโยค">
            ตามด้วยประธาน + กริยารูปเดิม
          </Callout>
          <DataTable
            headers={["Did", "ประธาน", "กริยา (รูปเดิม)"]}
            rows={[["Did", "ทุกประเภท", "รูปเดิม"]]}
          />
          <ExampleList>
            <Example en={<><Hl>Did</Hl> you <Hl>go</Hl> to school yesterday?</>} />
            <Example ok={false} en={<>Did you <s>went</s> to school yesterday?</>} />
            <Example en={<><Hl>Did</Hl> she <Hl>buy</Hl> a new phone?</>} />
            <Example en={<><Hl>Did</Hl> they <Hl>finish</Hl> the work?</>} />
          </ExampleList>

          <div>
            <h4 className="mb-2 font-semibold text-slate-800">คำตอบสั้น</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <span className="text-emerald-700">Yes, I did.</span>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-rose-700">No, I didn't.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <span className="text-emerald-700">Yes, she did.</span>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-rose-700">No, she didn't.</span>
              </div>
            </div>
          </div>
        </div>

        {/* be (was / were) */}
        <div className="space-y-4">
          <SubTitle>
            📌 กริยาพิเศษ <code className="rounded bg-slate-100 px-1.5 text-brand-700">be</code>{" "}
            (was / were)
          </SubTitle>
          <Callout tone="warning" title="ไม่ใช้ did ตอนปฏิเสธและคำถาม">
            มีรูปเป็นของตัวเอง
          </Callout>
          <DataTable
            headers={["ประธาน", "บอกเล่า", "ปฏิเสธ", "คำถาม"]}
            rows={[
              ["I / He / She / It", <Hl key="a">was</Hl>, "was not / wasn't", "Was ...?"],
              ["We / You / They", <Hl key="b">were</Hl>, "were not / weren't", "Were ...?"],
            ]}
          />
          <ExampleList>
            <Example en={<>I <Hl>was</Hl> tired yesterday.</>} />
            <Example en={<>They <Hl>were</Hl> at home last night.</>} />
            <Example en={<>She <Hl>wasn't</Hl> happy.</>} />
            <Example en={<><Hl>Were</Hl> you busy? → Yes, I was. / No, I wasn't.</>} />
          </ExampleList>
        </div>
      </section>

      {/* 4. Remember */}
      <section className="space-y-8">
        <SectionTitle emoji="4">ข้อควรจำสำคัญ</SectionTitle>

        <div className="space-y-4">
          <SubTitle>1. Past Simple ≠ Present Perfect</SubTitle>
          <p className="text-slate-600">
            Past Simple มักมีเวลาระบุชัดเจน ส่วน Present Perfect ไม่ระบุเวลาที่แน่นอน
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Past Simple
              </p>
              <p className="mt-2 text-slate-800">
                I <Hl>lost</Hl> my key yesterday.
              </p>
              <p className="mt-1 text-sm text-slate-500">เวลาชัดเจน ใช้ Past Simple</p>
            </div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                Present Perfect
              </p>
              <p className="mt-2 text-slate-800">
                I <Hl>have lost</Hl> my key.
              </p>
              <p className="mt-1 text-sm text-slate-500">ไม่ระบุเวลา เน้นผลปัจจุบัน</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <SubTitle>2. เมื่อมี did / didn't กริยาต้องกลับเป็นรูปเดิมเสมอ</SubTitle>
          <p className="text-slate-600">ไม่เติม -ed และไม่เปลี่ยนรูป</p>
          <ExampleList>
            <Example ok={false} en={<>I didn't <s>went</s>.</>} />
            <Example en={<>I didn't <Hl>go</Hl>.</>} />
          </ExampleList>
        </div>

        <div className="space-y-4">
          <SubTitle>3. ใช้เล่าเรื่องราวลำดับเหตุการณ์ในอดีตได้เลย</SubTitle>
          <ol className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
            {storySteps.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-slate-800">{step}</span>
                {i < storySteps.length - 1 && (
                  <span aria-hidden="true" className="hidden text-slate-300 sm:inline">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Grammar02;