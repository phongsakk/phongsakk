export type Locale = "th" | "en";

export const locales: Locale[] = ["th", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type TechId =
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "nodejs"
  | "nestjs"
  | "express"
  | "php"
  | "laravel"
  | "mysql"
  | "postgresql"
  | "prisma"
  | "aws"
  | "liff"
  | "go"
  | "python"
  | "sql"
  | "git"
  | "linux"
  | "docker"
  | "github-actions"
  | "jenkins"
  | "postman"
  | "azure"
  | "openai"
  | "powerbi"
  | "firebase"
  | "cloud";

export type ProjectCase = {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  stack: TechId[];
};

export type ResumeContent = {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    downloadPdf: string;
    language: string;
    contact: string;
    about: string;
    jobInterest: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
    learning: string;
    projects: string;
    github: string;
    linkedin: string;
    challenge: string;
    solution: string;
    result: string;
    stack: string;
    listening: string;
    speaking: string;
    reading: string;
    writing: string;
    languageName: string;
  };
  profile: {
    name: string;
    headline: string;
    location: string;
    phone: string;
    email: string;
    lineId: string;
    github: string;
    linkedin: string;
    summary: string[];
  };
  jobInterests: string[];
  skillGroups: {
    label: string;
    items: TechId[];
  }[];
  learning: {
    title: string;
    items: string[];
  };
  projects: ProjectCase[];
  languages: {
    name: string;
    listening: string;
    speaking: string;
    reading: string;
    writing: string;
  }[];
  experience: {
    period: string;
    company: string;
    location: string;
    role: string;
    highlights: string[];
  }[];
  education: {
    period: string;
    school: string;
    degree: string;
    detail: string;
    gpa?: string;
  }[];
};

