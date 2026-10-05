"use client";

import { stats } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import Counter from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

export default function Stats() {
  const { lang } = useLang();

  return (
    <section className="section-tight">
      <div className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.labelEn} delay={i * 0.06} className="stat">
              <b>
                <Counter to={s.to} suffix={s.suffix} />
              </b>
              <span>{lang === "tr" ? s.labelTr : s.labelEn}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
