"use client";

import { stats } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import Counter from "@/components/Counter";
import { Reveal, RevealLine } from "@/components/Reveal";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="hero block">
      <Reveal>
        <p className="kicker">{t.hero.prompt}</p>
      </Reveal>
      <h2 className="display">
        <RevealLine>{t.hero.line1}&nbsp;</RevealLine>
        <RevealLine delay={0.1} className="hl">
          {t.hero.highlight}
        </RevealLine>
        {t.hero.line2 ? (
          <>
            <br />
            <RevealLine delay={0.2}>{t.hero.line2}</RevealLine>
          </>
        ) : null}
      </h2>
      <Reveal delay={0.28}>
        <p className="lead">{t.hero.description}</p>
      </Reveal>
      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.key} delay={0.12 + i * 0.08} className="stat">
            <span className="stat-key">
              {s.key}
              <em>/{lang === "tr" ? s.keyTr : s.keyEn}</em>
            </span>
            <b>
              <Counter to={s.to} suffix={s.suffix} />
            </b>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