export const resumeByLocale: Record<Locale, ResumeContent> = {
  th: {
    meta: {
      title: "พงษ์ศักดิ์ ยอดเสาดี — Resume",
      description:
        "Resume ของพงษ์ศักดิ์ ยอดเสาดี — Backend / Full Stack / System Analyst",
    },
    ui: {
      downloadPdf: "ดาวน์โหลด PDF",
      language: "ภาษา",
      contact: "ติดต่อ",
      about: "สรุปคุณสมบัติ",
      jobInterest: "ตำแหน่งที่สนใจ",
      experience: "ประสบการณ์การทำงาน",
      education: "ประวัติการศึกษา",
      skills: "ทักษะความสามารถ",
      languages: "ทักษะทางภาษา",
      learning: "ความสนใจเพิ่มเติม",
      projects: "สถาปัตยกรรมระบบภายในที่คัดสรร",
      github: "GitHub",
      linkedin: "LinkedIn",
      challenge: "โจทย์ที่เจอ",
      solution: "วิธีจัดการ",
      result: "ผลที่ได้",
      stack: "Tech Stack",
      listening: "ฟัง",
      speaking: "พูด",
      reading: "อ่าน",
      writing: "เขียน",
      languageName: "ภาษา",
    },
    profile: {
      name: "พงษ์ศักดิ์ ยอดเสาดี",
      headline: "Backend · Full Stack · System Analyst",
      location: "บางกะปิ กรุงเทพมหานคร",
      phone: "093-320-8166",
      email: "phongsak.ysd@gmail.com",
      lineId: "phongsak.ysd",
      github: "https://github.com/phongsakk",
      linkedin: "https://www.linkedin.com/in/พงษ์ศักดิ์-ยอดเสาดี-924b361a5/",
      summary: [
        "ทำงานสาย Backend และ Full Stack เป็นหลัก โดยโฟกัสการออกแบบ API, pipeline ข้อมูล และระบบบน cloud ที่ทีมใช้จริงทุกวัน",
        "รับผิดชอบระบบภายในองค์กรเป็นหลัก ตั้งแต่การประมวลผลข้อมูลปริมาณมาก ไปจนถึงเครื่องมือช่วย deploy และจัดการเอกสาร จึงเน้นโจทย์กับผลกระทบมากกว่าการโชว์ UI",
        "สนใจตำแหน่ง Backend เป็นอันดับแรก รองลงมาคือ Full Stack และ System Analyst เพื่ออยู่กับระบบแกนขององค์กรและช่วยวางโครงสร้างที่ขยายต่อได้ในระยะยาว",
      ],
    },
    jobInterests: ["1. Backend", "2. Full Stack", "3. System Analyst (SA)"],
    skillGroups: [
      {
        label: "หลัก",
        items: ["nodejs", "typescript", "express", "aws", "docker", "react"],
      },
      {
        label: "รอง",
        items: [
          "nestjs",
          "go",
          "php",
          "laravel",
          "postgresql",
          "mysql",
          "prisma",
          "nextjs",
          "liff",
          "firebase",
          "azure",
          "git",
          "github-actions",
          "linux",
          "postman",
          "sql",
          "python",
          "openai",
          "powerbi",
          "jenkins",
        ],
      },
    ],
    learning: {
      title: "ความสนใจเพิ่มเติม",
      items: [
        "ทำให้ CI/CD และ container workflow เสถียรขึ้น (Docker, GitHub Actions, AWS)",
        "ใช้ Power BI / data อ่านผลจากระบบที่ดูแล",
        "ต่อยอด AI automation / RAG ในงานภายในองค์กรอย่างระมัดระวัง",
      ],
    },
    projects: [
      {
        title: "High-Performance Data Pipeline",
        challenge:
          "ต้องดึงข้อมูลจากฐานข้อมูลภายนอกเฉลี่ยราววันละ 1 ล้านรายการ แล้วคำนวณให้ทันใช้งานจริง หากเก็บทุกอย่างลง MySQL ตรงๆ โหลดและเวลาตอบสนองจะพังง่าย",
        solution:
          "แยกขั้นนำเข้า คัดกรอง และคำนวณด้วย PHP / Node.js เก็บเฉพาะผลที่ธุรกิจต้องใช้จริงลง MySQL และทำหน้าจัดการด้วย Laravel ให้ตรวจสถานะย้อนหลังได้",
        result:
          "รองรับปริมาณระดับล้านรายการต่อวันได้ต่อเนื่อง โดยไม่ยัดข้อมูลเกินจำเป็นลงฐานข้อมูล",
        stack: ["php", "laravel", "nodejs", "mysql", "prisma", "sql"],
      },
      {
        title: "NestJS API Gateway (Office Systems)",
        challenge:
          "ระบบสำนักงานมี API ย่อยหลายชุด การให้ client เรียตรงจะกระจายโหลดยากและควบคุม entry point ไม่ได้",
        solution:
          "สร้าง NestJS เป็น API gateway รับโหลดจากภายนอก แล้วจ่ายงานต่อไปยัง API ย่อยภายใน ใช้ Prisma เป็นชั้นเข้าถึง MySQL / PostgreSQL / SQL Server ตามบริการที่เกี่ยวข้อง",
        result:
          "รวมทางเข้าของระบบสำนักงานไว้จุดเดียว กระจายงานไป API ย่อยได้ชัดเจน และจัดการเข้าถึงฐานข้อมูลหลายชนิดผ่านมาตรฐานเดียวกัน",
        stack: ["nestjs", "nodejs", "typescript", "prisma", "postgresql", "mysql"],
      },
      {
        title: "Cloud Delivery, CLI & Legacy Go",
        challenge:
          "เริ่มโปรเจกต์ใหม่ในทีมเสียเวลา setup สภาพแวดล้อมไม่ตรงกัน มีขั้นตอน deploy บน AWS แบบแมนนวล และต้องบำรุงรักษาโค้ด Go จากระบบ legacy พร้อมกัน",
        solution:
          "จัด workload บน AWS (EC2, ECS, Lambda) วาง CI/CD ด้วย GitHub Actions / Docker พัฒนา CLI สำหรับ scaffold โปรเจกต์ และต่อยอดบริการ Go ที่องค์กรใช้อยู่",
        result:
          "ขึ้นโปรเจกต์ใหม่ได้เร็วขึ้น ลดความต่างของ environment และดูแลระบบ legacy บน Go ได้อย่างต่อเนื่องควบคู่ของใหม่",
        stack: ["aws", "docker", "github-actions", "go", "nodejs", "typescript"],
      },
      {
        title: "Document OCR & Classification",
        challenge:
          "งานเอกสารพึ่งคนอ่านและแยกประเภท ทำให้ช้าและผิดพลาดง่ายเมื่อปริมาณสูงขึ้น",
        solution:
          "ออกแบบ flow OCR + classification ด้วย Azure Form Recognizer แล้วส่งข้อมูลที่ได้ไป backend เพื่อจัดเก็บและใช้งานต่อในระบบภายใน",
        result:
          "ดึงข้อมูลจากเอกสารเข้าสู่ระบบได้เร็วขึ้น และลดงานมือในขั้นอ่าน–แยกประเภท (รายละเอียดเชิงตัวเลขอยู่ภายใต้ระบบภายใน)",
        stack: ["azure", "nodejs", "typescript", "python", "prisma"],
      },
    ],
    languages: [
      {
        name: "ไทย",
        listening: "เจ้าของภาษา",
        speaking: "เจ้าของภาษา",
        reading: "เจ้าของภาษา",
        writing: "เจ้าของภาษา",
      },
      {
        name: "อังกฤษ",
        listening: "ระดับกลาง (B1)",
        speaking: "ระดับกลาง (B1)",
        reading: "ระดับกลาง–สูง (B2)",
        writing: "ระดับกลาง (B1)",
      },
    ],
    experience: [
      {
        period: "เม.ย. 2567 — ปัจจุบัน",
        company: "บริษัท ติงค์ บิตท์ จำกัด (Think Bit Co., Ltd.)",
        location: "วังทองหลาง กรุงเทพฯ",
        role: "Full Stack Programmer",
        highlights: [
          "พัฒนา backend ด้วย NestJS เป็น API gateway รับโหลดแล้วจ่ายงานต่อไปยัง API ย่อยในระบบสำนักงาน และใช้ React (TypeScript) + Node.js ด้าน frontend/service ที่เกี่ยวข้อง",
          "ใช้ Prisma เป็นชั้นเข้าถึงฐานข้อมูลหลักในการทำงานกับ MySQL, PostgreSQL และ SQL Server",
          "บำรุงรักษาและต่อยอดโค้ด Go จากระบบ legacy ที่องค์กรใช้อยู่ต่อเนื่อง",
          "ดูแล workload บน AWS (EC2, ECS, Lambda) และพัฒนา CLI สำหรับ scaffold โปรเจกต์ + ปรับ workflow บน GitHub เพื่อลดเวลาเริ่มงานและความคลาดเคลื่อนของ environment",
        ],
      },
      {
        period: "ก.พ. 2567 — เม.ย. 2567",
        company: "บริษัท เรียล แฟคทอรี่ จำกัด (Real Factory Co., Ltd.)",
        location: "ดอนเมือง กรุงเทพฯ",
        role: "Front End Programmer (React)",
        highlights: [
          "พัฒนาเว็บบน React + TypeScript ที่ต้องรันใน LINE LIFF จัดการข้อจำกัดของ WebView และการเชื่อมต่อข้อมูลให้ใช้งานจริงได้",
          "โฟกัส flow การใช้งานจริงใน LINE และจับคู่หน้าจอกับเงื่อนไขธุรกิจมากกว่าการทำ UI สวยอย่างเดียว",
        ],
      },
      {
        period: "ต.ค. 2565 — ก.พ. 2567",
        company: "บางกอกเว็บ โซลูชัน (Bangkok Web Solution)",
        location: "วังทองหลาง กรุงเทพฯ",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "ออกแบบและพัฒนาระบบคำนวณที่ดึงข้อมูลภายนอกเฉลี่ยราว 1 ล้านรายการต่อวัน แล้วคัดกรองก่อนลง MySQL",
          "แยกขั้นประมวลผลและเก็บเฉพาะผลที่จำเป็น เพื่อรักษาความถูกต้องภายใต้ปริมาณข้อมูลสูง",
          "พัฒนาเว็บจัดการด้วย Laravel 10 ให้ทีมตรวจสถานะและติดตามผลได้เอง",
        ],
      },
    ],
    education: [
      {
        period: "กำลังศึกษา — คาดว่าจบ พ.ศ. 2571",
        school: "มหาวิทยาลัยรามคำแหง",
        degree: "วท.บ. วิทยาการคอมพิวเตอร์",
        detail:
          "คณะวิทยาศาสตร์ · เรียนควบคู่กับงาน full-time อย่างต่อเนื่อง จึงคุ้นกับการจัดลำดับงานและการส่งมอบตามกำหนด",
        gpa: "GPA 2.42",
      },
      {
        period: "สำเร็จการศึกษา พ.ศ. 2559",
        school: "โรงเรียนสินรินทร์วิทยา",
        degree: "มัธยมศึกษาตอนปลาย",
        detail: "",
        gpa: "GPA 3.81",
      },
    ],
  },
  en: {
    meta: {
      title: "Phongsak Yodsaodee — Resume",
      description:
        "Resume of Phongsak Yodsaodee — Backend / Full Stack / System Analyst",
    },
    ui: {
      downloadPdf: "Download PDF",
      language: "Language",
      contact: "Contact",
      about: "Summary",
      jobInterest: "Target roles",
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      learning: "Focus areas",
      projects: "Selected Internal Systems",
      github: "GitHub",
      linkedin: "LinkedIn",
      challenge: "The problem",
      solution: "Approach",
      result: "Outcome",
      stack: "Tech Stack",
      listening: "Listening",
      speaking: "Speaking",
      reading: "Reading",
      writing: "Writing",
      languageName: "Language",
    },
    profile: {
      name: "Phongsak Yodsaodee",
      headline: "Backend · Full Stack · System Analyst",
      location: "Bangkapi, Bangkok",
      phone: "093-320-8166",
      email: "phongsak.ysd@gmail.com",
      lineId: "phongsak.ysd",
      github: "https://github.com/phongsakk",
      linkedin: "https://www.linkedin.com/in/พงษ์ศักดิ์-ยอดเสาดี-924b361a5/",
      summary: [
        "Focus on Backend and Full Stack work — APIs, data pipelines, and cloud systems used by teams every day.",
        "Mostly internal enterprise systems: high-volume processing, delivery tooling, and document workflows. Prefer clear problem/impact over polished demos.",
        "Targeting Backend first, then Full Stack and System Analyst, to own core systems and help shape architectures that can grow with the organization.",
      ],
    },
    jobInterests: ["1. Backend", "2. Full Stack", "3. System Analyst (SA)"],
    skillGroups: [
      {
        label: "Primary",
        items: ["nodejs", "typescript", "express", "aws", "docker", "react"],
      },
      {
        label: "Supporting",
        items: [
          "nestjs",
          "go",
          "php",
          "laravel",
          "postgresql",
          "mysql",
          "prisma",
          "nextjs",
          "liff",
          "firebase",
          "azure",
          "git",
          "github-actions",
          "linux",
          "postman",
          "sql",
          "python",
          "openai",
          "powerbi",
          "jenkins",
        ],
      },
    ],
    learning: {
      title: "Focus areas",
      items: [
        "Making CI/CD and container workflows more reliable (Docker, GitHub Actions, AWS)",
        "Using Power BI / data to read signals from systems under care",
        "Extending careful internal AI automation / RAG use cases",
      ],
    },
    projects: [
      {
        title: "High-Performance Data Pipeline",
        challenge:
          "Need to pull roughly 1 million external records per day, compute results in time for business use, and avoid hammering MySQL with indiscriminate writes.",
        solution:
          "Split ingestion, filtering, and computation across PHP / Node.js; persist only required outcomes to MySQL; provide a Laravel ops UI for status checks.",
        result:
          "Sustained ~1M records/day with auditable results and fewer unnecessary database writes.",
        stack: ["php", "laravel", "nodejs", "mysql", "prisma", "sql"],
      },
      {
        title: "NestJS API Gateway (Office Systems)",
        challenge:
          "Office systems expose many micro APIs; calling them directly makes load distribution and entry-point control difficult.",
        solution:
          "Build a NestJS API gateway to accept incoming load and route work to internal micro APIs; use Prisma against MySQL / PostgreSQL / SQL Server as needed per service.",
        result:
          "Single entry point for office traffic, clearer routing to downstream APIs, and consistent multi-database access through Prisma.",
        stack: ["nestjs", "nodejs", "typescript", "prisma", "postgresql", "mysql"],
      },
      {
        title: "Cloud Delivery, CLI & Legacy Go",
        challenge:
          "New projects lost time to inconsistent environments and manual AWS release steps, while Go legacy services still needed ongoing maintenance.",
        solution:
          "Organize AWS workloads (EC2, ECS, Lambda), add CI/CD with GitHub Actions / Docker, ship a scaffolding CLI, and continue extending in-production Go legacy code.",
        result:
          "Faster project kickoff, less environment drift, and continuous care for legacy Go alongside newer delivery tooling.",
        stack: ["aws", "docker", "github-actions", "go", "nodejs", "typescript"],
      },
      {
        title: "Document OCR & Classification",
        challenge:
          "Document workflows depended on people reading and sorting files, slowing down as volume grew.",
        solution:
          "Design an OCR + classification flow with Azure Form Recognizer, then push extracted data into internal backend storage and workflows.",
        result:
          "Faster document intake into systems and less manual read/sort work (exact percentages remain internal).",
        stack: ["azure", "nodejs", "typescript", "python", "prisma"],
      },
    ],
    languages: [
      {
        name: "Thai",
        listening: "Native",
        speaking: "Native",
        reading: "Native",
        writing: "Native",
      },
      {
        name: "English",
        listening: "Intermediate (B1)",
        speaking: "Intermediate (B1)",
        reading: "Upper-Intermediate (B2)",
        writing: "Intermediate (B1)",
      },
    ],
    experience: [
      {
        period: "Apr 2024 — Present",
        company: "Think Bit Co., Ltd.",
        location: "Wang Thonglang, Bangkok",
        role: "Full Stack Programmer",
        highlights: [
          "Build NestJS API gateway to take incoming load and route work to office-system micro APIs; also work React (TypeScript) + Node.js where the product needs it",
          "Use Prisma as the main data-access layer across MySQL, PostgreSQL, and SQL Server",
          "Maintain and extend Go services on top of organization legacy code still in production",
          "Run AWS workloads (EC2, ECS, Lambda) and build a project-scaffolding CLI plus GitHub workflow improvements to cut kickoff time and environment drift",
        ],
      },
      {
        period: "Feb 2024 — Apr 2024",
        company: "Real Factory Co., Ltd.",
        location: "Don Mueang, Bangkok",
        role: "Front End Programmer (React)",
        highlights: [
          "Ship React + TypeScript apps on LINE LIFF, working around WebView constraints and real integration requirements",
          "Focus on actual in-LINE user flows and business rules more than cosmetic UI polish",
        ],
      },
      {
        period: "Oct 2022 — Feb 2024",
        company: "Bangkok Web Solution",
        location: "Wang Thonglang, Bangkok",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "Design and build computation systems that ingest ~1M external records per day, filtering before MySQL writes",
          "Separate processing stages and persist only required outcomes to balance volume with correctness",
          "Build Laravel 10 ops pages so the team can monitor and review results",
        ],
      },
    ],
    education: [
      {
        period: "In progress — expected 2028",
        school: "Ramkhamhaeng University",
        degree: "B.Sc. Computer Science",
        detail:
          "Faculty of Science · Studying while working full-time; comfortable prioritizing and shipping on schedule",
        gpa: "GPA 2.42",
      },
      {
        period: "Graduated 2016",
        school: "Sinrin Wittaya School",
        degree: "Upper secondary education",
        detail: "",
        gpa: "GPA 3.81",
      },
    ],
  },
};
