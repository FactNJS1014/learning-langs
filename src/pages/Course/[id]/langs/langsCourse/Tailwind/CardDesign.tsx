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

function TailwindCard01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Tailwind CSS · Components
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Card: จากพื้นฐานถึงมืออาชีพ</h1>
        <p className="mt-1 text-lg text-brand-100">พร้อมคำอธิบายทุกคลาส</p>
        <p className="mt-4 max-w-2xl text-white/90">
          สร้างการ์ดที่ใช้ซ้ำได้ ตั้งแต่กล่องธรรมดา การ์ดรูป+เนื้อหา กริดที่ปรับตามจอ
          เอฟเฟกต์ hover ไปจนถึงลิงก์ทั้งการ์ด, skeleton และ container query
        </p>
      </header>

      {/* ===== ส่วนที่ 1: ภาพรวม ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ภาพรวม: การ์ดคืออะไร?</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="text-xs font-semibold text-emerald-700">ระดับพื้นฐาน</p>
            <p className="mt-1 font-semibold text-slate-900">กล่อง ขอบ เงา ระยะห่าง</p>
            <p className="mt-1 text-sm text-slate-600">rounded, border, p, shadow</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">ระดับกลาง</p>
            <p className="mt-1 font-semibold text-slate-900">รูป + กริด + hover</p>
            <p className="mt-1 text-sm text-slate-600">grid, group, line-clamp</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
            <p className="text-xs font-semibold text-rose-700">ระดับมืออาชีพ</p>
            <p className="mt-1 font-semibold text-slate-900">คลิกทั้งการ์ด + Accessible</p>
            <p className="mt-1 text-sm text-slate-600">stretched link, skeleton, @container</p>
          </div>
        </div>

        <Callout tone="info" title="สูตรของการ์ด = พื้นหลัง + ขอบมน + เงาเบา + padding">
          แทบทุกการ์ดเริ่มจาก 4 อย่างนี้ แล้วค่อยเพิ่มรูป, ปุ่ม, hover ทีละชั้น
        </Callout>
      </section>

      {/* ===== ส่วนที่ 2: พื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: กล่องการ์ดธรรมดา</SectionTitle>

          <CodeBlock
            filename="Card.tsx"
            highlight={[1, 3]}
            code={`
<div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
  <h3 className="font-semibold text-slate-900">React พื้นฐาน</h3>
  <p className="mt-1 text-sm text-slate-600">เรียนรู้ component, props และ state</p>
</div>
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"rounded-lg"}</Chip>, "มุมโค้ด 0.5rem (rounded-2xl = 1rem โค้งมากขึ้น)"],
            [<Chip>{"border border-slate-200"}</Chip>, "เส้นขอบบางสีเทาอ่อน"],
            [<Chip>{"bg-white"}</Chip>, "พื้นหลังขาว ให้การ์ดแยกจากพื้นหน้าเว็บ"],
            [<Chip>{"p-4"}</Chip>, "ระยะห่างด้านใน 1rem = 16px ทุกด้าน"],
            [<Chip>{"shadow-sm"}</Chip>, "เงาบาง ๆ ให้การ์ดดูลอยเล็กน้อย"],
            [<Chip>{"mt-1"}</Chip>, "ระยะห่างด้านบนของข้อความ 0.25rem"],
          ]}
        />

        <Callout tone="info" title="ตัวเลขของ Tailwind = ตัวคูณ 0.25rem">
          <Hl>p-4</Hl> = 4 × 0.25rem = 1rem (16px), <Hl>p-5</Hl> = 1.25rem, <Hl>p-6</Hl> = 1.5rem
        </Callout>
      </section>

      {/* ===== ส่วนที่ 3: รูป + เนื้อหา ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="3">การ์ดมีรูป: รูปด้านบน เนื้อหาด้านล่าง</SectionTitle>

          <CodeBlock
            filename="ImageCard.tsx"
            highlight={[1, 2, 3]}
            code={`
<article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <img src="/images/react.png" alt="" className="aspect-video w-full object-cover" />
  <div className="space-y-2 p-5">
    <h3 className="text-lg font-bold">React พื้นฐาน</h3>
    <p className="text-sm text-slate-600">เรียนรู้ component, props และ state</p>
  </div>
</article>
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"overflow-hidden"}</Chip>, "ตัดส่วนที่ล้นการ์ด → มุมรูปโค้งตามการ์ด"],
            [<Chip>{"aspect-video"}</Chip>, "บังคับสัดส่วน 16:9 รูปจึงไม่ทำให้หน้ากระโดดตอนโหลด"],
            [<Chip>{"w-full object-cover"}</Chip>, "รูปกว้างเต็มการ์ดและครอปให้เต็มกรอบโดยไม่ยืดเพี้ยน"],
            [<Chip>{"space-y-2"}</Chip>, "เว้นระยะแนวตั้ง 0.5rem ระหว่างลูกที่เรียงต่อกัน"],
            [<Chip>{"p-5"}</Chip>, "padding เฉพาะส่วนเนื้อหา (รูปจึงชิดขอบการ์ด)"],
          ]}
        />

          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ ไม่มี overflow-hidden → มุมบนของรูปทะลุขอบโค้ดของการ์ด
<article className="rounded-2xl border bg-white">

// ✅ ใส่ overflow-hidden → รูปถูกตัดตามมุมโค้ด
<article className="overflow-hidden rounded-2xl border bg-white">
`}
          />
      </section>

      {/* ===== ส่วนที่ 4: Grid ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">การ์ดหลายใบ: Grid ที่ปรับตามขนาดจอ</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-brand-600">มือถือ</p>
            <p className="mt-1 text-slate-800">1 คอลัมน์</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-brand-600">ตั้งแต่ 640px (sm:)</p>
            <p className="mt-1 text-slate-800">2 คอลัมน์</p>
          </div>
          <div className="rounded-xl border border-[#FFD84D] bg-amber-50 p-4 shadow-sm">
            <p className="text-xs font-semibold text-amber-700">ตั้งแต่ 1024px (lg:)</p>
            <p className="mt-1 text-slate-800">3 คอลัมน์</p>
          </div>
        </div>

          <CodeBlock
            filename="CourseList.tsx"
            highlight={[1]}
            code={`
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {courses.map((c) => (
    <CourseCard key={c.id} course={c} />
  ))}
</div>
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"grid"}</Chip>, "เปิดระบบ CSS Grid"],
            [<Chip>{"gap-6"}</Chip>, "ช่องว่างระหว่างการ์ด 1.5rem ทั้งแนวตั้งและแนวนอน"],
            [<Chip>{"sm:grid-cols-2"}</Chip>, "ตั้งแต่ sm ขึ้นไป แบ่ง 2 คอลัมน์เท่ากัน"],
            [<Chip>{"lg:grid-cols-3"}</Chip>, "ตั้งแต่ lg ขึ้นไป แบ่ง 3 คอลัมน์ (ทับค่าของ sm)"],
          ]}
        />

        <div className="space-y-3">
          <SubTitle>ทางเลือก: ให้จำนวนคอลัมน์ปรับเองตามความกว้าง</SubTitle>
          <CodeBlock
            highlight={[1]}
            code={`
<div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">
`}
          />
          <Callout tone="info" title="auto-fill + minmax(16rem, 1fr)">
            ใส่การ์ดกว้างอย่างน้อย 16rem ให้ได้มากที่สุดต่อแถว ที่เหลือแบ่งเท่ากัน —
            ไม่ต้องเขียน breakpoint เอง
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>ทำให้การ์ดสูงเท่ากันและดันส่วนท้ายลงล่างสุด</SubTitle>
          <CodeBlock
            highlight={[1, 2, 4]}
            code={`
<article className="flex flex-col overflow-hidden rounded-2xl border bg-white">
  <div className="flex flex-1 flex-col gap-3 p-5">
    ...เนื้อหา...
    <div className="mt-auto border-t pt-4">ราคา / ปุ่ม</div>
  </div>
</article>
`}
          />
          <ExampleList>
            <Example en="grid ยืดการ์ดให้สูงเท่ากันทั้งแถวอยู่แล้ว" />
            <Example
              en={
                <>
                  <Chip>flex flex-col</Chip> + <Chip>flex-1</Chip> ทำให้เนื้อหากินพื้นที่ที่เหลือ
                </>
              }
            />
            <Example
              en={
                <>
                  <Chip>mt-auto</Chip> ดันแถวท้าย (ราคา/ปุ่ม) ลงล่างสุดเสมอ แม้เนื้อหาสั้นไม่เท่ากัน
                </>
              }
            />
          </ExampleList>
        </div>
      </section>

      {/* ===== ส่วนที่ 5: ระดับกลาง ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="5">ระดับกลาง: Hover, Badge และตัดข้อความ</SectionTitle>

        <div className="space-y-3">
          <SubTitle>เอฟเฟกต์ hover ให้การ์ดลอยขึ้น</SubTitle>
          <CodeBlock
            highlight={[2, 3, 4]}
            code={`
<article className="
  transition duration-200
  hover:shadow-lg
  motion-safe:hover:-translate-y-1
  ...">
`}
          />
          <DataTable
            headers={["คลาส", "ความหมาย"]}
            rows={[
              [<Chip>{"transition duration-200"}</Chip>, "ให้การเปลี่ยนสไตล์ค่อย ๆ เกิดใน 200 มิลลิวินาที"],
              [<Chip>{"hover:shadow-lg"}</Chip>, "เมาส์ชี้แล้วเงาใหญ่ขึ้น"],
              [<Chip>{"motion-safe:hover:-translate-y-1"}</Chip>, "ยกขึ้น 0.25rem เฉพาะคนที่ไม่ได้ปิด animation ในระบบ"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>group-hover: เอาเมาส์ชี้การ์ด แต่ให้รูปข้างในซูม</SubTitle>
          <CodeBlock
            highlight={[1, 5]}
            code={`
<article className="group overflow-hidden ...">
  <img
    src="/images/react.png"
    alt=""
    className="transition-transform duration-300 group-hover:scale-105"
  />
</article>
`}
          />
          <Callout tone="info" title="group คือการตั้ง “ตัวแม่” ให้ลูกตอบสนองตามสถานะของแม่">
            ใส่ <Hl>group</Hl> ที่การ์ด แล้วใส่ <Hl>group-hover:</Hl> ที่รูป — รูปซูมเมื่อเมาส์อยู่บน
            “ส่วนใดก็ได้” ของการ์ด (ต้องมี <Hl>overflow-hidden</Hl> ที่กรอบรูปกันรูปทะลุ)
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>Badge และ line-clamp</SubTitle>
          <CodeBlock
            highlight={[1, 5, 6]}
            code={`
<span className="w-fit rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
  เริ่มต้น
</span>

<h3 className="line-clamp-2 text-lg font-bold">ชื่อคอร์สที่ยาวมาก ๆ ...</h3>
<p className="line-clamp-3 text-sm text-slate-600">คำอธิบายที่ยาวมาก ๆ ...</p>
`}
          />
          <DataTable
            headers={["คลาส", "ความหมาย"]}
            rows={[
              [<Chip>{"w-fit"}</Chip>, "ให้ badge กว้างเท่าข้อความ ไม่ยืดเต็มการ์ด"],
              [<Chip>{"rounded-full"}</Chip>, "มุมโค้งสุดเป็นแคปซูล"],
              [<Chip>{"line-clamp-2"}</Chip>, "แสดงสูงสุด 2 บรรทัด ส่วนที่เกินเป็น “…” การ์ดจึงสูงไม่เพี้ยน"],
            ]}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 6: มืออาชีพ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="6">ระดับมืออาชีพ: คลิกได้ทั้งการ์ด + Accessible + Skeleton</SectionTitle>

        <ExampleList>
          <Example
            en={
              <>
                คลิกได้ทั้งการ์ดด้วย <Chip>after:absolute after:inset-0</Chip> (stretched link)
              </>
            }
          />
          <Example
            en={
              <>
                Tab โฟกัสลิงก์แล้วทั้งการ์ดมีวงโฟกัส (<Chip>focus-within:ring-2</Chip>)
              </>
            }
          />
          <Example en="รูปซูมนุ่ม ๆ และยกการ์ดขึ้นเมื่อ hover (เคารพการตั้งค่าลด animation)" />
          <Example en="Skeleton แสดงระหว่างโหลดข้อมูล ขนาดเท่าการ์ดจริง หน้าไม่กระโดด" />
          <Example en="Container query: การ์ดปรับเลย์เอาต์ตามความกว้างของกล่องที่ครอบ ไม่ใช่ความกว้างจอ" />
        </ExampleList>

        <div className="space-y-3">
          <SubTitle>CourseCard ฉบับเต็ม</SubTitle>
          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="CourseCard.tsx"
            highlight={[15, 21, 30, 32, 37, 39]}
            code={`
import { Clock, Star } from "lucide-react";

export type Course = {
  id: number;
  title: string;
  desc: string;
  level: string;
  hours: number;
  rating: number;
  image: string;
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 focus-within:ring-2 focus-within:ring-indigo-600 hover:shadow-lg motion-safe:hover:-translate-y-1">
      <div className="aspect-video overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
          {course.level}
        </span>

        <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
          {/* after:inset-0 ขยายพื้นที่คลิกของลิงก์ให้เต็มทั้งการ์ด */}
          <a href={"/course/" + course.id} className="after:absolute after:inset-0 focus:outline-none">
            {course.title}
          </a>
        </h3>

        <p className="line-clamp-3 text-sm text-slate-600">{course.desc}</p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Clock size={14} aria-hidden="true" /> {course.hours} ชม.
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-amber-600">
            <Star size={14} className="fill-current" aria-hidden="true" /> {course.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
`}
          />
        </div>

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"relative + after:absolute after:inset-0"}</Chip>, "ขยายพื้นที่คลิกของลิงก์เดียวให้คลุมทั้งการ์ด โดยไม่ต้องห่อ <a> ทั้งก้อน"],
            [<Chip>{"focus:outline-none บนลิงก์"}</Chip>, "ซ่อนกรอบโฟกัสเดิมของลิงก์ เพราะการ์ดแสดงวงโฟกัสแทนแล้ว (focus-within)"],
            [<Chip>{"alt=\"\""}</Chip>, "รูปประกอบที่ไม่มีข้อมูลสำคัญ ให้ screen reader ข้าม"],
            [<Chip>{"loading=\"lazy\""}</Chip>, "รูปนอกจอยังไม่โหลดจนกว่าจะเลื่อนมาใกล้ ประหยัดเน็ต"],
            [<Chip>{"aspect-video"}</Chip>, "จองพื้นที่รูปไว้ก่อน กัน layout shift"],
            [<Chip>{"h3 + article"}</Chip>, "โครงสร้าง HTML มีความหมาย ช่วย screen reader และ SEO"],
          ]}
        />

        <div className="space-y-3">
          <SubTitle>Skeleton: โครงการ์ดระหว่างรอข้อมูล</SubTitle>
          <CodeBlock
            filename="CardSkeleton.tsx"
            highlight={[5, 7]}
            code={`
export function CardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <div className="aspect-video bg-slate-200" />
      <div className="space-y-3 p-5">
        <div className="h-4 w-1/4 rounded bg-slate-200" />
        <div className="h-5 w-3/4 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
      </div>
    </div>
  );
}
`}
          />
          <Callout tone="info" title="animate-pulse + กล่องสีเทา">
            ทำให้กล่องกะพริบเบา ๆ บอกผู้ใช้ว่ากำลังโหลด ควรกำหนดขนาดใกล้เคียงการ์ดจริง
            และใส่ <Hl>aria-hidden</Hl> เพราะไม่มีเนื้อหาให้อ่าน
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>Container query: การ์ดแนวตั้ง ↔ แนวนอนตามกล่อง</SubTitle>
          <CodeBlock
            filename="ResponsiveCard.tsx"
            highlight={[3, 4, 8]}
            code={`
