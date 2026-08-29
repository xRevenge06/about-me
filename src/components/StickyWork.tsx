"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { projects } from "@/lib/data";
import { go } from "@/lib/scroll";
import { useLang } from "@/context/LanguageContext";
import Magnetic from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";

type Pinned = (typeof projects)[number] & {
  snippet: { file: string; lines: string[] };
};

const pinned = projects.filter((p): p is Pinned => Boolean(p.snippet));
const rest = projects.filter((p) => !p.snippet);

function slotOf(v: number, n: number) {
  if (n <= 1) return 0;
  return Math.min(n - 1, Math.max(0, Math.floor(Math.min(v, 0.999) * n)));
}

export default function StickyWork() {
  const { t, lang } = useLang();
  const wrap = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  const n = pinned.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(slotOf(scrollYProgress.get(), n));
  }, [scrollYProgress, n]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = slotOf(v, n);
    setActive((cur) => (cur === next ? cur : next));
  });

  const current = pinned[active] ?? pinned[0];

  return (
    <section id="work" className="work-sec">
      <Reveal className="block work-head">
        <p className="kicker">{t.projects.kicker}</p>
        <h2 className="h2">{t.projects.title}</h2>
      </Reveal>

      <div className="pin-mobile">
        {pinned.map((p, i) => (
          <article key={p.id} className="pin-pair">
            <div className="pin-copy">
              <p className="cat">
                {String(i + 1).padStart(2, "0")}  ·  {lang === "tr" ? p.categoryLabelTr : p.categoryLabelEn}
              </p>
              <h3>{lang === "tr" ? p.titleTr : p.titleEn}</h3>
              <p>{lang === "tr" ? p.descTr : p.descEn}</p>
              <p className="techs">{p.techs.join("  ·  ")}</p>
            </div>
            <CodeCard file={p.snippet.file} lines={p.snippet.lines} />
          </article>
        ))}
      </div>

      <div ref={wrap} className="pin-wrap" style={{ ["--pin-n" as string]: n }}>
        <div className="pin-sticky">
          <div className="pin-left">
            {current && (
              <article className="pin-copy" key={current.id}>
                <p className="cat">
                  {String(active + 1).padStart(2, "0")}  ·  {lang === "tr" ? current.categoryLabelTr : current.categoryLabelEn}
                </p>
                <h3>{lang === "tr" ? current.titleTr : current.titleEn}</h3>
                <p>{lang === "tr" ? current.descTr : current.descEn}</p>
                <p className="techs">{current.techs.join("  ·  ")}</p>
              </article>
            )}
          </div>
          <div className="pin-right">
            <div className="pin-viewport">
              <motion.div
                className="pin-track"
                animate={{ y: `${(-active / n) * 100}%` }}
                transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {pinned.map((p) => (
                  <div key={p.id} className="pin-slide">
                    <CodeCard file={p.snippet.file} lines={p.snippet.lines} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="block" style={{ paddingTop: 8 }}>
        {rest.length > 0 && (
          <div className="works">
            {rest.map((p, i) => (
              <article key={p.id} className="work">
                <span className="idx">{String(i + 1 + pinned.length).padStart(2, "0")}</span>
                <div>
                  <p className="cat">{lang === "tr" ? p.categoryLabelTr : p.categoryLabelEn}</p>
                  <h3>{lang === "tr" ? p.titleTr : p.titleEn}</h3>
                  <p>{lang === "tr" ? p.descTr : p.descEn}</p>
                  <p className="techs">{p.techs.join("  ·  ")}</p>
                </div>
              </article>
            ))}
          </div>
        )}
        <p className="note">{t.projects.note}</p>
        <div style={{ marginTop: 20 }}>
          <Magnetic className="btn btn-lime" onClick={() => go("contact")}>
            {t.projects.more}
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function CodeCard({ file, lines }: { file: string; lines: string[] }) {
  return (
    <div className="code-card">
      <div className="code-bar">
        <span className="dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <em>{file}</em>
      </div>
      <pre>
        {lines.map((line, i) => (
          <code key={i}>
            <span className="ln">{String(i + 1).padStart(2, "0")}</span>
            {line}
          </code>
        ))}
      </pre>
    </div>
  );
}
