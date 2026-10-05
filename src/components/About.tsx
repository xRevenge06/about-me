"use client";

import { skillGroups, experiences } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export default function About() {
  const { t, lang } = useLang();

  const cols = [
    { key: "frontend" as const, title: t.about.frontend },
    { key: "backend" as const, title: t.about.backend },
    { key: "database" as const, title: t.about.database },
    { key: "tools" as const, title: t.about.tools },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t.about.kicker}</span>
          <h2 className="h2">{t.about.title}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </Reveal>

          <div className="about-side">
            <Reveal delay={0.08}>
              <p className="about-block-title">{t.about.stackTitle}</p>
              <div className="stack-grid">
                {cols.map((c) => (
                  <div key={c.key} className="stack-col">
                    <h4>{c.title}</h4>
                    <ul>
                      {skillGroups[c.key].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="about-block-title">{t.about.experienceTitle}</p>
              <div className="timeline">
                {experiences.map((e) => {
                  const end =
                    e.endEn === "Present" ? t.about.present : lang === "tr" ? e.endTr : e.endEn;
                  return (
                    <div key={e.id} className="tl-item">
                      <p className="tl-when">
                        {e.start} · {end}
                      </p>
                      <h4>{lang === "tr" ? e.roleTr : e.roleEn}</h4>
                      <p className="tl-org">
                        {lang === "tr" ? e.companyTr : e.companyEn} ·{" "}
                        {lang === "tr" ? e.locationTr : e.locationEn}
                      </p>
                      <ul>
                        {(lang === "tr" ? e.linesTr : e.linesEn).map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
