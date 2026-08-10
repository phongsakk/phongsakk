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
    layout.tsx
    globals.css
    [locale]/page.tsx
  components/
    resume-view.tsx
    language-switcher.tsx
    download-pdf-button.tsx
    tech-badges.tsx
  data/
    resume.ts
public/
  54858537.jpg
.cursor/docs/          # เอกสารสำหรับ AI agent / ผู้ดูแล content
```

## การเปลี่ยนภาษา UI

- URL เป็นตัวกำหนดภาษา: `/th` และ `/en`
- `/` redirect ไป `/th` ผ่าน `next.config.ts`
- ข้อมูลและข้อความ UI ทั้งสองภาษาอยู่ที่ `src/data/resume.ts` (`resumeByLocale`)
- สลับภาษาด้วย `LanguageSwitcher` — ลิงก์ไป `/th` หรือ `/en`
- `generateMetadata` ตั้ง title / description ตามภาษา

## ดาวน์โหลด PDF

- ปุ่ม `DownloadPdfButton` เรียก `window.print()`
- ซ่อน UI ที่ไม่ต้องการพิมพ์ด้วย class `.no-print`
- สไตล์พิมพ์ใน `globals.css` (`@media print`)

## คำสั่งที่ใช้บ่อย

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## เส้นทาง

| Path | คำอธิบาย |
|------|----------|
| `/` | redirect → `/th` |
| `/th` | Resume ภาษาไทย |
| `/en` | Resume ภาษาอังกฤษ |
