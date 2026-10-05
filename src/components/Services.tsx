"use client";

import { services } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

export default function Services() {
  const { t, lang } = useLang();

  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t.services.kicker}</span>
          <h2 className="h2">{t.services.title}</h2>
          <p className="section-sub">{t.services.sub}</p>
        </Reveal>

        <div className="services-list">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="service">
                <span className="service-no">{s.no}</span>
                <div className="service-body">
                  <h3>{lang === "tr" ? s.titleTr : s.titleEn}</h3>
                  <p>{lang === "tr" ? s.descTr : s.descEn}</p>
                  <div className="service-tags">
                    {s.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="service-arrow" aria-hidden>
                  <ArrowUpRight />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
