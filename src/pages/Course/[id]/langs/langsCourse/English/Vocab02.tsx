import React from "react";

import {
  Callout,
  Chip,
  DataTable,
  Example,
  ExampleList,
  Hl,
  SectionTitle,
  SubTitle,
  UsageCard,
} from "../../../../../../components/Grammarblocks";

function Vocab02() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Vocabulary · Lesson 8
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Agreeing and disagreeing
        </h1>
        <p className="mt-1 text-lg text-brand-100">
          การแสดงความเห็นด้วยและไม่เห็นด้วย
        </p>
      </header>
      <section className="space-y-10">
        <SectionTitle emoji="1">PART 1: AGREEING — เห็นด้วย</SectionTitle>

        <div className="space-y-4">
          <UsageCard n={1} title="ระดับ 1: เห็นด้วยอย่างธรรมดา / สุภาพ" note="">
            <DataTable
              headers={["ประโยค", "คำแปล", "หมายเหตุ"]}
              rows={[
                [
                  "I agree (with you).",
                  "ฉันเห็นด้วยกับคุณ",
                  "ใช้ได้ทั่วไปที่สุด",
                ],
                ["I think so too.", "ฉันคิดว่าเช่นกัน", "เห็นด้วยกับความคิด"],
                ["That’s right.", "ถูกต้อง", ""],
                ["You’re right.", "คุณพูดถูกแล้ว", ""],
                [
                  "I feel the same way.",
                  "ฉันรู้สึกเหมือนกัน",
                  "เน้นความรู้สึกตรงกัน",
                ],
                ["That makes sense.", "ฟังดูมีเหตุผล", "ยอมรับเหตุผล"],
                [
                  "Sure / Of course.",
                  "แน่นอน / แน่นอนครับ",
                  "ตอบรับอย่างรวดเร็ว",
                ],
              ]}
            />
          </UsageCard>
          <UsageCard n={2} title="ระดับ 2: เห็นด้วยอย่างเต็มที่ / มาก" note="">
            <DataTable
              headers={["ประโยค", "คำแปล"]}
              rows={[
                ["I completely agree.", "ฉันเห็นด้วยอย่างสมบูรณ์"],
                ["I totally agree with you.", "ฉันเห็นด้วยกับคุณทั้งหมดเลย"],
                [
                  "I couldn’t agree more.",
                  "ฉันเห็นด้วยที่สุดเลย (ไม่สามารถเห็นด้วยไปกว่านี้อีกแล้ว)",
                ],
                ["That’s exactly what I think.", "นั่นตรงกับที่ฉันคิดเป๊ะเลย"],
                ["You’re absolutely right.", "คุณพูดถูกอย่างยิ่ง"],
                ["That’s a great point.", "นั่นเป็นประเด็นที่ดีมากเลย"],
                ["Absolutely! / Exactly!", "แน่นอน! / พอดีเลย!"],
              ]}
            />
          </UsageCard>
          <UsageCard n={3} title="ระดับ 3: เห็นด้วยบางส่วน" note="">
            <DataTable
              headers={["ประโยค", "คำแปล"]}
              rows={[
                [
                  "I agree with you up to a point.",
                  "ฉันเห็นด้วยกับคุณในบางประเด็นนะ",
                ],
                ["In a way, yes, but…", "ในแง่หนึ่งก็ใช่นะ แต่…"],
                ["I agree with that, but… ", "เรื่องนั้นฉันเห็นด้วย เพียงแต่…"],
              ]}
            />
          </UsageCard>
        </div>
        <SectionTitle emoji="2">PART 2: DISAGREEING — ไม่เห็นด้วย</SectionTitle>
        <Callout
          tone="warning"
          title="⚠️ กฎสำคัญ: ห้ามพูดตรงๆ ว่า ❌ You're wrong!"
        >
          ให้เริ่มด้วยการยอมรับก่อน แล้วตามด้วยความคิดต่าง
          แม้จะไม่เห็นด้วยก็ยังรักษาความสุภาพครับ
        </Callout>
        <div className="space-y-4">
          <UsageCard
            n={1}
            title="ระดับ 1: ไม่เห็นด้วยอย่างสุภาพ / อ่อนโยน"
            note=""
          >
            <DataTable
              headers={["ประโยค", "คำแปล"]}
              rows={[
                ["I see your point, but… ", "ฉันเข้าใจที่คุณพูดนะ แต่…"],
                [
                  "That’s true, but don’t you think…?",
                  "จริงอย่างนั้น แต่คุณไม่คิดว่า… ไหม?",
                ],
                [
                  "I’m not sure I agree with that. ",
                  "ฉันไม่แน่ใจว่าเห็นด้วยกับเรื่องนั้นนะ",
                ],
                [
                  "I’m afraid I don’t see it that way. ",
                  "เกรงว่าฉันมองไม่เห็นแบบนั้นนะ",
                ],
                [
                  "Maybe, but from my experience… ",
                  "อาจจะนะ แต่จากประสบการณ์ของฉัน…",
                ],
                [
                  "I can’t help but think that… ",
                  "ฉันไม่อาจปฏิเสธได้ว่า… / ฉันรู้สึกว่า…",
                ],
              ]}
            />
          </UsageCard>
          <UsageCard
            n={2}
            title="ระดับ 2: ไม่เห็นด้วยอย่างชัดเจน แต่ยังสุภาพ"
            note=""
          >
            <DataTable
              headers={["ประโยค", "คำแปล"]}
              rows={[
                [
                  "I respectfully disagree because… ",
                  "ฉันไม่เห็นด้วยด้วยความเคารพ เพราะ…",
                ],
                [
                  "I have a different opinion. ",
                  "ฉันมีความคิดเห็นที่แตกต่างออกไป",
                ],
                ["I’m not convinced that… ", "ฉันยังไม่เชื่อว่า…"],
                [
                  "That’s not always the case. ",
                  "ไม่ใช่เสมอไปนะ / มีบางกรณีที่ไม่เป็นเช่นนั้น",
                ],
                ["On the contrary,… ", "ในทางกลับกัน…"],
                ["I’m not sure about that. ", "ฉันไม่มั่นใจเรื่องนั้นนะ"],
              ]}
            />
          </UsageCard>
          <UsageCard n={3} title="ระดับ 3: ไม่เห็นด้วยอย่างเข้มข้น" note="">
            <DataTable
              headers={["ประโยค", "คำแปล"]}
              rows={[
                ["I strongly disagree. ", "ฉันไม่เห็นด้วยอย่างยิ่ง"],
                [
                  "I completely disagree with you. ",
                  "ฉันไม่เห็นด้วยกับคุณอย่างสิ้นเชิง",
                ],
                ["That’s not true at all. ", "เรื่องนั้นไม่จริงเลย"],
                ["That’s out of the question! ", "มันเป็นไปไม่ได้เลย!"],
                [
                  "I can’t agree with that. ",
                  "ฉันไม่สามารถเห็นด้วยกับเรื่องนั้นได้",
                ],
              ]}
            />
          </UsageCard>
        </div>
        <SectionTitle emoji="3">
          PART 3: โครงสร้างไวยากรณ์ที่ต้องจำ
        </SectionTitle>
        <div className="space-y-4">
          <UsageCard
            n={1}
            title="Agree — ใช้ `agree with + คน / agree that + ประโยค`"
            note=""
          >
            <DataTable
              headers={["✅ ประโยคที่ถูก", "❌ ประโยคที่ผิด"]}
              rows={[
                [
                  <>
                    I agree <strong>with</strong> you.
                  </>,
                  "I agree you.",
                ],
                [
                  <>
                    I agree <strong>with</strong> your idea.
                  </>,
                  "I agree your idea.",
                ],
                [
                  <>
                    I agree <strong>that</strong> it is good.
                  </>,
                  "I agree it is good. (`that` ละได้แต่เติมชัดเจนดีกว่า)",
                ],
                
              ]}
            />
          </UsageCard>
           <UsageCard
            n={2}
            title="Disagree — ใช้ `disagree with + คน`"
            note=""
          >
            <DataTable
              headers={["✅ ประโยคที่ถูก", "❌ ประโยคที่ผิด"]}
              rows={[
                [
                  <>
                    I disagree <strong>with</strong> him.
                  </>,
                  "I disagree him.",
                ],
                [
                  <>
                    I disagree <strong>with</strong> your decision.
                  </>,
                  "I disagree your decision.",
                ],
               
                
              ]}
            />
          </UsageCard>

          <UsageCard
            n={3}
            title="🔗 คำเชื่อมที่ใช้บ่อย"
            note=""
          >
            <DataTable
              headers={["คำเชื่อม", "ตำแหน่ง", "ตัวอย่าง"]}
              rows={[
                ["But", "กลางประโยค", <>I agree, <strong>but</strong> it’s too expensive.</>],
                ["However,", "หน้าประโยค / กลาง", <>That’s good. <strong>However,</strong> we need time.</>],
                ["On the other hand,", "หน้าประโยค", <>It’s cheap. <strong>On the other hand,</strong> it’s slow.</>],
                ["While", "เปรียบเทียบ", <><strong>While</strong> I understand, I can’t agree.</>],
                ["Because", "ให้เหตุผล", <>I disagree <strong>because</strong> the risk is too high.</>],
              ]}
            />
          </UsageCard>
        </div>
      </section>
    </div>
  );
}

export default Vocab02;
