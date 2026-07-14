# Phongsak Resume

เว็บ resume สองภาษา (ไทย / อังกฤษ) สำหรับ **พงษ์ศักดิ์ ยอดเสาดี**  
สร้างด้วย Next.js (SSR) อ่านง่าย มีสลับภาษา และดาวน์โหลด PDF ตามภาษาที่กำลังดู

## Overview

- หน้าเดียวแบบ resume: ประวัติย่อ, ตำแหน่งที่สนใจ, ประสบการณ์, ทักษะ, การศึกษา
- สองภาษา: `/th` และ `/en`
- ดาวน์โหลด PDF ผ่าน Print → Save as PDF ของเบราว์เซอร์
- แสดงเฉพาะข้อมูลที่เหมาะกับเว็บสาธารณะ (ตัดเงินเดือน, ที่อยู่เต็ม, อ้างอิง ฯลฯ)

## เอกสารเพิ่มเติม

| ไฟล์ | เนื้อหา |
|------|---------|
| [profile.md](profile.md) | สรุปรายละเอียดโปรไฟล์ / ประวัติ / ทักษะที่แสดงบนเว็บ |
| [system.md](system.md) | สรุปเทคโนโลยีที่ใช้สร้างเว็บ และการเปลี่ยนภาษา UI |

## Live site

Production: [https://phongsakk-portfolio.vercel.app](https://phongsakk-portfolio.vercel.app)

- [/th](https://phongsakk-portfolio.vercel.app/th) — ไทย
- [/en](https://phongsakk-portfolio.vercel.app/en) — English

## เริ่มใช้งาน (local)

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) (รีไดเรกต์ไป `/th`)

| Path | ภาษา |
|------|------|
| [/th](http://localhost:3000/th) | ไทย |
| [/en](http://localhost:3000/en) | English |

## สคริปต์

```bash
npm run dev    # พัฒนา
npm run build  # บิลด์
npm run start  # รัน production
npm run lint   # ตรวจโค้ด
```
