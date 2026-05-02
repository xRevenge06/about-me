"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { experiences } from "@/lib/data";
import { FiBriefcase, FiBook } from "react-icons/fi";

export default function Experience() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" ref={ref} className="s-pad">
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }}
          style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="s-label">{t.experience.label}</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, color: "#fff", marginTop: 14 }}>
            {t.experience.title} <span className="g-text">{t.experience.title2}</span>
          </h2>
          <p style={{ color: "#777", fontSize: 14.5, marginTop: 12 }}>{t.experience.subtitle}</p>
        </motion.div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, #1e1e1e 0%, #0a0a0a 100%)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {experiences.map((exp, i) => {
              const role    = lang === "tr" ? exp.roleTr    : exp.roleEn;
              const company = lang === "tr" ? exp.companyTr : exp.companyEn;
              const loc     = lang === "tr" ? exp.locationTr : exp.locationEn;
              const desc    = lang === "tr" ? exp.descriptionTr : exp.descriptionEn;
              const start   = lang === "tr" ? exp.startDateTr  : exp.startDateEn;
              const end     = exp.endDateTr === "Devam" ? t.experience.present : (lang === "tr" ? exp.endDateTr : exp.endDateEn);
              const now     = end === t.experience.present;

              return (
                <motion.div key={exp.id} initial={{ opacity: 0, x: -14 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: .45, delay: i * .1 }}
                  style={{ paddingLeft: 52, position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: 20, width: 10, height: 10, borderRadius: "50%", background: now ? "#fff" : "#2a2a2a", border: "2px solid #111", zIndex: 1, boxShadow: now ? "0 0 8px rgba(255,255,255,.3)" : "none" }} />
                  <div style={{ position: "absolute", left: 0, top: 12, width: 38, height: 38, borderRadius: 10, background: "#1a1a1a", border: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {exp.type === "work" ? <FiBriefcase size={14} style={{ color: "#666" }} /> : <FiBook size={14} style={{ color: "#666" }} />}
                  </div>

                  <div className="c-card" style={{ borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
                      <div>
                        <h3 style={{ color: "#eee", fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{role}</h3>
                        <p style={{ color: "#777", fontSize: 12.5 }}>{company}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, padding: "3px 10px", borderRadius: 100, background: now ? "rgba(255,255,255,.05)" : "transparent", border: `1px solid ${now ? "#2a2a2a" : "#1a1a1a"}`, color: now ? "#bbb" : "#555" }}>
                          {now && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff", display: "inline-block" }} />}
                          {start} — {end}
                        </span>
                        <p style={{ color: "#444", fontSize: 11, marginTop: 3 }}>{loc}</p>
                      </div>
                    </div>
                    <ul style={{ marginBottom: 12 }}>
                      {desc.map((d, di) => (
                        <li key={di} style={{ display: "flex", gap: 8, color: "#888", fontSize: 13, lineHeight: 1.65, marginBottom: 5 }}>
                          <span style={{ color: "#333", marginTop: 3, flexShrink: 0 }}>→</span>{d}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {exp.techs.map(tech => <span key={tech} className="t-pill">{tech}</span>)}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
