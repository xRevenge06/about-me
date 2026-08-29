"use client";

import { experiences } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export default function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" className="block">
      <Reveal>
        <p className="kicker">{t.experience.kicker}</p>
        <h2 className="h2">{t.experience.title}</h2>
      </Reveal>
      <div className="jobs">
        {experiences.map((e, i) => {
          const end = e.endTr === "Devam" ? t.experience.present : lang === "tr" ? e.endTr : e.endEn;
          const company = lang === "tr" ? e.companyTr : e.companyEn;
          const lines = lang === "tr" ? e.linesTr : e.linesEn;
          return (
            <Reveal key={e.id} delay={i * 0.08}>
            <article className="job">
              <p className="job-when">
                {e.start} — {end}
              </p>
              <div>
                <h3>{lang === "tr" ? e.roleTr : e.roleEn}</h3>
                <p>
                  {company}
                  <span style={{ color: "var(--mute)" }}> · {lang === "tr" ? e.locationTr : e.locationEn}</span>
                </p>
                <ul>
                  {lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
