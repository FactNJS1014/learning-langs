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

function UseCallback01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          React · Hooks
        </p>
        <h1 className="mt-2 font-mono text-3xl font-bold sm:text-4xl">useCallback</h1>
        <p className="mt-1 text-lg text-brand-100">เก็บฟังก์ชันไว้ ไม่สร้างใหม่ทุกครั้ง</p>
        <p className="mt-4 max-w-2xl text-white/90">
          คู่มือตั้งแต่พื้นฐานถึงมืออาชีพ พร้อมโค้ดตัวอย่างที่รันได้จริง
        </p>
      </header>

      {/* ===== ส่วนที่ 1: รู้จัก useCallback ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">รู้จัก useCallback คืออะไร?</SectionTitle>

        <Callout tone="info" title="useCallback เก็บที่อยู่ของฟังก์ชันไว้">
          ไม่ให้ฟังก์ชันถูกสร้างใหม่ทุกครั้งที่คอมโพเนนต์เรนเดอร์
        </Callout>

        <div className="space-y-3">
          <SubTitle>ความแตกต่างจาก useMemo</SubTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="font-mono text-sm font-semibold text-brand-600">useMemo</p>
              <p className="mt-1 text-slate-800">
                เก็บ <Hl>ค่าผลลัพธ์</Hl> ที่ได้จากการเรียกฟังก์ชัน
              </p>
            </div>
            <div className="rounded-xl border border-[#FFD84D] bg-amber-50 p-4 shadow-sm">
              <p className="font-mono text-sm font-semibold text-amber-700">useCallback</p>
              <p className="mt-1 text-slate-800">
                เก็บ <Hl>ตัวฟังก์ชันเอง</Hl> ไว้โดยตรง
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <SubTitle>ทำไมต้องใช้?</SubTitle>
          <ExampleList>
            <Example
              en={
                <>
                  ป้องกันคอมโพเนนต์ลูกเรนเดอร์ซ้ำซ้อนเมื่อใช้ร่วมกับ <Chip>React.memo</Chip>
                </>
              }
            />
            <Example
              en={
                <>
                  ทำให้ฟังก์ชันคงที่ใน dependency list ของ <Chip>useEffect</Chip> หรือ Hook อื่น ๆ
                </>
              }
            />
            <Example
              ok={false}
              en="ไม่จำเป็นต้องใช้ทุกฟังก์ชัน — ใช้เมื่อส่งให้คอมโพเนนต์ลูก หรืออยู่ใน dependency list เท่านั้น"
            />
          </ExampleList>
        </div>
      </section>

      {/* ===== ส่วนที่ 2: พื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: โครงสร้างและการใช้งาน</SectionTitle>

        <div className="space-y-3">
          <SubTitle>โครงสร้าง</SubTitle>
          <CodeBlock
            highlight={[1, 3]}
            code={`
const ฟังก์ชันที่เก็บไว้ = useCallback(() => {
  // โค้ดที่ต้องการทำงาน
}, [ค่าที่ต้องเฝ้าดู]);
`}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-brand-600">อาร์กิวเมนต์ที่ 1</p>
              <p className="mt-1 text-slate-800">ฟังก์ชันที่ต้องการเก็บไว้</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-brand-600">อาร์กิวเมนต์ที่ 2</p>
              <p className="mt-1 text-slate-800">
                อาร์เรย์ของค่าที่เมื่อเปลี่ยน → จะสร้างฟังก์ชันใหม่
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <SubTitle>ปัญหาเมื่อไม่ใช้ useCallback</SubTitle>
          <CodeBlock
            tone="bad"
            badge="ไม่ใช้ useCallback"
            filename="Parent.tsx"
            highlight={[14]}
            code={`
import { useState } from 'react';

// คอมโพเนนต์ลูก
const Button = ({ onClick }) => {
  console.log('🔘 ปุ่มเรนเดอร์');
  return <button onClick={onClick}>กดฉัน</button>;
};

// คอมโพเนนต์แม่
export default function Parent() {
  const [count, setCount] = useState(0);

  // ❌ ฟังก์ชันถูกสร้างใหม่ทุกครั้งที่เรนเดอร์!
  const handleClick = () => {
    alert('กดแล้ว!');
  };

  return (
    <div>
      <h2>จำนวน: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>เพิ่ม</button>
      <Button onClick={handleClick} />
    </div>
  );
}
`}
          />
          <Callout tone="warning" title="ปัญหา: กด “เพิ่ม” ทุกครั้ง Button จะเรนเดอร์ใหม่ด้วย">
            เพราะ <Hl>handleClick</Hl> เปลี่ยนที่อยู่ในหน่วยความจำทุกครั้ง
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>แก้ไขด้วย useCallback + React.memo</SubTitle>
          <CodeBlock
            tone="good"
            badge="ใช้ useCallback"
            filename="Parent.tsx"
            highlight={[4, 13]}
            code={`
import { useState, useCallback } from 'react';

// ✅ ห่อคอมโพเนนต์ด้วย memo เพื่อจำค่า props
const Button = React.memo(({ onClick }) => {
  console.log('🔘 ปุ่มเรนเดอร์');
  return <button onClick={onClick}>กดฉัน</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  // ✅ ฟังก์ชันจะถูกสร้างครั้งเดียว
  const handleClick = useCallback(() => {
    alert('กดแล้ว!');
  }, []); // [] = ไม่มีค่าที่ต้องเปลี่ยนแปลง

  return (
    <div>
      <h2>จำนวน: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>เพิ่ม</button>
      <Button onClick={handleClick} />
    </div>
  );
}
`}
          />
          <Callout tone="success" title="ผลลัพธ์: กด “เพิ่ม” กี่ครั้ง Button ก็ไม่เรนเดอร์ซ้ำอีก!">
            ต้องใช้คู่กัน — <Hl>React.memo</Hl> จำ props, <Hl>useCallback</Hl> ทำให้ props
            ไม่เปลี่ยน
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 3: Dependency ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="3">การใช้ Dependency และการอัปเดต</SectionTitle>

        <CodeBlock
          tone="good"
          badge="ใช้ useCallback"
          filename="Form.tsx"
          highlight={[18, 20]}
          code={`
import { useState, useCallback } from 'react';

const Child = React.memo(({ onSubmit, username }) => {
  console.log('เด็กเรนเดอร์');
  return (
    <div>
      <p>ชื่อ: {username}</p>
      <button onClick={onSubmit}>ส่งข้อมูล</button>
    </div>
  );
});

export default function Form() {
  const [username, setUsername] = useState('สมชาย');
  const [count, setCount] = useState(0);

  // ✅ สร้างฟังก์ชันใหม่เมื่อ username เปลี่ยนเท่านั้น
  const handleSubmit = useCallback(() => {
    console.log('ส่งชื่อ:', username);
  }, [username]); // username เปลี่ยน → ฟังก์ชันใหม่

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="ชื่อผู้ใช้"
      />
      <button onClick={() => setCount(c => c + 1)}>นับ: {count}</button>
      <Child onSubmit={handleSubmit} username={username} />
    </div>
  );
}
`}
        />

        <div className="space-y-3">
          <SubTitle>กฎของ Dependency</SubTitle>
          <DataTable
            headers={["Dependency", "ผลลัพธ์"]}
            rows={[
              [<Chip key="a">{"[]"}</Chip>, "ฟังก์ชันคงที่ตลอดอายุคอมโพเนนต์"],
              [
                <Chip key="b">{"[a, b]"}</Chip>,
                <>
                  สร้างใหม่เมื่อ <Hl>a</Hl> หรือ <Hl>b</Hl> เปลี่ยนค่า
                </>,
              ],
              [
                <span key="c" className="font-semibold text-rose-700">
                  ไม่ใส่อาร์เรย์เลย
                </span>,
                "สร้างใหม่ทุกครั้ง (เหมือนไม่ได้ใช้เลย!)",
              ],
            ]}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 4: ระดับกลาง ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">ตัวอย่างระดับกลาง — การจัดการรายการข้อมูล</SectionTitle>

        <CodeBlock
          tone="good"
          badge="ใช้ useCallback"
          filename="TodoList.tsx"
          highlight={[22, 24, 27, 31]}
          code={`
import { useState, useCallback } from 'react';

const Item = React.memo(({ item, onDelete }) => {
  console.log('รายการเรนเดอร์:', item.id);
  return (
    <li>
      {item.name}
      <button onClick={() => onDelete(item.id)}>ลบ</button>
    </li>
  );
});

export default function TodoList() {
  const [items, setItems] = useState([
    { id: 1, name: 'เรียน React' },
    { id: 2, name: 'ฝึกใช้ useCallback' },
    { id: 3, name: 'ทำโปรเจกต์' },
  ]);
  const [text, setText] = useState('');

  // ✅ ลบรายการ — dependency คือ setItems
  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []); // setItems คงที่เสมอ จึงใส่ [] ได้เลย!

  // ✅ เพิ่มรายการ
  const handleAdd = useCallback(() => {
    if (!text) return;
    setItems(prev => [...prev, { id: Date.now(), name: text }]);
    setText('');
  }, [text]);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="เพิ่มรายการ..."
      />
      <button onClick={handleAdd}>เพิ่ม</button>

      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
`}
        />

        <Callout tone="info" title="ข้อสังเกต: setItems จาก useState มีเสถียรภาพโดยธรรมชาติ">
          ไม่เคยเปลี่ยนค่า จึงใส่ใน dependency ได้โดยไม่ต้องกลัวปัญหา
        </Callout>
      </section>

      {/* ===== ส่วนที่ 5: ระดับมืออาชีพ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="5">ระดับมืออาชีพ — ใช้กับ useEffect และข้อมูลภายนอก</SectionTitle>

        <div className="space-y-3">
          <SubTitle>ปัญหา: ฟังก์ชันทำให้ useEffect ทำงานซ้ำ</SubTitle>
          <CodeBlock
            tone="bad"
            badge="ไม่ใช้ useCallback"
            filename="Dashboard.tsx"
            highlight={[7, 14]}
            code={`
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [userId, setUserId] = useState(1);

  // ❌ ฟังก์ชันใหม่ทุกครั้ง → useEffect ทำงานซ้ำโดยไม่ต้องการ
  const fetchData = async () => {
    const res = await fetch(\`/api/user/\${userId}\`);
    return res.json();
  };

  useEffect(() => {
    fetchData().then(data => console.log(data));
  }, [fetchData]); // 🔁 ทำงานซ้ำทุกครั้งที่เรนเดอร์!

  return <h2>แดชบอร์ด ผู้ใช้ {userId}</h2>;
}
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>แก้ไขด้วย useCallback</SubTitle>
          <CodeBlock
            tone="good"
            badge="ใช้ useCallback"
            filename="Dashboard.tsx"
            highlight={[7, 10, 15]}
            code={`
import { useState, useEffect, useCallback } from 'react';

export default function Dashboard() {
  const [userId, setUserId] = useState(1);

  // ✅ ฟังก์ชันสร้างใหม่เฉพาะเมื่อ userId เปลี่ยน
  const fetchData = useCallback(async () => {
    const res = await fetch(\`/api/user/\${userId}\`);
    return res.json();
  }, [userId]);

  useEffect(() => {
    console.log('📡 ดึงข้อมูล...');
    fetchData().then(data => console.log(data));
  }, [fetchData]); // ✅ ทำงานเมื่อ fetchData เปลี่ยนจริงๆ เท่านั้น

  return (
    <div>
      <h2>แดชบอร์ด ผู้ใช้ {userId}</h2>
      <button onClick={() => setUserId(u => u + 1)}>เปลี่ยนผู้ใช้</button>
    </div>
  );
}
`}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 6: เมื่อไหร่ควร / ไม่ควรใช้ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="6">เมื่อไหร่ควร / ไม่ควรใช้ useCallback</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>ควรใช้เมื่อ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example
                  en={
                    <>
                      ส่งฟังก์ชันให้คอมโพเนนต์ลูกที่ห่อด้วย <Chip>React.memo</Chip>
                    </>
                  }
                />
                <Example
                  en={
                    <>
                      ฟังก์ชันถูกใช้ใน dependency list ของ <Chip>useEffect</Chip> หรือ Hook อื่น ๆ
                    </>
                  }
                />
                <Example
                  en={
                    <>
                      ฟังก์ชันเป็น dependency ของ <Chip>useMemo</Chip> หรือ <Chip>useCallback</Chip>{" "}
                      อื่น
                    </>
                  }
                />
                <Example en="ต้องการป้องกันการสร้างฟังก์ชันซ้ำในรายการที่เรนเดอร์จำนวนมาก" />
              </ExampleList>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>ไม่ควรใช้เมื่อ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="ฟังก์ชันใช้ภายในคอมโพเนนต์เดียว ไม่ได้ส่งให้ลูก" />
                <Example ok={false} en="ฟังก์ชันเรียกใช้ไม่บ่อยหรือไม่ส่งผลต่อประสิทธิภาพ" />
                <Example
                  ok={false}
                  en="ห่อทุกฟังก์ชันโดยไม่จำเป็น → เพิ่มโค้ดและใช้หน่วยความจำโดยเปล่าประโยชน์"
                />
              </ExampleList>
            </div>
          </div>
        </div>

        <Callout tone="warning" title="กฎทอง: “วัดก่อน optimize”">
          อย่าใส่ <Hl>useCallback</Hl> ทุกฟังก์ชันจนกว่าจะเห็นปัญหาจริง ๆ
        </Callout>
      </section>

      {/* ===== ส่วนที่ 7: เปรียบเทียบ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="7">เปรียบเทียบ: useCallback vs useMemo vs ปกติ</SectionTitle>

        <DataTable
          headers={["รูปแบบ", "คืนค่ากลับ", "ใช้เมื่อ"]}
          rows={[
            ["ฟังก์ชันปกติ", "ฟังก์ชันใหม่ทุกครั้ง", "ใช้ภายใน ไม่ส่งให้ลูก"],
            [
              <Chip key="a">{"useCallback(fn, deps)"}</Chip>,
              "ตัวฟังก์ชัน (คงที่)",
              "ส่งให้ลูก / ใน dependency list",
            ],
            [
              <Chip key="b">{"useMemo(() => fn, deps)"}</Chip>,
              "เหมือนกัน แต่เรียกผ่านฟังก์ชัน",
              "กรณีต้องการคำนวณก่อนคืนค่า",
            ],
            [
              <Chip key="c">{"useMemo(() => value, deps)"}</Chip>,
              "ค่าผลลัพธ์",
              "เก็บค่าที่คำนวณยาก",
            ],
          ]}
        />

        <CodeBlock
          highlight={[2, 5]}
          code={`
// ✅ useCallback = เก็บฟังก์ชันตรงๆ
const fn = useCallback((x) => x * 2, []);

// ✅ useMemo แบบเดียวกัน (ใช้ได้แต่ไม่นิยม)
const fn = useMemo(() => (x) => x * 2, []);
`}
        />
      </section>
    </div>
  );
}

export default UseCallback01;