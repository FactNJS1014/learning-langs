import type { ReactNode } from "react";
import {
  Callout,
  DataTable,
  Example,
  ExampleList,
  Hl,
  SectionTitle,
  SubTitle,
  UsageCard,
} from "../../../../../../components/Grammarblocks";

/* ---------- local helper ---------- */

// A common mistake: wrong sentence, corrected sentence and a short reason
function Fix({ wrong, right, why }: { wrong: ReactNode; right: ReactNode; why: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <ul className="space-y-2.5">
        <Example ok={false} en={wrong} />
        <Example en={right} />
      </ul>
      <p className="mt-3 text-sm text-slate-500">{why}</p>
    </div>
  );
}

/* ---------- page ---------- */

function Grammar05() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Grammar · Lesson 5
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Articles: a / an / the</h1>
        <p className="mt-1 text-lg text-brand-100">คำนำหน้านาม</p>
        <p className="mt-4 max-w-2xl text-white/90">
          Article คือคำนำหน้านาม ใช้บอกว่านามที่ตามมาคือแบบไหน —{" "}
          <strong>เฉพาะเจาะจง</strong> หรือ <strong>ทั่วไป</strong> แบ่งเป็น 2 กลุ่มหลัก
        </p>
      </header>

      {/* 1. Types */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ชนิดของ Article</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Indefinite Article
            </p>
            <p className="mt-1 text-3xl font-bold text-emerald-700">A / AN</p>
            <p className="mt-2 text-sm text-slate-600">บ่งชี้ทั่วไป ไม่ระบุอันไหน</p>
            <p className="mt-3 text-slate-800">
              สิ่งหนึ่งอย่างใดอย่างหนึ่ง ยังไม่เคยกล่าวถึงก่อน
            </p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Definite Article
            </p>
            <p className="mt-1 text-3xl font-bold text-sky-700">THE</p>
            <p className="mt-2 text-sm text-slate-600">บ่งชี้เฉพาะเจาะจง</p>
            <p className="mt-3 text-slate-800">
              สิ่งนั้นโดยเฉพาะ ที่ทราบกันแล้วว่าหมายถึงอันไหน
            </p>
          </div>
        </div>
      </section>

      {/* 2. A vs AN */}
      <section className="space-y-8">
        <SectionTitle emoji="2">A vs AN — ใช้ตัวไหนเมื่อไหร่</SectionTitle>
        <Callout tone="info" title="กฎสำคัญ: ดูที่เสียงตัวแรกของคำที่ตามมา ไม่ใช่ตัวสะกด" />

        <div className="space-y-4">
          <SubTitle>✅ ใช้ A → เมื่อคำขึ้นต้นด้วยเสียงพยัญชนะ</SubTitle>
          <DataTable
            headers={["คำ", "ตัวอย่าง", "หมายเหตุ"]}
            rows={[
              [<><Hl>a</Hl> book</>, "หนังสือเล่มหนึ่ง", "b = เสียงพยัญชนะ"],
              [<><Hl>a</Hl> car</>, "รถคันหนึ่ง", "c = เสียงพยัญชนะ"],
              [
                <><Hl>a</Hl> university</>,
                "มหาวิทยาลัยแห่งหนึ่ง",
                <>u ออกเสียง “ยู” → <Hl>เสียงพยัญชนะ</Hl></>,
              ],
              [<><Hl>a</Hl> user</>, "ผู้ใช้คนหนึ่ง", "เหมือนข้างต้น"],
              [<><Hl>a</Hl> European</>, "ชาวยุโรปคนหนึ่ง", "Eu ออกเสียง “ยู”"],
            ]}
          />
        </div>

        <div className="space-y-4">
          <SubTitle>✅ ใช้ AN → เมื่อคำขึ้นต้นด้วยเสียงสระ (a, e, i, o, u)</SubTitle>
          <DataTable
            headers={["คำ", "ตัวอย่าง", "หมายเหตุ"]}
            rows={[
              [<><Hl>an</Hl> apple</>, "แอปเปิ้ลผลหนึ่ง", "a = เสียงสระ"],
              [<><Hl>an</Hl> elephant</>, "ช้างตัวหนึ่ง", "e = เสียงสระ"],
              [<><Hl>an</Hl> idea</>, "ความคิดหนึ่ง", "i = เสียงสระ"],
              [<><Hl>an</Hl> umbrella</>, "ร่มคันหนึ่ง", "u ออกเสียง “อะ” (อัมเบรลลา)"],
              [
                <><Hl>an</Hl> hour</>,
                "ชั่วโมงหนึ่ง",
                <>h ไม่ออกเสียง → ขึ้นต้นด้วยเสียง “อา” ✓</>,
              ],
              [<><Hl>an</Hl> honest boy</>, "เด็กซื่อสัตย์คนหนึ่ง", "h ไม่ออกเสียงเหมือนกัน"],
            ]}
          />
          <Callout tone="warning" title="ข้อผิดพลาดที่พบบ่อย">
            <ul className="space-y-2.5">
              <Example ok={false} en={<><s>an</s> university</>} />
              <Example en={<><Hl>a</Hl> university</>} />
              <Example ok={false} en={<><s>a</s> hour</>} />
              <Example en={<><Hl>an</Hl> hour</>} />
            </ul>
          </Callout>
        </div>

        <div className="space-y-4">
          <SubTitle>เมื่อใช้ A / AN</SubTitle>
          <div className="space-y-4">
            <UsageCard n={1} title="สิ่งหนึ่งอย่างใดอย่างหนึ่ง ยังไม่เคยพูดถึงก่อน">
              <Example
                en={<>I saw <Hl>a</Hl> cat yesterday.</>}
                th="เมื่อวานฉันเห็นแมวตัวหนึ่ง (ยังไม่รู้ว่าตัวไหน)"
              />
            </UsageCard>
            <UsageCard n={2} title="บอกอาชีพ / ชนิด">
              <Example en={<>She is <Hl>a</Hl> doctor.</>} th="เธอเป็นหมอ" />
              <Example en={<>He is <Hl>an</Hl> engineer.</>} th="เขาเป็นวิศวกร" />
            </UsageCard>
            <UsageCard n={3} title="หมายถึง “หนึ่ง”">
              <Example en={<><Hl>A</Hl> hundred</>} th="หนึ่งร้อย" />
              <Example en={<><Hl>An</Hl> apple</>} th="หนึ่งผล" />
            </UsageCard>
          </div>
        </div>

        <div className="space-y-4">
          <SubTitle>เมื่อห้ามใช้ A / AN</SubTitle>
          <ExampleList>
            <Example ok={false} en={<><s>a books</s></>} th="นามพหูพจน์" />
            <Example en={<><Hl>books</Hl></>} />
            <Example ok={false} en={<><s>a water</s></>} th="นามนับไม่ได้" />
            <Example en={<><Hl>water</Hl> / <Hl>a glass of</Hl> water</>} />
          </ExampleList>
        </div>
      </section>

      {/* 3. THE */}
      <section className="space-y-8">
        <SectionTitle emoji="3">THE — ใช้เมื่อไหร่</SectionTitle>
        <Callout
          tone="info"
          title="ใช้เมื่อทั้งผู้พูดและผู้ฟังรู้ชัดเจนแล้วว่าหมายถึงสิ่งไหน หรือเป็นสิ่งที่มีเพียงอันเดียว"
        />

        <div className="space-y-4">
          <SubTitle>✅ กรณีที่ต้องใช้ THE</SubTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <UsageCard n={1} title="เคยกล่าวถึงไปแล้วก่อนหน้า">
              <Example
                en={<>I bought <Hl>a</Hl> phone yesterday. <Hl>The</Hl> phone is red.</>}
                th="ฉันซื้อโทรศัพท์เมื่อวาน → (โทรศัพท์) เครื่องนั้นสีแดง"
              />
            </UsageCard>

            <UsageCard n={2} title="สิ่งที่มีเพียงหนึ่งเดียวในโลก">
              <Example en={<><Hl>the</Hl> sun</>} th="พระอาทิตย์" />
              <Example en={<><Hl>the</Hl> moon</>} th="พระจันทร์" />
              <Example en={<><Hl>the</Hl> earth</>} th="โลก" />
              <Example en={<><Hl>the</Hl> sky</>} th="ท้องฟ้า" />
            </UsageCard>

            <UsageCard n={3} title="ระบุชัดเจนว่าอันไหน" note="มีคำอธิบายต่อท้าย">
              <Example
                en={<><Hl>The</Hl> book on the table.</>}
                th="หนังสือเล่มที่อยู่บนโต๊ะ"
              />
              <Example en={<><Hl>The</Hl> girl in red.</>} th="เด็กผู้หญิงที่ใส่ชุดสีแดง" />
            </UsageCard>

            <UsageCard
              n={4}
              title="ชื่อทะเล มหาสมุทร แม่น้ำ หมู่เกาะ เทือกเขา"
              note="รวมถึงประเทศที่เป็นกลุ่ม หรือมีคำว่า Kingdom / Republic"
            >
              <Example en={<><Hl>the</Hl> Chao Phraya</>} th="แม่น้ำเจ้าพระยา" />
              <Example en={<><Hl>the</Hl> Pacific</>} th="มหาสมุทรแปซิฟิก" />
              <Example en={<><Hl>the</Hl> United States</>} th="สหรัฐอเมริกา" />
              <Example en={<><Hl>the</Hl> United Kingdom</>} th="สหราชอาณาจักร" />
            </UsageCard>

            <UsageCard n={5} title="ลำดับที่ / คำเปรียบเทียบสูงสุด">
              <Example en={<><Hl>the</Hl> first</>} th="คนแรก" />
              <Example en={<><Hl>the</Hl> best</>} th="ดีที่สุด" />
              <Example en={<><Hl>the</Hl> only one</>} th="เพียงหนึ่งเดียว" />
            </UsageCard>

            <UsageCard n={6} title="เครื่องดนตรี">
              <Example en={<>She plays <Hl>the</Hl> piano.</>} th="เธอเล่นเปียโน" />
            </UsageCard>
          </div>
        </div>

        <div className="space-y-4">
          <SubTitle>❌ เมื่อห้ามใช้ THE</SubTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <UsageCard
              n={1}
              title="ชื่อประเทศเดี่ยว"
              note="ยกเว้นกลุ่มประเทศ เช่น the Philippines, the Netherlands"
            >
              <Example ok={false} en={<><s>the Thailand</s></>} />
              <Example en={<><Hl>Thailand</Hl></>} />
              <Example ok={false} en={<><s>the Japan</s></>} />
              <Example en={<><Hl>Japan</Hl></>} />
            </UsageCard>

            <UsageCard n={2} title="ชื่อวัน เดือน เทศกาล">
              <Example ok={false} en={<><s>the Sunday</s></>} />
              <Example en={<><Hl>on</Hl> Sunday</>} />
              <Example ok={false} en={<><s>the January</s></>} />
              <Example en={<><Hl>in</Hl> January</>} />
              <Example
                en={<>แต่: <Hl>the</Hl> New Year / <Hl>the</Hl> Songkran Festival</>}
                th="มีคำเติม จึงใช้ the ได้"
              />
            </UsageCard>

            <UsageCard n={3} title="กีฬา">
              <Example ok={false} en={<>play <s>the</s> football</>} />
              <Example en={<>play <Hl>football</Hl></>} />
              <Example en={<>play <Hl>basketball</Hl></>} />
            </UsageCard>

            <UsageCard n={4} title="อาหารเช้า-เที่ยง-เย็น">
              <Example ok={false} en={<><s>the breakfast</s></>} />
              <Example en={<>have <Hl>breakfast</Hl></>} />
              <Example
                en={<>ยกเว้นเมื่อระบุเฉพาะ: <Hl>the</Hl> breakfast I made</>}
                th="อาหารเช้าที่ฉันทำ"
              />
            </UsageCard>

            <UsageCard n={5} title="สถานที่เมื่อใช้ตามวัตถุประสงค์">
              <Example en={<>go to <Hl>school</Hl></>} th="ไปเรียน" />
              <Example en={<>go to <Hl>hospital</Hl></>} th="ไปรักษาตัว" />
              <Example en={<>go to <Hl>church</Hl></>} th="ไปทำศาสนกิจ" />
              <Example
                en={<>แต่ถ้าไปเยี่ยม/ไปธุระ: go to <Hl>the</Hl> school / <Hl>the</Hl> hospital</>}
              />
            </UsageCard>
          </div>
        </div>
      </section>

      {/* 4. Summary */}
      <section className="space-y-6">
        <SectionTitle emoji="4">สรุปเปรียบเทียบชัด ๆ</SectionTitle>
        <DataTable
          headers={["สถานการณ์", "ใช้", "ตัวอย่าง"]}
          rows={[
            ["สิ่งหนึ่ง ยังไม่เคยพูดถึง", <Hl>A / AN</Hl>, <>I saw <Hl>a</Hl> dog.</>],
            [
              "สิ่งที่รู้กันแล้ว / มีเพียงหนึ่งเดียว",
              <Hl>THE</Hl>,
              <><Hl>The</Hl> dog I saw is black. / <Hl>The</Hl> sun rises.</>,
            ],
            ["นามพหูพจน์ ทั่วไป", "ไม่ใส่", "Dogs are friendly."],
            ["นามนับไม่ได้ ทั่วไป", "ไม่ใส่", "Water is important."],
            ["บอกอาชีพ", <Hl>A / AN</Hl>, <>He is <Hl>a</Hl> chef.</>],
            ["ประเทศเดี่ยว / วันเดือน / กีฬา", "ไม่ใส่", "Thailand, Monday, play tennis"],
          ]}
        />

        <div className="space-y-3">
          <SubTitle>ตัวอย่างเปรียบเทียบ</SubTitle>
          <ExampleList>
            <Example
              en={<>I need <Hl>a</Hl> pen.</>}
              th="ฉันต้องการปากกาด้ามหนึ่ง (เอาอันไหนก็ได้)"
            />
            <Example
              en={<>Please pass me <Hl>the</Hl> pen.</>}
              th="ช่วยส่งปากกาด้ามนั้นให้หน่อย (รู้กันแล้วว่าด้ามไหน)"
            />
            <Example
              en={<><Hl>Pens</Hl> are useful.</>}
              th="ปากกามีประโยชน์ (ทั่วไป พหูพจน์ ไม่ใส่)"
            />
          </ExampleList>
        </div>
      </section>

      {/* 5. Common mistakes */}
      <section className="space-y-6">
        <SectionTitle emoji="5">ข้อผิดพลาดยอดฮิต</SectionTitle>

        <Callout tone="success" title="ตัวอย่างที่ถูกต้อง: ครั้งแรกใช้ a ครั้งต่อไปใช้ the">
          I have <Hl>a</Hl> dog. <Hl>The</Hl> dog is black.
        </Callout>

        <div className="grid gap-4 sm:grid-cols-2">
          <Fix
            wrong={<>I go <s>to the school</s> every day.</>}
            right={<>I go <Hl>to school</Hl> every day.</>}
            why="ไปเรียน"
          />
          <Fix
            wrong={<>She is <s>a</s> honest girl.</>}
            right={<>She is <Hl>an</Hl> honest girl.</>}
            why="h ไม่ออกเสียง"
          />
          <Fix
            wrong={<>I play <s>the basketball</s>.</>}
            right={<>I play <Hl>basketball</Hl>.</>}
            why="กีฬาไม่ใส่ the"
          />
          <Fix
            wrong={<>This is <s>an</s> university.</>}
            right={<>This is <Hl>a</Hl> university.</>}
            why="เสียง “ยู” เป็นเสียงพยัญชนะ"
          />
        </div>
      </section>
    </div>
  );
}

export default Grammar05;