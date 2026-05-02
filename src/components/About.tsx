"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const iv = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const sp = useSpring(mv, { duration: 1600, bounce: 0 });
  const d = useTransform(sp, v => Math.round(v).toString());
  if (iv) mv.set(value);
  return <span ref={ref}><motion.span>{d}</motion.span>{suffix}</span>;
}

export default function About() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const row = (delay: number) => ({ initial: { opacity: 0, y: 18 }, animate: iv ? { opacity: 1, y: 0 } : {}, transition: { duration: .5, delay } });

  return (
    <section id="about" ref={ref} className="s-pad">
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* Header */}
        <motion.div {...row(0)} style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="s-label">{t.about.label}</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, color: "#fff", marginTop: 14, lineHeight: 1.15 }}>
            {t.about.title} <span className="g-text">{t.about.title2}</span>
          </h2>
          <p style={{ color: "#777", fontSize: 14.5, lineHeight: 1.7, marginTop: 12, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div {...row(.1)} className="rg-4" style={{ marginBottom: 28 }}>
          {stats.map((s, i) => (
            <div key={i} className="c-card" style={{ padding: "18px 8px", textAlign: "center", borderRadius: 12 }}>
              <p style={{ fontSize: 26, fontWeight: 900, color: "#fff" }}><Counter value={s.value} suffix={s.suffix} /></p>
              <p style={{ fontSize: 11.5, color: "#666", marginTop: 4 }}>{lang === "tr" ? s.keyTr : s.keyEn}</p>
            </div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div {...row(.2)} style={{ marginBottom: 24 }}>
          {[t.about.bio1, t.about.bio2, t.about.bio3].map((b, i) => (
            <p key={i} style={{ color: "#999", fontSize: 14.5, lineHeight: 1.8, marginBottom: 12 }}>{b}</p>
          ))}
        </motion.div>

        {/* Info */}
        <motion.div {...row(.3)} className="c-card" style={{ padding: "16px 20px", borderRadius: 12, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            { tr: "İsim",  en: "Name",     val: "Tufan Kiraz" },
            { tr: "Konum", en: "Location", val: "Ankara, TR" },
            { tr: "Durum", en: "Status",   valTr: "Müsait ✓", valEn: "Available ✓" },
          ].map(item => (
            <div key={item.tr}>
              <p style={{ color: "#444", fontSize: 10, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>{lang === "tr" ? item.tr : item.en}</p>
              <p style={{ color: "#ddd", fontSize: 13, fontWeight: 600 }}>
                {"valTr" in item ? (lang === "tr" ? item.valTr : item.valEn) : item.val}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
