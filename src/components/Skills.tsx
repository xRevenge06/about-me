"use client";

import { skillGroups } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export default function Skills() {
  const { t } = useLang();
  const cols = [
    { key: "frontend" as const, title: t.skills.frontend },
    { key: "backend" as const, title: t.skills.backend },
    { key: "database" as const, title: t.skills.database },
    { key: "tools" as const, title: t.skills.tools },
  ];

  return (
    <section className="block">
      <Reveal>
        <p className="kicker">{t.skills.kicker}</p>
        <h2 className="h2">{t.skills.title}</h2>
      </Reveal>
      <div className="skill-grid">
        {cols.map((c, i) => (
          <Reveal key={c.key} delay={i * 0.07}>
            <h3>{c.title}</h3>
            <ul>
              {skillGroups[c.key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
