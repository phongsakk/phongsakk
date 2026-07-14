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
  projects: string[];
  languages: {
    name: string;
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
      projects: "ผลงานที่คัดสรร",
      github: "GitHub",
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
        "มีประสบการณ์พัฒนาเว็บแอปพลิเคชันและระบบงาน โดยรับผิดชอบงานทั้งส่วน Frontend, Backend และ Server",
        "คุ้นเคยกับการใช้ React (TypeScript), Node.js และบริการบน AWS เป็นหลัก และมีการใช้ Go กับ Python ในงานบางส่วนตามความเหมาะสมของโปรเจกต์",
        "สนใจงานด้าน Backend เป็นอันดับแรก รองลงมาคือ Full Stack และ System Analyst",
        "ปัจจุบันกำลังศึกษาและใช้งานเบื้องต้นในด้าน DevOps, การวิเคราะห์ข้อมูล และ AI automation เพื่อต่อยอดจากงานที่มีอยู่",
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
        "DevOps — Docker, GitHub Actions, AWS Cloud, Firebase (ใช้งานเบื้องต้น / กำลังพัฒนา)",
        "Power BI / Data (ใช้งานเบื้องต้น)",
        "AI Automation (ใช้งานเบื้องต้น)",
      ],
    },
    projects: [
      "พัฒนา API และระบบธุรกิจด้วย TypeScript / Node.js",
      "สร้างเว็บและแอปบน LINE LIFF รวมถึงระบบจัดการเรียนรู้ (LMS) ด้วย React",
      "ใช้งานระบบค้นหาและถาม–ตอบด้วย AI ในระดับเบื้องต้น (Azure OpenAI / AI Search / RAG)",
      "ตั้งค่า CI/CD และ cloud บน AWS รวมถึงใช้งาน Docker ในระดับเบื้องต้น",
      "พัฒนาเครื่องมือภายในทีม เช่น CLI สำหรับเริ่มโปรเจกต์ และเอกสาร API",
    ],
    languages: [
      {
        name: "ไทย",
        speaking: "เจ้าของภาษา",
        reading: "เจ้าของภาษา",
        writing: "เจ้าของภาษา",
      },
      {
        name: "อังกฤษ",
        speaking: "พอใช้",
        reading: "ดี",
        writing: "พอใช้",
      },
    ],
    experience: [
      {
        period: "เม.ย. 2567 — ปัจจุบัน",
        company: "บริษัท ติงค์ บิตท์ จำกัด (Think Bit Co., Ltd.)",
        location: "วังทองหลาง กรุงเทพฯ",
        role: "Full Stack Programmer",
        highlights: [
          "พัฒนาระบบด้วย React (TypeScript) + Node.js ครอบคลุม Frontend / Backend / Server",
          "จัดการ cloud infrastructure ด้วย AWS Services เช่น EC2, ECS และ Lambda",
          "มีส่วนร่วมกับเครื่องมือภายในทีม เช่น CLI สำหรับ scaffold โปรเจกต์ และการจัดระเบียบ workflow บน GitHub",
        ],
      },
      {
        period: "ก.พ. 2567 — เม.ย. 2567",
        company: "บริษัท เรียล แฟคทอรี่ จำกัด (Real Factory Co., Ltd.)",
        location: "ดอนเมือง กรุงเทพฯ",
        role: "Front End Programmer (React)",
        highlights: [
          "พัฒนาเว็บแอปด้วย React + TypeScript",
          "เน้นการใช้งานบน LINE LIFF (LINE Front-end Framework)",
        ],
      },
      {
        period: "ต.ค. 2565 — ก.พ. 2567",
        company: "บางกอกเว็บ โซลูชัน (Bangkok Web Solution)",
        location: "วังทองหลาง กรุงเทพฯ",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "ออกแบบและพัฒนาระบบคำนวณที่นำเข้าข้อมูลจากฐานข้อมูลภายนอกเฉลี่ยวันละประมาณ 1 ล้านรายการ",
          "คัดกรองข้อมูลที่ต้องการคำนวณและบันทึกลง MySQL",
          "พัฒนาเว็บจัดการข้อมูลด้วย PHP Laravel 10",
        ],
      },
    ],
    education: [
      {
        period: "กำลังศึกษา — คาดว่าจบ พ.ศ. 2571",
        school: "มหาวิทยาลัยรามคำแหง",
        degree: "วท.บ. วิทยาการคอมพิวเตอร์",
        detail: "คณะวิทยาศาสตร์",
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
      jobInterest: "Roles of interest",
      experience: "Work experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      learning: "Additional interests",
      projects: "Selected work",
      github: "GitHub",
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
        "Experienced in building web applications and business systems across frontend, backend, and server work.",
        "Primarily works with React (TypeScript), Node.js, and AWS, and uses Go and Python when they fit the project.",
        "Most interested in Backend roles, followed by Full Stack and System Analyst.",
        "Currently studying and using DevOps, data analysis, and AI automation at an introductory level to build on existing work.",
      ],
    },
    jobInterests: ["1. Backend", "2. Full Stack", "3. System Analyst (SA)"],
    skillGroups: [
      {
        label: "Core",
        items: ["react", "typescript", "nodejs", "php", "laravel", "mysql", "aws", "liff"],
      },
      {
        label: "Programming",
        items: ["typescript", "javascript", "go", "python", "php", "sql"],
      },
      {
        label: "Tools",
        items: ["git", "linux", "docker", "github-actions", "cloud", "postman"],
      },
      {
        label: "Introductory",
        items: ["azure", "openai", "powerbi"],
      },
    ],
    learning: {
      title: "Additional interests",
      items: [
        "DevOps — Docker, GitHub Actions, AWS Cloud, Firebase (introductory / in progress)",
        "Power BI / Data (introductory)",
        "AI Automation (introductory)",
      ],
    },
    projects: [
      "Built business APIs and systems with TypeScript / Node.js",
      "Developed web and LINE LIFF apps, including an LMS with React",
      "Used AI search and Q&A systems at an introductory level (Azure OpenAI / AI Search / RAG)",
      "Set up CI/CD and AWS cloud, with introductory Docker use",
      "Built internal team tooling such as project scaffolding CLIs and API documentation",
    ],
    languages: [
      {
        name: "Thai",
        speaking: "Native",
        reading: "Native",
        writing: "Native",
      },
      {
        name: "English",
        speaking: "Fair",
        reading: "Good",
        writing: "Fair",
      },
    ],
    experience: [
      {
        period: "Apr 2024 — Present",
        company: "Think Bit Co., Ltd.",
        location: "Wang Thonglang, Bangkok",
        role: "Full Stack Programmer",
        highlights: [
          "Built systems with React (TypeScript) + Node.js across frontend, backend, and server",
          "Managed cloud infrastructure with AWS services such as EC2, ECS, and Lambda",
          "Contributed to internal tooling, including project-scaffolding CLIs and GitHub workflow organization",
        ],
      },
      {
        period: "Feb 2024 — Apr 2024",
        company: "Real Factory Co., Ltd.",
        location: "Don Mueang, Bangkok",
        role: "Front End Programmer (React)",
        highlights: [
          "Built web apps with React + TypeScript",
          "Focused on LINE LIFF (LINE Front-end Framework)",
        ],
      },
      {
        period: "Oct 2022 — Feb 2024",
        company: "Bangkok Web Solution",
        location: "Wang Thonglang, Bangkok",
        role: "Programmer (PHP / Node.js)",
        highlights: [
          "Designed and developed computation systems ingesting about 1M external DB records per day",
          "Filtered relevant records and stored results in MySQL",
          "Built data management websites with PHP Laravel 10",
        ],
      },
    ],
    education: [
      {
        period: "In progress — expected 2028",
        school: "Ramkhamhaeng University",
        degree: "B.Sc. Computer Science",
        detail: "Faculty of Science",
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
