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

function ImageResize01() {
  return (
    <div className="mx-auto max-w-full space-y-14 leading-relaxed">
      {/* ===== หัวหน้า ===== */}
      <header className="rounded-2xl bg-linear-to-br from-brand-600 to-indigo-500 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-100">
          React · Image
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">ย่อขนาดรูปภาพก่อนเข้า Database</h1>
        <p className="mt-1 text-lg text-brand-100">ย่อฝั่งเบราว์เซอร์ด้วย Canvas แล้วค่อยอัปโหลด</p>
        <p className="mt-4 max-w-2xl text-white/90">
          เลือกรูป → ตรวจไฟล์ → ย่อด้วย canvas → ได้ Blob เล็ก ๆ → ส่งขึ้นเซิร์ฟเวอร์
          พร้อมโค้ดที่ทดสอบแล้ว จัดการรูปหมุน รูปโปร่งใส และจำกัดขนาดไฟล์
        </p>
      </header>

      {/* ===== ส่วนที่ 1: ภาพรวม ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="1">ทำไมต้องย่อรูปก่อนเก็บ?</SectionTitle>

        <ExampleList>
          <Example en="รูปจากมือถือมักใหญ่หลาย MB — อัปโหลดช้า กินเน็ตผู้ใช้" />
          <Example en="เปลืองพื้นที่เก็บและแบนด์วิธเซิร์ฟเวอร์ตอนแสดงผลซ้ำ ๆ" />
          <Example en="หน้าเว็บโหลดช้า ทั้งที่ผู้ใช้เห็นรูปแค่ไม่กี่ร้อยพิกเซล" />
        </ExampleList>

        <div className="space-y-3">
          <SubTitle>ลำดับการทำงาน</SubTitle>
          <div className="grid gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <p className="text-xs font-semibold text-brand-600">1</p>
              <p className="mt-1 text-sm text-slate-800">เลือกไฟล์ + ตรวจ</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <p className="text-xs font-semibold text-brand-600">2</p>
              <p className="mt-1 text-sm text-slate-800">วาดลง canvas ขนาดใหม่</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <p className="text-xs font-semibold text-brand-600">3</p>
              <p className="mt-1 text-sm text-slate-800">ได้ Blob ที่เล็กลง</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <p className="text-xs font-semibold text-brand-600">4</p>
              <p className="mt-1 text-sm text-slate-800">ส่ง FormData ไป API</p>
            </div>
            <div className="rounded-xl border border-[#FFD84D] bg-amber-50 p-3 text-center shadow-sm">
              <p className="text-xs font-semibold text-amber-700">5</p>
              <p className="mt-1 text-sm text-slate-800">เซิร์ฟเวอร์เก็บ + บันทึก URL ลง DB</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <SubTitle>จะเก็บอะไรลงฐานข้อมูล?</SubTitle>
          <DataTable
            headers={["วิธี", "ข้อดี", "ข้อควรระวัง"]}
            rows={[
              [
                "เก็บ URL (ไฟล์อยู่ที่ object storage / โฟลเดอร์)",
                "DB เล็ก เร็ว สำรองง่าย ใช้ CDN ได้ — แนะนำ",
                "ต้องมีที่เก็บไฟล์แยก",
              ],
              [
                "เก็บเป็น binary (BLOB / bytea)",
                "ข้อมูลอยู่ที่เดียว",
                "DB โตเร็ว สำรอง/ย้ายช้า",
              ],
              [
                "เก็บเป็น base64 ในคอลัมน์ text",
                "ง่ายสุด ใช้ได้กับรูปจิ๋ว (เช่น avatar เล็ก ๆ)",
                "ใหญ่ขึ้นราว 33% และ query ช้าลง",
              ],
            ]}
          />
        </div>

        <Callout tone="warning" title="ย่อฝั่งเบราว์เซอร์ = ประหยัด ไม่ใช่ความปลอดภัย">
          ผู้ไม่หวังดีส่งไฟล์ตรงเข้า API โดยข้ามหน้าเว็บได้เสมอ เซิร์ฟเวอร์ต้อง
          <Hl>ตรวจชนิดไฟล์จริง จำกัดขนาด และตั้งชื่อไฟล์เอง</Hl> ซ้ำอีกครั้ง
        </Callout>
      </section>

      {/* ===== ส่วนที่ 2: เลือกไฟล์ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="2">พื้นฐาน: เลือกไฟล์และตรวจก่อนย่อ</SectionTitle>

          <CodeBlock
            filename="handleChange.tsx"
            highlight={[2, 3, 6, 7, 12]}
            code={`
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  e.target.value = ""; // ให้เลือกไฟล์เดิมซ้ำได้
  if (!file) return;

  if (!file.type.startsWith("image/")) return setError("กรุณาเลือกไฟล์รูปภาพ");
  if (file.size > 20 * 1024 * 1024) return setError("ไฟล์ใหญ่เกิน 20MB");

  setFile(file);
};

<input type="file" accept="image/*" onChange={handleChange} />
`}
          />

        <DataTable
          headers={["โค้ด", "ความหมาย"]}
          rows={[
            [<Chip>{"accept=image/*"}</Chip>, "ให้หน้าต่างเลือกไฟล์แสดงเฉพาะรูป (ช่วยผู้ใช้ แต่ไม่ใช่การป้องกัน)"],
            [<Chip>{"e.target.files?.[0]"}</Chip>, "ไฟล์แรกที่เลือก (type เป็น File) อาจเป็น undefined ถ้ายกเลิก"],
            [<Chip>{"file.type"}</Chip>, "MIME type ที่เบราว์เซอร์เดาจากนามสกุล เช่น image/jpeg"],
            [<Chip>{"file.size"}</Chip>, "ขนาดไฟล์เป็น byte (1 MB = 1024 × 1024)"],
            [<Chip>{"e.target.value = ''"}</Chip>, "ล้างค่า input เพื่อให้เลือกไฟล์ชื่อเดิมซ้ำแล้ว onChange ยังทำงาน"],
          ]}
        />

        <div className="space-y-3">
          <SubTitle>ตกแต่งปุ่มเลือกไฟล์ด้วย file: variant</SubTitle>
          <CodeBlock
            highlight={[4, 5, 6, 7, 8]}
            code={`
<input
  type="file"
  accept="image/*"
  className="block w-full text-sm text-slate-600
    file:mr-4 file:rounded-lg file:border-0
    file:bg-indigo-600 file:px-4 file:py-2
    file:text-sm file:font-semibold file:text-white
    hover:file:bg-indigo-700"
/>
`}
          />
          <Callout tone="info" title="file: คือ variant ของ Tailwind สำหรับปุ่มภายใน input">
            ใช้ <Hl>file:bg-indigo-600</Hl> แต่งปุ่ม “Choose file” ได้โดยไม่ต้องซ่อน input แล้วทำปุ่มปลอมเอง
          </Callout>
        </div>
      </section>

      {/* ===== ส่วนที่ 3: หลักการย่อ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="3">หลักการย่อ: คำนวณขนาด → วาดลง canvas → toBlob</SectionTitle>

        <div className="space-y-3">
          <SubTitle>1) คำนวณขนาดใหม่โดยคงสัดส่วน</SubTitle>
          <CodeBlock
            filename="fitSize.ts"
            highlight={[2]}
            code={`
export function fitSize(w: number, h: number, maxW: number, maxH: number) {
  const scale = Math.min(1, maxW / w, maxH / h);
  return { width: Math.round(w * scale), height: Math.round(h * scale) };
}
`}
          />
          <DataTable
            headers={["รูปเดิม", "ด้านยาวสุด", "scale", "ผลลัพธ์"]}
            rows={[
              ["4000×3000", "1280", "min(1, 0.32, 0.43) = 0.32", "1280×960"],
              ["3000×4000 (แนวตั้ง)", "1280", "min(1, 0.43, 0.32) = 0.32", "960×1280"],
              ["300×200 (เล็กอยู่แล้ว)", "1280", "min(1, 4.27, 6.4) = 1", "300×200 (ไม่ขยาย)"],
            ]}
          />
          <Callout tone="info" title="Math.min(1, ...) คือหัวใจ">
            ตัวเลข <Hl>1</Hl> ทำให้ scale ไม่เกิน 100% — รูปที่เล็กกว่าเป้าหมายจะไม่ถูกขยายจนไฟล์บวมและไม่คมขึ้น
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>2) วาดลง canvas แล้วแปลงเป็น Blob</SubTitle>
          <CodeBlock
            highlight={[2, 3, 5, 6]}
            code={`
const canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext("2d")!;
ctx.drawImage(bitmap, 0, 0, width, height);
canvas.toBlob((blob) => { /* blob พร้อมส่ง */ }, "image/jpeg", 0.8);
`}
          />
          <DataTable
            headers={["โค้ด", "ความหมาย"]}
            rows={[
              [<Chip>{"canvas.width / height"}</Chip>, "กำหนดขนาดผลลัพธ์ (หน่วยพิกเซลจริง)"],
              [<Chip>{"drawImage(img, 0, 0, w, h)"}</Chip>, "วาดรูปเดิมลงกรอบใหม่ ระบบจะย่อให้ตามขนาดที่ระบุ"],
              [<Chip>{"toBlob(cb, type, quality)"}</Chip>, "เข้ารหัสเป็นไฟล์ — quality 0–1 ใช้กับ JPEG/WebP (PNG ไม่ใช้)"],
            ]}
          />
        </div>

        <Callout tone="success" title="รูปที่ถ่ายแล้วหมุน (EXIF) ได้ทิศทางถูกต้องเอง">
          เมื่ออ่านด้วย <Hl>createImageBitmap(file)</Hl> เบราว์เซอร์หมุนรูปตาม EXIF ให้ — ผมทดสอบรูป EXIF แบบหมุน
          (เก็บ 4000×3000 แสดงเป็นแนวตั้ง) ได้ผลลัพธ์ 960×1280 ถูกทิศ
        </Callout>
      </section>

      {/* ===== ส่วนที่ 4: resizeImage ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="4">ฟังก์ชัน resizeImage ฉบับสมบูรณ์</SectionTitle>

          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="resizeImage.ts"
            highlight={[19, 34, 44, 47, 51, 56]}
            code={`
export type ResizeOptions = {
  maxWidth: number;
  maxHeight: number;
  quality: number; // 0–1
  type: "image/jpeg" | "image/webp";
  maxBytes?: number; // ถ้าใส่ จะลดคุณภาพจนไฟล์ไม่เกินค่านี้ (ไม่ต่ำกว่า 0.3)
};

export type ResizeResult = {
  blob: Blob;
  width: number;
  height: number;
  srcWidth: number;
  srcHeight: number;
};

// คำนวณขนาดใหม่ โดยคงสัดส่วน และไม่ขยายรูปให้ใหญ่กว่าเดิม
export function fitSize(w: number, h: number, maxW: number, maxH: number) {
  const scale = Math.min(1, maxW / w, maxH / h);
  return { width: Math.round(w * scale), height: Math.round(h * scale) };
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("แปลงรูปไม่สำเร็จ"))),
      type,
      quality,
    );
  });
}

