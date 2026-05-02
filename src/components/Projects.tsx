"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { projects } from "@/lib/data";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

type F = "all"|"saas"|"game"|"web"|"crm";

export default function Projects() {
  const { t, lang } = useLang();
  const [f, setF] = useState<F>("all");
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const FILTERS: { key: F; label: string }[] = [
    { key: "all", label: t.projects.all }, { key: "saas", label: t.projects.saas },
    { key: "crm",  label: t.projects.crm }, { key: "game", label: t.projects.game },
    { key: "web",  label: t.projects.web },
  ];
  const list = f === "all" ? projects : projects.filter(p => p.category === f);

  return (
    <section id="projects" ref={ref} className="s-pad">
      <div style={{ maxWidth: 920, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }}
          style={{ textAlign: "center", marginBottom: 32 }}>
          <span className="s-label">{t.projects.label}</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, color: "#fff", marginTop: 14 }}>
            {t.projects.title} <span className="g-text">{t.projects.title2}</span>
          </h2>
          <p style={{ color: "#777", fontSize: 14.5, marginTop: 12 }}>{t.projects.subtitle}</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}} transition={{ delay: .1 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 24 }}>
          {FILTERS.map(({ key, label }) => (
            <button key={key} onClick={() => setF(key)}
              style={{ padding: "8px 18px", borderRadius: 9, fontSize: 13, cursor: "pointer", border: "1px solid", transition: "all .15s",
                borderColor: f === key ? "#fff" : "#222", background: f === key ? "#fff" : "#1a1a1a",
                color: f === key ? "#000" : "#888", fontWeight: f === key ? 600 : 400 }}>
              {label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={f} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }}
            className="rg-3">
            {list.map((p, i) => <PCard key={p.id} p={p} i={i} lang={lang} feat={t.projects.featured} iv={iv} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PCard({ p, i, lang, feat, iv }: { p: (typeof projects)[0]; i: number; lang: "tr"|"en"; feat: string; iv: boolean }) {
  const [h, setH] = useState(false);
  const title = lang === "tr" ? p.titleTr : p.titleEn;
  const cat   = lang === "tr" ? p.categoryLabelTr : p.categoryLabelEn;
  const desc  = lang === "tr" ? p.descTr : p.descEn;
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: .4, delay: i * .07 }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className="c-card" style={{ borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform .2s, border-color .2s", transform: h ? "translateY(-3px)" : "none" }}>
      {/* Thumb */}
      <div style={{ height: 110, background: "#1e1e1e", position: "relative", overflow: "hidden" }}>
        <div className="dot-bg" style={{ position: "absolute", inset: 0, opacity: .7 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 60, fontWeight: 900, color: "rgba(255,255,255,.04)", lineHeight: 1 }}>{title[0]}</span>
        </div>
        {p.featured && (
          <div style={{ position: "absolute", top: 9, left: 9 }}>
            <span style={{ fontSize: 9, fontWeight: 700, padding: "3px 9px", borderRadius: 100, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", color: "rgba(255,255,255,.55)", textTransform: "uppercase", letterSpacing: ".07em" }}>✦ {feat}</span>
          </div>
        )}
        <AnimatePresence>
          {h && (p.github || p.live) && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}><FiGithub size={14} /></a>}
              {p.live   && <a href={p.live}   target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}><FiExternalLink size={14} /></a>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Body */}
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{ color: "#555", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 6 }}>{cat}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6, marginBottom: 8 }}>
          <h3 style={{ color: "#eee", fontWeight: 700, fontSize: 13.5, lineHeight: 1.35 }}>{title}</h3>
          <FiArrowUpRight size={13} style={{ color: "#444", flexShrink: 0, marginTop: 1 }} />
        </div>
        <p style={{ color: "#666", fontSize: 12, lineHeight: 1.6, flex: 1, marginBottom: 12, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const }}>{desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {p.techs.slice(0, 4).map(tech => <span key={tech} className="t-pill">{tech}</span>)}
          {p.techs.length > 4 && <span className="t-pill">+{p.techs.length - 4}</span>}
        </div>
      </div>
    </motion.div>
  );
}
