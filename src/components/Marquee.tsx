"use client";

import { industries } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";

export default function Marquee() {
  const { t, lang } = useLang();
  const items = industries[lang];
  const loop = [...items, ...items];

  return (
    <section className="section-tight">
      <div className="container" style={{ marginBottom: 22 }}>
        <span className="kicker" style={{ marginBottom: 0 }}>
          {t.marquee.title}
        </span>
      </div>
      <div className="marquee-wrap" aria-hidden>
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
