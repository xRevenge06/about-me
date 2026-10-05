export const skillGroups = {
  frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "C# / .NET", "REST API", "Express"],
  database: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "React Query", "Vercel"],
};

export const services = [
  {
    id: "web",
    no: "01",
    titleTr: "Web Uygulamaları",
    titleEn: "Web Applications",
    descTr:
      "Her gün açılan yönetim panelleri ve iç uygulamalar. Hazır tema değil; ekibin iş akışına göre yazılmış arayüzler.",
    descEn:
      "Admin panels and internal tools people open every day. Not a theme, but interfaces built around how your team actually works.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "erp",
    no: "02",
    titleTr: "ERP & CRM Sistemleri",
    titleEn: "ERP & CRM Systems",
    descTr:
      "Satış, stok, saha, hedef ve prim tek yerde. Şirketin günlük operasyonunu uçtan uca taşıyan sistemler.",
    descEn:
      "Sales, stock, field teams, targets and commissions in one place. Systems that carry a company's daily operation end to end.",
    tags: ["Node.js", ".NET", "PostgreSQL"],
  },
  {
    id: "commerce",
    no: "03",
    titleTr: "E-ticaret Altyapıları",
    titleEn: "E-commerce Platforms",
    descTr:
      "Mağaza, ödeme, stok ve sipariş akışı. İşletmenin gerçek süreçlerine göre kurulmuş, ölçeklenen altyapılar.",
    descEn:
      "Storefronts, payments, stock and order flow. Scalable platforms built around the real process, not a template.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "api",
    no: "04",
    titleTr: "API & Entegrasyon",
    titleEn: "APIs & Integrations",
    descTr:
      "REST API'ler, üçüncü parti entegrasyonlar ve otomasyon. Sistemlerin birbiriyle sorunsuz konuşması için.",
    descEn:
      "REST APIs, third-party integrations and automation, so your systems talk to each other without friction.",
    tags: ["Node.js", ".NET", "REST"],
  },
];

export const projects = [
  {
    id: 1,
    featured: true,
    categoryLabelTr: "ERP & CRM",
    categoryLabelEn: "ERP & CRM",
    titleTr: "Vitisfera",
    titleEn: "Vitisfera",
    descTr:
      "Satış, saha, hedef ve primin tek yerden yürüdüğü bir şirket yönetim sistemi. Hem ERP hem CRM olarak kullanılıyor.",
    descEn:
      "One system for sales, field teams, targets, and commissions. Used as both an ERP and a CRM.",
    techs: ["React", "TypeScript", "Node.js", "MongoDB"],
    snippet: {
      file: "vitisfera/ops.ts",
      lines: [
        "export async function closeMonth(teamId: string) {",
        "  const sales = await db.sales.byTeam(teamId)",
        "  const target = await db.targets.current(teamId)",
        "  const commission = calcPrime(sales, target)",
        "  return ledger.commit({ teamId, commission })",
        "}",
      ],
    },
  },
  {
    id: 2,
    featured: true,
    categoryLabelTr: "SaaS",
    categoryLabelEn: "SaaS",
    titleTr: "Hukuk Bürosu Yazılımı",
    titleEn: "Law Firm Software",
    descTr:
      "Müvekkil, dava dosyası ve duruşma takvimini dijitalde tutan bir büro yazılımı. Klasörle uğraşı azaltmak için yazıldı.",
    descEn:
      "Clients, case files and hearing dates in one place. Built so the firm spends less time on paper.",
    techs: ["React", "TypeScript", ".NET"],
    snippet: {
      file: "firm/HearingsController.cs",
      lines: [
        '[HttpGet("dockets/{id}")]',
        "public async Task<IActionResult> Get(Guid id) {",
        "  var file = await _cases.WithClient(id);",
        "  var next = file.Hearings.Upcoming();",
        "  return Ok(new { file.Client, next });",
        "}",
      ],
    },
  },
  {
    id: 3,
    featured: false,
    categoryLabelTr: "Masaüstü",
    categoryLabelEn: "Desktop",
    titleTr: "PerfGame",
    titleEn: "PerfGame",
    descTr: "Sistem performansını ölçüp ayarları otomatik uygulayan bir Windows uygulaması.",
    descEn: "A Windows app that measures performance and applies the right settings automatically.",
    techs: ["C#", ".NET"],
  },
  {
    id: 4,
    featured: false,
    categoryLabelTr: "Web",
    categoryLabelEn: "Web",
    titleTr: "E-ticaret Altyapıları",
    titleEn: "E-commerce Backends",
    descTr: "Mağaza, ödeme, stok. Hazır tema değil; işletmeye göre yazılmış altyapı.",
    descEn: "Store, payments, stock. Not a theme, but built around the business.",
    techs: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 5,
    featured: false,
    categoryLabelTr: "Oyun",
    categoryLabelEn: "Game",
    titleTr: "Unity Survival",
    titleEn: "Unity Survival",
    descTr: "Yapay zekâ, rastgele harita ve çok oyunculu ağ içeren 2D survival oyunu.",
    descEn: "A 2D survival game with AI, procedural maps and multiplayer.",
    techs: ["Unity", "C#"],
  },
  {
    id: 6,
    featured: false,
    categoryLabelTr: "Web",
    categoryLabelEn: "Web",
    titleTr: "Oyun Sunucu Panelleri",
    titleEn: "Game Server Panels",
    descTr: "Oyuncu istatistikleri, market ve yönetim. Sunucunun web tarafı.",
    descEn: "Player stats, marketplace and admin. The web side of the server.",
    techs: ["Node.js", "React", "MySQL"],
  },
];

