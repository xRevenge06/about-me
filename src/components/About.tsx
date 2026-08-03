"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const iv = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const sp = useSpring(mv, { duration: 1600, bounce: 0 });
  const d = useTransform(sp, (v) => Math.round(v).toString());
  if (iv) mv.set(value);
  return (
    <span ref={ref}>
      <motion.span>{d}</motion.span>
      {suffix}
    </span>
  );
}

export default function About() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const row = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: iv ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="about" ref={ref} className="section">
      <div className="container container-sm">
        <motion.div {...row(0)} className="section-header">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">
            {t.about.title}{" "}
            <span className="gradient-text">{t.about.title2}</span>
          </h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </motion.div>

        <motion.div {...row(0.1)} className="grid-stats">
          {stats.map((s, i) => (
            <div key={i} className="card card-glow stat-card">
              <p className="stat-value">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="stat-label">
                {lang === "tr" ? s.keyTr : s.keyEn}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid-about">
          <motion.div {...row(0.2)} className="card card-padded">
            {[t.about.bio1, t.about.bio2, t.about.bio3].map((b, i) => (
              <p key={i} className="bio-text">{b}</p>
            ))}
          </motion.div>

          <motion.div {...row(0.3)} className="card card-padded">
            <p className="focus-title">{t.about.focus.title}</p>
            <div className="focus-list">
              {t.about.focus.items.map((item, i) => (
                <div key={i} className="focus-item">
                  <span className="focus-num">{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#e4e4e7" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
