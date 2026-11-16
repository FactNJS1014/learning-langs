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

function ReactTypeScript01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          React · TypeScript
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">ใช้ TypeScript กับ React</h1>
        <p className="mt-1 text-lg text-brand-100">จากพื้นฐานถึงมืออาชีพ พร้อมโค้ดที่ compile ผ่านจริง</p>
        <p className="mt-4 max-w-2xl text-white/90">
          Props, State, Event, Hooks, Context, Generic component และ Utility types
          พร้อมตัวอย่างข้อผิดพลาดที่ TypeScript จับได้ พร้อมข้อความ error จริงจาก tsc
        </p>
      </header>

      {/* ===== ส่วนที่ 1: ภาพรวม ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ทำไมต้องใช้ TypeScript กับ React?</SectionTitle>

        <ExampleList>
          <Example en="จับบั๊กตั้งแต่ตอนเขียน — พิมพ์ชื่อ prop ผิดหรือส่งชนิดข้อมูลผิด editor ขีดแดงทันที" />
          <Example en="editor เติมโค้ดให้แม่นขึ้น (autocomplete) เพราะรู้ว่า object มี field อะไรบ้าง" />
          <Example en="แก้โค้ดใหญ่ได้มั่นใจ — เปลี่ยนชื่อ field แล้ว TS บอกทุกจุดที่ต้องแก้" />
          <Example en="props ของคอมโพเนนต์กลายเป็นเอกสารในตัว ไม่ต้องเปิดไฟล์อื่นไปดูว่าต้องส่งอะไร" />
        </ExampleList>

        <DataTable
          headers={["เรื่อง", "รายละเอียด"]}
          rows={[
            ["สร้างโปรเจกต์", [<Chip>{"npm create vite@latest my-app -- --template react-ts"}</Chip>]],
            ["นามสกุลไฟล์", ".tsx = มี JSX, .ts = โค้ดล้วน (ไม่มี JSX)"],
            ["ตั้งค่า", [<Chip>{"tsconfig.json"}</Chip>, " — เปิด strict: true เสมอ"]],
            ["ตรวจชนิด", [<Chip>{"tsc --noEmit"}</Chip>, " หรือ ", <Chip>{"npm run build"}</Chip>, " (ในโปรเจกต์ของคุณ build รัน tsc ก่อน)"]],
          ]}
        />

        <Callout tone="info" title="TypeScript ตรวจตอนเขียน/build ไม่ใช่ตอนรัน">
          ชนิดข้อมูลถูก “ลบทิ้ง” ตอน build — ในเบราว์เซอร์รันเป็น JavaScript ปกติ
          ดังนั้นข้อมูลที่มาจากภายนอก (API, input) ต้องตรวจตอนรันเองอีกครั้ง (ดูส่วนที่ 6)
        </Callout>
      </section>

      {/* ===== ส่วนที่ 2: ชนิดข้อมูลพื้นฐาน ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: ชนิดข้อมูล union และ object</SectionTitle>

          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="basics.ts"
            highlight={[8, 16]}
            code={`
// ชนิดข้อมูลพื้นฐาน
export const name: string = "สมชาย";
export const age: number = 30;
export const active: boolean = true;
export const tags: string[] = ["react", "ts"];

// union: เลือกได้เฉพาะค่าที่กำหนด
export type Status = "idle" | "loading" | "error";
export let status: Status = "idle";
status = "loading"; // ✅

// object: ใช้ interface หรือ type ก็ได้
export interface User {
  id: number;
  name: string;
  email?: string; // ? = ไม่บังคับใส่
}
export type Point = { x: number; y: number };
`}
          />

        <DataTable
          headers={["รูปแบบ", "ความหมาย"]}
          rows={[
            [<Chip>{"name: string"}</Chip>, "ระบุชนิดของตัวแปร"],
            [<Chip>{"string[]"}</Chip>, "array ของ string"],
            [<Chip>{"\"idle\" | \"loading\""}</Chip>, "union ของค่าคงที่ (literal) เลือกได้เฉพาะที่กำหนด — ปลอดภัยกว่า string ทั่วไป"],
            [<Chip>{"email?: string"}</Chip>, "field ไม่บังคับ ค่าเป็น string หรือ undefined"],
            [<Chip>{"interface / type"}</Chip>, "นิยามรูปร่างของ object"],
          ]}
        />

        <DataTable
          headers={["", "interface", "type"]}
          rows={[
            ["นิยาม object", "ได้", "ได้"],
            ["union / ชนิดผสม", "ไม่ได้", "ได้ (type A = B | C)"],
            ["ขยายต่อ", "extends", "ใช้ & (intersection)"],
            ["แนะนำ", "รูปร่าง object / props", "union, utility types, ชนิดที่ซับซ้อน"],
          ]}
        />

        <Callout tone="success" title="ปล่อยให้ TS อนุมานเองเมื่อมองออกอยู่แล้ว">
          <Hl>const age = 30</Hl> ไม่ต้องเขียน <Hl>: number</Hl> — เขียนชนิดเฉพาะจุดที่ TS เดาไม่ได้
          เช่น พารามิเตอร์ของฟังก์ชัน, array ว่าง, ค่าที่เป็น null
        </Callout>
      </section>

      {/* ===== ส่วนที่ 3: Props ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="3">Props: กำหนดสัญญาของคอมโพเนนต์</SectionTitle>

        <div className="space-y-3">
          <SubTitle>interface Props + prop ที่ไม่บังคับ + children</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="Button.tsx"
            highlight={[3, 5]}
            code={`
import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "ghost"; // ไม่ใส่ก็ได้
  onClick: () => void;
}

export function Button({ label, variant = "primary", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={variant === "primary" ? "bg-indigo-600 text-white" : "text-indigo-600"}
    >
      {label}
    </button>
  );
}

// children: ใช้ ReactNode รับได้ทั้งข้อความ element และ array
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
`}
          />
          <DataTable
            headers={["จุดสำคัญ", "ความหมาย"]}
            rows={[
              [<Chip>{"variant?: ..."}</Chip>, "ไม่บังคับ — ถ้าไม่ส่งจะเป็น undefined จึงตั้งค่าเริ่มต้นตอน destructure"],
              [<Chip>{"onClick: () => void"}</Chip>, "prop ที่เป็นฟังก์ชัน: บอกทั้งพารามิเตอร์และสิ่งที่คืน"],
              [<Chip>{"children: ReactNode"}</Chip>, "ชนิดที่รับได้ทั้งข้อความ, element, array, null"],
              [<Chip>{"import type"}</Chip>, "นำเข้าเฉพาะชนิด ไม่ถูกรวมใน JavaScript ที่ build ออกมา"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ขยายจาก element ของ HTML: ComponentProps</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="IconButton.tsx"
            highlight={[4, 8]}
            code={`
import type { ComponentProps, ReactNode } from "react";

// รับ prop ของ <button> ทุกตัว (type, disabled, onClick ...) แล้วเพิ่มของเราเอง
type IconButtonProps = ComponentProps<"button"> & { icon: ReactNode };

export function IconButton({ icon, children, ...rest }: IconButtonProps) {
  return (
    <button {...rest} className="inline-flex items-center gap-2">
      {icon}
      {children}
    </button>
  );
}
`}
          />
          <Callout tone="info" title="ไม่ต้องประกาศ prop ซ้ำทีละตัว">
            <Hl>ComponentProps&lt;"button"&gt;</Hl> ให้ prop ทุกตัวของ <Hl>&lt;button&gt;</Hl> (disabled, type,
            onClick ฯลฯ) แล้วใช้ <Hl>...rest</Hl> ส่งต่อให้ element จริง
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 4: State + Event ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">State, Ref และ Event</SectionTitle>

          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="TodoApp.tsx"
            highlight={[10, 12, 13, 15, 17]}
            code={`
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]); // array ว่างต้องบอกชนิด
  const [text, setText] = useState(""); // อนุมานเป็น string ให้เอง
  const [selected, setSelected] = useState<Todo | null>(null); // เป็น Todo หรือ null
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }]);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} value={text} onChange={handleChange} />
      <ul>
        {todos.map((t) => (
          <li key={t.id} onClick={() => setSelected(t)}>
            {t.text}
          </li>
        ))}
      </ul>
      {selected && <p>เลือก: {selected.text}</p>}
    </form>
  );
}
`}
          />

        <DataTable
          headers={["โค้ด", "ความหมาย"]}
          rows={[
            [<Chip>{"useState<Todo[]>([])"}</Chip>, "ใส่ <ชนิด> เมื่อค่าเริ่มต้นบอกชนิดไม่ได้ (array ว่าง)"],
            [<Chip>{"useState<Todo | null>(null)"}</Chip>, "ค่าที่อาจยังไม่มี — ใช้ union กับ null"],
            [<Chip>{"useRef<HTMLInputElement>(null)"}</Chip>, "ref ที่ชี้ไปที่ element — .current เป็น null ได้จึงต้องใช้ ?."],
          ]}
        />

        <DataTable
          headers={["เหตุการณ์", "ชนิดของ event"]}
          rows={[
            ["onChange ของ input", [<Chip>{"ChangeEvent<HTMLInputElement>"}</Chip>]],
            ["onSubmit ของ form", [<Chip>{"FormEvent<HTMLFormElement>"}</Chip>]],
            ["onClick ของปุ่ม", [<Chip>{"MouseEvent<HTMLButtonElement>"}</Chip>]],
            ["onKeyDown", [<Chip>{"KeyboardEvent<HTMLInputElement>"}</Chip>]],
          ]}
        />

        <Callout tone="success" title="เขียน handler แบบ inline TS จะอนุมานชนิด event ให้เอง">
          <Hl>{"onChange={(e) => setText(e.target.value)}"}</Hl> — ไม่ต้องใส่ชนิดให้ e
          ต้องเขียนเองเฉพาะเมื่อแยกฟังก์ชันออกมาไว้ข้างนอก
        </Callout>
      </section>

      {/* ===== ส่วนที่ 5: Hooks ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="5">Hooks ขั้นกลาง: useReducer, custom hook แบบ generic, Context</SectionTitle>

        <div className="space-y-3">
          <SubTitle>useReducer กับ discriminated union</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="Counter.tsx"
            highlight={[5, 8, 17]}
            code={`
import { useReducer } from "react";

type State = { count: number };

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set"; value: number }; // action บางแบบมีข้อมูลแนบ

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "set":
      return { count: action.value }; // TS รู้ว่ามี value เฉพาะในเคสนี้
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return <button onClick={() => dispatch({ type: "set", value: 10 })}>{state.count}</button>;
}
`}
          />
          <Callout tone="info" title="ใช้ฟิลด์ type เป็นตัวแยกชนิด">
            ภายใน <Hl>case "set"</Hl> TS รู้ว่า action มี <Hl>value</Hl> — ส่วน case อื่นไม่มี
            ถ้าเข้าถึงผิดจะ error
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>Custom hook แบบ generic: useLocalStorage&lt;T&gt;</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="useLocalStorage.tsx"
            highlight={[3, 7, 17, 21]}
            code={`
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const; // tuple ไม่ใช่ array ธรรมดา
}

export function Demo() {
  const [theme, setTheme] = useLocalStorage("theme", "light"); // T = string (อนุมานเอง)
  const [size, setSize] = useLocalStorage<number>("size", 16); // ระบุ T เอง
  return (
    <button
      onClick={() => {
        setTheme("dark");
        setSize(size + 1);
      }}
    >
      {theme}
    </button>
  );
}
`}
          />
          <DataTable
            headers={["โค้ด", "ความหมาย"]}
            rows={[
              [<Chip>{"<T>"}</Chip>, "ตัวแปรชนิด: ผู้เรียกบอกเองหรือให้ TS อนุมานจากค่าเริ่มต้น"],
              [<Chip>{"as const"}</Chip>, "คืนเป็น tuple [T, setter] ไม่ใช่ array ผสม ทำให้ destructure ได้ชนิดถูก"],
              [<Chip>{"JSON.parse(raw) as T"}</Chip>, "การ cast: TS เชื่อตามที่บอก ไม่ได้ตรวจข้อมูลจริง (ข้อมูลใน localStorage อาจเป็นอะไรก็ได้)"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>Context ที่ไม่ต้องเช็ก null ทุกที่ใช้</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="AuthContext.tsx"
            highlight={[9, 22, 23]}
            code={`
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextValue {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ user, login: setUser, logout: () => setUser(null) }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth ต้องใช้ภายใน <AuthProvider>");
  return ctx; // type = AuthContextValue (ไม่มี null แล้ว)
}
`}
          />
          <Callout tone="success" title="ย้ายการเช็ก null ไปไว้ใน useAuth ที่เดียว">
            ผู้ใช้ <Hl>useAuth()</Hl> ได้ชนิด AuthContextValue ตรง ๆ และถ้าลืมครอบด้วย Provider
            จะได้ error ที่อ่านรู้เรื่องแทน “cannot read properties of null”
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 6: มืออาชีพ ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="6">ระดับมืออาชีพ: Generic component, Union ครบทุกกรณี, Utility types</SectionTitle>

        <div className="space-y-3">
          <SubTitle>สถานะการโหลดข้อมูลแบบ discriminated union + เช็กครบทุก case</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="PostView.tsx"
            highlight={[1, 12, 23, 27]}
            code={`
type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export interface Post {
  id: number;
  title: string;
}

function assertNever(x: never): never {
  throw new Error("ไม่ควรมาถึงตรงนี้: " + JSON.stringify(x));
}

export function PostView({ state }: { state: AsyncState<Post[]> }) {
  switch (state.status) {
    case "idle":
      return <p>ยังไม่เริ่ม</p>;
    case "loading":
      return <p>กำลังโหลด…</p>;
    case "success":
      return <ul>{state.data.map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
    case "error":
      return <p>{state.error}</p>;
    default:
      return assertNever(state); // ลืม case ไหน → compile ไม่ผ่าน
  }
}
`}
          />
          <ExampleList>
            <Example en="แต่ละสถานะมีข้อมูลเฉพาะของตัวเอง (data มีเฉพาะตอน success, error มีเฉพาะตอน error)" />
            <Example en="เป็นไปไม่ได้ที่จะมี loading และ error พร้อมกันโดยไม่ตั้งใจ" />
            <Example en="assertNever(state) ทำให้เพิ่มสถานะใหม่แล้วลืมจัดการ จะ compile ไม่ผ่าน" />
          </ExampleList>
        </div>

        <div className="space-y-3">
          <SubTitle>Generic component: คอมโพเนนต์ที่ใช้ได้กับข้อมูลทุกชนิด</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="List.tsx"
            highlight={[3, 23]}
            code={`
import type { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  getKey: (item: T) => string | number;
  renderItem: (item: T) => ReactNode;
}

export function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((it) => (
        <li key={getKey(it)}>{renderItem(it)}</li>
      ))}
    </ul>
  );
}

export function Demo() {
  return (
    <List
      items={[{ id: 1, name: "A" }]}
      getKey={(u) => u.id} // u ถูกอนุมานเป็น { id: number; name: string }
      renderItem={(u) => u.name}
    />
  );
}
`}
          />
          <Callout tone="info" title="TS อนุมาน T จาก items ให้เอง">
            ใน <Hl>getKey</Hl> และ <Hl>renderItem</Hl> ตัวแปร u จึงมี id และ name พร้อม autocomplete
            โดยไม่ต้องเขียนชนิดเอง
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>Utility types, as const และ satisfies</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="utility.ts"
            highlight={[8, 9, 10, 11, 17, 23]}
            code={`
export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export type UserForm = Omit<User, "id">; // ไม่เอา id
export type UserPatch = Partial<UserForm>; // ทุกฟิลด์ไม่บังคับ
export type UserPreview = Pick<User, "id" | "name">; // เลือกเฉพาะบางฟิลด์
export type RoleLabels = Record<User["role"], string>; // key ต้องครบ

export const roleLabels: RoleLabels = { admin: "ผู้ดูแล", user: "ผู้ใช้" };

// as const: ได้ชนิดแบบ literal แทน string ทั่วไป
export const ROLES = ["admin", "editor", "viewer"] as const;
export type Role = (typeof ROLES)[number]; // "admin" | "editor" | "viewer"

// satisfies: ตรวจรูปร่าง แต่ยังเก็บชนิดเฉพาะเจาะจงไว้
export const routes = {
  home: "/",
  courses: "/courses",
} satisfies Record<string, string>;
`}
          />
          <DataTable
            headers={["เครื่องมือ", "ใช้ทำอะไร"]}
            rows={[
              [<Chip>{"Omit<T, 'id'>"}</Chip>, "เอาทุกฟิลด์ ยกเว้นที่ระบุ — เหมาะกับข้อมูลในฟอร์มก่อนมี id"],
              [<Chip>{"Partial<T>"}</Chip>, "ทุกฟิลด์ไม่บังคับ — เหมาะกับการอัปเดตบางส่วน (PATCH)"],
              [<Chip>{"Pick<T, 'id' | 'name'>"}</Chip>, "เลือกเฉพาะบางฟิลด์"],
              [<Chip>{"Record<K, V>"}</Chip>, "object ที่ key เป็น K ครบทุกตัว ค่าเป็น V"],
              [<Chip>{"as const"}</Chip>, "ทำให้ array/object เป็นค่าคงที่แบบ literal แล้วสร้าง union จากมันได้"],
              [<Chip>{"satisfies"}</Chip>, "ตรวจรูปร่างโดยไม่ทิ้งชนิดเฉพาะเจาะจง (ต้องใช้ TypeScript 4.9 ขึ้นไป)"],
            ]}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ข้อมูลจาก API: ใช้ unknown + type guard แทนการเชื่อ</SubTitle>
          <CodeBlock
            tone="good"
            badge="compile ผ่าน"
            filename="api.ts"
            highlight={[9, 13, 19]}
            code={`
export interface Post {
  id: number;
  title: string;
}

export async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return (await res.json()) as T; // ⚠️ TS เชื่อเราอย่างเดียว ไม่ได้ตรวจข้อมูลจริง
}

// type guard: ตรวจข้อมูลจริงตอนรัน แล้วบอก TS ว่าชนิดคืออะไร
export function isPost(x: unknown): x is Post {
  return typeof x === "object" && x !== null && "id" in x && "title" in x;
}

export async function loadPost(id: number): Promise<Post> {
  const data: unknown = await getJson<unknown>("/api/posts/" + id);
  if (!isPost(data)) throw new Error("รูปแบบข้อมูลไม่ถูกต้อง");
  return data; // ตรงนี้ data เป็น Post แล้ว
}
`}
          />
          <Callout tone="warning" title="as T ไม่ได้ตรวจอะไรเลย">
            ถ้าเซิร์ฟเวอร์ส่งรูปแบบอื่นมา โปรแกรมจะพังตอนรันทั้งที่ TS ไม่เตือน ข้อมูลภายนอกควรตรวจด้วย type guard
            หรือไลบรารีตรวจ schema (เช่น Zod ซึ่งผมไม่ได้ทดสอบในบทนี้)
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 7: ข้อผิดพลาด ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="7">ข้อผิดพลาดที่ TypeScript จับได้ (ข้อความ error จริงจาก tsc)</SectionTitle>

        <Callout tone="info" title="ทุกข้อด้านล่างผมรัน tsc จริง">
          ข้อความ error คัดจากผลของ <Hl>tsc --noEmit</Hl> (TypeScript 5.6, strict) ที่บรรทัดที่ไฮไลต์
          — เวอร์ชันอื่นอาจเรียบเรียงข้อความต่างไปเล็กน้อย
        </Callout>

        <div className="space-y-3">
          <SubTitle>Status ไม่มีค่า "done"</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[3]}
            code={`
type Status = "idle" | "loading" | "error";
export let status: Status = "idle";
status = "done";
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS2322
Type '"done"' is not assignable to type 'Status'.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ลืมส่ง prop ที่บังคับ</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[9]}
            code={`
interface ButtonProps {
  label: string;
  onClick: () => void;
}
function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export const a = <Button label="บันทึก" />;
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS2741
Property 'onClick' is missing in type '{ label: string; }' but required in type 'ButtonProps'.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ส่งชนิดผิด</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[9]}
            code={`
interface ButtonProps {
  label: string;
  onClick: () => void;
}
function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export const b = <Button label={123} onClick={() => {}} />;
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS2322
Type 'number' is not assignable to type 'string'.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ลืมเช็ก null ของ ref</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[6]}
            code={`
import { useRef } from "react";

export function Box() {
  const inputRef = useRef<HTMLInputElement>(null);
  const go = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={go}>โฟกัส</button>
    </>
  );
}
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS18047
'inputRef.current' is possibly 'null'.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>พิมพ์ชื่อ property ผิด</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[7]}
            code={`
interface User {
  id: number;
  name: string;
}

export function show(user: User) {
  return user.nmae;
}
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS2339
Property 'nmae' does not exist on type 'User'.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>useState(null) แล้วเก็บ object ภายหลัง</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[8, 9]}
            code={`
import { useState } from "react";

interface User {
  name: string;
}

export function Profile({ loaded }: { loaded: User }) {
  const [user, setUser] = useState(null); // ชนิดถูกอนุมานเป็น null
  setUser(loaded);
  return <p>{String(user)}</p>;
}
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS2345
Argument of type 'User' is not assignable to parameter of type 'SetStateAction<null>'.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ลืมจัดการ case ใน switch</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[17]}
            code={`
type S =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: string };

function assertNever(x: never): never {
  throw new Error(String(x));
}

export function View({ state }: { state: S }) {
  switch (state.status) {
    case "loading":
      return <p>กำลังโหลด…</p>;
    case "error":
      return <p>{state.error}</p>;
    default:
      return assertNever(state); // ลืม case "success"
  }
}
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS2345
Argument of type '{ status: "success"; data: string; }' is not assignable to parameter of type 'never'.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>import แล้วไม่ได้ใช้ (ที่ทำให้ Netlify build ไม่ผ่าน)</SubTitle>
          <CodeBlock
            tone="bad"
            badge="โค้ดที่ผิด"
            highlight={[1]}
            code={`
import { useState, useEffect } from "react";

export function C() {
  const [n] = useState(0);
  return <p>{n}</p>;
}
`}
          />
          <CodeBlock
            badge="tsc"
            filename="ข้อความจาก tsc"
            code={`
// error TS6133
'useEffect' is declared but its value is never read.
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>any vs unknown</SubTitle>
          <DataTable
            headers={["", "any", "unknown"]}
            rows={[
              ["ความหมาย", "ปิดการตรวจชนิดทั้งหมด", "ไม่รู้ชนิด ต้องตรวจก่อนใช้"],
              ["เรียก .xxx ได้เลย?", "ได้ (เสี่ยงพังตอนรัน)", "ไม่ได้ จนกว่าจะตรวจ/narrow"],
              ["ควรใช้", "เลี่ยง", "ข้อมูลภายนอกที่ยังไม่ตรวจ"],
            ]}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>นิสัยที่ควรเลี่ยง</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="ใส่ any เพื่อให้ error หายไป" />
                <Example ok={false} en="ใช้ as ยัดชนิดทับ แทนการตรวจจริง" />
                <Example ok={false} en="ใช้ ! (non-null) พร่ำเพรื่อ แล้วพังตอนรัน" />
                <Example ok={false} en="useState(null) โดยไม่ใส่ชนิด" />
                <Example ok={false} en="import แล้วไม่ใช้ (build บน Netlify ไม่ผ่านเมื่อเปิด noUnusedLocals)" />
              </ExampleList>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>เช็กลิสต์ก่อนส่งงาน</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example en="เปิด strict: true และรัน npm run build ก่อน push ทุกครั้ง" />
                <Example en="props ทุกตัวมี interface/type ของตัวเอง" />
                <Example en="state ที่เริ่มเป็น null หรือ array ว่างใส่ชนิดไว้แล้ว" />
                <Example en="ใช้ union ของค่าคงที่แทน string ทั่วไปเมื่อมีตัวเลือกจำกัด" />
                <Example en="ข้อมูลจาก API/localStorage ผ่านการตรวจก่อนใช้" />
              </ExampleList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReactTypeScript01;