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
    <section id="experience" ref={ref} className="section">
      <div className="container container-sm">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={iv ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">
            {t.experience.title}{" "}
            <span className="gradient-text">{t.experience.title2}</span>
          </h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, i) => {
            const role = lang === "tr" ? exp.roleTr : exp.roleEn;
            const company = lang === "tr" ? exp.companyTr : exp.companyEn;
            const loc = lang === "tr" ? exp.locationTr : exp.locationEn;
            const desc = lang === "tr" ? exp.descriptionTr : exp.descriptionEn;
            const start = lang === "tr" ? exp.startDateTr : exp.startDateEn;
            const end =
              exp.endDateTr === "Devam"
                ? t.experience.present
                : lang === "tr"
                  ? exp.endDateTr
                  : exp.endDateEn;
            const now = end === t.experience.present;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                animate={iv ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="timeline-item"
              >
                <div className={`timeline-dot${now ? " active" : " inactive"}`} />
                <div className="timeline-icon">
                  {exp.type === "work" ? (
                    <FiBriefcase size={14} style={{ color: "var(--color-muted)" }} />
                  ) : (
                    <FiBook size={14} style={{ color: "var(--color-muted)" }} />
                  )}
                </div>

                <div className="card" style={{ padding: "20px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      flexWrap: "wrap",
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eee", marginBottom: 2 }}>
                        {role}
                      </h3>
                        <p style={{ fontSize: 12, color: "var(--color-muted)" }}>
                          {"companyUrl" in exp && exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "var(--color-accent-light)", textDecoration: "none" }}
                            >
                              {company}
                            </a>
                          ) : (
                            company
                          )}
                        </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 11,
                          padding: "4px 10px",
                          borderRadius: 100,
                          border: now
                            ? "1px solid rgba(99,102,241,0.3)"
                            : "1px solid var(--color-border)",
                          background: now ? "rgba(99,102,241,0.08)" : "transparent",
                          color: now ? "var(--color-accent-light)" : "var(--color-subtle)",
                        }}
                      >
                        {now && (
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "var(--color-accent-light)",
                              display: "inline-block",
                            }}
                          />
                        )}
                        {start} — {end}
                      </span>
                      <p style={{ fontSize: 11, color: "var(--color-subtle)", marginTop: 4 }}>
                        {loc}
                      </p>
                    </div>
                  </div>

                  <ul style={{ marginBottom: 12 }}>
                    {desc.map((d, di) => (
                      <li
                        key={di}
                        style={{
                          display: "flex",
                          gap: 8,
                          fontSize: 13,
                          lineHeight: 1.65,
                          color: "var(--color-muted)",
                          marginBottom: 6,
                        }}
                      >
                        <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>→</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-pills">
                    {exp.techs.map((tech) => (
                      <span key={tech} className="tech-pill" style={{ fontSize: 10 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
