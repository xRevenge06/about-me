"use client";

import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="block">
      <Reveal>
        <p className="kicker">{t.about.kicker}</p>
        <h2 className="h2">{t.about.title}</h2>
      </Reveal>
      <div className="copy">
        <Reveal delay={0.08}>
          <p>{t.about.p1}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <p>{t.about.p2}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <p>{t.about.p3}</p>
        </Reveal>
      </div>
    </section>
  );
}
