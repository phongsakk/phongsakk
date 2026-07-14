# System

สรุปเทคโนโลยีและวิธีสร้างเว็บ resume รวมถึงการเปลี่ยนภาษา UI

## สแตกหลัก

| ชั้น | เทคโนโลยี |
|------|-----------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Rendering | SSR / Server Components + `generateStaticParams` สำหรับ `/th`, `/en` |
| UI | React 19 |
| สไตล์ | Tailwind CSS v4 + CSS variables ใน `src/app/globals.css` |
| ภาษา | TypeScript |
| ฟอนต์ | Fraunces (display), Source Sans 3 (ละติน), Noto Sans Thai (ไทย) |
| ไอคอน tech stack | [SVG LOGOS](https://svglogos.dev/) ผ่าน `cdn.svglogos.dev` |

## โครงสร้างสำคัญ

```
src/
  app/
    layout.tsx              # root layout + ฟอนต์
    globals.css             # ธีม, motion, print CSS
    [locale]/
      page.tsx              # หน้า resume ตาม locale (SSR)
  components/
    resume-view.tsx         # เลย์เอาต์ resume
    language-switcher.tsx   # สลับภาษา UI
    download-pdf-button.tsx # ดาวน์โหลด PDF
  data/
    resume.ts               # เนื้อหา TH/EN + ข้อความ UI
public/
  profile.png               # รูปโปรไฟล์
```

## การเปลี่ยนภาษา UI

- URL เป็นตัวกำหนดภาษา: `/th` และ `/en`
- `/` redirect ไป `/th` ผ่าน `next.config.ts`
- ข้อมูลและข้อความ UI ทั้งสองภาษาอยู่ที่ `src/data/resume.ts` (`resumeByLocale`)
- สลับภาษาด้วย [`LanguageSwitcher`](src/components/language-switcher.tsx) — ลิงก์ไป `/th` หรือ `/en`
- `generateMetadata` ตั้ง title / description ตามภาษา
- องค์ประกอบ `<div lang={locale}>` ครอบเนื้อหาเพื่อ accessibility

## ดาวน์โหลด PDF

- ปุ่มใน [`DownloadPdfButton`](src/components/download-pdf-button.tsx) เรียก `window.print()`
- ซ่อน UI ที่ไม่ต้องการพิมพ์ด้วย class `.no-print`
- สไตล์พิมพ์ใน `globals.css` (`@media print`) — กระดาษ A4, พื้นขาว, ตัดเงา/พื้นหลัง

ผลคือ PDF จะตรงกับภาษาที่กำลังดูอยู่ (เพราะพิมพ์หน้าที่เปิดอยู่)

## คำสั่งที่ใช้บ่อย

```bash
npm run dev    # พัฒนาท้องถิ่น
npm run build  # บิลด์ production
npm run start  # รันหลัง build
npm run lint   # ESLint
```

## เส้นทาง

| Path | คำอธิบาย |
|------|----------|
| `/` | redirect → `/th` |
| `/th` | Resume ภาษาไทย |
| `/en` | Resume ภาษาอังกฤษ |