export async function resizeImage(file: File, opt: ResizeOptions): Promise<ResizeResult> {
  const bitmap = await createImageBitmap(file); // อ่านรูป + หมุนตาม EXIF ให้อัตโนมัติ
  const { width, height } = fitSize(bitmap.width, bitmap.height, opt.maxWidth, opt.maxHeight);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("เบราว์เซอร์ไม่รองรับ canvas");

  if (opt.type === "image/jpeg") {
    ctx.fillStyle = "#ffffff"; // JPEG ไม่มีความโปร่งใส → รองพื้นขาว กันพื้นหลังกลายเป็นสีดำ
    ctx.fillRect(0, 0, width, height);
  }
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bitmap, 0, 0, width, height);
  const srcWidth = bitmap.width;
  const srcHeight = bitmap.height;
  bitmap.close(); // คืนหน่วยความจำของรูปต้นฉบับ

  // ถ้ากำหนดขนาดไฟล์สูงสุด: ลดคุณภาพลงทีละขั้นจนไม่เกิน
  let quality = opt.quality;
  let blob = await canvasToBlob(canvas, opt.type, quality);
  while (opt.maxBytes && blob.size > opt.maxBytes && quality > 0.3) {
    quality = Math.round((quality - 0.1) * 10) / 10;
    blob = await canvasToBlob(canvas, opt.type, quality);
  }
  return { blob, width, height, srcWidth, srcHeight };
}
`}
          />

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"createImageBitmap(file)"}</Chip>, "อ่านไฟล์เป็นรูปแบบที่วาดลง canvas ได้ทันที และหมุนตาม EXIF ให้"],
            [<Chip>{"fillStyle = '#ffffff'"}</Chip>, "JPEG ไม่มีความโปร่งใส จึงรองพื้นขาวก่อนวาด (ทดสอบ PNG โปร่งใส มุมภาพได้สีขาว)"],
            [<Chip>{"imageSmoothingQuality = 'high'"}</Chip>, "ให้การย่อภาพเนียนกว่าค่าเริ่มต้น"],
            [<Chip>{"bitmap.close()"}</Chip>, "คืนหน่วยความจำของรูปต้นฉบับที่ใหญ่ทันทีที่ไม่ใช้"],
            [<Chip>{"while (maxBytes ...)"}</Chip>, "ถ้ากำหนดขนาดสูงสุด ให้ลดคุณภาพทีละ 0.1 จนไม่เกิน (ไม่ต่ำกว่า 0.3 เพื่อไม่ให้ภาพพัง)"],
            [<Chip>{"Promise ห่อ toBlob"}</Chip>, "toBlob ใช้ callback จึงห่อให้เป็น async/await ใช้ง่าย"],
          ]}
        />

        <div className="space-y-3">
          <SubTitle>เลือกรูปแบบไฟล์ผลลัพธ์</SubTitle>
          <DataTable
            headers={["รูปแบบ", "เหมาะกับ", "ข้อควรระวัง"]}
            rows={[
              ["image/jpeg", "รูปถ่ายทั่วไป ใช้ได้ทุกที่", "ไม่มีความโปร่งใส ต้องรองพื้น"],
              ["image/webp", "เล็กกว่า JPEG และรองรับความโปร่งใส", "ตรวจ blob.type เสมอ — ถ้าเบราว์เซอร์ไม่รองรับ toBlob จะคืนเป็น PNG"],
              ["image/png", "โลโก้ ไอคอน ภาพกราฟิกเรียบ ๆ", "ไม่รับค่า quality และรูปถ่ายจะใหญ่มาก"],
            ]}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 5: ส่งขึ้นเซิร์ฟเวอร์ ===== */}
      <section className="space-y-8">
        <SectionTitle emoji="5">ส่งขึ้นเซิร์ฟเวอร์ และการพรีวิว</SectionTitle>

        <div className="space-y-3">
          <SubTitle>ส่ง Blob ด้วย FormData (วิธีที่แนะนำ)</SubTitle>
          <CodeBlock
            highlight={[1, 2, 4]}
            code={`