export function ResponsiveCard({ course }: { course: Course }) {
  return (
    <div className="@container">
      <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 @md:flex-row @md:items-center">
        <img
          src={course.image}
          alt=""
          className="aspect-video w-full rounded-xl object-cover @md:w-48"
        />
        <div>
          <h3 className="font-bold text-slate-900">{course.title}</h3>
          <p className="text-sm text-slate-600">{course.desc}</p>
        </div>
      </article>
    </div>
  );
}
`}
          />
          <DataTable
            headers={["คลาส", "ความหมาย"]}
            rows={[
              [<Chip>{"@container"}</Chip>, "ตั้งกล่องนี้เป็น “ตัวอ้างอิง” ให้ลูกวัดความกว้างจากมัน"],
              [<Chip>{"@md:flex-row"}</Chip>, "เมื่อกล่องกว้างตั้งแต่ 28rem (448px) ขึ้นไป เปลี่ยนเป็นแนวนอน"],
              [<Chip>{"@md:w-48"}</Chip>, "รูปกว้าง 12rem เมื่อกล่องกว้างพอ"],
            ]}
          />
          <Callout tone="success" title="ต่างจาก md: ธรรมดาอย่างไร?">
            <Hl>md:</Hl> ดูความกว้าง “หน้าจอ” ส่วน <Hl>@md:</Hl> ดูความกว้าง “กล่องที่ครอบ”
            — การ์ดตัวเดียวกันใช้ได้ทั้งในคอลัมน์แคบ (sidebar) และคอลัมน์กว้าง
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 7: ข้อผิดพลาด ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="7">ข้อผิดพลาดที่พบบ่อย &amp; เช็กลิสต์</SectionTitle>

          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 4, 10]}
            code={`
