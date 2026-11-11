import {
  
  DataTable,
  Example,
  ExampleList,
  Hl,
  SectionTitle,
  SubTitle,
  UsageCard,
} from "../../../../../../components/Grammarblocks";

function GrammarVocab01() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Grammar + Vocabulary · Lesson 7
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Giving Opinions</h1>
        <p className="mt-1 text-lg text-brand-100">
          การให้ความคิดเห็นหรือการแสดงความคิดเห็น
        </p>
        <p className="mt-4 max-w-2xl text-white/90">
          คู่มือครบถ้วนสำหรับ <strong>การแลกเปลี่ยนความคิดเห็น</strong>{" "}
          ทั้งโครงสร้างไวยากรณ์และชุดคำศัพท์ที่ใช้บ่อยที่สุด
        </p>
      </header>
      <section className="space-y-10">
        <SectionTitle emoji="1">โครงสร้างพื้นฐาน & ไวยากรณ์สำคัญ</SectionTitle>
        <div className="space-y-4">
          <UsageCard
            n={1}
            title="แสดงความคิดเห็นโดยตรง"
            note="ใช้ Present Simple เป็นหลัก เน้นความคิดที่มั่นคง"
          >
            <DataTable
              headers={["โครงสร้าง", "ตัวอย่าง"]}
              rows={[
                [
                  "I think + might / could / may",
                  <>
                    I think it <Hl>might</Hl> be better to wait.
                  </>,
                ],
                [
                  "It seems to me (that)...",
                  "It seems to me that we need more time.",
                ],
                [
                  "As far as I’m concerned,...",
                  "As far as I’m concerned, the plan works.",
                ],
                ["If you ask me,...", "If you ask me, he’s not ready yet."],
              ]}
            />
          </UsageCard>
          <UsageCard n={2} title="เห็นด้วย" note="">
            <DataTable
              headers={["โครงสร้าง", "ตัวอย่าง"]}
              rows={[
                ["I agree (with you).", "I agree completely."],
                ["I think so too.", "I think so too."],
                [
                  "That’s exactly what I think.",
                  "That’s exactly what I think.",
                ],
                ["You’re right.", "You’re absolutely right."],
                ["I couldn’t agree more.", "ฉันเห็นด้วยที่สุดเลย"],
              ]}
            />
          </UsageCard>
          <UsageCard
            n={3}
            title="ไม่เห็นด้วย (พูดสุภาพ ไม่ทะเลาะ)"
            note="⚠️ ห้ามพูดตรงๆ ว่า You're wrong ให้ใช้ประโยคอ่อนโยนแทน"
          >
            <DataTable
              headers={["โครงสร้าง", "ตัวอย่าง"]}
              rows={[
                ["I see your point, but...", "I agree completely."],
                ["I’m not sure about that.", "I think so too."],
                [
                  "I respectfully disagree because...",
                  "That’s exactly what I think.",
                ],
                [
                  "That’s true, but don’t you think...?",
                  "You’re absolutely right.",
                ],
                [
                  "I’m afraid I have a different opinion.",
                  "I’m afraid I see it differently.",
                ],
              ]}
            />
          </UsageCard>
          <UsageCard n={4} title="ถามความคิดเห็นผู้อื่น" note="">
            <DataTable
              headers={["โครงสร้าง", "ตัวอย่าง"]}
              rows={[
                [
                  "What do you think about...?",
                  "What do you think about this plan?",
                ],
                [
                  "How do you feel about...?",
                  "How do you feel about changing the date?",
                ],
                [
                  "Do you agree (that)...?",
                  "Do you agree that we should start early?",
                ],
                [
                  "What’s your opinion on...?",
                  "What’s your opinion on online learning?",
                ],
                [
                  "Where do you stand on...?",
                  "Where do you stand on this decision? (เป็นทางการ)",
                ],
              ]}
            />
          </UsageCard>
          <UsageCard n={5} title="ขออภัย / ขอแก้ความคิด" note="">
            <DataTable
              headers={["โครงสร้าง", "ความหมาย"]}
              rows={[
                ["Actually, I meant...", "ที่จริงฉันหมายถึง..."],
                ["Wait, let me rephrase that.", "เดี๋ยวนะ ขอพูดใหม่นะ"],
                [
                  "On second thought,...",
                  "คิดอีกทีแล้ว... / เปลี่ยนใจนิดหน่อย",
                ],
                [
                  "That’s not exactly what I meant.",
                  "ฉันไม่ได้หมายความแบบนั้นเป๊ะๆ",
                ],
              ]}
            />
          </UsageCard>
        </div>

        <SectionTitle emoji="2">คำศัพท์จำเป็น แบ่งตามหมวด</SectionTitle>
        <UsageCard n={1} title="🗣️ คำกริยาที่ใช้บ่อย" note="">
          <DataTable
            headers={["คำศัพท์", "คำแปล", "ตัวอย่าง"]}
            rows={[
              [
                <>
                  <strong>agree</strong>
                </>,
                "เห็นด้วย",
                "I agree with your idea.",
              ],
              [
                <>
                  <strong>disagree</strong>
                </>,
                "ไม่เห็นด้วย",
                "We disagree on the price.",
              ],
              [
                <>
                  <strong>believe</strong>
                </>,
                "เชื่อ / มั่นใจ",
                "I believe it’s possible.",
              ],
              [
                <>
                  <strong>feel</strong>
                </>,
                "รู้สึก / มีความรู้สึกว่า",
                "I feel we should help.",
              ],
              [
                <>
                  <strong>suppose</strong>
                </>,
                "คิดว่า / สันนิษฐานว่า",
                "I suppose you’re right.",
              ],
              [
                <>
                  <strong>assume</strong>
                </>,
                "ถือว่า / คาดคะเน",
                "I assume everyone is coming.",
              ],
              [
                <>
                  <strong>suggest</strong>
                </>,
                "แนะนำ / เสนอแนะ",
                "I suggest we leave early.",
              ],
              [
                <>
                  <strong>recommend</strong>
                </>,
                "แนะนำอย่างจริงจัง",
                "I recommend this book.",
              ],
              [
                <>
                  <strong>doubt</strong>
                </>,
                "สงสัย / ไม่มั่นใจ",
                "I doubt that it will work.",
              ],
              [
                <>
                  <strong>consider</strong>
                </>,
                "พิจารณา / คิดถึง",
                "You should consider it carefully.",
              ],
            ]}
          />
        </UsageCard>
        <UsageCard n={2} title="🧠 คำคุณศัพท์บรรยายความคิด" note="">
          <DataTable
            headers={["คำศัพท์", "คำแปล", "ตัวอย่าง"]}
            rows={[
              [
                <>
                  <strong>fair</strong>
                </>,
                "ยุติธรรม",
                "That sounds fair.",
              ],
              [
                <>
                  <strong>unfair</strong>
                </>,
                "ไม่ยุติธรรม",
                "It’s unfair to others.",
              ],
              [
                <>
                  <strong>reasonable</strong>
                </>,
                "สมเหตุสมผล",
                "The price is reasonable.",
              ],
              [
                <>
                  <strong>unreasonable</strong>
                </>,
                "ไม่สมเหตุสมผล",
                "That’s an unreasonable request.",
              ],
              [
                <>
                  <strong>practical</strong>
                </>,
                "ปฏิบัติได้จริง / มีประโยชน์",
                "It’s a practical solution.",
              ],
              [
                <>
                  <strong>realistic</strong>
                </>,
                "เป็นจริงได้ / ไม่เพ้อฝัน",
                "Is that realistic?",
              ],
              [
                <>
                  <strong>unrealistic</strong>
                </>,
                "เป็นไปไม่ได้ / เพ้อฝัน",
                "The plan is unrealistic.",
              ],
              [
                <>
                  <strong>wise</strong>
                </>,
                "ฉลาด / รอบคอบ",
                "That’s a wise choice.",
              ],
              [
                <>
                  <strong>sensible</strong>
                </>,
                "มีเหตุผล / สมเหตุสมผล",
                "She gave a sensible answer.",
              ],
              [
                <>
                  <strong>controversial</strong>
                </>,
                "เป็นที่ถกเถียงกัน",
                "It’s a controversial topic.",
              ],
            ]}
          />
        </UsageCard>
        <UsageCard
          n={3}
          title="🔗 คำเชื่อมประโยค (สำคัญมาก!)"
          note="ใช้ทำให้การพูดต่อเนื่องและเป็นธรรมชาติขึ้น"
        >
          <DataTable
            headers={["คำศัพท์", "คำแปล", "ใช้ทำอะไร"]}
            rows={[
              [
                <>
                  <strong>However</strong>
                </>,
                "อย่างไรก็ตาม",
                "เปลี่ยนประเด็น / ขัดแย้งอย่างสุภาพ",
              ],
              [
                <>
                  <strong>On the other hand</strong>
                </>,
                "ในทางกลับกัน",
                "เปรียบเทียบ 2 ด้าน",
              ],
              [
                <>
                  <strong>Therefore</strong>
                </>,
                "ดังนั้น",
                "สรุปผล / ให้เหตุผล",
              ],
              [
                <>
                  <strong>Besides / Also</strong>
                </>,
                "นอกจากนี้",
                "เพิ่มข้อมูล / เหตุผลอีกข้อ",
              ],
              [
                <>
                  <strong>For example</strong>
                </>,
                "ตัวอย่างเช่น",
                "ยกตัวอย่างประกอบ",
              ],
              [
                <>
                  <strong>Because / Since</strong>
                </>,
                "เพราะว่า / เนื่องจาก",
                "อธิบายเหตุผล",
              ],
              [
                <>
                  <strong>In fact</strong>
                </>,
                "ที่จริงแล้ว",
                "เน้นข้อความให้ชัดเจนขึ้น",
              ],
              [
                <>
                  <strong>Overall</strong>
                </>,
                "โดยรวมแล้ว",
                "สรุปความคิดทั้งหมด",
              ],
            ]}
          />
        </UsageCard>
         <UsageCard
          n={4}
          title="💬 วลีแสดงระดับความมั่นใจ"
          note=""
        >
          <DataTable
            headers={["ระดับ", "วลี", "ความหมาย"]}
            rows={[
              [                
                "✅ มั่นใจมาก",
                <>
                  <strong>I’m sure that... / There’s no doubt that...</strong>
                </>,
                "ฉันแน่ใจว่า... / ไม่ต้องสงสัยเลยว่า...",
              ],
              [                
                "✅ มั่นใจปานกลาง",
                <>
                  <strong>I think... / It seems to me that...</strong>
                </>,
                "ฉันคิดว่า... / ดูเหมือนว่า...",
              ],
              [                
                "⚠️ ไม่แน่ใจ",
                <>
                  <strong>I’m not sure, but maybe... / It could be that...</strong>
                </>,
                "ฉันไม่แน่ใจ แต่บางที... / อาจจะเป็นว่า...",
              ],
              [                
                "❌ ไม่เห็นด้วยอย่างสุภาพ",
                <>
                  <strong>I’m not convinced that... / I’m not sure about that.</strong>
                </>,
                "ฉันยังไม่เชื่อว่า... / ฉันไม่แน่ใจเรื่องนั้น",
              ],
              
            ]}
          />
        </UsageCard>
        <div className="space-y-3">
          <SubTitle>📝 3. ตัวอย่างบทสนทนาประกอบ</SubTitle>
          <ExampleList>
            <Example
              en={<><strong>A:</strong>What do you think about studying abroad?</>}
              th="คุณคิดอย่างไรเรื่องการไปเรียนต่อต่างประเทศ?"
            />
            <Example
              en={<><strong>B:</strong>In my opinion, it’s a great idea. It helps you learn new things and improve your language skills.</>}
              th="ในความคิดของฉัน เป็นความคิดที่ยอดเยี่ยม ช่วยให้เรียนรู้สิ่งใหม่และพัฒนาภาษา"
            />
            <Example
              en={<><strong>A:</strong>I agree, but on the other hand, it’s very expensive.</>}
              th="จริงอย่างนั้น อย่างไรก็ตาม ฉันเชื่อว่ามันเป็นการลงทุนที่ดีเพื่ออนาคต"
            />
             <Example
              en={<><strong>B:</strong>That’s true. However, I believe it’s a good investment for the future.</>}
              th="ปากกามีประโยชน์ (ทั่วไป พหูพจน์ ไม่ใส่)"
            />
            <Example
              en={<><strong>A:</strong>I see your point, but I think we should consider all costs first.</>}
              th="ฉันเข้าใจที่คุณพูด แต่ฉันคิดว่าเราควรพิจารณาค่าใช้จ่ายทั้งหมดก่อน"
            />
          </ExampleList>
        </div>
        <div className="space-y-4">
          <SubTitle>⚡ 4. ข้อผิดพลาดที่พบบ่อย</SubTitle>
          
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                ❌ Not Correct
              </p>
              <p className="mt-2 text-slate-800">
                I think that is a good idea.
              </p>
              
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                ✅ Correct
              </p>
              <p className="mt-2 text-slate-800">
                I think <strong>it's</strong> a good idea. (เติม subject)
              </p>
              
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                ❌ Not Correct
              </p>
              <p className="mt-2 text-slate-800">
                I agree your opinion.
              </p>
              
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                ✅ Correct
              </p>
              <p className="mt-2 text-slate-800">
                I agree <strong>with</strong> your opinion. (ต้องมี with)
              </p>
              
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                ❌ Not Correct
              </p>
              <p className="mt-2 text-slate-800">
                I disagree your idea.
              </p>
              
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                ✅ Correct
              </p>
              <p className="mt-2 text-slate-800">
                I disagree <strong>with</strong> your idea.
              </p>
              
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                ❌ Not Correct
              </p>
              <p className="mt-2 text-slate-800">
                You are wrong!
              </p>
              
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                ✅ Correct
              </p>
              <p className="mt-2 text-slate-800">
                I don’t see it that way. / I’m afraid I disagree. (พูดสุภาพกว่า)
              </p>
              
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                ❌ Not Correct
              </p>
              <p className="mt-2 text-slate-800">
                What do you think to go?
              </p>
              
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                ✅ Correct
              </p>
              <p className="mt-2 text-slate-800">
                What do you think <strong>about going</strong>? (think about + -ing)
              </p>
              
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default GrammarVocab01;
