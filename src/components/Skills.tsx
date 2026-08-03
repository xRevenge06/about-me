"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { skillGroups } from "@/lib/data";

type Cat = keyof typeof skillGroups;

export default function Skills() {
  const { t } = useLang();
  const [cat, setCat] = useState<Cat>("frontend");
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const CATS: { key: Cat; label: string }[] = [
    { key: "frontend", label: t.skills.categories.frontend },
    { key: "backend", label: t.skills.categories.backend },
    { key: "database", label: t.skills.categories.database },
    { key: "tools", label: t.skills.categories.tools },
  ];

  const allSkills = Object.values(skillGroups).flat();

  return (
    <section id="skills" ref={ref} className="section">
      <div className="container container-md">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={iv ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">{t.skills.label}</span>
          <h2 className="section-title">
            {t.skills.title}{" "}
            <span className="gradient-text">{t.skills.title2}</span>
          </h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={iv ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="filter-row"
        >
          {CATS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setCat(key)}
              className={`btn-filter${cat === key ? " active" : ""}`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="card skill-panel"
          >
            <div className="tech-pills">
              {skillGroups[cat].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={iv ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.04 }}
                  className="tech-pill"
                  style={{ fontSize: 13, padding: "6px 16px" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={iv ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="tech-pills"
          style={{ justifyContent: "center", marginTop: 32, opacity: 0.6 }}
        >
          {allSkills.map((name) => (
            <span key={name} className="tech-pill">{name}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
