"use client";

import { process } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export default function Process() {
  const { t, lang } = useLang();

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t.process.kicker}</span>
          <h2 className="h2">{t.process.title}</h2>
          <p className="section-sub">{t.process.sub}</p>
        </Reveal>

        <div className="process-grid">
          {process.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.07} className="pstep">
              <div className="pstep-no">{p.no}</div>
              <h3>{lang === "tr" ? p.titleTr : p.titleEn}</h3>
              <p>{lang === "tr" ? p.descTr : p.descEn}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
