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

function TailwindTable01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Tailwind CSS · Components
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Table &amp; Pagination</h1>
        <p className="mt-1 text-lg text-brand-100">จากพื้นฐานถึงมืออาชีพ พร้อมคำอธิบายทุกคลาส</p>
        <p className="mt-4 max-w-2xl text-white/90">
          ตั้งแต่ตารางธรรมดา ตารางที่เลื่อนได้บนมือถือ ไปจนถึงตารางที่เรียงข้อมูลได้
          แบ่งหน้าพร้อมเลขหน้า “…” และกลายเป็นการ์ดเมื่อจอแคบ
        </p>
      </header>

      {/* ===== ส่วนที่ 1: ภาพรวม ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ภาพรวม: เราจะสร้างอะไร?</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="text-xs font-semibold text-emerald-700">ระดับพื้นฐาน</p>
            <p className="mt-1 font-semibold text-slate-900">ตารางอ่านง่าย + ปุ่มก่อนหน้า/ถัดไป</p>
            <p className="mt-1 text-sm text-slate-600">padding, divide-y, disabled:</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">ระดับกลาง</p>
            <p className="mt-1 font-semibold text-slate-900">เลื่อนได้ + badge + เลขหน้า</p>
            <p className="mt-1 text-sm text-slate-600">overflow-x-auto, zebra, ellipsis</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
            <p className="text-xs font-semibold text-rose-700">ระดับมืออาชีพ</p>
            <p className="mt-1 font-semibold text-slate-900">เรียงได้ + Accessible + มือถือ</p>
            <p className="mt-1 text-sm text-slate-600">aria-sort, sticky, max-md:</p>
          </div>
        </div>

        <Callout tone="info" title="ใช้ตารางจริง (table) กับข้อมูลที่เป็นตารางเท่านั้น">
          อย่าใช้ <Chip>div</Chip> + grid ทำตารางข้อมูล เพราะ <Hl>table / th / td</Hl> ให้ screen reader
          เข้าใจความสัมพันธ์ของหัวคอลัมน์กับเซลล์โดยอัตโนมัติ
        </Callout>
      </section>

      {/* ===== ส่วนที่ 2: ตารางพื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: ตารางที่อ่านง่าย</SectionTitle>

          <CodeBlock
            filename="Table.tsx"
            highlight={[1, 2, 8]}
            code={`
<table className="w-full text-left text-sm">
  <thead className="bg-slate-50 text-slate-600">
    <tr>
      <th className="px-4 py-3 font-semibold">ชื่อ</th>
      <th className="px-4 py-3 font-semibold">บทบาท</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-slate-100">
    <tr>
      <td className="px-4 py-3">สมชาย</td>
      <td className="px-4 py-3">Admin</td>
    </tr>
  </tbody>
</table>
`}
          />

        <DataTable
          headers={["คลาส", "ความหมาย"]}
          rows={[
            [<Chip>{"w-full"}</Chip>, "ตารางกว้างเต็มกล่องที่ครอบ"],
            [<Chip>{"text-left text-sm"}</Chip>, "ชิดซ้าย (ค่าเริ่มต้นของ th คือกึ่งกลาง) และตัวอักษรเล็ก"],
            [<Chip>{"bg-slate-50 text-slate-600"}</Chip>, "แถบหัวตารางสีเทาอ่อน แยกจากเนื้อหา"],
            [<Chip>{"px-4 py-3"}</Chip>, "ระยะห่างในเซลล์ — สำคัญที่สุดที่ทำให้ตารางไม่แน่น"],
            [<Chip>{"font-semibold"}</Chip>, "ตัวหนาให้หัวตารางเด่นกว่าข้อมูล"],
            [<Chip>{"divide-y divide-slate-100"}</Chip>, "เส้นคั่นบาง ๆ ระหว่างแถวโดยไม่ต้องใส่ border ทีละแถว"],
          ]}
        />

        <Callout tone="info" title="ทำไมใช้ divide-y แทน border-b ทุกแถว?">
          ใส่ครั้งเดียวที่ <Hl>tbody</Hl> ก็ได้เส้นคั่นทุกแถว และแถวสุดท้ายจะไม่มีเส้นเกิน
        </Callout>
      </section>

      {/* ===== ส่วนที่ 3: ตารางสวย + เลื่อนได้ ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="3">ตารางสวยขึ้น และเลื่อนได้เมื่อจอแคบ</SectionTitle>

        <div className="space-y-3">
          <SubTitle>กรอบตาราง: ขอบมน + เลื่อนแนวนอน</SubTitle>
          <CodeBlock
            filename="TableWrapper.tsx"
            highlight={[1, 2, 3]}
            code={`
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[32rem] text-left text-sm">
      ...
    </table>
  </div>
</div>
`}
          />
          <DataTable
            headers={["คลาส", "ความหมาย"]}
            rows={[
              [<Chip>{"overflow-hidden rounded-xl"}</Chip>, "ตัดมุมของตารางให้โค้งตามกรอบ"],
              [<Chip>{"overflow-x-auto"}</Chip>, "ถ้าตารางกว้างกว่ากรอบ ให้เลื่อนซ้าย-ขวาในกรอบ (หน้าไม่ล้น)"],
              [<Chip>{"min-w-[32rem]"}</Chip>, "กำหนดความกว้างขั้นต่ำ ตารางจะไม่ถูกบีบจนอ่านไม่ออก"],
            ]}
          />
          <Callout tone="warning" title="ลืม overflow-x-auto → ทั้งหน้าเลื่อนซ้ายขวาบนมือถือ">
            ตารางกว้างจะดันหน้าเว็บให้ล้นจอ ให้ห่อด้วยกล่องที่เลื่อนได้เสมอ
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>ลายทาง, hover และตัวเลข</SubTitle>
          <CodeBlock
            highlight={[1, 2, 3]}
            code={`
<tr className="odd:bg-white even:bg-slate-50/60 hover:bg-indigo-50/60">
  <td className="whitespace-nowrap px-4 py-3">สมชาย</td>
  <td className="px-4 py-3 text-right tabular-nums">1,250</td>
</tr>
`}
          />
          <DataTable
            headers={["คลาส", "ความหมาย"]}
            rows={[
              [<Chip>{"odd:bg-white even:bg-slate-50/60"}</Chip>, "แถวคี่/แถวคู่สีต่างกัน (zebra) ช่วยให้อ่านตามแถวง่าย"],
              [<Chip>{"hover:bg-indigo-50/60"}</Chip>, "ไฮไลต์แถวที่เมาส์ชี้"],
              [<Chip>{"whitespace-nowrap"}</Chip>, "ห้ามตัดบรรทัดในเซลล์ (เหมาะกับชื่อ/ตัวเลขสั้น ๆ)"],
              [<Chip>{"text-right tabular-nums"}</Chip>, "ตัวเลขชิดขวา และกว้างเท่ากันทุกหลัก ทำให้หลักตรงกัน"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>Badge แสดงสถานะ</SubTitle>
          <CodeBlock
            highlight={[1]}
            code={`
<span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
  ใช้งาน
</span>
`}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 4: Pagination พื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">Pagination พื้นฐาน: ก่อนหน้า / ถัดไป</SectionTitle>

          <CodeBlock
            filename="List.tsx"
            highlight={[6, 7, 8, 16, 26]}
            code={`
import { useState } from "react";

const pageSize = 10;

export default function List({ items }: { items: string[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / pageSize);
  const visible = items.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <ul>{visible.map((t) => <li key={t}>{t}</li>)}</ul>

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="rounded-md border px-3 py-1 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ก่อนหน้า
      </button>

      <span>{page} / {totalPages}</span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="rounded-md border px-3 py-1 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ถัดไป
      </button>
    </>
  );
}
`}
          />

        <DataTable
          headers={["ส่วน", "ความหมาย"]}
          rows={[
            [<Chip>{"items.slice((page - 1) * pageSize, page * pageSize)"}</Chip>, "ตัดเอาเฉพาะข้อมูลของหน้านี้มาแสดง"],
            [<Chip>{"Math.ceil(items.length / pageSize)"}</Chip>, "จำนวนหน้าทั้งหมด (ปัดขึ้น)"],
            [<Chip>{"disabled={page === 1}"}</Chip>, "ปิดปุ่มก่อนหน้าเมื่ออยู่หน้าแรก"],
            [<Chip>{"disabled:opacity-40 disabled:cursor-not-allowed"}</Chip>, "สไตล์ปุ่มตอนถูกปิด: จางลงและเมาส์เป็นเครื่องหมายห้าม"],
          ]}
        />

        <Callout tone="info" title="หน้าเริ่มที่ 1 แต่ index เริ่มที่ 0">
          จึงต้องใช้ <Hl>(page - 1) * pageSize</Hl> เป็นตำแหน่งเริ่มตัด
        </Callout>
      </section>

      {/* ===== ส่วนที่ 5: ระดับกลาง ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="5">ระดับกลาง: เลขหน้า, ellipsis และข้อความสรุป</SectionTitle>

        <div className="space-y-3">
          <SubTitle>ปุ่มเลขหน้า: หน้าปัจจุบันเด่นชัด</SubTitle>
          <CodeBlock
            highlight={[3, 6]}
            code={`
<button
  onClick={() => setPage(p)}
  aria-current={p === page ? "page" : undefined}
  className={
    "h-9 min-w-9 rounded-md px-3 text-sm font-medium transition-colors " +
    (p === page
      ? "bg-indigo-600 text-white"
      : "text-slate-700 hover:bg-slate-100")
  }
>
  {p}
</button>
`}
          />
          <Callout tone="success" title="เลือกคลาสแบบครบชุดด้วย ternary">
            แยกสไตล์ active กับ inactive เป็นสองชุดสมบูรณ์ แทนการใส่ทับกัน — ไม่ต้องกังวลว่าคลาสไหนชนะ
            และ <Hl>aria-current="page"</Hl> บอก screen reader ว่าหน้านี้คือหน้าปัจจุบัน
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>ข้อความสรุป “แสดง x–y จาก z”</SubTitle>
          <CodeBlock
            highlight={[2]}
            code={`
<p className="text-slate-600">
  แสดง {start + 1}–{Math.min(start + pageSize, total)} จาก {total} รายการ
</p>
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>เลขหน้าแบบมี … (1 … 4 5 6 … 20)</SubTitle>
          <CodeBlock
            filename="getPages.ts"
            highlight={[6, 7, 10, 12]}
            code={`
export function getPages(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  let start = Math.max(2, current - 1);
  let end = Math.min(total - 1, current + 1);
  if (current <= 3) end = 4; // ใกล้ต้น: แสดง 1 2 3 4 …
  if (current >= total - 2) start = total - 3; // ใกล้ท้าย: … 7 8 9 10

  const pages: (number | "…")[] = [1];
  if (start > 2) pages.push("…");
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total - 1) pages.push("…");
  pages.push(total);
  return pages;
}
`}
          />
          <DataTable
            headers={["อยู่หน้า (รวม 10 หน้า)", "ผลลัพธ์"]}
            rows={[
              ["1", "1 2 3 4 … 10"],
              ["4", "1 … 3 4 5 … 10"],
              ["5", "1 … 4 5 6 … 10"],
              ["10", "1 … 7 8 9 10"],
            ]}
          />
          <Callout tone="info" title="ทำไมใกล้ต้น/ท้ายแสดง 4 เลข?">
            เพื่อให้จำนวนปุ่มเท่ากันเกือบตลอด แถบเลขหน้าจะไม่กระโดดซ้ายขวาเวลากดเปลี่ยนหน้า
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 6: มืออาชีพ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="6">ระดับมืออาชีพ: เรียงข้อมูล + Accessible + มือถือ</SectionTitle>

        <ExampleList>
          <Example
            en={
              <>
                คลิกหัวคอลัมน์เพื่อเรียง ขึ้น/ลง พร้อมลูกศร และ <Chip>aria-sort</Chip>
              </>
            }
          />
          <Example
            en={
              <>
                หัวตารางติดบน (<Chip>sticky top-0</Chip>) เมื่อเลื่อนดูแถวเยอะ ๆ
              </>
            }
          />
          <Example en="เปลี่ยนจำนวนแถวต่อหน้า และกันเลขหน้าเกินจริง" />
          <Example
            en={
              <>
                มือถือ: แต่ละแถวกลายเป็นการ์ด โดยดึงป้ายชื่อจาก <Chip>data-label</Chip> ด้วย CSS
              </>
            }
          />
          <Example en="ปุ่มทุกตัวมี aria-label / aria-current และ focus-visible" />
        </ExampleList>

          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="DataTable.tsx"
            highlight={[36, 37, 70, 84, 90, 97, 103, 147, 185, 202]}
            code={`
import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

type Status = "active" | "pending" | "blocked";
type User = { id: number; name: string; role: string; status: Status; score: number };
type SortKey = keyof User;

const roles = ["Admin", "Editor", "Viewer"];
const statusKeys: Status[] = ["active", "pending", "blocked"];

// ข้อมูลตัวอย่าง 47 แถว
const rows: User[] = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  name: "ผู้ใช้ " + (i + 1),
  role: roles[i % 3],
  status: statusKeys[(i * 7) % 3],
  score: (i * 37) % 100,
}));

const columns: { key: SortKey; label: string; align: string }[] = [
  { key: "id", label: "#", align: "text-left" },
  { key: "name", label: "ชื่อ", align: "text-left" },
  { key: "role", label: "บทบาท", align: "text-left" },
  { key: "status", label: "สถานะ", align: "text-left" },
  { key: "score", label: "คะแนน", align: "text-right" },
];

const statusStyle = {
  active: { label: "ใช้งาน", cls: "bg-emerald-50 text-emerald-700" },
  pending: { label: "รอตรวจ", cls: "bg-amber-50 text-amber-700" },
  blocked: { label: "ถูกบล็อก", cls: "bg-rose-50 text-rose-700" },
} as const;

// มือถือ: แต่ละ td กลายเป็นบรรทัด "ป้ายชื่อ ... ค่า" โดยดึงป้ายจาก data-label
const cell =
  "px-4 py-3 max-md:flex max-md:items-center max-md:justify-between max-md:px-0 max-md:py-1 " +
  "max-md:before:font-medium max-md:before:text-slate-500 max-md:before:content-[attr(data-label)]";

const pageBtn =
  "inline-flex h-9 items-center justify-center rounded-md text-sm font-medium transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-indigo-600 " +
  "disabled:cursor-not-allowed disabled:opacity-40";

// สร้างรายการเลขหน้า เช่น 1 … 4 5 6 … 10
export function getPages(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  let start = Math.max(2, current - 1);
  let end = Math.min(total - 1, current + 1);
  if (current <= 3) end = 4; // ใกล้ต้น: แสดง 1 2 3 4 …
  if (current >= total - 2) start = total - 3; // ใกล้ท้าย: … 7 8 9 10

  const pages: (number | "…")[] = [1];
  if (start > 2) pages.push("…");
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total - 1) pages.push("…");
  pages.push(total);
  return pages;
}

export default function DataTable() {
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "id",
    dir: "asc",
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const sorted = useMemo(() => {
    const copy = [...rows]; // ห้าม sort array เดิมโดยตรง
    copy.sort((a, b) => {
      const x = a[sort.key];
      const y = b[sort.key];
      const r =
        typeof x === "number" && typeof y === "number"
          ? x - y
          : String(x).localeCompare(String(y));
      return sort.dir === "asc" ? r : -r;
    });
    return copy;
  }, [sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const current = Math.min(page, totalPages); // กันเลขหน้าเกินหลังเปลี่ยนจำนวนแถว
  const start = (current - 1) * pageSize;
  const visible = sorted.slice(start, start + pageSize);

  const toggleSort = (key: SortKey) => {
    setSort((s) => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));
    setPage(1); // เรียงใหม่ → กลับไปหน้าแรก
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="max-h-[32rem] overflow-auto">
        <table className="w-full text-sm max-md:block">
          <thead className="sticky top-0 z-10 bg-slate-50 text-slate-600 max-md:hidden">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  aria-sort={
                    sort.key === col.key
                      ? sort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                  className={"px-4 py-3 font-semibold " + col.align}
                >
                  <button
                    onClick={() => toggleSort(col.key)}
                    className="inline-flex items-center gap-1 rounded hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-indigo-600"
                  >
                    {col.label}
                    {sort.key === col.key &&
                      (sort.dir === "asc" ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 max-md:block">
            {visible.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50 max-md:block max-md:p-4">
                <td data-label="#" className={cell + " text-slate-500"}>
                  {u.id}
                </td>
                <td data-label="ชื่อ" className={cell + " font-medium text-slate-900"}>
                  {u.name}
                </td>
                <td data-label="บทบาท" className={cell}>
                  {u.role}
                </td>
                <td data-label="สถานะ" className={cell}>
                  <span
                    className={
                      "rounded-full px-2.5 py-0.5 text-xs font-semibold " +
                      statusStyle[u.status].cls
                    }
                  >
                    {statusStyle[u.status].label}
                  </span>
                </td>
                <td data-label="คะแนน" className={cell + " text-right tabular-nums"}>
                  {u.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 px-4 py-3 text-sm sm:flex-row">
        <p className="text-slate-600">
          แสดง {start + 1}–{Math.min(start + pageSize, sorted.length)} จาก {sorted.length} รายการ
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <label className="flex items-center gap-2 text-slate-600">
            แถวต่อหน้า
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="rounded-md border border-slate-300 bg-white px-2 py-1"
            >
              {[5, 10, 20].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>

          <nav aria-label="การแบ่งหน้า">
            <ul className="flex items-center gap-1">
              <li>
                <button
                  onClick={() => setPage(current - 1)}
                  disabled={current === 1}
                  aria-label="หน้าก่อนหน้า"
                  className={pageBtn + " w-9 text-slate-700 hover:bg-slate-100"}
                >
                  <ChevronLeft size={16} />
                </button>
              </li>

              {getPages(current, totalPages).map((p, i) =>
                p === "…" ? (
                  <li key={"gap" + i} aria-hidden="true" className="px-1 text-slate-400">
                    …
                  </li>
                ) : (
                  <li key={p}>
                    <button
                      onClick={() => setPage(p)}
                      aria-current={p === current ? "page" : undefined}
                      className={
                        pageBtn +
                        " min-w-9 px-3 " +
                        (p === current
                          ? "bg-indigo-600 text-white"
                          : "text-slate-700 hover:bg-slate-100")
                      }
                    >
                      {p}
                    </button>
                  </li>
                ),
              )}

              <li>
                <button
                  onClick={() => setPage(current + 1)}
                  disabled={current === totalPages}
                  aria-label="หน้าถัดไป"
                  className={pageBtn + " w-9 text-slate-700 hover:bg-slate-100"}
                >
                  <ChevronRight size={16} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
`}
          />

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"[...rows]"}</Chip>, "ก๊อป array ก่อนเรียง ไม่แก้ข้อมูลต้นฉบับ"],
            [<Chip>{"Math.min(page, totalPages)"}</Chip>, "กันเลขหน้าเกินจริงหลังจำนวนหน้าลดลง ไม่ต้องใช้ useEffect"],
            [<Chip>{"useMemo([sort])"}</Chip>, "เรียงใหม่เฉพาะเมื่อเปลี่ยนวิธีเรียง ไม่เรียงซ้ำทุกครั้งที่เปลี่ยนหน้า"],
            [<Chip>{"aria-sort"}</Chip>, "บอก screen reader ว่าคอลัมน์ไหนเรียงอยู่และทิศทางใด"],
            [<Chip>{"max-md:block / max-md:hidden"}</Chip>, "ต่ำกว่า md: ตารางเป็นบล็อก ซ่อนหัวตาราง"],
            [<Chip>{"before:content-[attr(data-label)]"}</Chip>, "ดึงค่า data-label มาแสดงเป็นป้ายหน้าแต่ละเซลล์บนมือถือ"],
            [<Chip>{"sticky top-0 z-10"}</Chip>, "หัวตารางติดบนของกล่องที่เลื่อน และอยู่เหนือแถวที่เลื่อนผ่าน"],
          ]}
        />

        <Callout tone="warning" title="ข้อจำกัดของเวอร์ชันมือถือ">
          เมื่อซ่อนหัวตารางบนมือถือ จะ <Hl>กดเรียงข้อมูลไม่ได้</Hl> ถ้าต้องการเรียงบนมือถือ
          ให้เพิ่ม <Chip>select</Chip> เลือกคอลัมน์ที่จะเรียงไว้เหนือตาราง
        </Callout>
      </section>

      {/* ===== ส่วนที่ 7: ข้อผิดพลาด ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="7">ข้อผิดพลาดที่พบบ่อย &amp; เช็กลิสต์</SectionTitle>

          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ เรียงใหม่แต่ยังอยู่หน้า 5 → ผู้ใช้ไม่เห็นแถวบนสุดของผลลัพธ์ใหม่
const toggleSort = (key) => setSort(key);

// ✅ เปลี่ยนการเรียง/กรอง/จำนวนแถว แล้วกลับหน้า 1 เสมอ
const toggleSort = (key) => { setSort(key); setPage(1); };
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ sort() แก้ array เดิมโดยตรง → state เพี้ยน และ React อาจไม่รู้ว่าเปลี่ยน
rows.sort((a, b) => a.score - b.score);

// ✅ ก๊อปก่อนค่อยเรียง
[...rows].sort((a, b) => a.score - b.score);
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5, 6]}
            code={`
// ❌ ประกอบชื่อคลาสด้วยตัวแปร → Tailwind สแกนไม่เจอ ไม่มี CSS
className={"bg-" + color + "-50"}

// ✅ เก็บคลาสเต็ม ๆ ไว้ใน object
const statusStyle = { active: "bg-emerald-50", blocked: "bg-rose-50" };
className={statusStyle[status]}
`}
          />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>อาการที่เจอ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="เรียง/กรองแล้วข้อมูลหาย → ลืมกลับหน้า 1" />
                <Example ok={false} en="ตารางดันหน้าล้นจอบนมือถือ → ลืม overflow-x-auto" />
                <Example ok={false} en="เรียงแล้วข้อมูลต้นฉบับเพี้ยน → sort() array เดิม" />
                <Example ok={false} en="ปุ่มเลขหน้าไม่รู้ว่าอยู่หน้าไหน → ไม่มี aria-current" />
                <Example ok={false} en="แถวกระพริบตอนเรียง → ใช้ index เป็น key แทน id" />
              </ExampleList>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>เช็กลิสต์ก่อนส่งงาน</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example en="ลองข้อมูล 0 แถว, 1 แถว และหลายร้อยแถว" />
                <Example en="หน้าแรกปิดปุ่มก่อนหน้า หน้าสุดท้ายปิดปุ่มถัดไป" />
                <Example en="ทดสอบที่ 390px และ 1280px" />
                <Example en="กด Tab ไล่ดู — เข้าถึงหัวคอลัมน์และปุ่มเลขหน้าได้ทั้งหมด" />
                <Example en="ตัวเลขชิดขวา และใช้ tabular-nums" />
              </ExampleList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TailwindTable01;