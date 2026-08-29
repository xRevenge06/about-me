export const skillGroups = {
  frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "C# / .NET", "REST API", "Express"],
  database: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "React Query", "Vercel"],
};

export const projects = [
  {
    id: 1,
    category: "erp",
    titleTr: "Vitisfera",
    titleEn: "Vitisfera",
    categoryLabelTr: "ERP & CRM",
    categoryLabelEn: "ERP & CRM",
    descTr:
      "Satış, saha, hedef ve primin tek yerden yürüdüğü bir şirket yönetim sistemi. Hem ERP hem CRM olarak kullanılıyor.",
    descEn:
      "One system for sales, field teams, targets, and commissions. Used as both ERP and CRM.",
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
    category: "saas",
    titleTr: "Hukuk bürosu yazılımı",
    titleEn: "Law firm software",
    categoryLabelTr: "SaaS",
    categoryLabelEn: "SaaS",
    descTr:
      "Müvekkil, dava dosyası ve duruşma takvimini dijitalde tutan bir büro yazılımı. Klasörle uğraşı azaltmak için yazıldı.",
    descEn:
      "Clients, case files, and hearing dates in one place. Built so the firm spends less time on paper.",
    techs: ["React", "TypeScript", ".NET"],
    snippet: {
      file: "firm/HearingsController.cs",
      lines: [
        "[HttpGet(\"dockets/{id}\")]",
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
    category: "product",
    titleTr: "PerfGame",
    titleEn: "PerfGame",
    categoryLabelTr: "Masaüstü",
    categoryLabelEn: "Desktop",
    descTr: "Sistem performansını ölçüp ayarları uygulayan bir Windows uygulaması.",
    descEn: "A Windows app that measures performance and applies the right settings.",
    techs: ["C#", ".NET"],
    snippet: {
      file: "PerfGame/Tuner.cs",
      lines: [
        "public void Apply(Profile p) {",
        "  var snap = Win32.ReadPower();",
        "  Gpu.SetLatency(p.LowLatency);",
        "  Cpu.ParkCores(p.ParkUnused);",
        "  Log.Info($\"applied {snap.Score} → {p.Name}\");",
        "}",
      ],
    },
  },
  {
    id: 4,
    category: "web",
    titleTr: "E-ticaret altyapıları",
    titleEn: "E-commerce backends",
    categoryLabelTr: "Web",
    categoryLabelEn: "Web",
    descTr: "Mağaza, ödeme, stok. Hazır tema değil; işletmeye göre yazılmış altyapı.",
    descEn: "Store, payments, stock. Not a theme — built around the business.",
    techs: ["React", "Node.js", "PostgreSQL"],
    snippet: {
      file: "shop/checkout.ts",
      lines: [
        "export async function checkout(cart: Cart) {",
        "  const stock = await inventory.reserve(cart.lines)",
        "  const pay = await stripe.charges.create(cart.total)",
        "  if (!pay.ok) throw new Error('odeme')",
        "  return order.commit({ stock, pay })",
        "}",
      ],
    },
  },
  {
    id: 5,
    category: "game",
    titleTr: "Unity Survival",
    titleEn: "Unity Survival",
    categoryLabelTr: "Oyun",
    categoryLabelEn: "Game",
    descTr:
      "2D survival. Yapay zekâ, rastgele harita, çok oyunculu ağ. Telefonda da akıcı çalışması önemliydi.",
    descEn:
      "2D survival with AI, procedural maps, and multiplayer. Had to stay smooth on phones.",
    techs: ["Unity", "C#"],
  },
  {
    id: 6,
    category: "web",
    titleTr: "Oyun sunucu panelleri",
    titleEn: "Game server panels",
    categoryLabelTr: "Web",
    categoryLabelEn: "Web",
    descTr: "Oyuncu istatistikleri, market ve yönetim. Sunucunun web tarafı.",
    descEn: "Player stats, marketplace, and admin. The web side of the server.",
    techs: ["Node.js", "React", "MySQL"],
  },
];

export const experiences = [
  {
    id: 1,
    type: "work" as const,
    start: "2020",
    endTr: "Devam",
    endEn: "Present",
    roleTr: "Freelance Full Stack Developer",
    roleEn: "Freelance Full Stack Developer",
    companyTr: "Bağımsız",
    companyEn: "Independent",
    locationTr: "Ankara / uzaktan",
    locationEn: "Ankara / remote",
    linesTr: [
      "İşletmelere özel web uygulamaları, yönetim panelleri ve API’ler yazıyorum.",
      "ERP, CRM, e-ticaret ve sektöre özel işler. Teslim ettiğim iş 100’ü geçti.",
    ],
    linesEn: [
      "I write custom web apps, admin panels, and APIs for businesses.",
      "ERP, CRM, commerce, and sector-specific work. 100+ jobs delivered.",
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
    linesEn: ["Associate’s degree. Web, databases, software development."],
  },
];

export const stats = [
  { to: 6, suffix: "+", key: "yil", keyTr: "yıl deneyim", keyEn: "years in the work" },
  { to: 100, suffix: "+", key: "is", keyTr: "tamamlanan iş", keyEn: "jobs delivered" },
  { to: 2020, suffix: "", key: "baslangic", keyTr: "bu işe başladığım yıl", keyEn: "started this work" },
];

export const social = {
  email: "tufankiraz@revarkyazilim.com",
  phone: "+905386886241",
  phoneDisplay: "0538 688 62 41",
  github: "https://github.com/xRevenge06",
  linkedin: "https://linkedin.com/in/tufan-kiraz-920580387",
  website: "https://revarkyazilim.com",
  websiteDisplay: "revarkyazilim.com",
};
