"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { projects, moreProjects } from "@/lib/data";
import { FiArrowUpRight, FiGithub, FiExternalLink, FiPlus } from "react-icons/fi";

type F = "all" | "saas" | "game" | "web" | "crm";

export default function Projects() {
  const { t, lang } = useLang();
  const [f, setF] = useState<F>("all");
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const FILTERS: { key: F; label: string }[] = [
    { key: "all", label: t.projects.all },
    { key: "saas", label: t.projects.saas },
    { key: "crm", label: t.projects.crm },
    { key: "game", label: t.projects.game },
    { key: "web", label: t.projects.web },
  ];
  const list = f === "all" ? projects : projects.filter((p) => p.category === f);

  const goContact = () => {
    const el = document.getElementById("contact");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  const moreItems = lang === "tr" ? moreProjects.itemsTr : moreProjects.itemsEn;

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container container-lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={iv ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">
            {t.projects.title}{" "}
            <span className="gradient-text">{t.projects.title2}</span>
          </h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={iv ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="filter-row"
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setF(key)}
              className={`btn-filter${f === key ? " active" : ""}`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={f}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid-projects"
          >
            {list.map((p, i) => (
              <PCard
                key={p.id}
                p={p}
                i={i}
                lang={lang}
                feat={t.projects.featured}
                iv={iv}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={iv ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="card card-glow more-projects"
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 256,
              height: 256,
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.15,
              background: "var(--color-accent)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(99,102,241,0.15)",
                  color: "var(--color-accent-light)",
                }}
              >
                <FiPlus size={20} />
              </div>
              <h3 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 900, color: "#fff" }}>
                {t.projects.more_title}
              </h3>
            </div>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--color-muted)",
                marginBottom: 24,
                maxWidth: 600,
              }}
            >
              {t.projects.more_subtitle}
            </p>

            <div className="more-grid">
              {moreItems.map((item, i) => (
                <div key={i} className="more-item">
                  <span style={{ color: "var(--color-accent-light)" }}>→</span>
                  {item}
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={goContact}>
              {t.projects.more_cta}
              <FiArrowUpRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PCard({
  p,
  i,
  lang,
  feat,
  iv,
}: {
  p: (typeof projects)[0];
  i: number;
  lang: "tr" | "en";
  feat: string;
  iv: boolean;
}) {
  const [h, setH] = useState(false);
  const title = lang === "tr" ? p.titleTr : p.titleEn;
  const cat = lang === "tr" ? p.categoryLabelTr : p.categoryLabelEn;
  const desc = lang === "tr" ? p.descTr : p.descEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.07 }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="card card-glow project-card"
    >
      <div
        className="project-thumb"
        style={{
          background: `linear-gradient(135deg, ${p.accent}15 0%, var(--color-surface-2) 100%)`,
        }}
      >
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 3,
            background: p.accent,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 60,
              fontWeight: 900,
              opacity: 0.06,
              lineHeight: 1,
              color: p.accent,
            }}
          >
            {title[0]}
          </span>
        </div>
        {p.featured && (
          <div style={{ position: "absolute", top: 12, left: 12 }}>
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 100,
                background: `${p.accent}15`,
                border: `1px solid ${p.accent}30`,
                color: p.accent,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              ✦ {feat}
            </span>
          </div>
        )}
        <AnimatePresence>
          {h && (p.github || p.live) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                >
                  <FiGithub size={14} />
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                >
                  <FiExternalLink size={14} />
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="project-body">
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 8,
            color: p.accent,
          }}
        >
          {cat}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eee", lineHeight: 1.35 }}>
            {title}
          </h3>
          <FiArrowUpRight size={14} style={{ color: "var(--color-subtle)", flexShrink: 0 }} />
        </div>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.65,
            color: "var(--color-subtle)",
            flex: 1,
            marginBottom: 16,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </p>
        <div className="tech-pills">
          {p.techs.map((tech) => (
            <span key={tech} className="tech-pill" style={{ fontSize: 10 }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
