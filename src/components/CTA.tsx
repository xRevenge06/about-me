"use client";

import { useLang } from "@/context/LanguageContext";
import { go } from "@/lib/scroll";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="section-tight">
      <div className="container">
        <Reveal className="cta-panel">
          <span className="kicker">{t.cta.kicker}</span>
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-sub">{t.cta.sub}</p>
          <button type="button" className="btn btn-primary" onClick={() => go("contact")}>
            {t.cta.button}
            <ArrowRight />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
