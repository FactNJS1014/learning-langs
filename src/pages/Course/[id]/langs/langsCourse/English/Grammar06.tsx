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

const twelveHour: { time: string; en: string; th: string }[] = [
  { time: "12:00 a.m.", en: "midnight", th: "เที่ยงคืน" },
  { time: "12:00 p.m.", en: "noon", th: "เที่ยงวัน" },
  { time: "09:00 a.m.", en: "nine in the morning", th: "9 โมงเช้า" },
  { time: "07:30 p.m.", en: "seven thirty in the evening", th: "19.30 น." },
];

const directTimes: [string, string][] = [
  ["07:00", "seven o'clock"],
  ["08:05", "eight oh five / eight five"],
  ["09:15", "nine fifteen"],
  ["10:30", "ten thirty"],
  ["11:45", "eleven forty-five"],
];

const pastToTimes: { time: string; reading: ReactNode; note: string }[] = [
  { time: "06:05", reading: <>five <Hl>past</Hl> six</>, note: "5 นาทีผ่าน 6 โมง" },
  { time: "06:10", reading: <>ten <Hl>past</Hl> six</>, note: "" },
  { time: "06:15", reading: <><Hl>a quarter</Hl> past six</>, note: "15 นาที = a quarter" },
  { time: "06:30", reading: <><Hl>half</Hl> past six</>, note: "30 นาที = half" },
  { time: "06:35", reading: <>twenty-five <Hl>to</Hl> seven</>, note: "เหลือ 25 นาทีถึง 7 โมง" },
  { time: "06:45", reading: <><Hl>a quarter</Hl> to seven</>, note: "เหลือ 15 นาทีถึง 7 โมง" },
  { time: "06:50", reading: <>ten <Hl>to</Hl> seven</>, note: "เหลือ 10 นาทีถึง 7 โมง" },
];

const hour24: [string, string][] = [
  ["00:00", "midnight / zero hundred hours"],
  ["09:00", "nine hundred hours"],
  ["13:45", "thirteen forty-five"],
  ["22:30", "twenty-two thirty"],
  ["24:00", "เที่ยงคืน (ของวันถัดไป)"],
];

const days: [string, string, string][] = [
  ["Mon", "Monday", "วันจันทร์"],
  ["Tue / Tues", "Tuesday", "วันอังคาร"],
  ["Wed", "Wednesday", "วันพุธ"],
  ["Thu / Thurs", "Thursday", "วันพฤหัสบดี"],
  ["Fri", "Friday", "วันศุกร์"],
  ["Sat", "Saturday", "วันเสาร์"],
  ["Sun", "Sunday", "วันอาทิตย์"],
];

const months: [string, string, string, string][] = [
  ["Jan", "January", "มกราคม", "31"],
  ["Feb", "February", "กุมภาพันธ์", "28/29"],
  ["Mar", "March", "มีนาคม", "31"],
  ["Apr", "April", "เมษายน", "30"],
  ["May", "May", "พฤษภาคม", "31"],
  ["Jun", "June", "มิถุนายน", "30"],
  ["Jul", "July", "กรกฎาคม", "31"],
  ["Aug", "August", "สิงหาคม", "31"],
  ["Sep / Sept", "September", "กันยายน", "30"],
  ["Oct", "October", "ตุลาคม", "31"],
  ["Nov", "November", "พฤศจิกายน", "30"],
  ["Dec", "December", "ธันวาคม", "31"],
];

// [number, suffix, reading, note]
const ordinals: [number, string, string, string][] = [
  [1, "st", "first", ""],
  [2, "nd", "second", ""],
  [3, "rd", "third", ""],
  [4, "th", "fourth", "ตั้งแต่ 4 เป็นต้นไปส่วนใหญ่เติม -th"],
  [11, "th", "eleventh", "ยกเว้น! ไม่ใช่ 11st"],
  [12, "th", "twelfth", ""],
  [13, "th", "thirteenth", ""],
  [21, "st", "twenty-first", "กลับมาใช้ st/nd/rd ตามหลักหน่วย"],
  [22, "nd", "twenty-second", ""],
  [23, "rd", "twenty-third", ""],
  [31, "st", "thirty-first", ""],
];

const years: [string, ReactNode][] = [
  ["1990", "nineteen ninety"],
  ["1999", "nineteen ninety-nine"],
  ["2000", "two thousand"],
  ["2001", "two thousand (and) one / twenty oh one"],
  ["2005", "two thousand (and) five / twenty oh five"],
  ["2010", "two thousand (and) ten / twenty ten"],
  ["2026", <><Hl>twenty twenty-six</Hl> (นิยมใช้มากกว่า two thousand...)</>],
];

const code = (text: string) => <code className="font-mono text-slate-800">{text}</code>;

/* ---------- page ---------- */

