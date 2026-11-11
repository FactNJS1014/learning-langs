import { CodeBlock } from "../../../../../../components/Codeblocks";
import {
  Callout,
  DataTable,
  Hl,
  SectionTitle,
} from "../../../../../../components/Grammarblocks";

function UseMemo() {
  return (
    <div className="mx-auto max-w-full space-y-12 leading-relaxed">
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          React.js · Lesson 1
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">useMemo</h1>
        <p className="mt-1 text-lg text-brand-100">
          คู่มือการใช้ `useMemo` ใน React — จากพื้นฐานถึงมืออาชีพ
        </p>
      </header>

      <section className="space-y-10">
        <SectionTitle emoji="1">รู้จัก `useMemo` คืออะไร?</SectionTitle>
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-4">
            <p>
              `useMemo` คือ <strong>Hook ใน React</strong> ที่ใช้สำหรับ{" "}
              <em>
                "เก็บค่าผลลัพธ์ของการคำนวณไว้
                เพื่อไม่ต้องคำนวณใหม่ทุกครั้งที่คอมโพเนนต์เรนเดอร์"
              </em>
            </p>
            <p>
              <strong>หลักการง่ายๆ:</strong> คำนวณเมื่อจำเป็นเท่านั้น
              ไม่ใช่ทุกครั้งที่หน้าจออัปเดต
            </p>
            <p>
              <strong>ทำไมต้องใช้?</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ เพิ่มประสิทธิภาพ → ลดการทำงานหนักซ้ำซ้อน</li>
              <li>✅ ควบคุมเมื่อจะให้ค่าถูกคำนวณใหม่</li>
              <li>
                ❌ ไม่จำเป็นต้องใช้ทุกที่ — ใช้เมื่อการคำนวณนั้น
                **ใช้ทรัพยากรมาก** เท่านั้น
              </li>
            </ul>
          </div>
        </div>
        <SectionTitle emoji="2">พื้นฐาน: การใช้งานเบื้องต้น</SectionTitle>
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-4">
            <p>โครงสร้าง</p>
            <pre className="bg-sky-100 p-4 rounded-lg overflow-x-auto">
              {`const ค่าที่เก็บไว้ = useMemo(() => {
  // คำนวณอะไรสักอย่าง
  return ผลลัพธ์;
}, [ค่าที่ต้องเฝ้าดู]);`}
            </pre>
            <p>
              <strong>อาร์กิวเมนต์ที่ 1:</strong>{" "}
              ฟังก์ชันที่คืนค่าที่ต้องการเก็บไว้
            </p>
            <p>
              <strong>อาร์กิวเมนต์ที่ 2:</strong> อาร์เรย์ของค่าที่เมื่อเปลี่ยน
              → จะให้คำนวณใหม่
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <p>ตัวอย่างพื้นฐาน — ไม่ใช้ useMemo</p>
            <pre className="bg-sky-100 p-4 rounded-lg overflow-x-auto">
              {`import { useState } from 'react';

export default function BasicExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // ❌ คำนวณใหม่ทุกครั้งที่เรนเดอร์ แม้ text เปลี่ยนก็ตาม
  const expensiveCalculation = () => {
    console.log('กำลังคำนวณ...');
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return sum;
  };

  const total = expensiveCalculation();

  return (
    <div>
      <h2>จำนวน: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>เพิ่ม</button>
      
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="พิมพ์อะไรสักอย่าง" />
      
      <p>ผลรวม: {total}</p>
    </div>
  );
}`}
            </pre>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <p>ตัวอย่างพื้นฐาน — ใช้ useMemo</p>
            <pre className="bg-sky-100 p-4 rounded-lg overflow-x-auto">
              {`import { useState, useMemo } from 'react';

export default function BasicExampleWithMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // ✅ คำนวณแค่ครั้งเดียว หรือเมื่อ count เปลี่ยน
  const total = useMemo(() => {
    console.log('กำลังคำนวณ...');
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return sum;
  }, [count]); // [count] = เปลี่ยน count → คำนวณใหม่

  return (
    <div>
      <h2>จำนวน: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>เพิ่ม</button>
      
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="พิมพ์อะไรสักอย่าง" />
      
      <p>ผลรวม: {total}</p>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
        <SectionTitle emoji="3">
          การกำหนด Dependency (ค่าที่เฝ้าดู)
        </SectionTitle>
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-4">
            <pre className="bg-sky-100 p-4 rounded-lg overflow-x-auto">
              {`const filteredList = useMemo(() => {
  return list.filter(item => item.price > minPrice);
}, [list, minPrice]); // เมื่อ list หรือ minPrice เปลี่ยน → คำนวณใหม่
`}
            </pre>

            <p>- `[]` → ไม่เคยคำนวณใหม่ (คงที่ตลอด)</p>
            <p>- `[a, b]` → คำนวณใหม่เมื่อ `a` หรือ `b` เปลี่ยนค่า</p>
            <p>
              - ไม่ใส่อาร์เรย์เลย → จะคำนวณใหม่ทุกครั้ง (เหมือนไม่ได้ใช้เลย!) ❌
            </p>
          </div>
        </div>
        <SectionTitle emoji="4">
          ตัวอย่างระดับกลาง — การกรองและจัดเรียงข้อมูล
        </SectionTitle>
        <div className="space-y-4">
          
            <CodeBlock
              tone="good"
              filename=""
              highlight={[17, 31]}
              code={`
import { useState, useMemo } from 'react';

const products = [
  { id: 1, name: 'แล็ปท็อป', price: 25000, category: 'อิเล็กทรอนิกส์' },
  { id: 2, name: 'สมุด', price: 120, category: 'เครื่องเขียน' },
  { id: 3, name: 'โทรศัพท์', price: 18000, category: 'อิเล็กทรอนิกส์' },
  { id: 4, name: 'ปากกา', price: 25, category: 'เครื่องเขียน' },
  { id: 5, name: 'หูฟัง', price: 3500, category: 'อิเล็กทรอนิกส์' },
];

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [darkMode, setDarkMode] = useState(false);

  // ✅ คำนวณใหม่เฉพาะเมื่อ searchTerm หรือ sortBy เปลี่ยน
  const filteredProducts = useMemo(() => {
    console.log('🔄 กำลังกรองและจัดเรียงสินค้า...');

    let result = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result = [...result].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

    return result;
  }, [searchTerm, sortBy]);

  return (
    <div style={{ background: darkMode ? '#1a1a1a' : 'white', color: darkMode ? 'white' : 'black', padding: '20px' }}>
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="ค้นหาสินค้า..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', padding: '6px' }}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ marginRight: '10px', padding: '6px' }}>
          <option value="name">เรียงตามชื่อ</option>
          <option value="price">เรียงตามราคา</option>
        </select>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ สว่าง' : '🌙 มืด'}
        </button>
      </div>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id} style={{ padding: '4px 0' }}>
            {product.name} — ฿{product.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
`}
            />
          
          <Callout
            tone="info"
            title="สังเกต: กดเปลี่ยนโหมดสว่าง/มืด แล้วไม่มีข้อความ log ขึ้นมา"
          >
            ข้อความ <Hl>กำลังกรองและจัดเรียงสินค้า...</Hl> ไม่ปรากฏ เพราะ{" "}
            <Hl>darkMode</Hl> ไม่ได้อยู่ใน dependency list
          </Callout>
        </div>
        <SectionTitle emoji="5">
          ระดับมืออาชีพ — การใช้ร่วมกับ Object/Array + ข้อควรระวัง
        </SectionTitle>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">⚠️ ข้อควรระวัง: การเปรียบเทียบค่าใน JavaScript</h3>
            <p><strong>ค่าพื้นฐาน</strong> (number, string, boolean) → เปรียบเทียบด้วยค่าได้เลย</p>
            <p><strong>Object / Array</strong> → เปรียบเทียบด้วย <strong>ที่อยู่ในหน่วยความจำ</strong> ไม่ใช่ค่าภายใน</p>
          </div>
          <CodeBlock
            code={`
import { useState, useMemo, useEffect } from 'react';

export default function ReferenceExample() {
  const [count, setCount] = useState(0);

  // ❌ ไม่ดี: ใหม่ทุกครั้งที่เรนเดอร์
  const userBad = { name: 'สมชาย', age: 30 };

  // ✅ ดี: คงที่ จนกว่าจะมี dependency เปลี่ยน
  const userGood = useMemo(() => ({ name: 'สมชาย', age: 30 }), []);

  // สาธิตการใช้งานจริงกับ object ซับซ้อน
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });

  const queryParams = useMemo(() => ({
    category: filters.category,
    minPrice: filters.minPrice,
    timestamp: Date.now(),
  }), [filters.category, filters.minPrice]);

  useEffect(() => {
    console.log('Query params changed:', queryParams);
  }, [queryParams]);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <p>User (bad): {userBad.name}</p>
      <p>User (good): {userGood.name}</p>
      <p>Query params: {JSON.stringify(queryParams)}</p>
    </div>
  );
}
            `}
          />
          
        </div>
       <SectionTitle emoji="6">
          การใช้งานขั้นสูง — เมื่อไหร่ควร / ไม่ควร ใช้
        </SectionTitle>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <Callout tone="success" title="ควรใช้เมื่อ">
         
          <ul>
            <li>มีการคำนวณที่ใช้เวลานาน / ใช้ทรัพยากรมาก</li>
            <li>ต้องการป้องกันการสร้าง object/array/function ซ้ำซ้อน</li>
            <li>ค่าจะถูกนำไปใช้ใน dependency ของ `useEffect`, `useMemo` อื่น หรือส่งให้ `React.memo` component</li>
            <li>ข้อมูลมาจากการประมวลผลรายการข้อมูลขนาดใหญ่</li>
          </ul>
        </Callout>
        <Callout tone="danger" title="ระวัง!">
          <p>การคำนวณนั้นเร็วมากอยู่แล้ว (เลขคณิตธรรมดา, การเข้าถึงค่าในอ็อบเจกต์)</p>
          <p>ไม่ได้ส่งผลต่อประสิทธิภาพอย่างมีนัยสำคัญ</p>
          <p>ใช้เพียงแค่ครั้งเดียวและไม่ซับซ้อน</p>
        </Callout>
        <Callout tone="gold" title="กฎทอง">
          <p>📌 <strong>กฎทอง:</strong> อย่า optimize ก่อนที่จะพบปัญหา! วัดประสิทธิภาพก่อนเสมอ</p>
        </Callout>
       </div>
        <SectionTitle emoji="7">
          เปรียบเทียบ: `useMemo` vs `useCallback`
        </SectionTitle>
        <DataTable
          headers={[
            "คืนค่ากลับ",
            "useMemo",
            "useCallback",
          ]}
          rows={[
            ["ผลลัพธ์จากการเรียกฟังก์ชัน", "useMemo(() => ค่า, [deps])", "ฟังก์ชันเอง"],
            ["รูปแบบ", "useMemo(() => ค่า, [deps])", "useCallback(() => {}, [deps])"],
            ["ใช้สำหรับ", "คำนวณและเก็บค่าตัวแปร", "เก็บฟังก์ชันเพื่อส่งให้คอมโพเนนต์ลูก"],
          ]}
             
        />
        

      

      </section>
    </div>
  );
}

export default UseMemo;