export const process = [
  {
    no: "01",
    titleTr: "Keşif",
    titleEn: "Discovery",
    descTr: "İş akışını ve gerçek problemi anlıyorum. Neyi otomatikleştireceğimizi birlikte netleştiriyoruz.",
    descEn: "I learn the workflow and the real problem, and we agree on exactly what to automate.",
  },
  {
    no: "02",
    titleTr: "Geliştirme",
    titleEn: "Build",
    descTr: "Parça parça ilerliyorum. İlerlemeyi her hafta canlı olarak görüyorsunuz.",
    descEn: "I ship in iterations, so you see working progress every week, with no black box.",
  },
  {
    no: "03",
    titleTr: "Yayına Alma",
    titleEn: "Launch",
    descTr: "Kurulum, veri taşıma ve ekip eğitimi. Sistem ilk günden sorunsuz çalışır.",
    descEn: "Deploy, data migration and team onboarding so it runs smoothly from day one.",
  },
  {
    no: "04",
    titleTr: "Destek",
    titleEn: "Support",
    descTr: "Yayından sonra da buradayım. Sistem büyüdükçe birlikte geliştiriyoruz.",
    descEn: "I stay on after launch, and the system keeps evolving as the business grows.",
  },
];

export const experiences = [
  {
    id: 1,
    type: "work" as const,
    start: "2020",
    endTr: "Devam",
    endEn: "Present",
    roleTr: "Freelance Full-Stack Developer",
    roleEn: "Freelance Full-Stack Developer",
    companyTr: "Bağımsız",
    companyEn: "Independent",
    locationTr: "Ankara / uzaktan",
    locationEn: "Ankara / remote",
    linesTr: [
      "İşletmelere özel web uygulamaları, yönetim panelleri ve API'ler geliştiriyorum.",
      "ERP, CRM, e-ticaret ve sektöre özel işler. Teslim ettiğim iş 100'ü geçti.",
    ],
    linesEn: [
      "I build custom web apps, admin panels and APIs for businesses.",
      "ERP, CRM, commerce and sector-specific work. 100+ projects delivered.",
    ],
  },
  {
    id: 2,
    type: "education" as const,
    start: "2025",
    endTr: "Devam",
    endEn: "Present",
    roleTr: "Web Tasarımı ve Kodlama",
    roleEn: "Web Design & Coding",
    companyTr: "Ankara Üniversitesi",
    companyEn: "Ankara University",
    locationTr: "Ankara",
    locationEn: "Ankara",
    linesTr: ["Önlisans. Web, veritabanı ve yazılım geliştirme."],
    linesEn: ["Associate's degree. Web, databases and software development."],
  },
];

export const focus = [
  { labelTr: "Web Uygulamaları", labelEn: "Web Applications", value: 35 },
  { labelTr: "ERP & CRM", labelEn: "ERP & CRM", value: 30 },
  { labelTr: "E-ticaret", labelEn: "E-commerce", value: 20 },
  { labelTr: "API & Entegrasyon", labelEn: "APIs & Integrations", value: 15 },
];

export const industries = {
  tr: ["Hukuk", "İnşaat", "Sağlık", "Perakende", "E-ticaret", "Lojistik", "Eğitim", "Üretim", "Oyun", "Finans"],
  en: ["Law", "Construction", "Healthcare", "Retail", "E-commerce", "Logistics", "Education", "Manufacturing", "Gaming", "Finance"],
};

export const stats = [
  { to: 6, suffix: "+", labelTr: "Yıl deneyim", labelEn: "Years of experience" },
  { to: 100, suffix: "+", labelTr: "Teslim edilen proje", labelEn: "Projects delivered" },
  { to: 10, suffix: "+", labelTr: "Farklı sektör", labelEn: "Industries served" },
  { to: 24, suffix: "h", labelTr: "Ortalama yanıt", labelEn: "Avg. response time" },
];

export const social = {
  email: "tufankiraz@revarkyazilim.com",
  phone: "+905386886241",
  phoneDisplay: "+90 538 688 62 41",
  github: "https://github.com/xRevenge06",
  githubHandle: "xRevenge06",
  linkedin: "https://linkedin.com/in/tufan-kiraz-920580387",
  linkedinHandle: "tufan-kiraz",
  website: "https://revarkyazilim.com",
  websiteDisplay: "revarkyazilim.com",
  location: "Ankara, Türkiye",
};
