export type Locale = "th" | "en";

export const locales: Locale[] = ["th", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type TechId =
  | "react"
  | "typescript"
  | "javascript"
  | "nodejs"
  | "php"
  | "laravel"
  | "mysql"
  | "aws"
  | "liff"
  | "go"
  | "python"
  | "sql"
  | "git"
  | "linux"
  | "docker"
  | "github-actions"
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
    challenge: string;
    solution: string;
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
      challenge: "โจทย์ทางเทคนิค",
      solution: "แนวทางแก้ปัญหา",
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
      summary: [
        "Full Stack / Backend Developer ที่ทำงานสายเทคโนโลยีแบบเต็มเวลาควบคู่กับการเรียนปริญญาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยรามคำแหงได้อย่างต่อเนื่อง สะท้อนถึงวินัย การบริหารเวลา และความรับผิดชอบสูงต่อผลงาน",
        "มีประสบการณ์พัฒนาระบบองค์กรครบวงจร ทั้ง Frontend, Backend และ Cloud โดยใช้ React (TypeScript), Node.js และ AWS เป็นหลัก พร้อมปรับใช้ Go และ Python ตามความเหมาะสมของโจทย์",
        "พร้อมเติบโตร่วมกับองค์กรในระยะยาว โดยมุ่งเน้นตำแหน่ง Backend เป็นอันดับแรก รองลงมาคือ Full Stack และ System Analyst พร้อมพัฒนาทักษะ DevOps, Data และ AI automation อย่างต่อเนื่อง",
      ],
    },
    jobInterests: ["1. Backend", "2. Full Stack", "3. System Analyst (SA)"],
    skillGroups: [
      {
        label: "ทักษะหลัก",
        items: ["react", "typescript", "nodejs", "php", "laravel", "mysql", "aws", "liff"],
      },
      {
        label: "ภาษาโปรแกรม",
        items: ["typescript", "javascript", "go", "python", "php", "sql"],
      },
      {
        label: "เครื่องมือ",
        items: ["git", "linux", "docker", "github-actions", "cloud", "postman"],
      },
      {
        label: "ทักษะเบื้องต้น",
        items: ["azure", "openai", "powerbi"],
      },
    ],
    learning: {
      title: "ความสนใจเพิ่มเติม",
      items: [
        "DevOps — Docker, GitHub Actions, AWS Cloud, Firebase (ระดับเบื้องต้น / กำลังพัฒนา)",
        "Power BI / Data (ระดับเบื้องต้น)",
        "AI Automation (ระดับเบื้องต้น)",
      ],
    },
    projects: [
      {
        title: "High-Performance Data Pipeline",
        challenge:
          "ต้องประมวลผลข้อมูลจากฐานข้อมูลภายนอกปริมาณสูงเฉลี่ยวันละประมาณ 1 ล้านรายการ ให้ทันเวลาใช้งานจริง โดยยังคงความถูกต้องของผลคำนวณ และควบคุมโหลดที่ลงฐานข้อมูลปลายทาง",
        solution:
          "ออกแบบ pipeline การนำเข้า คัดกรอง และคำนวณด้วย PHP / Node.js จากนั้นบันทึกเฉพาะข้อมูลที่จำเป็นลง MySQL และพัฒนาเว็บจัดการผลลัพธ์ด้วย Laravel เพื่อให้ทีมตรวจสอบและติดตามสถานะได้อย่างมั่นคง",
        stack: ["php", "laravel", "nodejs", "mysql", "sql"],
      },
      {
        title: "Cloud & DevOps Infrastructure",
        challenge:
          "ระบบบริการหลักขององค์กรต้องการการ deploy ที่สม่ำเสมอ ลดขั้นตอนแมนนวล และรองรับการขยายบน AWS โดยทีมต้องเริ่มโปรเจกต์ใหม่ได้เร็วและมาตรฐานเดียวกัน",
        solution:
          "ดูแล workload บน AWS (เช่น EC2, ECS, Lambda) วางแนวทาง CI/CD ด้วย GitHub Actions / Docker และพัฒนา CLI สำหรับ scaffold โปรเจกต์ เพื่อลดเวลา setup และลดความคลาดเคลื่อนของสภาพแวดล้อม",
        stack: ["aws", "docker", "github-actions", "cloud", "nodejs", "typescript"],
      },
      {
        title: "AI-Powered Internal Tools",
        challenge:
          "ทีมต้องการเครื่องมือภายในที่ช่วยค้นหาและถาม–ตอบข้อมูลองค์กรได้เร็วขึ้น โดยเริ่มใช้ AI อย่างระมัดระวังและควบคุมขอบเขตการใช้งาน",
        solution:
          "ทดลองนำ Azure OpenAI / AI Search และแนวทาง RAG มาใช้กับเครื่องมือภายในองค์กรในระดับเบื้องต้น เพื่อเพิ่มประสิทธิภาพการเข้าถึงข้อมูล โดยไม่เปิดเผยระบบหรือข้อมูลภายนอก",
        stack: ["azure", "openai", "nodejs", "typescript"],
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
          "รับผิดชอบพัฒนาระบบงานหลักด้วย React (TypeScript) + Node.js ครอบคลุม Frontend / Backend / Server ในสภาพแวดล้อมองค์กร",
          "ดูแลและปรับปรุงโครงสร้าง cloud บน AWS (EC2, ECS, Lambda) เพื่อให้ระบบเสถียรและรองรับการขยายตัว",
          "พัฒนา CLI สำหรับ scaffold โปรเจกต์ และจัดระเบียบ workflow บน GitHub ช่วยลดเวลาเริ่มงานของทีมและยกระดับมาตรฐานการส่งมอบ",
        ],
      },
      {
        period: "ก.พ. 2567 — เม.ย. 2567",
        company: "บริษัท เรียล แฟคทอรี่ จำกัด (Real Factory Co., Ltd.)",
        location: "ดอนเมือง กรุงเทพฯ",
        role: "Front End Programmer (React)",
        highlights: [
          "พัฒนาเว็บแอปด้วย React + TypeScript สำหรับการใช้งานจริงบน LINE LIFF",
          "ส่งมอบหน้าจอที่เน้นความเสถียรของ UX ภายใน LINE และเชื่อมต่อกับเงื่อนไขธุรกิจของระบบ",
        ],
      },
      {
        period: "ต.ค. 2565 — ก.พ. 2567",
        company: "บางกอกเว็บ โซลูชัน (Bangkok Web Solution)",
        location: "วังทองหลาง กรุงเทพฯ",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "ออกแบบและพัฒนาระบบคำนวณที่นำเข้าข้อมูลจากแหล่งภายนอกเฉลี่ยประมาณ 1 ล้านรายการต่อวัน",
          "คัดกรองและจัดเก็บผลลัพธ์ลง MySQL อย่างมีประสิทธิภาพ พร้อมรองรับการตรวจสอบย้อนหลัง",
          "พัฒนาเว็บจัดการข้อมูลด้วย PHP Laravel 10 เพื่อสนับสนุนการติดตามและการดำเนินงานของทีมธุรกิจ",
        ],
      },
    ],
    education: [
      {
        period: "กำลังศึกษา — คาดว่าจบ พ.ศ. 2571",
        school: "มหาวิทยาลัยรามคำแหง",
        degree: "วท.บ. วิทยาการคอมพิวเตอร์",
        detail: "คณะวิทยาศาสตร์ · เรียนควบคู่การทำงาน Full-time",
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
      about: "Professional Summary",
      jobInterest: "Roles of Interest",
      experience: "Work Experience",
      education: "Education",
      skills: "Technical Skills",
      languages: "Language Proficiency",
      learning: "Additional Focus Areas",
      projects: "Selected Internal Systems",
      github: "GitHub",
      challenge: "Technical Challenge",
      solution: "Solution",
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
      summary: [
        "Full Stack / Backend Developer who balances full-time technology roles with ongoing Computer Science studies at Ramkhamhaeng University — demonstrating discipline, time management, and strong ownership of delivery.",
        "Builds end-to-end enterprise systems across frontend, backend, and cloud, primarily with React (TypeScript), Node.js, and AWS, while applying Go and Python when the problem calls for it.",
        "Seeking long-term growth with an organization, prioritizing Backend roles, followed by Full Stack and System Analyst, while continuously developing DevOps, data, and AI automation skills.",
      ],
    },
    jobInterests: ["1. Backend", "2. Full Stack", "3. System Analyst (SA)"],
    skillGroups: [
      {
        label: "Core",
        items: ["react", "typescript", "nodejs", "php", "laravel", "mysql", "aws", "liff"],
      },
      {
        label: "Programming Languages",
        items: ["typescript", "javascript", "go", "python", "php", "sql"],
      },
      {
        label: "Tools",
        items: ["git", "linux", "docker", "github-actions", "cloud", "postman"],
      },
      {
        label: "Foundational",
        items: ["azure", "openai", "powerbi"],
      },
    ],
    learning: {
      title: "Additional Focus Areas",
      items: [
        "DevOps — Docker, GitHub Actions, AWS Cloud, Firebase (foundational / in progress)",
        "Power BI / Data (foundational)",
        "AI Automation (foundational)",
      ],
    },
    projects: [
      {
        title: "High-Performance Data Pipeline",
        challenge:
          "Process approximately 1 million external records per day with reliable computation outcomes, on-time delivery for business use, and controlled write load to the destination database.",
        solution:
          "Designed an ingestion, filtering, and computation pipeline with PHP / Node.js, persisted only required results to MySQL, and delivered a Laravel-based operations UI for monitoring and verification.",
        stack: ["php", "laravel", "nodejs", "mysql", "sql"],
      },
      {
        title: "Cloud & DevOps Infrastructure",
        challenge:
          "Core services required consistent releases, fewer manual steps, AWS scalability, and a faster, standardized way for the team to start new projects.",
        solution:
          "Supported AWS workloads (EC2, ECS, Lambda), established CI/CD practices with GitHub Actions / Docker, and built an internal scaffolding CLI to reduce setup time and environment drift.",
        stack: ["aws", "docker", "github-actions", "cloud", "nodejs", "typescript"],
      },
      {
        title: "AI-Powered Internal Tools",
        challenge:
          "The organization needed internal tools to speed up enterprise information lookup and Q&A, while introducing AI carefully within controlled boundaries.",
        solution:
          "Applied Azure OpenAI / AI Search and RAG patterns at a foundational level to internal tools, improving information access without exposing proprietary systems externally.",
        stack: ["azure", "openai", "nodejs", "typescript"],
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
          "Own core product development with React (TypeScript) + Node.js across frontend, backend, and server layers in an enterprise setting",
          "Maintain and improve AWS infrastructure (EC2, ECS, Lambda) for stable operations and growth readiness",
          "Built an internal project-scaffolding CLI and strengthened GitHub workflows, cutting team ramp-up time and raising delivery consistency",
        ],
      },
      {
        period: "Feb 2024 — Apr 2024",
        company: "Real Factory Co., Ltd.",
        location: "Don Mueang, Bangkok",
        role: "Front End Programmer (React)",
        highlights: [
          "Delivered React + TypeScript web apps for production use on LINE LIFF",
          "Focused on reliable in-LINE UX and integration with business workflow requirements",
        ],
      },
      {
        period: "Oct 2022 — Feb 2024",
        company: "Bangkok Web Solution",
        location: "Wang Thonglang, Bangkok",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "Designed and built computation systems ingesting ~1M external records per day",
          "Filtered and stored outcomes efficiently in MySQL with traceability for later review",
          "Developed data operations websites with PHP Laravel 10 to support business monitoring",
        ],
      },
    ],
    education: [
      {
        period: "In progress — expected 2028",
        school: "Ramkhamhaeng University",
        degree: "B.Sc. Computer Science",
        detail: "Faculty of Science · Studying while working full-time",
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
