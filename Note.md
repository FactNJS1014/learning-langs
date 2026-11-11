## 🟢 1. รู้จัก `useMemo` คืออะไร?

`useMemo` คือ **Hook ใน React** ที่ใช้สำหรับ **"เก็บค่าผลลัพธ์ของการคำนวณไว้ เพื่อไม่ต้องคำนวณใหม่ทุกครั้งที่คอมโพเนนต์เรนเดอร์"**

> 
> **หลักการง่ายๆ:** คำนวณเมื่อจำเป็นเท่านั้น ไม่ใช่ทุกครั้งที่หน้าจออัปเดต

### ทำไมต้องใช้?

- ✅ เพิ่มประสิทธิภาพ → ลดการทำงานหนักซ้ำซ้อน
- ✅ ควบคุมเมื่อจะให้ค่าถูกคำนวณใหม่
- ❌ ไม่จำเป็นต้องใช้ทุกที่ — ใช้เมื่อการคำนวณนั้น **ใช้ทรัพยากรมาก** เท่านั้น

---

## 🟡 2. พื้นฐาน: การใช้งานเบื้องต้น

### โครงสร้าง

```
const ค่าที่เก็บไว้ = useMemo(() => {
  // คำนวณอะไรสักอย่าง
  return ผลลัพธ์;
}, [ค่าที่ต้องเฝ้าดู]);
```

- **อาร์กิวเมนต์ที่ 1:** ฟังก์ชันที่คืนค่าที่ต้องการเก็บไว้
- **อาร์กิวเมนต์ที่ 2:** อาร์เรย์ของค่าที่เมื่อเปลี่ยน → จะให้คำนวณใหม่

### ตัวอย่างพื้นฐาน — ไม่ใช้ useMemo

```
import { useState } from 'react';

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
}
```

### ✅ ปรับปรุงด้วย `useMemo`

```
import { useState, useMemo } from 'react';

export default function BasicExampleWithMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const total = useMemo(() => {
    console.log('กำลังคำนวณ...');
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return sum;
  }, []); // [] = คำนวณแค่ครั้งเดียวตอนโหลดคอมโพเนนต์

  return (
    <div>
      <h2>จำนวน: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>เพิ่ม</button>
      
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="พิมพ์อะไรสักอย่าง" />
      
      <p>ผลรวม: {total}</p>
    </div>
  );
}
```

> 
> 💡 **ผลลัพธ์:** คำนวณเพียงครั้งเดียว! พิมพ์ในช่องป้อนข้อมูลหรือกดปุ่ม — ไม่มีการทำงานของลูปซ้ำอีก

---

## 🟠 3. การกำหนด Dependency (ค่าที่เฝ้าดู)

```
const filteredList = useMemo(() => {
  return list.filter(item => item.price > minPrice);
}, [list, minPrice]); // เมื่อ list หรือ minPrice เปลี่ยน → คำนวณใหม่
```

- `[]` → ไม่เคยคำนวณใหม่ (คงที่ตลอด)
- `[a, b]` → คำนวณใหม่เมื่อ `a` หรือ `b` เปลี่ยนค่า
- ไม่ใส่อาร์เรย์เลย → จะคำนวณใหม่ทุกครั้ง (เหมือนไม่ได้ใช้เลย!) ❌

---

## 🟤 4. ตัวอย่างระดับกลาง — การกรองและจัดเรียงข้อมูล

```
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
```

> 
> 💡 **สังเกต:** เมื่อกดเปลี่ยนโหมดสว่าง/มืด — **ไม่มี** ข้อความ `กำลังกรองและจัดเรียงสินค้า...` ปรากฏ เพราะ `darkMode` ไม่ได้อยู่ใน dependency list!

---

## 🔵 5. ระดับมืออาชีพ — การใช้ร่วมกับ Object/Array + ข้อควรระวัง

### ⚠️ ข้อควรระวัง: การเปรียบเทียบค่าใน JavaScript

- **ค่าพื้นฐาน** (number, string, boolean) → เปรียบเทียบด้วยค่าได้เลย
- **Object / Array** → เปรียบเทียบด้วย **ที่อยู่ในหน่วยความจำ** ไม่ใช่ค่าภายใน

```
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
    console.log('📡 ส่งคำขอด้วยพารามิเตอร์:', queryParams);
  }, [queryParams]); // ✅ จะทำงานเฉพาะเมื่อค่าจริงๆ เปลี่ยน

  return (
    <div>
      <h3>จำนวน: {count}</h3>
      <button onClick={() => setCount(c => c + 1)}>อัปเดตคอมโพเนนต์</button>
      
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>
      
      <button onClick={() => setFilters({ category: 'electronics', minPrice: 1000 })}>
        เปลี่ยนเงื่อนไข
      </button>
    </div>
  );
}
```

---

## 🟣 6. การใช้งานขั้นสูง — เมื่อไหร่ควร / ไม่ควร ใช้

### ✅ ควรใช้เมื่อ

- มีการคำนวณที่ใช้เวลานาน / ใช้ทรัพยากรมาก
- ต้องการป้องกันการสร้าง object/array/function ซ้ำซ้อน
- ค่าจะถูกนำไปใช้ใน dependency ของ `useEffect`, `useMemo` อื่น หรือส่งให้ `React.memo` component
- ข้อมูลมาจากการประมวลผลรายการข้อมูลขนาดใหญ่

### ❌ ไม่ควรใช้เมื่อ

- การคำนวณนั้นเร็วมากอยู่แล้ว (เลขคณิตธรรมดา, การเข้าถึงค่าในอ็อบเจกต์)
- ไม่ได้ส่งผลต่อประสิทธิภาพอย่างมีนัยสำคัญ
- ใช้เพียงแค่ครั้งเดียวและไม่ซับซ้อน

> 
> 📌 **กฎทอง:** อย่า optimize ก่อนที่จะพบปัญหา! วัดประสิทธิภาพก่อนเสมอ

---

## 🔴 7. เปรียบเทียบ: `useMemo` vs `useCallback`

ตาราง

|  | `useMemo` | `useCallback` |
| --- | --- | --- |
| **คืนค่ากลับ** | ผลลัพธ์จากการเรียกฟังก์ชัน | ฟังก์ชันเอง |
| **รูปแบบ** | `useMemo(() => ค่า, [deps])` | `useCallback(() => {}, [deps])` |
| **ใช้สำหรับ** | คำนวณและเก็บค่าตัวแปร | เก็บฟังก์ชันเพื่อส่งให้คอมโพเนนต์ลูก |

```
// useMemo → เก็บ "ค่า"
const total = useMemo(() => a + b, [a, b]);

// useCallback → เก็บ "ฟังก์ชัน"
const handleSubmit = useCallback(() => {
  console.log('ส่งข้อมูล');
}, []);
```