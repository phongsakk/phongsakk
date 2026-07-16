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
      headline: "Backend · Full Stack",
      location: "บางกะปิ กรุงเทพมหานคร",
      phone: "093-320-8166",
      email: "phongsak.ysd@gmail.com",
      lineId: "phongsak.ysd",
      github: "https://github.com/phongsakk",
      linkedin: "https://www.linkedin.com/in/พงษ์ศักดิ์-ยอดเสาดี-924b361a5/",
      summary: [
        "ถนัดงานสาย Backend และ Full Stack เป็นหลัก มีความชำนาญในการพัฒนา API จัดการ pipeline ข้อมูล และพัฒนาฟีเจอร์ที่ทีมใช้งานจริงในแต่ละวัน",
        "มีประสบการณ์ดูแลระบบภายในองค์กรอย่างครบวงจร ตั้งแต่การประมวลผลข้อมูลปริมาณมาก ไปจนถึงการพัฒนาเครื่องมือช่วย deploy และระบบจัดการเอกสาร สามารถทำงานได้ทั้ง Backend และ Frontend แต่มีความถนัดและความสนใจเป็นพิเศษในฝั่งระบบหลังบ้านและโครงสร้างข้อมูล",
        "สนใจตำแหน่ง Backend Developer และ Full Stack Developer เป็นหลัก เนื่องจากสอดคล้องกับประสบการณ์ที่ผ่านมา ส่วน System Analyst (SA) ยินดีพิจารณาเป็นทางเลือกในการพัฒนาต่อไป",
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
          "laravel",
          "postgresql",
          "mysql",
          "prisma",
          "nextjs",
          "liff",
          "firebase",
          "azure",
          "github-actions",
          "linux",
          "python",
        ],
      },
    ],
    learning: {
      title: "ความสนใจเพิ่มเติม",
      items: [
        "พัฒนา workflow ของ CI/CD และ container ให้มีเสถียรภาพมากขึ้น (Docker, GitHub Actions, AWS)",
        "ใช้ Power BI และข้อมูลจากระบบที่ดูแลเพื่อวิเคราะห์และติดตามผลลัพธ์",
        "ต่อยอดการใช้ AI automation และ RAG ในงานภายในองค์กรอย่างระมัดระวังและมีหลักเกณฑ์",
      ],
    },
    projects: [
      {
        title: "High-Performance Data Pipeline",
        challenge:
          "ระบบสะสมแต้มบนเว็บต้องรับข้อมูลจากแหล่งภายนอกจำนวนมากและประมวลผลให้ทันใช้งานจริง โดยมีภาระเฉลี่ยราววันละ 1 ล้านรายการ หากจัดเก็บข้อมูลทั้งหมดลง MySQL โดยตรงจะกระทบต่อประสิทธิภาพและเวลาตอบสนอง",
        solution:
          "ออกแบบและพัฒนา ETL ด้วย Node.js โดยแยกขั้นนำเข้า คัดกรอง และคำนวณ จากนั้นจัดเก็บเฉพาะผลลัพธ์ที่จำเป็นลง MySQL และเชื่อมการใช้งานเข้ากับระบบเว็บที่พัฒนาด้วย Laravel 10",
        result:
          "รองรับปริมาณระดับล้านรายการต่อวันได้อย่างต่อเนื่อง และนำผลประมวลผลไปใช้งานจริงบนระบบสะสมแต้ม (reward.exat.co.th)",
        stack: ["php", "laravel", "nodejs", "mysql", "prisma", "sql"],
      },
      {
        title: "NestJS API Gateway (Office Systems)",
        challenge:
          "ระบบสำนักงานมี API ย่อยหลายชุด การให้ client เรียกใช้งานโดยตรงทำให้กระจายโหลดได้ยากและควบคุมจุดเข้าใช้งานไม่ได้",
        solution:
          "พัฒนา NestJS เป็น API gateway รับโหลดจากภายนอก แล้วจ่ายงานต่อไปยัง API ย่อยภายใน ใช้ Prisma เป็นชั้นเข้าถึง MySQL / PostgreSQL / SQL Server ตามบริการที่เกี่ยวข้อง",
        result:
          "รวมจุดเข้าใช้งานของระบบสำนักงานไว้ที่เดียว กระจายงานไปยัง API ย่อยได้อย่างชัดเจน และจัดการการเข้าถึงฐานข้อมูลหลายชนิดผ่านมาตรฐานเดียวกัน",
        stack: ["nestjs", "nodejs", "typescript", "prisma", "postgresql", "mysql"],
      },
      {
        title: "Cloud Delivery, CLI & Legacy Go",
        challenge:
          "การเริ่มโปรเจกต์ใหม่ในทีมใช้เวลาในการตั้งค่าสภาพแวดล้อมที่ไม่สอดคล้องกัน มีขั้นตอน deploy บน AWS แบบแมนนวล และต้องบำรุงรักษาโค้ด Go จากระบบ legacy ควบคู่กัน",
        solution:
          "จัด workload บน AWS (EC2, ECS, Lambda) วาง CI/CD ด้วย GitHub Actions / Docker พัฒนา CLI สำหรับ scaffold โปรเจกต์ และต่อยอดบริการ Go ที่องค์กรใช้งานอยู่",
        result:
          "เริ่มโปรเจกต์ใหม่ได้รวดเร็วขึ้น ลดความคลาดเคลื่อนของสภาพแวดล้อม และดูแลระบบ legacy บน Go ได้อย่างต่อเนื่องควบคู่ระบบใหม่",
        stack: ["aws", "docker", "github-actions", "go", "nodejs", "typescript"],
      },
      {
        title: "Document OCR & Classification",
        challenge:
          "กระบวนการจัดการเอกสารยังพึ่งการอ่านและแยกประเภทด้วยมือ ทำให้ใช้เวลานานและเสี่ยงต่อความผิดพลาดเมื่อปริมาณเพิ่มขึ้น",
        solution:
          "ออกแบบ flow ของ OCR และ classification ด้วย Azure Form Recognizer แล้วส่งข้อมูลที่ได้ไปยัง backend เพื่อจัดเก็บและใช้งานต่อในระบบภายใน",
        result:
          "นำข้อมูลจากเอกสารเข้าสู่ระบบได้รวดเร็วขึ้น และลดงานด้วยมือในขั้นอ่านและแยกประเภท (รายละเอียดเชิงตัวเลขอยู่ภายใต้ระบบภายใน)",
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
          "พัฒนา backend ด้วย NestJS เป็น API gateway รับโหลดจากภายนอก แล้วจ่ายงานต่อไปยัง API ย่อยในระบบสำนักงาน พร้อมพัฒนาส่วน frontend/service ด้วย React (TypeScript) และ Node.js ตามความต้องการของระบบ",
          "ใช้ Prisma เป็นชั้นเข้าถึงฐานข้อมูลหลัก สำหรับ MySQL, PostgreSQL และ SQL Server",
          "บำรุงรักษาและต่อยอดบริการ Go จากระบบ legacy ที่องค์กรใช้งานอยู่อย่างต่อเนื่อง",
          "ดูแล workload บน AWS (EC2, ECS, Lambda) และพัฒนา CLI สำหรับ scaffold โปรเจกต์ รวมทั้งปรับปรุง workflow บน GitHub เพื่อลดเวลาเริ่มงานและความคลาดเคลื่อนของสภาพแวดล้อม",
        ],
      },
      {
        period: "ก.พ. 2567 — เม.ย. 2567",
        company: "บริษัท เรียล แฟคทอรี่ จำกัด (Real Factory Co., Ltd.)",
        location: "ดอนเมือง กรุงเทพฯ",
        role: "Front End Programmer (React)",
        highlights: [
          "พัฒนาเว็บแอปพลิเคชันด้วย React + TypeScript ภายใต้สภาพแวดล้อม LINE LIFF จัดการข้อจำกัดของ WebView และการเชื่อมต่อข้อมูลให้ใช้งานจริงได้",
          "เน้น flow การใช้งานจริงใน LINE และการจับคู่หน้าจอกับเงื่อนไขธุรกิจ มากกว่าการออกแบบส่วนติดต่อผู้ใช้ที่เน้นเพียงความสวยงาม",
        ],
      },
      {
        period: "ต.ค. 2565 — ก.พ. 2567",
        company: "บางกอกเว็บ โซลูชัน (Bangkok Web Solution)",
        location: "วังทองหลาง กรุงเทพฯ",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "ออกแบบและพัฒนา ETL ด้วย Node.js เพื่อดึงข้อมูลจากแหล่งภายนอกเฉลี่ยราว 1 ล้านรายการต่อวัน แล้วคัดกรองก่อนจัดเก็บลง MySQL",
          "แยกขั้นประมวลผลและจัดเก็บเฉพาะผลลัพธ์ที่จำเป็น เพื่อรักษาความถูกต้องภายใต้ปริมาณข้อมูลสูง",
          "เชื่อมผลประมวลผลเข้ากับระบบสะสมแต้มบนเว็บที่พัฒนาด้วย Laravel 10 และใช้งานจริงที่ reward.exat.co.th",
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
        "Primarily focused on Backend and Full Stack development, with strong expertise in building APIs, managing data pipelines, and developing features that teams rely on daily.",
        "Experienced in end-to-end ownership of internal enterprise systems — from processing large volumes of data to building deployment tools and document management systems. Comfortable working across both Backend and Frontend, with particular strength and interest in backend systems and data architecture.",
        "Primarily interested in Backend Developer and Full Stack Developer roles, aligned with prior experience. Also open to System Analyst (SA) roles as a path for further professional growth.",
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
          "laravel",
          "postgresql",
          "mysql",
          "prisma",
          "nextjs",
          "liff",
          "firebase",
          "azure",
          "github-actions",
          "linux",
          "python",
        ],
      },
    ],
    learning: {
      title: "Focus areas",
      items: [
        "Improve CI/CD and container workflow reliability (Docker, GitHub Actions, AWS)",
        "Use Power BI and operational data from maintained systems for analysis and monitoring",
        "Extend AI automation and RAG use cases within internal workflows with clear guardrails",
      ],
    },
    projects: [
      {
        title: "High-Performance Data Pipeline",
        challenge:
          "A web-based loyalty points system required high-volume external data ingestion and near-real-time processing, averaging roughly 1 million records per day. Writing all raw data directly to MySQL would degrade performance and response times.",
        solution:
          "Design and build an ETL flow with Node.js by separating ingestion, filtering, and computation; persist only required business outcomes to MySQL; integrate results into the Laravel 10 web application.",
        result:
          "Sustained ~1M records/day with stable throughput and production use in the loyalty points platform (reward.exat.co.th).",
        stack: ["php", "laravel", "nodejs", "mysql", "prisma", "sql"],
      },
      {
        title: "NestJS API Gateway (Office Systems)",
        challenge:
          "Office systems expose multiple micro APIs; direct client calls make load distribution difficult and entry-point control inconsistent.",
        solution:
          "Build a NestJS API gateway to accept incoming load and route work to internal micro APIs; use Prisma against MySQL / PostgreSQL / SQL Server as required per service.",
        result:
          "Single entry point for office traffic, clearer routing to downstream APIs, and consistent multi-database access through a unified standard.",
        stack: ["nestjs", "nodejs", "typescript", "prisma", "postgresql", "mysql"],
      },
      {
        title: "Cloud Delivery, CLI & Legacy Go",
        challenge:
          "New projects required significant time to set up inconsistent environments, relied on manual AWS release steps, and still needed ongoing maintenance of Go legacy services.",
        solution:
          "Organize AWS workloads (EC2, ECS, Lambda), implement CI/CD with GitHub Actions / Docker, deliver a project-scaffolding CLI, and continue extending in-production Go legacy services.",
        result:
          "Faster project kickoff, reduced environment drift, and continuous maintenance of Go legacy systems alongside newer delivery tooling.",
        stack: ["aws", "docker", "github-actions", "go", "nodejs", "typescript"],
      },
      {
        title: "Document OCR & Classification",
        challenge:
          "Document workflows still relied on manual reading and classification, causing delays and increasing error risk as volume grew.",
        solution:
          "Design an OCR and classification flow with Azure Form Recognizer, then route extracted data into internal backend storage and workflows.",
        result:
          "Faster document intake into systems and reduced manual read-and-sort work (exact metrics remain internal).",
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
          "Develop NestJS API gateway to accept incoming load and route work to office-system micro APIs; also build frontend/service components with React (TypeScript) and Node.js as required",
          "Use Prisma as the primary data-access layer across MySQL, PostgreSQL, and SQL Server",
          "Maintain and extend Go services built on organization legacy code still in production",
          "Manage AWS workloads (EC2, ECS, Lambda) and build a project-scaffolding CLI plus GitHub workflow improvements to reduce kickoff time and environment drift",
        ],
      },
      {
        period: "Feb 2024 — Apr 2024",
        company: "Real Factory Co., Ltd.",
        location: "Don Mueang, Bangkok",
        role: "Front End Programmer (React)",
        highlights: [
          "Develop React + TypeScript web applications within the LINE LIFF environment, addressing WebView constraints and data integration for production use",
          "Focus on in-LINE user flows and business-rule alignment rather than interface design for visual appeal alone",
        ],
      },
      {
        period: "Oct 2022 — Feb 2024",
        company: "Bangkok Web Solution",
        location: "Wang Thonglang, Bangkok",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "Design and build ETL services with Node.js to ingest ~1M external records per day, filtering before persisting to MySQL",
          "Separate processing stages and persist only required outcomes to balance volume with correctness",
          "Integrate processed data into a Laravel 10 web-based loyalty points system in production (reward.exat.co.th)",
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