// ❌ ห่อ <a> ทั้งการ์ด แล้วมีปุ่ม/ลิงก์ซ้อนข้างใน → HTML ไม่ถูกต้อง
<a href="/course/1">
  <article>
    <button>ซื้อเลย</button>
  </article>
</a>

// ✅ ให้ลิงก์หลักขยายพื้นที่คลิกด้วย after:inset-0 (การ์ดเป็น relative)
<article className="relative">
  <a href="/course/1" className="after:absolute after:inset-0">ชื่อคอร์ส</a>
</article>
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5, 6]}
            code={`
// ❌ ประกอบชื่อคลาสด้วยตัวแปร → Tailwind สแกนไม่เจอ ไม่มี CSS
className={"bg-" + color + "-50"}

// ✅ เขียนชื่อคลาสให้เต็มเสมอ (หรือเก็บใน object)
const badge = { easy: "bg-emerald-50", hard: "bg-rose-50" };
className={badge[level]}
`}
          />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>อาการที่เจอ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="มุมรูปไม่โค้ง → ลืม overflow-hidden" />
                <Example ok={false} en="การ์ดสูงไม่เท่ากัน → ไม่ใช้ grid หรือไม่ใช้ flex-col + mt-auto" />
                <Example ok={false} en="หน้ากระโดดตอนรูปโหลด → ไม่ได้ใส่ aspect-video" />
                <Example ok={false} en="การ์ดสูงเพี้ยนเพราะข้อความยาว → ไม่ใช้ line-clamp" />
                <Example ok={false} en="สีไม่ขึ้น → ประกอบชื่อคลาสด้วยตัวแปร" />
              </ExampleList>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>เช็กลิสต์ก่อนส่งงาน</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example en="ทดสอบที่ 390px, 768px และ 1280px" />
                <Example en="ใส่ข้อความยาวมาก/สั้นมาก ดูว่าการ์ดยังสูงเท่ากัน" />
                <Example en="กด Tab ไล่ดู — เห็นวงโฟกัสที่การ์ดและกด Enter เปิดลิงก์ได้" />
                <Example en="รูปทุกใบมี alt (หรือ alt เว้นว่างถ้าเป็นรูปประกอบ)" />
                <Example en="มี skeleton หรือพื้นที่จองไว้ระหว่างรอข้อมูล" />
              </ExampleList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TailwindCard01;