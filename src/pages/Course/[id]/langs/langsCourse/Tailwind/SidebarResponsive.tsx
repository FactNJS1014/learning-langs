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

function TailwindSidebar01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Tailwind CSS · Layout
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Responsive Sidebar &amp; Active Menu</h1>
        <p className="mt-1 text-lg text-brand-100">จากพื้นฐานถึงมืออาชีพ พร้อมคำอธิบายทุกคลาส</p>
        <p className="mt-4 max-w-2xl text-white/90">
          สร้างเมนูข้างที่ใช้ได้ทั้งมือถือและจอใหญ่ มีไฮไลต์หน้าที่เปิดอยู่ ปรับย่อ/ขยายได้
          และรองรับคีย์บอร์ด
        </p>
      </header>

      {/* ===== ส่วนที่ 1: ภาพรวม ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ภาพรวม: เราจะสร้างอะไร?</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="text-xs font-semibold text-emerald-700">ระดับพื้นฐาน</p>
            <p className="mt-1 font-semibold text-slate-900">Sidebar ซ้าย + Content ขวา</p>
            <p className="mt-1 text-sm text-slate-600">Flexbox และขนาดคงที่</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">ระดับกลาง</p>
            <p className="mt-1 font-semibold text-slate-900">Responsive + Active menu</p>
            <p className="mt-1 text-sm text-slate-600">ซ่อนบนมือถือ, drawer, NavLink</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
            <p className="text-xs font-semibold text-rose-700">ระดับมืออาชีพ</p>
            <p className="mt-1 font-semibold text-slate-900">ย่อได้ + Accessible</p>
            <p className="mt-1 text-sm text-slate-600">Esc, aria, sticky, เมนูจากข้อมูล</p>
          </div>
        </div>

        <Callout tone="info" title="หลักคิดของ Tailwind: Mobile-first">
          เขียนสไตล์ของ <Hl>มือถือก่อน</Hl> แล้วใช้ prefix อย่าง <Chip>lg:</Chip> เพื่อ “ทับ”
          เมื่อจอกว้างขึ้น — คลาสที่ไม่มี prefix ใช้กับทุกขนาดจอ
        </Callout>
      </section>

      {/* ===== ส่วนที่ 2: พื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: Sidebar ซ้าย + Content ขวา</SectionTitle>

          <CodeBlock
            filename="Layout.tsx"
            highlight={[3, 4, 11]}
            code={`
export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r border-slate-200 bg-white p-4">
        <h2 className="mb-4 font-bold">เมนู</h2>
        <nav className="flex flex-col gap-1">
          <a href="/">หน้าแรก</a>
          <a href="/courses">คอร์ส</a>
        </nav>
      </aside>
      <main className="flex-1 p-6">เนื้อหา</main>
    </div>
  );
}
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"flex"}</Chip>, "เรียงลูกในแนวนอน → sidebar อยู่ซ้าย, main อยู่ขวา"],
            [<Chip>{"min-h-screen"}</Chip>, "สูงอย่างน้อยเต็มจอ (ถ้าเนื้อหายาวก็ยืดต่อได้)"],
            [<Chip>{"w-64"}</Chip>, "กว้าง 16rem = 256px"],
            [<Chip>{"shrink-0"}</Chip>, "ห้าม sidebar ถูกบีบเมื่อเนื้อหากว้าง"],
            [<Chip>{"flex-1"}</Chip>, "ให้ main กินพื้นที่ที่เหลือทั้งหมด"],
          ]}
        />

        <Callout tone="warning" title="ลืม shrink-0 แล้ว sidebar แคบลงเอง">
          ใน flex container ลูกทุกตัวหดได้โดยค่าเริ่มต้น ถ้าเนื้อหาใน main กว้าง
          sidebar จะถูกบีบ ให้ใส่ <Hl>shrink-0</Hl> เสมอ
        </Callout>
      </section>

      {/* ===== ส่วนที่ 3: Active menu ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="3">Active Menu: ไฮไลต์หน้าที่เปิดอยู่</SectionTitle>

        <div className="space-y-3">
          <SubTitle>ใช้ NavLink ของ react-router</SubTitle>
          <CodeBlock
            filename="SidebarMenu.tsx"
            highlight={[4, 6, 10]}
            code={`
import { NavLink } from "react-router-dom";

export default function SidebarMenu() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors " +
    (isActive ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100");

  return (
    <nav className="flex flex-col gap-1">
      <NavLink to="/" end className={linkClass}>หน้าแรก</NavLink>
      <NavLink to="/courses" className={linkClass}>คอร์ส</NavLink>
    </nav>
  );
}
`}
          />
        </div>

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
                NavLink ใส่ <Chip>aria-current="page"</Chip> ให้เองอัตโนมัติ (ช่วย screen reader)
              </>
            }
          />
        </ExampleList>

        <div className="space-y-3">
          <SubTitle>ทำไมหน้าแรกต้องมี end?</SubTitle>
          <DataTable
            headers={["อยู่ที่หน้า", "to=\"/\" (ไม่มี end)", "to=\"/\" end"]}
            rows={[
              [<Chip>{"/"}</Chip>, "active", "active"],
              [<Chip>{"/courses"}</Chip>, "active (ผิด!)", "ไม่ active"],
              [<Chip>{"/courses/react"}</Chip>, "active (ผิด!)", "ไม่ active"],
            ]}
          />
          <CodeBlock
            tone="bad"
            badge="ลืม end"
            highlight={[2, 5]}
            code={`
// ❌ ไม่ใส่ end → "/" เป็น active ทุกหน้า
<NavLink to="/">หน้าแรก</NavLink>

// ✅ ใส่ end → active เฉพาะตอนอยู่หน้า "/" เท่านั้น
<NavLink to="/" end>หน้าแรก</NavLink>
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ถ้าไม่ได้ใช้ router: เก็บ active ใน state</SubTitle>
          <CodeBlock
            highlight={[5]}
            code={`
const [active, setActive] = useState("home");

<button
  onClick={() => setActive("home")}
  className={active === "home" ? "bg-indigo-600 text-white" : "text-slate-600"}
>
  หน้าแรก
</button>
`}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 4: Responsive ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">Responsive: จอใหญ่แสดงคงที่ มือถือเป็น Drawer</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-brand-600">ต่ำกว่า 1024px (มือถือ/แท็บเล็ต)</p>
            <p className="mt-1 text-slate-800">ซ่อน sidebar ไว้นอกจอ กดปุ่ม ☰ แล้วเลื่อนเข้ามาทับเนื้อหา</p>
          </div>
          <div className="rounded-xl border border-[#FFD84D] bg-amber-50 p-4 shadow-sm">
            <p className="text-xs font-semibold text-amber-700">ตั้งแต่ 1024px ขึ้นไป (lg:)</p>
            <p className="mt-1 text-slate-800">แสดง sidebar คงที่ข้างเนื้อหา ไม่ต้องมีปุ่มเมนู</p>
          </div>
        </div>

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

          <CodeBlock
            filename="Layout.tsx"
            highlight={[4, 9, 13, 18]}
            code={`
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* พื้นหลังมืด: แสดงเฉพาะมือถือตอนเปิดเมนู */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/40 lg:hidden" />
      )}

      <aside className={"fixed inset-y-0 left-0 z-40 w-64 bg-white transition-transform lg:static lg:translate-x-0 " + (open ? "translate-x-0" : "-translate-x-full")}>
        เมนู...
      </aside>

      <main className="flex-1 p-4">
        <button onClick={() => setOpen(true)} className="lg:hidden">☰</button>
        เนื้อหา...
      </main>
    </div>
  );
}
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"fixed inset-y-0 left-0"}</Chip>, "ตรึงติดขอบซ้าย สูงเต็มจอ (ลอยเหนือเนื้อหา)"],
            [<Chip>{"-translate-x-full"}</Chip>, "เลื่อนตัวเองออกไปทางซ้ายเท่าความกว้าง = ซ่อนนอกจอ"],
            [<Chip>{"transition-transform"}</Chip>, "ให้การเลื่อนเข้า/ออกมี animation"],
            [<Chip>{"lg:static lg:translate-x-0"}</Chip>, "ตั้งแต่ lg ขึ้นไป กลับมาเป็นส่วนหนึ่งของ layout และอยู่ตำแหน่งปกติ"],
            [<Chip>{"lg:hidden"}</Chip>, "ซ่อนบนจอใหญ่ (ใช้กับปุ่ม ☰ และฉากหลังมืด)"],
            [<Chip>{"z-30 / z-40"}</Chip>, "ฉากหลังอยู่ชั้น 30, sidebar ชั้น 40 → sidebar อยู่บนสุด"],
          ]}
        />
      </section>

      {/* ===== ส่วนที่ 5: ระดับกลาง ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="5">ระดับกลาง: เมนูจากข้อมูล + ไอคอน + สไตล์ Active ที่สวยขึ้น</SectionTitle>

        <div className="space-y-3">
          <SubTitle>เก็บเมนูเป็น array แล้ว map</SubTitle>
          <CodeBlock
            highlight={[3, 4, 5, 6, 7, 11]}
            code={`
import { BookOpen, Home, Settings } from "lucide-react";

const menu = [
  { to: "/", label: "หน้าแรก", icon: Home, end: true },
  { to: "/courses", label: "คอร์สทั้งหมด", icon: BookOpen },
  { to: "/settings", label: "ตั้งค่า", icon: Settings },
];

{menu.map(({ to, label, icon: Icon, end }) => (
  <NavLink key={to} to={to} end={end} className={linkClass}>
    <Icon size={18} />
    {label}
  </NavLink>
))}
`}
          />
          <Callout tone="success" title="เพิ่มเมนูใหม่ = เพิ่มแค่ 1 บรรทัดใน array">
            ไม่ต้องก๊อป JSX ซ้ำ และ active ทำงานให้ทุกเมนูเหมือนกัน
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>สไตล์ active แบบแถบด้านซ้าย</SubTitle>
          <CodeBlock
            highlight={[4]}
            code={`
const linkClass = ({ isActive }: { isActive: boolean }) =>
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors " +
  (isActive
    ? "bg-indigo-50 text-indigo-700 shadow-[inset_3px_0_0_#4f46e5]"
    : "text-slate-600 hover:bg-slate-100");
`}
          />
          <Callout tone="info" title="shadow-[inset_3px_0_0_#4f46e5] คืออะไร?">
            เงาด้านใน (inset) เลื่อนไปทางขวา 3px สีเดียวกับธีม — ได้ <Hl>แถบสีข้างซ้าย</Hl>{" "}
            โดยไม่ต้องเพิ่ม element และไม่ทำให้ขนาดปุ่มเปลี่ยน
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 6: มืออาชีพ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="6">ระดับมืออาชีพ: ย่อได้ + คีย์บอร์ด + Accessible</SectionTitle>

        <ExampleList>
          <Example en="ย่อเหลือไอคอนบนจอใหญ่ (w-64 ↔ w-16) พร้อม animation" />
          <Example
            en={
              <>
                กด <Chip>Esc</Chip> ปิด drawer และล็อกการเลื่อนของหน้าด้านหลัง
              </>
            }
          />
          <Example
            en={
              <>
                ใช้ <Chip>invisible</Chip> ตอนซ่อน เพื่อไม่ให้ Tab โฟกัสลิงก์ที่มองไม่เห็น
              </>
            }
          />
          <Example en="ปุ่ม ☰ มี aria-label, aria-expanded, aria-controls" />
          <Example
            en={
              <>
                <Chip>lg:sticky lg:top-0 lg:h-screen</Chip> — sidebar ไม่เลื่อนตามเมื่อ content ยาว
              </>
            }
          />
        </ExampleList>

          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="AppShell.tsx"
            highlight={[19, 20, 26, 29, 49, 51, 52, 100, 101]}
            code={`
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BookOpen, ChevronsLeft, Home, Menu, Settings, X } from "lucide-react";

const menu = [
  { to: "/", label: "หน้าแรก", icon: Home, end: true },
  { to: "/courses", label: "คอร์สทั้งหมด", icon: BookOpen },
  { to: "/settings", label: "ตั้งค่า", icon: Settings },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-indigo-600 " +
  (isActive
    ? "bg-indigo-50 text-indigo-700 shadow-[inset_3px_0_0_#4f46e5]"
    : "text-slate-600 hover:bg-slate-100");

export default function AppShell() {
  const [open, setOpen] = useState(false); // drawer บนมือถือ
  const [collapsed, setCollapsed] = useState(false); // ย่อเหลือไอคอนบนจอใหญ่

  // เปิด drawer: กด Esc เพื่อปิด + ล็อกการเลื่อนของหน้าด้านหลัง
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <aside
        id="sidebar"
        className={
          "fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white " +
          "transition-[transform,width,visibility] duration-200 lg:sticky lg:top-0 lg:h-screen " +
          (open ? "translate-x-0" : "invisible -translate-x-full lg:visible lg:translate-x-0") +
          (collapsed ? " lg:w-16" : "")
        }
      >
        <div className="flex h-14 items-center justify-between border-b border-slate-200 px-4">
          <span className={"font-bold text-slate-900 " + (collapsed ? "lg:hidden" : "")}>
            Learning
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="ปิดเมนู"
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "ขยายเมนู" : "ย่อเมนู"}
            className="hidden rounded-md p-1 text-slate-500 hover:bg-slate-100 lg:inline-flex"
          >
            <ChevronsLeft
              size={20}
              className={"transition-transform " + (collapsed ? "rotate-180" : "")}
            />
          </button>
        </div>

        <nav aria-label="เมนูหลัก" className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          {menu.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              title={label}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              <Icon size={18} className="shrink-0" />
              <span className={collapsed ? "lg:hidden" : ""}>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center gap-3 border-b border-slate-200 bg-white px-4 lg:hidden">
          <button
            onClick={() => setOpen(true)}
            aria-label="เปิดเมนู"
            aria-expanded={open}
            aria-controls="sidebar"
            className="rounded-md p-1 text-slate-700 hover:bg-slate-100"
          >
            <Menu size={22} />
          </button>
          <span className="font-semibold">Learning</span>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
`}
          />

        <div className="space-y-3">
          <SubTitle>ใช้งานเป็น Layout route</SubTitle>
          <CodeBlock
            filename="App.tsx"
            code={`
<Routes>
  <Route element={<AppShell />}>
    <Route index element={<Home />} />
    <Route path="courses" element={<Courses />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
`}
          />
        </div>

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"collapsed ? \"lg:hidden\" : \"\""}</Chip>, "ซ่อนข้อความเฉพาะจอใหญ่ — บนมือถือ drawer ต้องเห็นข้อความเสมอ"],
            [<Chip>{"transition-[transform,width,visibility]"}</Chip>, "ระบุเฉพาะ property ที่ animate จะลื่นกว่า transition-all"],
            [<Chip>{"min-w-0"}</Chip>, "กันเนื้อหา main ที่กว้าง (เช่น ตาราง, code) ดันให้หน้าล้นจอ"],
            [<Chip>{"title={label}"}</Chip>, "ตอนย่อเหลือไอคอน เอาเมาส์ชี้แล้วยังเห็นชื่อเมนู"],
            [<Chip>{"useEffect + cleanup"}</Chip>, "ลบ event listener และคืนค่า overflow ทุกครั้งที่ปิด"],
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
// ❌ Tailwind สแกนไม่เจอชื่อคลาส → ไม่มี CSS ถูกสร้าง
className={"bg-" + color + "-500"}

// ✅ เขียนชื่อคลาสให้เต็มเสมอ
className={isActive ? "bg-indigo-600" : "bg-slate-100"}
`}
          />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>อาการที่เจอ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="เมนูหน้าแรกไฮไลต์ตลอด → ลืม end" />
                <Example ok={false} en="sidebar แคบเอง → ลืม shrink-0" />
                <Example ok={false} en="ฉากหลังบังเมนู → z-index ของ sidebar ต่ำกว่า" />
                <Example ok={false} en="หน้าเลื่อนซ้ายขวา → เนื้อหากว้าง ลืม min-w-0" />
                <Example ok={false} en="สีไม่ขึ้น → ประกอบชื่อคลาสด้วยตัวแปร" />
              </ExampleList>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>เช็กลิสต์ก่อนส่งงาน</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example en="ทดสอบที่ 390px, 768px และ 1280px" />
                <Example en="กด Tab ไล่ดู — โฟกัสต้องไม่ไปหยุดที่เมนูที่ซ่อนอยู่" />
                <Example en="กด Esc แล้ว drawer ปิด" />
                <Example en="กดลิงก์ในเมนูบนมือถือแล้ว drawer ปิดเอง" />
                <Example en="ทุกหน้า มีเมนู active เพียงอันเดียว" />
              </ExampleList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TailwindSidebar01;