const form = new FormData();
form.append("image", blob, "photo.jpg");

const res = await fetch("/api/upload", { method: "POST", body: form });
if (!res.ok) throw new Error("อัปโหลดไม่สำเร็จ");
`}
          />
          <Callout tone="warning" title="อย่าตั้ง Content-Type เอง">
            ให้เบราว์เซอร์ใส่ <Hl>multipart/form-data; boundary=...</Hl> ให้เอง ถ้าตั้งเองจะไม่มี boundary
            และเซิร์ฟเวอร์อ่านไฟล์ไม่ได้
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>พรีวิวด้วย object URL</SubTitle>
          <CodeBlock
            highlight={[1, 3]}
            code={`
const url = URL.createObjectURL(blob);   // ใช้เป็น src ของ <img> ได้ทันที
<img src={url} alt="ตัวอย่าง" />
URL.revokeObjectURL(url);               // เลิกใช้แล้วต้องคืนหน่วยความจำ
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>ทางเลือก: base64 สำหรับรูปจิ๋ว</SubTitle>
          <CodeBlock
            highlight={[2]}
            code={`
// ทางเลือก: ได้ข้อความ base64 เก็บลงคอลัมน์ text ได้ทันที (แต่ไฟล์ใหญ่ขึ้นราว 33%)
const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
// "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
`}
          />
        </div>

        <div className="space-y-3">
          <SubTitle>สิ่งที่เซิร์ฟเวอร์ต้องทำเสมอ (ไม่เชื่อข้อมูลจากเบราว์เซอร์)</SubTitle>
          <DataTable
            headers={["เรื่อง", "ทำไม"]}
            rows={[
              ["ตรวจชนิดไฟล์จากเนื้อไฟล์จริง", "นามสกุลและ MIME จาก client ปลอมได้"],
              ["จำกัดขนาดไฟล์และจำนวนครั้ง", "กันคนส่งไฟล์ใหญ่หรือรัวจนเซิร์ฟเวอร์ล่ม"],
              ["ตั้งชื่อไฟล์เอง (เช่น UUID)", "กันชื่อไฟล์อันตรายและชื่อซ้ำ"],
              ["ย่อ/สร้าง thumbnail ซ้ำฝั่งเซิร์ฟเวอร์ (ถ้าจำเป็น)", "ได้ขนาดมาตรฐานเหมือนกันทุกรูป"],
              ["ตรวจสิทธิ์ผู้อัปโหลด", "ไม่ให้ใครก็ได้อัปโหลดลงระบบ"],
            ]}
          />
        </div>
      </section>

      {/* ===== ส่วนที่ 6: มืออาชีพ ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="6">ระดับมืออาชีพ: คอมโพเนนต์ ImageResizer ฉบับเต็ม</SectionTitle>

        <ExampleList>
          <Example en="เลือกด้านยาวสุดและคุณภาพได้ แล้วย่อใหม่ทันทีที่ปรับ" />
          <Example en="แสดงขนาดก่อน/หลัง ขนาดพิกเซล และเปอร์เซ็นต์ที่ประหยัดได้" />
          <Example en="ป้องกัน race condition เมื่อผู้ใช้ปรับค่าเร็ว ๆ" />
          <Example en="คืนหน่วยความจำของ object URL อัตโนมัติ" />
          <Example en="จัดการรูปเสีย / รูปแบบที่ไม่รองรับ (เช่น HEIC) ด้วยข้อความที่เข้าใจง่าย" />
        </ExampleList>

          <CodeBlock
            tone="good"
            badge="ทดสอบแล้ว"
            filename="ImageResizer.tsx"
            highlight={[22, 26, 40, 45, 51, 70, 71, 90]}
            code={`
import { useEffect, useState, type ChangeEvent } from "react";

// ... resizeImage, fitSize และ type จากส่วนที่ 4 (อยู่ไฟล์เดียวกัน)

const formatBytes = (n: number) =>
  n < 1024 * 1024 ? (n / 1024).toFixed(0) + " KB" : (n / 1024 / 1024).toFixed(2) + " MB";

type Preview = ResizeResult & { url: string };

export default function ImageResizer() {
  const [file, setFile] = useState<File | null>(null);
  const [maxSide, setMaxSide] = useState(1280);
  const [quality, setQuality] = useState(0.8);
  const [preview, setPreview] = useState<Preview | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [uploadMsg, setUploadMsg] = useState("");

  // ย่อรูปใหม่ทุกครั้งที่เปลี่ยนไฟล์ ขนาด หรือคุณภาพ
  useEffect(() => {
    if (!file) return;
    let cancelled = false; // กันผลของการย่อรอบเก่ามาทับรอบใหม่ (race condition)
    setBusy(true);
    resizeImage(file, { maxWidth: maxSide, maxHeight: maxSide, quality, type: "image/jpeg" })
      .then((r) => {
        if (cancelled) return;
        setPreview({ ...r, url: URL.createObjectURL(r.blob) });
        setError("");
      })
      .catch(() => {
        if (!cancelled)
          setError("อ่านรูปนี้ไม่ได้ (รูปเสียหรือรูปแบบที่เบราว์เซอร์ไม่รองรับ เช่น HEIC)");
      })
      .finally(() => {
        if (!cancelled) setBusy(false);
      });
    return () => {
      cancelled = true;
    };
  }, [file, maxSide, quality]);

  // คืนหน่วยความจำของ object URL เมื่อรูปพรีวิวเปลี่ยนหรือคอมโพเนนต์ถูกถอด
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview.url);
    };
  }, [preview]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0];
    e.target.value = ""; // ให้เลือกไฟล์เดิมซ้ำได้
    if (!picked) return;
    setUploadMsg("");
    if (!picked.type.startsWith("image/")) {
      setError("กรุณาเลือกไฟล์รูปภาพ");
      return;
    }
    if (picked.size > 20 * 1024 * 1024) {
      setError("ไฟล์ใหญ่เกิน 20MB");
      return;
    }
    setError("");
    setFile(picked);
  };

  const upload = async () => {
    if (!preview) return;
    setUploadMsg("กำลังอัปโหลด…");
    try {
      const form = new FormData();
      form.append("image", preview.blob, "photo.jpg");
      const res = await fetch("/api/upload", { method: "POST", body: form });
      setUploadMsg(res.ok ? "อัปโหลดสำเร็จ" : "อัปโหลดไม่สำเร็จ (" + res.status + ")");
    } catch {
      setUploadMsg("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้");
    }
  };

  const saved = file && preview ? Math.round((1 - preview.blob.size / file.size) * 100) : 0;

  return (
    <div className="mx-auto max-w-xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">อัปโหลดรูปโปรไฟล์</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        aria-label="เลือกรูปภาพ"
        className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          ด้านยาวสุด
          <select
            value={maxSide}
            onChange={(e) => setMaxSide(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {[640, 1024, 1280, 1920].map((n) => (
              <option key={n} value={n}>
                {n}px
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          คุณภาพ {Math.round(quality * 100)}%
          <input
            type="range"
            min={0.3}
            max={1}
            step={0.05}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="mt-3 w-full accent-indigo-600"
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
          {error}
        </p>
      )}

      {preview && file && (
        <div className={"space-y-4 transition-opacity " + (busy ? "opacity-50" : "")}>
          <img
            src={preview.url}
            alt="ตัวอย่างรูปที่ย่อแล้ว"
            className="max-h-72 w-full rounded-xl bg-slate-100 object-contain"
          />
          <dl className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-lg bg-slate-50 p-3">
              <dt className="text-xs text-slate-500">ก่อนย่อ</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{formatBytes(file.size)}</dd>
              <dd className="text-xs tabular-nums text-slate-500">
                {preview.srcWidth}×{preview.srcHeight}
              </dd>
            </div>
            <div className="rounded-lg bg-emerald-50 p-3">
              <dt className="text-xs text-emerald-700">หลังย่อ</dt>
              <dd className="font-semibold tabular-nums text-emerald-800">
                {formatBytes(preview.blob.size)}
              </dd>
              <dd className="text-xs tabular-nums text-emerald-700">
                {preview.width}×{preview.height}
              </dd>
            </div>
            <div className="rounded-lg bg-indigo-50 p-3">
              <dt className="text-xs text-indigo-700">ประหยัด</dt>
              <dd className="text-xl font-bold tabular-nums text-indigo-800">{saved}%</dd>
            </div>
          </dl>

          <div className="flex items-center gap-3">
            <button
              onClick={upload}
              disabled={busy}
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              อัปโหลด
            </button>
            {uploadMsg && (
              <span role="status" className="text-sm text-slate-600">
                {uploadMsg}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
`}
          />

        <DataTable
          headers={["จุดสำคัญ", "ทำไมต้องทำ"]}
          rows={[
            [<Chip>{"let cancelled = false"}</Chip>, "cleanup ตั้ง cancelled = true เมื่อ deps เปลี่ยน ผลของรอบเก่าจึงไม่ทับรอบใหม่"],
            [<Chip>{"[file, maxSide, quality]"}</Chip>, "เก็บไฟล์ต้นฉบับไว้ แล้วย่อใหม่จากต้นฉบับทุกครั้ง (ไม่ย่อซ้ำจากรูปที่ย่อแล้ว)"],
            [<Chip>{"URL.revokeObjectURL"}</Chip>, "คืนหน่วยความจำเมื่อเปลี่ยนรูปพรีวิว หรือถอดคอมโพเนนต์"],
            [<Chip>{"busy → opacity-50"}</Chip>, "บอกผู้ใช้ว่ากำลังประมวลผลโดยไม่ทำให้ layout กระโดด"],
            [<Chip>{"role=alert / role=status"}</Chip>, "ข้อความ error และสถานะอัปโหลดถูกอ่านโดย screen reader"],
          ]}
        />

        <div className="space-y-3">
          <SubTitle>ผลที่ผมทดสอบจริง</SubTitle>
          <DataTable
            headers={["กรณี", "ผลลัพธ์"]}
            rows={[
              ["รูป 4000×3000 (2.97 MB) → ด้านยาว 1280px, คุณภาพ 80%", "1280×960, 54 KB (image/jpeg)"],
              ["ลดคุณภาพเหลือ 40%", "21 KB"],
              ["เปลี่ยนด้านยาวสุดเป็น 640px", "640×480, 9 KB"],
              ["รูป EXIF หมุน (เก็บ 4000×3000)", "ได้ 960×1280 ถูกทิศ"],
              ["รูปเล็ก 300×200", "คง 300×200 ไม่ขยาย"],
              ["PNG โปร่งใส → JPEG", "มุมภาพเป็นสีขาว (รองพื้นแล้ว)"],
              ["WebP คุณภาพ 80% เทียบ JPEG (รูปเดียวกัน)", "22 KB เทียบ 54 KB"],
              ["maxBytes = 60% ของขนาดปกติ (33 KB)", "ลดคุณภาพอัตโนมัติ ได้ 27 KB"],
              ["เลือกไฟล์ที่ไม่ใช่รูป", "แสดง “กรุณาเลือกไฟล์รูปภาพ”"],
              ["กดอัปโหลด", "ส่ง POST แบบ multipart/form-data ถึง /api/upload"],
            ]}
          />
          <Callout tone="warning" title="ตัวเลขจากรูปสังเคราะห์ ไม่ใช่รูปถ่ายจริง">
            ผมทดสอบด้วยรูปที่สร้างขึ้นเอง ขนาดไฟล์ของรูปถ่ายจริงจะต่างออกไป (มักหลักร้อย KB ที่ 1280px) —
            ใช้ตัวเลขเหล่านี้เปรียบเทียบพฤติกรรม ไม่ใช่คาดการณ์ขนาดจริง
          </Callout>
        </div>

        <div className="space-y-3">
          <SubTitle>ต่อยอด (ไม่ได้ทดสอบในบทนี้)</SubTitle>
          <ExampleList>
            <Example en="ย้ายงานย่อไปใน Web Worker + OffscreenCanvas เมื่อต้องย่อรูปใหญ่/หลายไฟล์พร้อมกัน ไม่ให้หน้าค้าง" />
            <Example en="อัปโหลดหลายรูป จำกัดจำนวนที่ย่อพร้อมกัน (เช่น 2–3 รูป) และแสดง progress" />
            <Example en="สร้างหลายขนาด (thumbnail 200px + รูปเต็ม 1280px) แล้วบันทึก URL ทั้งสอง" />
          </ExampleList>
        </div>
      </section>

      {/* ===== ส่วนที่ 7: ข้อผิดพลาด ===== */}
      <section className="space-y-6">
        <SectionTitle emoji="7">ข้อผิดพลาดที่พบบ่อย &amp; เช็กลิสต์</SectionTitle>

          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5, 6]}
            code={`
// ❌ แปลง PNG โปร่งใสเป็น JPEG ตรง ๆ → ส่วนโปร่งใสกลายเป็นสีดำ
ctx.drawImage(bitmap, 0, 0, w, h);

// ✅ รองพื้นสีขาวก่อน (หรือเก็บเป็น webp/png ถ้าต้องการความโปร่งใส)
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, w, h);
ctx.drawImage(bitmap, 0, 0, w, h);
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ ขยายรูปเล็กให้ใหญ่ขึ้น → ไฟล์ใหญ่ขึ้นแต่ไม่คมขึ้น
const scale = Math.min(maxW / w, maxH / h);

// ✅ จำกัดไม่เกิน 1 (ไม่ขยาย)
const scale = Math.min(1, maxW / w, maxH / h);
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5]}
            code={`
// ❌ สร้าง object URL แล้วไม่เคยคืน → หน่วยความจำค้างจนกว่าจะปิดแท็บ
const url = URL.createObjectURL(blob);

// ✅ คืนเมื่อเลิกใช้ (เปลี่ยนรูป / ถอดคอมโพเนนต์)
useEffect(() => () => URL.revokeObjectURL(url), [url]);
`}
          />
          <CodeBlock
            tone="bad"
            badge="ผิดบ่อย"
            highlight={[2, 5, 6, 7]}
            code={`
// ❌ ผู้ใช้เลื่อน slider เร็ว ๆ → ผลของรอบเก่ามาเขียนทับรอบใหม่
resizeImage(file, opt).then(setPreview);

// ✅ ใช้ธง cancelled ใน cleanup ของ useEffect
let cancelled = false;
resizeImage(file, opt).then((r) => { if (!cancelled) setPreview(r); });
return () => { cancelled = true; };
`}
          />

        <Callout tone="warning" title="ย่อแล้วไฟล์อาจใหญ่ขึ้นได้">
          ผมทดสอบโลโก้วงกลมสีเดียว PNG 4 KB → แปลงเป็น JPEG ได้ 10 KB (ใหญ่ขึ้น)
          ภาพกราฟิกเรียบ ๆ ควรเก็บเป็น PNG หรือ WebP แทน และควรเทียบขนาดก่อน/หลัง ถ้าใหญ่ขึ้นให้ใช้ไฟล์เดิม
        </Callout>

        <Callout tone="info" title="ข้อสังเกตเรื่องข้อมูลในรูป">
          การวาดใหม่ผ่าน canvas แล้วเข้ารหัสออกมา จะไม่นำ metadata เดิม (เช่น EXIF ตำแหน่ง GPS) ติดมาด้วย
          ซึ่งมักเป็นผลดีต่อความเป็นส่วนตัว — แต่ถ้าระบบต้องใช้ข้อมูลนั้น ให้อ่านก่อนย่อ
        </Callout>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
            <SubTitle>อาการที่เจอ</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example ok={false} en="รูปโปร่งใสพื้นดำ → ไม่ได้รองพื้นก่อนบันทึกเป็น JPEG" />
                <Example ok={false} en="รูปเล็กกลับใหญ่ขึ้น → ไม่ใส่ Math.min(1, …) หรือแปลงรูปกราฟิกเป็น JPEG" />
                <Example ok={false} en="แอปกินแรมเรื่อย ๆ → ไม่ revokeObjectURL" />
                <Example ok={false} en="พรีวิวเป็นรูปเก่า → race condition ไม่มี cancelled" />
                <Example ok={false} en="เลือกไฟล์เดิมซ้ำแล้วไม่ทำงาน → ไม่ได้ล้างค่า input" />
                <Example ok={false} en="GIF ขยับ/SVG เสียคุณสมบัติ → ผ่าน canvas แล้วเป็นภาพนิ่ง ไม่ควรย่อสองชนิดนี้" />
              </ExampleList>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <SubTitle>เช็กลิสต์ก่อนส่งงาน</SubTitle>
            <div className="mt-4">
              <ExampleList>
                <Example en="ลองรูปใหญ่ (หลาย MB) และรูปเล็กมาก" />
                <Example en="ลองรูปถ่ายแนวตั้งจากมือถือ ว่าไม่หมุนผิด" />
                <Example en="ลองไฟล์ที่ไม่ใช่รูป และไฟล์เสีย ว่ามีข้อความ error" />
                <Example en="ลองรูป PNG โปร่งใส ว่าพื้นหลังไม่เป็นสีดำ" />
                <Example en="เซิร์ฟเวอร์ตรวจไฟล์ซ้ำ ไม่เชื่อ client" />
                <Example en="ตั้งขนาดสูงสุดและรูปแบบตามการใช้งานจริง (avatar 256px ไม่ต้อง 1920px)" />
              </ExampleList>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageResize01;