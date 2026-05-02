"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { skills } from "@/lib/data";

type Cat = keyof typeof skills;

export default function Skills() {
  const { t } = useLang();
  const [cat, setCat] = useState<Cat>("frontend");
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const CATS: { key: Cat; label: string }[] = [
    { key: "frontend",  label: t.skills.categories.frontend  },
    { key: "backend",   label: t.skills.categories.backend   },
    { key: "database",  label: t.skills.categories.database  },
    { key: "devops",    label: t.skills.categories.devops    },
    { key: "gamedev",   label: t.skills.categories.gamedev   },
    { key: "it",        label: t.skills.categories.it        },
  ];

  return (
    <section id="skills" ref={ref} className="s-pad">
      <div style={{ maxWidth: 780, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }}
          style={{ textAlign: "center", marginBottom: 32 }}>
          <span className="s-label">{t.skills.label}</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, color: "#fff", marginTop: 14 }}>
            {t.skills.title} <span className="g-text">{t.skills.title2}</span>
          </h2>
          <p style={{ color: "#777", fontSize: 14.5, marginTop: 12 }}>{t.skills.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}} transition={{ delay: .1 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 24 }}>
          {CATS.map(({ key, label }) => (
            <button key={key} onClick={() => setCat(key)}
              style={{ padding: "8px 18px", borderRadius: 9, fontSize: 13, cursor: "pointer", border: "1px solid", transition: "all .15s",
                borderColor: cat === key ? "#fff" : "#222",
                background: cat === key ? "#fff" : "#1a1a1a",
                color: cat === key ? "#000" : "#888",
                fontWeight: cat === key ? 600 : 400 }}>
              {label}
            </button>
          ))}
        </motion.div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div key={cat} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .2 }}
            className="c-card rg-2" style={{ padding: "24px", borderRadius: 14 }}>
            {skills[cat].map((s, i) => (
              <SkillRow key={s.name} name={s.name} level={s.level} index={i} iv={iv} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pills */}
        <motion.div initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}} transition={{ delay: .4 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginTop: 20 }}>
          {["React", "Next.js", "TypeScript", "Node.js", ".NET", "PostgreSQL", "MongoDB", "Unity", "Docker", "Git"].map(name => (
            <span key={name} className="t-pill">{name}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillRow({ name, level, index, iv }: { name: string; level: number; index: number; iv: boolean }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
        <span style={{ color: "#bbb", fontSize: 13 }}>{name}</span>
        <span style={{ color: "#666", fontSize: 11, fontFamily: "monospace" }}>{level}%</span>
      </div>
      <div className="sk-track">
        <motion.div className="sk-fill"
          initial={{ scaleX: 0 }} animate={iv ? { scaleX: 1 } : {}}
          transition={{ duration: .7, delay: index * .05 + .15, ease: "easeOut" }}
          style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
