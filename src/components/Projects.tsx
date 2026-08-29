"use client";

import { projects } from "@/lib/data";
import { go } from "@/lib/scroll";
import { useLang } from "@/context/LanguageContext";

export default function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="block">
      <p className="kicker">{t.projects.kicker}</p>
      <h2 className="h2">{t.projects.title}</h2>
      <div className="works">
        {projects.map((p, i) => (
          <article key={p.id} className="work">
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="cat">{lang === "tr" ? p.categoryLabelTr : p.categoryLabelEn}</p>
              <h3>{lang === "tr" ? p.titleTr : p.titleEn}</h3>
              <p>{lang === "tr" ? p.descTr : p.descEn}</p>
              <p className="techs">{p.techs.join("  ·  ")}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="note">{t.projects.note}</p>
      <div style={{ marginTop: 20 }}>
        <button className="btn btn-lime" type="button" onClick={() => go("contact")}>
          {t.projects.more}
        </button>
      </div>
    </section>
  );
}
