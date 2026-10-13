export const content = {
  en: {
    pageTitle: 'RICARDO_XU | AI APPLICATION ENGINEER',
    pageDescription: 'Ricardo Xu (许灏), AI application engineer in Shenzhen. RAG systems, LLM integration, full-stack web and mobile development, and AI products.',
    languageLabel: 'Website language',
    level: 'LEVEL', status: 'SYSTEM_STATUS', online: 'ONLINE', experience: 'EXP',
    profile: 'SYSTEM_PROFILE_AUTHORIZED',
    headline: ['AI APPLICATION', 'ENGINEER'], headlineSecondary: '& FULLSTACK DEV',
    identity: 'RICARDO XU / 许灏 · SHENZHEN',
    intro: 'Early-career AI application engineer with a Master of Information Technology Management background at HKBU. Independently delivered RAG-based assistance for power-sector safety workflows and AI analysis for oncology records. Building applications from requirements to deployment with Claude Code and Codex, with traceable AI suggestions and human review.',
    badges: ['RAG_SYSTEMS', 'LLM_APPLICATIONS', 'FULLSTACK_DEV'],
    avatarAlt: 'Pixel-art portrait of Ricardo Xu', verified: 'VERIFIED_USER',
    skillsHeading: 'CORE_ATTRIBUTES', historyHeading: 'MISSION_HISTORY',
    skills: [
      { label: 'LLM API Integration', detail: 'OpenAI / Gemini / DashScope Qwen, including vision models' },
      { label: 'RAG & Prompt Engineering', detail: 'Document parsing, chunking, source tracing, structured outputs and fail-closed governance' },
      { label: 'Coding Agents', detail: 'Claude Code / Codex / Cursor; Rules, MCP and Skills' },
      { label: 'Backend & Data', detail: 'Python (FastAPI / Flask), Node.js, MySQL / PostgreSQL / Redis' },
      { label: 'Web & Mobile', detail: 'TypeScript, Vue / React / Next.js, React Native (Expo)' },
      { label: 'Delivery & Quality', detail: 'Docker, GitLab CI/CD, pytest, mypy / ruff, OpenAPI contracts' }
    ],
    jobs: [
      {
        company: 'Zhuhai Institute of Advanced Technology', role: 'Research Intern · Frontier Scientific Computing Center', date: '2026.06 - Present',
        highlights: [
          'Power-sector work and operation permit system: read-only RAG retrieval and rule pre-checks, traceable risk suggestions and human final approval. Built a governed knowledge-update workflow that blocks publication without approval.',
          'Separated approval, issuance and execution responsibilities; validated a 22-step operation workflow on real hardware. Added 93 negative security cases, cleared mypy type errors and passed 650+ regression cases.',
          'COIOS oncology community app: independently built the tumor-record and AI-analysis module with Qwen PDF/vision extraction, date-normalized biomarkers, structured analysis and reports in three languages.',
          'Delivered asynchronous jobs, timeout fallback, idempotent writes and a doctor-review workflow, plus 10+ Expo mobile screens for uploads, analysis status, trends, reports and medical timelines.'
        ]
      },
      { company: 'Shenzhen iFly Control Technology', role: 'Software Development Intern', date: '2025.06 - 2025.08', highlights: ['Led requirements analysis and core C++/Qt development for ground testing software. Systematic testing improved product stability by approximately 20%.'] },
      { company: 'Fengniao Aviation (SF Group)', role: 'R&D Intern', date: '2023.03 - 2023.05', highlights: ['Developed C++/Qt UAV ground-station software and simulation communication protocols, improving simulation accuracy by 15%. The product passed acceptance and was delivered to the relevant national authorities.'] },
      { company: 'Daikin (China) · Shenzhen R&D', role: 'Data Analysis Intern', date: '2022.07 - 2022.09', highlights: ['Led wind-speed analysis using Fourier, wavelet and Hilbert-Huang transforms, with Python modeling and visualization.'] }
    ],
    educationHeading: 'ACADEMIC_CREDENTIALS',
    education: [
      { school: 'Hong Kong Baptist University', degree: 'Master of Information Technology Management', date: '2025.09 - 2026.10', details: 'Research focus: Knowledge and Information Management.' },
      { school: 'Zhuhai College of Jilin University', degree: 'B.S. in Data Science and Big Data Technology', date: '2019.09 - 2023.07', details: 'Outstanding graduation thesis on natural wind characteristics using the Hilbert-Huang Transform. 2022 Mathematical Contest in Modeling: Successful Participant Award.' }
    ],
    inventoryHeading: 'INVENTORY_MODULES', projectsHeading: 'PROJECT_ARCHIVE', recentRepos: 'RECENT_REPOS',
    reposUnavailable: 'GitHub repositories could not be loaded.', viewRepos: 'View repositories on GitHub', loadingRepos: 'Loading GitHub repositories',
    noDescription: 'No description provided for this module.', data: 'DATA', openProject: 'VIEW PROJECT',
    repoDescriptions: {
      'RicardoXu2001.github.io': 'Personal portfolio website with experience, skills and project links.',
      GlobalHiringPlan: 'Mini-game project.',
      ARG_YiPian: 'An alternate reality game (ARG) project.',
      'X-Z-Love-Story': 'A mini program recording Ricardo and Aurora’s romantic moments.',
      '-ZhiTou-Intelligent-Investment-Analysis-Platform': 'An investment analysis platform with a Chinese-language interface.',
      ImageAIPlatform: 'AI image generation SaaS: prompts, asynchronous jobs, image assets and credits billing. OpenAI Images API, BullMQ/Redis, PostgreSQL/Prisma and Stripe payments.',
      FlavorHub: 'A recipe-sharing community platform.',
      'Primeval-Heresy': 'Card game demo with a frontend state machine and Gemini 3 Pro dialogue and decisions. Prompt engineering maintains context across long conversations.',
      qgroundcontrol: 'QGroundControl UAV ground control station.'
    },
    footer: 'ALL RIGHTS RESERVED'
  },
  zh: {
    pageTitle: '许灏 RICARDO_XU | AI 应用工程师',
    pageDescription: '许灏，深圳 AI 应用工程师。专注 RAG 检索增强、大模型集成、全栈与移动端开发，以及 AI 产品落地。',
    languageLabel: '网站语言',
    level: '等级', status: '系统状态', online: '在线', experience: '经验',
    profile: '个人档案已授权',
    headline: ['AI 应用', '工程师'], headlineSecondary: '& AI 全栈开发',
    identity: '许灏 / RICARDO XU · 深圳',
    intro: '香港浸会大学 IT 管理应届硕士，聚焦 AI 应用的工程化落地。实习中独立交付电力“双票”系统的 RAG 型 LLM 辅助功能，以及癌症患者社区的肿瘤档案与 AI 分析模块。日常以 Claude Code / Codex 驱动开发，具备从需求分析到部署上线的全链路能力，注重 AI 建议可追溯与人工终审。',
    badges: ['RAG 检索增强', '大模型应用', '全栈开发'],
    avatarAlt: '许灏的游戏像素风头像', verified: '身份已验证',
    skillsHeading: '核心技能', historyHeading: '实习经历',
    skills: [
      { label: '大模型 API 集成', detail: 'OpenAI / Gemini / DashScope 通义千问，含视觉模型' },
      { label: 'RAG 与 Prompt 工程', detail: '文档解析、分块、检索溯源、结构化输出；未获批准即拒绝发布的治理机制' },
      { label: 'AI 编程智能体', detail: 'Claude Code / Codex / Cursor；Rules / MCP / Skills' },
      { label: '后端与数据库', detail: 'Python（FastAPI / Flask）、Node.js、MySQL / PostgreSQL / Redis' },
      { label: '前端与移动端', detail: 'TypeScript、Vue / React / Next.js、React Native（Expo）' },
      { label: '工程交付与质量', detail: 'Docker、GitLab CI/CD、pytest、mypy / ruff、OpenAPI 契约驱动开发' }
    ],
    jobs: [
      {
        company: '珠海中科先进技术研究院', role: '实习研究员 · 前沿科学计算中心', date: '2026.06 - 至今',
        highlights: [
          '电力“双票”系统：构建只读型 RAG 规程检索与规则预审，输出可追溯的风险提示，保留人工终审。落地规程知识热更新闭环，未获批准即拒绝发布。',
          '主导审批、签发、执行三权分立改造，真机验证 22 步操作票全链闭环。补齐 93 项安全负向用例，mypy 类型错误清零，650+ 回归用例全部通过。',
          'COIOS 癌症患者社区：独立负责肿瘤档案与 AI 分析模块，以通义千问完成 PDF / 视觉材料提取、按日期归一化的标志物入库、结构化分析与三语报告。',
          '实现异步队列、超时兜底、幂等写入与医生审核流程；交付 10+ 个 Expo 移动端页面，覆盖上传、分析状态、趋势图、报告与医学事件时间轴。'
        ]
      },
      { company: '深圳市艾飞智控科技有限公司', role: '软件开发实习生', date: '2025.06 - 2025.08', highlights: ['主导地面检测软件需求分析与 C++ / Qt 核心开发，通过系统化测试提升产品稳定性约 20%。'] },
      { company: '丰鸟航空科技有限公司（顺丰旗下）', role: '研发实习生', date: '2023.03 - 2023.05', highlights: ['参与 C++ / Qt 无人机地面站软件与仿真通信协议开发，模拟准确性提升 15%；产品通过验收并交付国家相关部门。'] },
      { company: '大金（中国）· 深圳研发分公司', role: '数据分析实习生', date: '2022.07 - 2022.09', highlights: ['主导风速数据分析课题，使用傅里叶、小波及希尔伯特-黄变换，完成 Python 建模与可视化。'] }
    ],
    educationHeading: '教育经历',
    education: [
      { school: '香港浸会大学', degree: 'IT 管理硕士', date: '2025.09 - 2026.10', details: '研究方向：知识及资讯管理（Knowledge and Information Management）。' },
      { school: '吉林大学珠海学院', degree: '数据科学与大数据技术本科', date: '2019.09 - 2023.07', details: '《基于希尔伯特-黄变换对自然风特性的研究》获优秀毕业论文；2022 美国大学生数学建模大赛 S 奖。' }
    ],
    inventoryHeading: '项目模块', projectsHeading: '项目档案', recentRepos: '近期仓库',
    reposUnavailable: '暂时无法加载 GitHub 项目列表。', viewRepos: '前往 GitHub 查看项目', loadingRepos: '正在加载 GitHub 项目',
    noDescription: '此项目暂未提供说明。', data: '数据', openProject: '查看项目',
    repoDescriptions: {
      'RicardoXu2001.github.io': '个人作品网站，展示实习经历、技能与项目链接。',
      GlobalHiringPlan: '小游戏项目。',
      ARG_YiPian: '替代现实游戏（ARG）项目。',
      'X-Z-Love-Story': '记录 Ricardo 与 Aurora 浪漫时刻的小程序。',
      '-ZhiTou-Intelligent-Investment-Analysis-Platform': '提供中文界面的投资分析平台。',
      ImageAIPlatform: 'AI 生图 SaaS：覆盖 Prompt 输入、异步生图、图片资产与 Credits 计费，集成 OpenAI Images API、BullMQ / Redis、PostgreSQL / Prisma 和 Stripe 支付。',
      FlavorHub: '食谱分享社区平台。',
      'Primeval-Heresy': '卡牌游戏 Demo：纯前端状态机与 Gemini 3 Pro 动态对话、决策，通过 Prompt 工程维持长对话上下文。',
      qgroundcontrol: 'QGroundControl 无人机地面控制站。'
    },
    footer: '版权所有'
  }
};
