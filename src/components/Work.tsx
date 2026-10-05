"use client";

import { projects } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { go } from "@/lib/scroll";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, ArrowRight } from "@/components/icons";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Work() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t.work.kicker}</span>
          <h2 className="h2">{t.work.title}</h2>
        </Reveal>

        <div className="work-featured">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="pcard">
              <div className="pcard-banner">
                <span className="pcard-watermark">{String(i + 1).padStart(2, "0")}</span>
                <span className="pcard-cat">{lang === "tr" ? p.categoryLabelTr : p.categoryLabelEn}</span>
              </div>
              <div className="pcard-body">
                <h3>{lang === "tr" ? p.titleTr : p.titleEn}</h3>
                <p>{lang === "tr" ? p.descTr : p.descEn}</p>
                <div className="pcard-techs">
                  {p.techs.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="work-grid">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} className="pmini">
              <div className="pmini-top">
                <span className="pmini-cat">{lang === "tr" ? p.categoryLabelTr : p.categoryLabelEn}</span>
                <ArrowUpRight style={{ width: 16, height: 16, color: "var(--faint)" }} />
              </div>
              <h3>{lang === "tr" ? p.titleTr : p.titleEn}</h3>
              <p>{lang === "tr" ? p.descTr : p.descEn}</p>
              <div className="pmini-techs">
                {p.techs.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="work-note">
          <p>{t.work.note}</p>
          <button type="button" className="btn btn-ghost" onClick={() => go("contact")}>
            {t.work.more}
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
