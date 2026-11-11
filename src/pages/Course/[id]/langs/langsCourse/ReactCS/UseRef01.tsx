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

function UseRef01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          React · Hooks
        </p>
        <h1 className="mt-2 font-mono text-3xl font-bold sm:text-4xl">useRef</h1>
        <p className="mt-1 text-lg text-brand-100">กล่องเก็บค่าที่ไม่ทำให้หน้าเรนเดอร์ใหม่</p>
        <p className="mt-4 max-w-2xl text-white/90">
          คู่มือตั้งแต่พื้นฐานถึงมืออาชีพ พร้อมโค้ดตัวอย่างที่รันได้จริง
        </p>
      </header>
 
      {/* ===== ส่วนที่ 1: รู้จัก useRef ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">รู้จัก useRef คืออะไร?</SectionTitle>
 
        <Callout tone="info" title="useRef สร้างอ็อบเจกต์เก็บค่าที่คงที่ตลอดอายุคอมโพเนนต์">
          มีคุณสมบัติหลัก 3 ข้อด้านล่าง
        </Callout>
 
        <ExampleList>
          <Example
            en={
              <>
                ค่าที่เก็บไว้ <Hl>ไม่เปลี่ยนแปลง</Hl> เมื่อคอมโพเนนต์เรนเดอร์
              </>
            }
          />
          <Example
            en={
              <>
                การเปลี่ยนค่า <Hl>ไม่ทำให้คอมโพเนนต์เรนเดอร์ใหม่</Hl> (ต่างจาก <Chip>useState</Chip>)
              </>
            }
          />
          <Example
            en={
              <>
                มักใช้เข้าถึง <Hl>DOM element โดยตรง</Hl> หรือเก็บค่าชั่วคราวที่ไม่ต้องการอัปเดต UI
              </>
            }
          />
        </ExampleList>
 
        <div className="space-y-3">
          <SubTitle>โครงสร้างพื้นฐาน</SubTitle>
          <CodeBlock
            highlight={[4, 5]}
            code={`
const ชื่อตัวแปร = useRef(ค่าเริ่มต้น);
 
// เข้าถึงค่า
ชื่อตัวแปร.current = ค่าใหม่;
console.log(ชื่อตัวแปร.current);
`}
          />
          <blockquote className="rounded-xl border-l-4 border-[#FFD84D] bg-amber-50 px-5 py-4 text-slate-800">
            <strong>สำคัญมาก:</strong> ค่าถูกเก็บไว้ที่ <Chip>.current</Chip> เสมอ
          </blockquote>
        </div>
      </section>
 
      {/* ===== ส่วนที่ 2: การใช้งานหลัก 2 แบบ ===== */}
      <section className="space-y-10">
        <SectionTitle emoji="2">การใช้งานหลัก 2 แบบ</SectionTitle>
 
        {/* แบบที่ 1 */}
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-brand-600">แบบที่ 1</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">เข้าถึงและควบคุม DOM Element</p>
            <p className="mt-1 text-slate-700">
              พบบ่อยที่สุด ใช้จัดการ element บนหน้าจอโดยตรง เช่น โฟกัสช่องป้อนข้อมูล, เลื่อน,
              อ่านขนาด
            </p>
          </div>
 
          <CodeBlock
            filename="InputFocus.tsx"
            highlight={[5, 9, 14]}
            code={`
import { useRef, useEffect } from 'react';
 
export default function InputFocus() {
  // สร้าง ref แล้วเชื่อมกับ element ผ่าน prop ref
  const inputRef = useRef(null);
 
  useEffect(() => {
    // เมื่อคอมโพเนนต์โหลด → สั่งโฟกัสช่องป้อนข้อมูล
    inputRef.current?.focus();
  }, []);
 
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="พิมพ์ที่นี่..." />
      <button onClick={() => inputRef.current?.focus()}>โฟกัสช่องป้อนข้อมูล</button>
    </div>
  );
}
`}
          />
 
          <div className="space-y-3">
            <SubTitle>ตัวอย่างอื่น ๆ ที่ทำได้</SubTitle>
            <CodeBlock
              highlight={[3, 9]}
              code={`
// เลื่อนไปยังส่วนบนสุดของกล่อง
const scrollToTop = () => {
  boxRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
};
 
// อ่านขนาดและตำแหน่งของ element
const showInfo = () => {
  if (boxRef.current) {
    const rect = boxRef.current.getBoundingClientRect();
    console.log('ความกว้าง:', rect.width, 'ความสูง:', rect.height);
  }
};
`}
            />
          </div>
 
          <Callout tone="warning" title="ข้อควรระวัง: อย่าแก้ไข DOM ผ่าน ref มากเกินไป">
            ให้ React จัดการ UI ผ่าน state ตามปกติ ใช้ <Hl>ref</Hl> สำหรับกรณีที่จำเป็นเท่านั้น
          </Callout>
        </div>
 
        {/* แบบที่ 2 */}
        <div className="space-y-6">
          <div className="rounded-xl border border-[#FFD84D] bg-amber-50 p-4 shadow-sm">
            <p className="text-xs font-semibold text-amber-700">แบบที่ 2</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">เก็บค่าชั่วคราว (Mutable Value)</p>
            <p className="mt-1 text-slate-700">
              เก็บค่าไว้ใช้ภายในคอมโพเนนต์ โดย <Hl>ไม่ต้องการให้ค่าที่เปลี่ยนไปกระตุ้นการเรนเดอร์ใหม่</Hl>
            </p>
          </div>
 
          <div className="space-y-3">
            <SubTitle>ตัวอย่าง: นับจำนวนครั้งที่ปุ่มถูกกด</SubTitle>
            <CodeBlock
              filename="CounterWithRef.tsx"
              highlight={[5, 8, 9]}
              code={`
import { useState, useRef } from 'react';
 
export default function CounterWithRef() {
  const [count, setCount] = useState(0);
  const clickCount = useRef(0); // ไม่ทำให้เรนเดอร์เมื่อเปลี่ยนค่า
 
  const handleClick = () => {
    clickCount.current += 1; // เปลี่ยนค่า ไม่เรนเดอร์
    setCount(c => c + 1);    // เปลี่ยน state → เรนเดอร์
    console.log('ถูกกดทั้งหมด:', clickCount.current, 'ครั้ง');
  };
 
  return (
    <div>
      <p>ค่า State: {count}</p>
      <button onClick={handleClick}>กดฉัน</button>
    </div>
  );
}
`}
            />
          </div>
 
          <div className="space-y-3">
            <SubTitle>ตัวอย่าง: เช็คค่าก่อนหน้า</SubTitle>
            <CodeBlock
              filename="PreviousValue.tsx"
              highlight={[5, 9, 15]}
              code={`
import { useState, useRef, useEffect } from 'react';
 
export default function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // เก็บค่าก่อนหน้า
 
  useEffect(() => {
    // ทุกครั้งที่เรนเดอร์เสร็จ → บันทึกค่าล่าสุดไว้
    prevCountRef.current = count;
  });
 
  return (
    <div>
      <p>ค่าปัจจุบัน: {count}</p>
      <p>ค่าก่อนหน้า: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>เพิ่ม</button>
    </div>
  );
}
`}
            />
          </div>
        </div>
      </section>
 
      {/* ===== ส่วนที่ 3: เปรียบเทียบ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="3">เปรียบเทียบ: useRef vs useState vs ตัวแปรปกติ</SectionTitle>
 
        <DataTable
          headers={["คุณสมบัติ", "ตัวแปรปกติ", "useState", "useRef"]}
          rows={[
            ["อยู่รอดตอนเรนเดอร์", "หายทุกครั้ง", "คงอยู่", "คงอยู่"],
            ["เปลี่ยนค่าแล้วเรนเดอร์ไหม", "—", "เรนเดอร์ใหม่", "ไม่เรนเดอร์"],
            [
              "เข้าถึงค่า",
              <Chip key="a">value</Chip>,
              <Chip key="b">value</Chip>,
              <Chip key="c">value.current</Chip>,
            ],
            [
              "เหมาะกับ",
              "ค่าคงที่, ตัวแปรใช้ครั้งเดียว",
              "ค่าที่ส่งผลต่อ UI",
              "DOM, ค่าสถานะที่ไม่แสดงผล",
            ],
          ]}
        />
      </section>
 
      {/* ===== ส่วนที่ 4: ข้อผิดพลาด ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="4">ข้อผิดพลาดที่พบบ่อย &amp; ข้อควรระวัง</SectionTitle>
 
        <div className="space-y-3">
          <SubTitle>ผิด: ลืม .current</SubTitle>
          <CodeBlock
            tone="bad"
            badge="ผิด"
            highlight={[2]}
            code={`
const myRef = useRef(0);
console.log(myRef);         // ❌ ผิด → ได้ { current: 0 }
console.log(myRef.current); // ✅ ถูก → ได้ 0
`}
          />
        </div>
 
        <div className="space-y-3">
          <SubTitle>ผิด: ใช้ใน JSX โดยตรง</SubTitle>
          <CodeBlock
            tone="bad"
            badge="ผิด"
            highlight={[1]}
            code={`
<p>ค่า: {myRef.current}</p>
{/* จะแสดงผลได้แค่ครั้งแรกเท่านั้น เพราะการเปลี่ยนค่าไม่เรนเดอร์ */}
`}
          />
          <Callout tone="success" title="ถ้าต้องการแสดงผลบนหน้าจอ ให้ใช้ useState แทน">
            ค่าที่ต้องโชว์ใน UI ควรเป็น state เสมอ
          </Callout>
        </div>
 
        <div className="space-y-3">
          <SubTitle>ผิด: เขียนทับ DOM ที่ React ควบคุม</SubTitle>
          <CodeBlock
            tone="bad"
            badge="ผิด"
            highlight={[2, 5]}
            code={`