function Grammar06() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      {/* Hero */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          Grammar · Lesson 6
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Dates &amp; Times</h1>
        <p className="mt-1 text-lg text-brand-100">วันที่และเวลา</p>
        <p className="mt-4 max-w-2xl text-white/90">
          คู่มืออ่านและเขียน <strong>วันที่และเวลา</strong> ในภาษาอังกฤษ ทั้งรูปแบบสากล
          แบบอเมริกัน แบบอังกฤษ และการอ่านออกเสียง
        </p>
      </header>

      {/* 1. Time */}
      <section className="space-y-10">
        <SectionTitle emoji="1">เวลา</SectionTitle>

        {/* 1.1 */}
        <div className="space-y-4">
          <SubTitle>1.1 รูปแบบเวลา 12 ชั่วโมง</SubTitle>
          <p className="text-slate-700">
            ใช้ <Hl>a.m.</Hl> (ก่อนเที่ยงวัน) และ <Hl>p.m.</Hl> (หลังเที่ยงวัน)
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {twelveHour.map((t) => (
              <div
                key={t.time}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-mono text-2xl font-bold text-brand-700">{t.time}</p>
                <p className="mt-1 text-slate-800">{t.en}</p>
                <p className="text-sm text-slate-500">{t.th}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 1.2 */}
        <div className="space-y-6">
          <SubTitle>1.2 วิธีอ่านเวลา — 2 แบบ</SubTitle>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">✅ แบบตรงตัว (อ่านชั่วโมงก่อน แล้วตามด้วยนาที)</h4>
            <DataTable
              headers={["เวลา", "เขียน / อ่าน"]}
              rows={directTimes.map(([time, reading]) => [code(time), <Hl key={time}>{reading}</Hl>])}
            />
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">✅ แบบบอกช่วง (ใช้ past / to)</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-2xl font-bold text-emerald-700">past</p>
                <p className="mt-1 text-slate-700">ผ่าน (นาทีที่ 01–30)</p>
              </div>
              <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-2xl font-bold text-sky-700">to</p>
                <p className="mt-1 text-slate-700">เหลือถึง (นาทีที่ 31–59)</p>
              </div>
            </div>
            <DataTable
              headers={["เวลา", "เขียน / อ่าน", "หมายเหตุ"]}
              rows={pastToTimes.map((t) => [code(t.time), t.reading, t.note])}
            />
            <Callout tone="warning" title="ข้อควรจำ: past / to เหมาะกับนาทีที่ลงตัว">
              เช่น 5, 10, 15, 20, 25 ส่วนนาทีที่ไม่ลงตัว เช่น 06:17 อ่านแบบตรงตัว (
              <Hl>six seventeen</Hl>) จะเป็นธรรมชาติกว่า
            </Callout>
          </div>
        </div>

        {/* 1.3 */}
        <div className="space-y-4">
          <SubTitle>1.3 รูปแบบ 24 ชั่วโมง (เวลาสากล)</SubTitle>
          <p className="text-slate-700">ใช้เขียนบัตรโดยสาร ตารางเวลา เอกสารราชการ</p>
          <DataTable
            headers={["เวลา", "อ่าน"]}
            rows={hour24.map(([time, reading]) => [code(time), reading])}
          />
        </div>
      </section>

      {/* 2. Date words */}
      <section className="space-y-10">
        <SectionTitle emoji="2">วันที่</SectionTitle>

        <div className="space-y-4">
          <SubTitle>2.1 ชื่อวัน</SubTitle>
          <DataTable
            headers={["ย่อ", "เต็ม", "คำแปล"]}
            rows={days.map(([short, full, th]) => [
              <Chip key={short}>{short}</Chip>,
              <Hl key={full}>{full}</Hl>,
              th,
            ])}
          />
        </div>

        <div className="space-y-4">
          <SubTitle>2.2 ชื่อเดือน</SubTitle>
          <DataTable
            headers={["ย่อ", "เต็ม", "คำแปล", "จำนวนวัน"]}
            rows={months.map(([short, full, th, count]) => [
              <Chip key={short}>{short}</Chip>,
              <Hl key={full}>{full}</Hl>,
              th,
              count,
            ])}
          />
        </div>

        <div className="space-y-4">
          <SubTitle>2.3 ลำดับที่ของวัน (ตัวเลขท้าย)</SubTitle>
          <DataTable
            headers={["เลข", "รูปเติม", "อ่าน", "หมายเหตุ"]}
            rows={ordinals.map(([n, suffix, reading, note]) => [
              n,
              <span key={n} className="font-semibold">
                {n}
                <Hl>{suffix}</Hl>
              </span>,
              reading,
              note,
            ])}
          />
          <Callout tone="warning" title="ข้อยกเว้น: 11, 12, 13 ใช้ -th เสมอ">
            ไม่ใช่ 11st / 12nd / 13rd ส่วนเลขที่ลงท้ายด้วย 1, 2, 3 อื่น ๆ (21, 22, 23, 31)
            กลับมาใช้ st / nd / rd ตามหลักหน่วย
          </Callout>
        </div>
      </section>

      {/* 3. Writing dates */}
      <section className="space-y-8">
        <SectionTitle emoji="3">วิธีเขียนวันที่ — 2 แบบหลัก</SectionTitle>

        <div className="space-y-4">
          <SubTitle>แบบอังกฤษ (สากล): วัน / เดือน / ปี</SubTitle>
          <DataTable
            headers={["รูปแบบเขียน", "อ่านออกเสียง"]}
            rows={[
              [code("06/11/2026"), "the sixth of November, twenty twenty-six"],
              [code("6 Nov 2026"), "sixth November twenty twenty-six"],
              [code("6th November 2026"), "on the sixth of November, two thousand (and) twenty-six"],
              [code("6 Nov 26"), "ย่อปี 26 = 2026"],
            ]}
          />
        </div>

        <div className="space-y-4">
          <SubTitle>แบบอเมริกัน: เดือน / วัน / ปี</SubTitle>
          <DataTable
            headers={["รูปแบบเขียน", "อ่านออกเสียง"]}
            rows={[
              [code("11/06/2026"), "November sixth, twenty twenty-six"],
              [code("Nov 6, 2026"), "November sixth, two thousand twenty-six"],
            ]}
          />
        </div>

        <div className="space-y-4">
          <Callout tone="warning" title="ความแตกต่างสำคัญมาก: ตัวเลขชุดเดียวกัน อ่านได้ 2 วัน" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                แบบอังกฤษ
              </p>
              <p className="mt-2 font-mono text-xl font-bold text-slate-800">06/11/2026</p>
              <p className="mt-1 text-slate-700">= 6 พฤศจิกายน</p>
            </div>
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                แบบอเมริกัน
              </p>
              <p className="mt-2 font-mono text-xl font-bold text-slate-800">06/11/2026</p>
              <p className="mt-1 text-slate-700">= 11 มิถุนายน</p>
            </div>
          </div>
          <Callout tone="success" title="แนะนำ: เมื่อเขียนสากล ให้เขียนชื่อเดือนกำกับ">
            เช่น <Hl>6 Nov 2026</Hl> เพื่อหลีกเลี่ยงความสับสน
          </Callout>
        </div>

        <div className="space-y-4">
          <SubTitle>รูปแบบสั้นสากล (ISO 8601)</SubTitle>
          <p className="text-slate-700">ใช้ในคอมพิวเตอร์และเอกสารทางการ</p>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-mono text-2xl font-bold text-brand-700">2026-11-06</p>
            <p className="mt-1 text-slate-700">ปี-เดือน-วัน → 6 พฤศจิกายน พ.ศ. 2569 (ค.ศ. 2026)</p>
          </div>
        </div>
      </section>

      {/* 4. Years */}
      <section className="space-y-8">
        <SectionTitle emoji="4">การอ่านปี</SectionTitle>
        <DataTable
          headers={["ปี", "อ่าน"]}
          rows={years.map(([year, reading]) => [code(year), reading])}
        />

        <div className="space-y-4">
          <SubTitle>การเขียนช่วงเวลา</SubTitle>
          <ExampleList>
            <Example
              en={<>from <Hl>Monday to Friday</Hl> / <Hl>Mon–Fri</Hl></>}
              th="ตั้งแต่จันทร์ถึงศุกร์"
            />
            <Example en={<><Hl>9:00 a.m. – 5:00 p.m.</Hl></>} th="เวลา 9 โมงเช้าถึง 5 โมงเย็น" />
            <Example en={<><Hl>15–20 November 2026</Hl></>} th="15–20 พฤศจิกายน 2026" />
          </ExampleList>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-6">
        <SectionTitle emoji="★">สรุปสั้น ๆ</SectionTitle>
        <DataTable
          headers={["รายการ", "หลักการสำคัญ"]}
          rows={[
            [
              "เวลา",
              "01–30 นาที = past / 31–59 = to / 15 นาที = quarter / 30 นาที = half",
            ],
            [
              "วันที่",
              "วัน/เดือน/ปี (อังกฤษ) vs เดือน/วัน/ปี (อเมริกัน) — ระบุชื่อเดือนเพื่อความชัดเจน",
            ],
            [
              "ลำดับที่",
              "1st, 2nd, 3rd, 4th… / 11th, 12th, 13th เป็นข้อยกเว้น / 21st, 22nd… กลับมาตามหลักหน่วย",
            ],
            [
              "ปี",
              "2000–2009: two thousand… / 2010 เป็นต้นไป: twenty ten, twenty twenty-six",
            ],
          ]}
        />
      </section>
    </div>
  );
}

export default Grammar06;