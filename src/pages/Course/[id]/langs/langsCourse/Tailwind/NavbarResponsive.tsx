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

function TailwindNavbar01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Tailwind CSS · Layout
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Responsive Navbar &amp; Active Menu</h1>
        <p className="mt-1 text-lg text-brand-100">จากพื้นฐานถึงมืออาชีพ พร้อมคำอธิบายทุกคลาส</p>
        <p className="mt-4 max-w-2xl text-white/90">
          สร้างแถบเมนูด้านบนที่ใช้ได้ทั้งมือถือและจอใหญ่ ไฮไลต์หน้าที่เปิดอยู่
          เมนูมือถือเลื่อนเปิดนุ่มนวล และรองรับคีย์บอร์ด
        </p>
      </header>

      {/* ===== ส่วนที่ 1: ภาพรวม ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ภาพรวม: เราจะสร้างอะไร?</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="text-xs font-semibold text-emerald-700">ระดับพื้นฐาน</p>
            <p className="mt-1 font-semibold text-slate-900">โลโก้ซ้าย เมนูขวา</p>
            <p className="mt-1 text-sm text-slate-600">Flexbox และจัดกึ่งกลางเนื้อหา</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">ระดับกลาง</p>
            <p className="mt-1 font-semibold text-slate-900">Responsive + Active menu</p>
            <p className="mt-1 text-sm text-slate-600">ปุ่ม ☰, NavLink, sticky</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
            <p className="text-xs font-semibold text-rose-700">ระดับมืออาชีพ</p>
            <p className="mt-1 font-semibold text-slate-900">Animation + Accessible</p>
            <p className="mt-1 text-sm text-slate-600">เส้นใต้เลื่อน, เงาตอนเลื่อน, inert</p>
          </div>
        </div>

        <Callout tone="info" title="หลักคิดของ Tailwind: Mobile-first">
          เขียนสไตล์ของ <Hl>มือถือก่อน</Hl> แล้วใช้ prefix อย่าง <Chip>md:</Chip> เพื่อ “ทับ”
          เมื่อจอกว้างขึ้น — คลาสที่ไม่มี prefix ใช้กับทุกขนาดจอ
        </Callout>
      </section>

      {/* ===== ส่วนที่ 2: พื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: โลโก้ซ้าย เมนูขวา</SectionTitle>

          <CodeBlock
            filename="Navbar.tsx"
            highlight={[3, 4, 6]}
            code={`
export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="/" className="font-bold">Learning</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/">หน้าแรก</a>
          <a href="/courses">คอร์ส</a>
          <a href="/contact">ติดต่อ</a>
        </nav>
      </div>
    </header>
  );
}
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"border-b bg-white"}</Chip>, "เส้นขอบล่างและพื้นหลังขาว ยืดเต็มความกว้างจอ"],
            [<Chip>{"mx-auto max-w-6xl"}</Chip>, "จำกัดความกว้างเนื้อหาแล้วจัดกึ่งกลางหน้า"],
            [<Chip>{"flex items-center"}</Chip>, "วางลูกเรียงแนวนอนและจัดให้อยู่กลางแนวตั้ง"],
            [<Chip>{"justify-between"}</Chip>, "ดันโลโก้ไปซ้ายสุด เมนูไปขวาสุด"],
            [<Chip>{"h-14 px-4"}</Chip>, "สูง 3.5rem = 56px และเว้นขอบซ้าย-ขวา 1rem"],
            [<Chip>{"gap-6"}</Chip>, "ระยะห่างระหว่างเมนู 1.5rem"],
          ]}
        />

        <Callout tone="info" title="ทำไมแยก header กับ div ข้างใน?">
          <Hl>header</Hl> ต้องยืดเต็มจอ (เพื่อให้พื้นหลังและเส้นขอบเต็มความกว้าง) แต่เนื้อหาข้างใน
          ควรกว้างไม่เกิน <Hl>max-w-6xl</Hl> จะได้ตรงกับแนวเนื้อหาของหน้า
        </Callout>
      </section>

      {/* ===== ส่วนที่ 3: Active menu ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="3">Active Menu: ไฮไลต์หน้าที่เปิดอยู่</SectionTitle>

          <CodeBlock
            filename="linkClass.tsx"
            highlight={[3, 5]}
            code={`
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  "border-b-2 py-4 text-sm font-medium transition-colors " +
  (isActive
    ? "border-indigo-600 text-indigo-700"
    : "border-transparent text-slate-600 hover:text-slate-900");

<NavLink to="/" end className={linkClass}>หน้าแรก</NavLink>
<NavLink to="/courses" className={linkClass}>คอร์ส</NavLink>
`}
          />

        <ExampleList>
          <Example
            en={
              <>
                <Chip>NavLink</Chip> ส่ง <Hl>isActive</Hl> ให้ฟังก์ชันใน <Chip>className</Chip> —
                คืนค่าสตริงคลาสตามสถานะ
              </>
            }
          />
          <Example
            en={
              <>
                ใส่ <Chip>border-transparent</Chip> ไว้ตอนไม่ active เพื่อ <Hl>จองพื้นที่ขอบ</Hl>{" "}
                เมนูจะไม่กระตุกขึ้น-ลงเวลาเปลี่ยนสถานะ
              </>
            }
          />
          <Example
            en={
              <>
                NavLink ใส่ <Chip>aria-current="page"</Chip> ให้เองอัตโนมัติ (ช่วย screen reader)
              </>
            }
          />
        </ExampleList>

        <div className="space-y-3">
          <SubTitle>ทำไมหน้าแรกต้องมี end?</SubTitle>
          <DataTable
            headers={["อยู่ที่หน้า", "ไม่มี end", "มี end"]}
            rows={[
              [<Chip>{"/"}</Chip>, "active", "active"],
              [<Chip>{"/courses"}</Chip>, "active (ผิด!)", "ไม่ active"],
              [<Chip>{"/courses/react"}</Chip>, "active (ผิด!)", "ไม่ active"],
            ]}
          />
          <Callout tone="warning" title="ถ้าลืม end หน้าแรกจะไฮไลต์ตลอด">
            เพราะ path ทุกหน้าขึ้นต้นด้วย <Hl>/</Hl> ให้ใส่ <Chip>end</Chip> เฉพาะเมนูหน้าแรก
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 4: Responsive ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">Responsive: จอใหญ่เมนูแนวนอน มือถือปุ่ม ☰</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-brand-600">ต่ำกว่า 768px (มือถือ)</p>
            <p className="mt-1 text-slate-800">ซ่อนเมนูแนวนอน แสดงปุ่ม ☰ กดแล้วเมนูไหลลงมาใต้แถบ</p>
          </div>
          <div className="rounded-xl border border-[#FFD84D] bg-amber-50 p-4 shadow-sm">
            <p className="text-xs font-semibold text-amber-700">ตั้งแต่ 768px ขึ้นไป (md:)</p>
            <p className="mt-1 text-slate-800">แสดงเมนูแนวนอนเต็มรูปแบบ ซ่อนปุ่ม ☰</p>
          </div>
        </div>

          <CodeBlock
            filename="Navbar.tsx"
            highlight={[4, 12, 18, 22]}
            code={`
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="/" className="font-bold">Learning</a>

        {/* จอใหญ่ (md ขึ้นไป): แสดงเมนูแนวนอน */}
        <nav className="hidden gap-6 md:flex">
          <a href="/">หน้าแรก</a>
          <a href="/courses">คอร์ส</a>
        </nav>

        {/* มือถือ: แสดงปุ่ม ☰ */}
        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
      </div>

      {/* เมนูมือถือ: แสดงเมื่อ open เท่านั้น */}
      {open && (
        <nav className="flex flex-col gap-1 px-4 pb-4 md:hidden">
          <a href="/">หน้าแรก</a>
          <a href="/courses">คอร์ส</a>
        </nav>
      )}
    </header>
  );
}
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"hidden md:flex"}</Chip>, "ซ่อน (display:none) ก่อน แล้วเป็น flex ตั้งแต่ md ขึ้นไป"],
            [<Chip>{"md:hidden"}</Chip>, "แสดงบนมือถือ แต่ซ่อนตั้งแต่ md ขึ้นไป (ใช้กับปุ่ม ☰ และเมนูมือถือ)"],
            [<Chip>{"flex-col"}</Chip>, "เมนูมือถือเรียงแนวตั้ง"],
            [<Chip>{"{open && (...)}"}</Chip>, "React แสดงเมนูมือถือเมื่อ open เป็น true"],
          ]}
        />

        <DataTable
          headers={["Prefix", "ความกว้างขั้นต่ำ"]}
          rows={[
            ["(ไม่มี)", "0px — ใช้กับทุกจอ"],
            [<Chip>{"sm:"}</Chip>, "640px"],
            [<Chip>{"md:"}</Chip>, "768px"],
            [<Chip>{"lg:"}</Chip>, "1024px"],
            [<Chip>{"xl:"}</Chip>, "1280px"],
          ]}
        />
      </section>

      {/* ===== ส่วนที่ 5: ระดับกลาง ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="5">ระดับกลาง: เมนูจากข้อมูล + Sticky + ปุ่ม CTA</SectionTitle>

        <div className="space-y-3">
          <SubTitle>เก็บเมนูเป็น array แล้ว map (ปิดเมนูมือถือเมื่อกดลิงก์)</SubTitle>
          <CodeBlock
            highlight={[1, 2, 3, 4, 5, 12]}
            code={`
const links = [
  { to: "/", label: "หน้าแรก", end: true },
  { to: "/courses", label: "คอร์ส" },
  { to: "/contact", label: "ติดต่อ" },
];

{links.map(({ to, label, end }) => (
  <NavLink
    key={to}
    to={to}
    end={end}
    onClick={() => setOpen(false)}
    className={linkClass}
  >
    {label}
  </NavLink>
))}
`}
          />
          <Callout tone="success" title="เพิ่มเมนูใหม่ = เพิ่มแค่ 1 บรรทัดใน array">
            เมนูจอใหญ่และเมนูมือถือใช้ array เดียวกัน ไม่ต้องก๊อป JSX ซ้ำสองที่
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>ให้แถบเมนูติดบนสุดเมื่อเลื่อนหน้า</SubTitle>
          <CodeBlock
            highlight={[1]}
            code={`
<header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
`}
          />
          <DataTable
            headers={["คลาส", "ความหมาย"]}
            rows={[
              [<Chip>{"sticky top-0"}</Chip>, "เลื่อนตามปกติ แต่พอถึงขอบบนจะ “ติด” อยู่กับที่"],
              [<Chip>{"z-50"}</Chip>, "ให้อยู่เหนือเนื้อหาอื่นที่ซ้อนกัน"],
              [<Chip>{"bg-white/80"}</Chip>, "พื้นขาวโปร่ง 80%"],
              [<Chip>{"backdrop-blur"}</Chip>, "เบลอสิ่งที่อยู่ด้านหลัง ได้เอฟเฟกต์กระจกฝ้า"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ปุ่ม CTA: แสดงบนจอใหญ่ ย้ายไปอยู่ในเมนูบนมือถือ</SubTitle>
          <CodeBlock
            highlight={[3]}
            code={`
<Link
  to="/start"
  className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white md:inline-block"
>
  เริ่มเรียน
</Link>
`}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 6: มืออาชีพ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="6">ระดับมืออาชีพ: Animation + คีย์บอร์ด + Accessible</SectionTitle>

        <ExampleList>
          <Example
            en={
              <>
                เส้นใต้เมนูเลื่อนเข้ามาด้วย <Chip>after:</Chip> (pseudo-element) — ไม่ต้องเพิ่ม element
              </>
            }
          />
          <Example
            en={
              <>
                เมนูมือถือยืด/หดนุ่มนวลด้วยเทคนิค <Chip>grid-rows-[0fr]</Chip> ↔{" "}
                <Chip>grid-rows-[1fr]</Chip>
              </>
            }
          />
          <Example en="เปลี่ยนจากเส้นขอบเป็นเงาเมื่อเลื่อนหน้าลง" />
          <Example
            en={
              <>
                กด <Chip>Esc</Chip> ปิดเมนู และใช้ <Chip>inert</Chip> กันไม่ให้ Tab โฟกัสลิงก์ที่ซ่อนอยู่
              </>
            }
          />
          <Example en="ปุ่ม ☰ มี aria-label, aria-expanded, aria-controls" />
        </ExampleList>

          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="Navbar.tsx"
            highlight={[15, 28, 33, 41, 51, 78, 92, 95]}
            code={`
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "หน้าแรก", end: true },
  { to: "/courses", label: "คอร์ส" },
  { to: "/about", label: "เกี่ยวกับ" },
  { to: "/contact", label: "ติดต่อ" },
];

// เมนูบนจอใหญ่: เส้นใต้เลื่อนเข้ามาเมื่อ active หรือเอาเมาส์ชี้
const desktopLink = ({ isActive }: { isActive: boolean }) =>
  "relative flex h-full items-center px-3 text-sm font-medium transition-colors " +
  "after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left " +
  "after:bg-indigo-600 after:transition-transform " +
  (isActive
    ? "text-indigo-700 after:scale-x-100"
    : "text-slate-600 hover:text-slate-900 after:scale-x-0 hover:after:scale-x-100");

// เมนูบนมือถือ: เป็นแถบเต็มความกว้าง
const mobileLink = ({ isActive }: { isActive: boolean }) =>
  "block rounded-lg px-3 py-2.5 text-base font-medium " +
  (isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-700 hover:bg-slate-100");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);

  // เลื่อนหน้าลงเล็กน้อย → เปลี่ยนจากเส้นขอบเป็นเงา
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // เมนูมือถือเปิดอยู่: กด Esc เพื่อปิด
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-50 bg-white/80 backdrop-blur transition-shadow " +
        (scrolled ? "shadow-md" : "border-b border-slate-200")
      }
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="font-bold text-slate-900">
          Learning
        </Link>

        {/* จอใหญ่: แสดงเมนูแนวนอน / มือถือ: ซ่อน */}
        <nav aria-label="เมนูหลัก" className="hidden h-full items-center gap-1 md:flex">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={desktopLink}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/start"
            className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 md:inline-block"
          >
            เริ่มเรียน
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* เมนูมือถือ: ใช้ grid-rows 0fr → 1fr เพื่อให้ยืด/หดนุ่มนวล */}
      <div
        id="mobile-menu"
        className={
          "grid transition-[grid-template-rows] duration-200 md:hidden " +
          (open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
        }
      >
        <div className="overflow-hidden" inert={!open}>
          <nav aria-label="เมนูมือถือ" className="flex flex-col gap-1 px-4 pb-4 pt-2">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={mobileLink}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/start"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-center font-semibold text-white"
            >
              เริ่มเรียน
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
`}
          />

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"after:origin-left + scale-x-0 → scale-x-100"}</Chip>, "เส้นใต้ขยายจากซ้ายไปขวาด้วย transform ลื่นกว่าเปลี่ยนความกว้าง"],
            [<Chip>{"h-full ใน nav และ link"}</Chip>, "ให้เมนูสูงเท่าแถบ เส้นใต้จึงชิดขอบล่างของแถบพอดี"],
            [<Chip>{"grid-rows-[0fr] → [1fr]"}</Chip>, "ความสูง auto animate ตรง ๆ ไม่ได้ เทคนิคนี้ทำให้ยืดหดได้โดยไม่ต้องรู้ความสูง"],
            [<Chip>{"inert={!open}"}</Chip>, "ตอนปิด เมนูยังอยู่ใน DOM แต่ Tab/screen reader ข้ามไป (ต้องใช้ React 19)"],
            [<Chip>{"{ passive: true }"}</Chip>, "บอกเบราว์เซอร์ว่า scroll listener จะไม่หยุดการเลื่อน ลื่นขึ้น"],
            [<Chip>{"return () => removeEventListener"}</Chip>, "ล้าง listener ตอนคอมโพเนนต์ถูกถอด กัน memory leak"],
          ]}
        />
      </section>

      {/* ===== ส่วนที่ 7: ข้อผิดพลาด ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="7">ข้อผิดพลาดที่พบบ่อย &amp; เช็กลิสต์</SectionTitle>

          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ flex กับ hidden ชนกันตั้งแต่ต้น → ไม่รู้ว่าอันไหนชนะ
<nav className="hidden flex md:flex">

// ✅ hidden ก่อน แล้ว md:flex เมื่อจอกว้างพอ
<nav className="hidden md:flex">
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ ประกอบชื่อคลาสด้วยตัวแปร → Tailwind สแกนไม่เจอ ไม่มี CSS
className={"text-" + color + "-600"}

// ✅ เขียนชื่อคลาสให้เต็มเสมอ
className={isActive ? "text-indigo-700" : "text-slate-600"}
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ fixed ลอยออกจากการจัดวางปกติ → เนื้อหาถูกแถบเมนูบัง
<header className="fixed top-0 inset-x-0 h-14">

// ✅ ถ้าใช้ fixed ต้องเว้นที่ให้เนื้อหา (หรือใช้ sticky แทน)
<main className="pt-14">
`}
          />

        <div className="space-y-3">
          <SubTitle>sticky vs fixed</SubTitle>
          <DataTable
            headers={["", "sticky top-0", "fixed top-0"]}
            rows={[
              ["การจัดวาง", "อยู่ในลำดับปกติ ไม่บังเนื้อหา", "ลอยออกจากลำดับปกติ ต้องเว้น pt ให้เนื้อหา"],
              ["ข้อจำกัด", "ไม่ทำงานถ้า parent มี overflow hidden/auto", "ไม่มี แต่ต้องคำนวณพื้นที่เอง"],
              ["แนะนำ", "ใช้เป็นค่าเริ่มต้น", "ใช้เมื่อ sticky ไม่ได้ผล"],
            ]}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>อาการที่เจอ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="เมนูหน้าแรกไฮไลต์ตลอด → ลืม end" />
                <Example ok={false} en="เมนูไม่ซ่อนบนมือถือ → ใส่ flex โดยไม่มี prefix" />
                <Example ok={false} en="sticky ไม่ติด → parent มี overflow hidden" />
                <Example ok={false} en="เนื้อหาถูกบัง → ใช้ fixed แต่ลืม pt-14" />
                <Example ok={false} en="สีไม่ขึ้น → ประกอบชื่อคลาสด้วยตัวแปร" />
              </ExampleList>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>เช็กลิสต์ก่อนส่งงาน</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example en="ทดสอบที่ 390px, 768px และ 1280px" />
                <Example en="กด Tab ไล่ดู — ไม่หยุดที่ลิงก์ในเมนูที่ซ่อนอยู่" />
                <Example en="กด Esc แล้วเมนูมือถือปิด" />
                <Example en="กดลิงก์ในเมนูมือถือแล้วเมนูปิดเอง" />
                <Example en="ทุกหน้ามีเมนู active เพียงอันเดียว" />
              </ExampleList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TailwindNavbar01;