// ❌ ไม่ควรทำ
inputRef.current.value = 'ใหม่';
 
// ✅ ให้ใช้ state ควบคุมตามปกติ
const [value, setValue] = useState('');
`}
          />
        </div>
 
        <div className="space-y-3">
          <SubTitle>ถูก: ตรวจสอบว่ามีค่าก่อนใช้</SubTitle>
          <CodeBlock
            tone="good"
            badge="ถูกต้อง"
            highlight={[2, 6]}
            code={`
useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
  // หรือแบบสั้นๆ
  inputRef.current?.focus();
}, []);
`}
          />
        </div>
      </section>
 
      {/* ===== ส่วนที่ 5: Stopwatch ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="5">ตัวอย่างระดับกลาง — จับเวลา (Stopwatch)</SectionTitle>
 
        <CodeBlock
          filename="Stopwatch.tsx"
          highlight={[5, 9, 15, 16]}
          code={`
import { useState, useRef } from 'react';
 
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null); // เก็บ ID ของ setInterval
 
  const start = () => {
    if (intervalRef.current) return; // กำลังทำงานอยู่แล้ว → ออก
    intervalRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  };
 
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
 
  const reset = () => {
    stop();
    setTime(0);
  };
 
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>⏱️ {time} วินาที</h2>
      <button onClick={start}>เริ่ม</button>
      <button onClick={stop}>หยุด</button>
      <button onClick={reset}>รีเซ็ต</button>
    </div>
  );
}
`}
        />
 
        <Callout tone="info" title="ทำไมต้องใช้ useRef เก็บ intervalID?">
          เพราะถ้าใช้ตัวแปรปกติ ค่า <Hl>intervalID</Hl> จะหายไปเมื่อคอมโพเนนต์เรนเดอร์
          และเราจะหยุดเวลาไม่ได้
        </Callout>
      </section>
 
      {/* ===== ส่วนที่ 6: ระดับมืออาชีพ ===== */}
      <section className="space-y-10">
        <SectionTitle emoji="6">ระดับมืออาชีพ — รูปแบบการใช้งานขั้นสูง</SectionTitle>
 
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-brand-600">รูปแบบที่ 1</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              เก็บค่าล่าสุดเพื่อใช้ใน Callback / Effect
            </p>
            <p className="mt-1 text-slate-700">
              ฟังก์ชันใน <Chip>useEffect</Chip> หรือ <Chip>setTimeout</Chip> จะ “จดจำ” ค่าได้แค่ตอนสร้าง
              (Closure) — ใช้ <Hl>useRef</Hl> แก้ได้
            </p>
          </div>
 
          <CodeBlock
            filename="LatestValueDemo.tsx"
            highlight={[5, 9, 14, 15]}
            code={`
import { useState, useRef, useEffect } from 'react';
 
export default function LatestValueDemo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
 
  // อัปเดตค่า ref ทุกครั้งที่ count เปลี่ยน
  useEffect(() => {
    countRef.current = count;
  }, [count]);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('จาก State (เก่า):', count);     // ค่าคงที่เป็นตอนเริ่ม
      console.log('จาก Ref (ล่าสุด):', countRef.current); // ค่าล่าสุดเสมอ
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <div>
      <p>นับ: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>เพิ่ม</button>
      <p>ดูผลใน Console หลังจากกดปุ่มหลายครั้ง แล้วรอ 3 วินาที</p>
    </div>
  );
}
`}
          />
        </div>
 
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-brand-600">รูปแบบที่ 2</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              Forwarding Refs (ส่ง Ref ไปยังคอมโพเนนต์ลูก)
            </p>
            <p className="mt-1 text-slate-700">
              โดยปกติ <Chip>ref</Chip> ส่งผ่าน props ไปหาคอมโพเนนต์ลูกโดยตรงไม่ได้ ต้องใช้{" "}
              <Hl>forwardRef</Hl>
            </p>
          </div>
 
          <CodeBlock
            filename="Parent.tsx"
            highlight={[4, 13]}
            code={`
import { useRef, forwardRef } from 'react';
 
// ✅ ห่อคอมโพเนนต์ด้วย forwardRef
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} style={{ padding: '8px' }} />;
});
 
export default function Parent() {
  const inputRef = useRef(null);
 
  return (
    <div>
      <CustomInput ref={inputRef} placeholder="พิมพ์ที่นี่..." />
      <button onClick={() => inputRef.current?.focus()}>โฟกัส</button>
    </div>
  );
}
`}
          />
        </div>
      </section>
    </div>
  );
}
 
export default UseRef01;
 