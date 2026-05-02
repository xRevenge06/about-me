"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { social } from "@/lib/data";
import { FiGithub, FiMail, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SOCIALS = [
  { href: social.github,          Icon: FiGithub,    label: "GitHub"   },
  { href: social.linkedin,        Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: `mailto:${social.email}`, Icon: FiMail,    label: "Email"    },
];

const STATS = [
  { v: "5+",   tr: "Yıl Deneyim",  en: "Years Exp."  },
  { v: "100+", tr: "Proje",        en: "Projects"    },
  { v: "15+",  tr: "Teknoloji",    en: "Technologies"},
  { v: "99%",  tr: "Memnuniyet",   en: "Satisfaction"},
];

export default function Hero() {
  const { t, lang } = useLang();
  const roles = t.hero.roles;
  const [ri, setRi] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  const [ci, setCi] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cur = roles[ri];
    if (!del) {
      if (ci < cur.length) { timer.current = setTimeout(() => { setTxt(cur.slice(0, ci + 1)); setCi(c => c + 1); }, 75); }
      else { timer.current = setTimeout(() => setDel(true), 2000); }
    } else {
      if (ci > 0) { timer.current = setTimeout(() => { setTxt(cur.slice(0, ci - 1)); setCi(c => c - 1); }, 40); }
      else { setDel(false); setRi(r => (r + 1) % roles.length); }
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [ci, del, ri, roles]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  const fd = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: .45, delay: d } });

  return (
    <section className="dot-bg" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px 60px" }}>

      <motion.div {...fd(0)} style={{ marginBottom: 28 }}>
        <span className="s-label">
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "inline-block", boxShadow: "0 0 6px rgba(255,255,255,.6)" }} />
          {t.hero.available}
        </span>
      </motion.div>

      <motion.p {...fd(.08)} style={{ color: "#888", fontSize: 16, fontWeight: 400, marginBottom: 10 }}>{t.hero.greeting}</motion.p>

      <motion.h1 {...fd(.15)} style={{ fontSize: "clamp(48px, 10vw, 88px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 18 }}>
        <span style={{ color: "#fff" }}>Tufan </span><span className="g-text">Kiraz</span>
      </motion.h1>

      <motion.div {...fd(.25)} style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
        <span style={{ color: "#888", fontSize: 18, fontWeight: 500 }}>{txt}</span>
        <span className="t-cursor" />
      </motion.div>

      <motion.p {...fd(.35)} style={{ color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 460, marginBottom: 32 }}>{t.hero.description}</motion.p>

      {/* Buttons */}
      <motion.div {...fd(.45)} style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 28 }}>
        <button onClick={() => go("projects")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", background: "#fff", color: "#111", fontWeight: 600, fontSize: 14, borderRadius: 10, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
          {t.hero.cta_work} <FiArrowRight size={14} />
        </button>
        <button onClick={() => go("contact")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", background: "transparent", color: "#bbb", fontWeight: 600, fontSize: 14, borderRadius: 10, border: "1px solid #2a2a2a", cursor: "pointer", whiteSpace: "nowrap" }}>
          {t.hero.cta_contact} <FiChevronDown size={14} />
        </button>
      </motion.div>

      {/* Socials */}
      <motion.div {...fd(.55)} style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 44 }}>
        {SOCIALS.map(({ href, Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            style={{ width: 40, height: 40, borderRadius: 10, background: "#1e1e1e", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center", color: "#777", textDecoration: "none", transition: "all .15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="#fff"; (e.currentTarget as HTMLElement).style.borderColor="#444"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="#777"; (e.currentTarget as HTMLElement).style.borderColor="#222"; }}>
            <Icon size={16} />
          </a>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div {...fd(.65)} className="rg-4" style={{ width: "100%", maxWidth: 540 }}>
        {STATS.map(s => (
          <div key={s.v} className="c-card" style={{ padding: "16px 8px", textAlign: "center", borderRadius: 12 }}>
            <p style={{ fontSize: 24, fontWeight: 900, color: "#fff" }}>{s.v}</p>
            <p style={{ fontSize: 11, color: "#666", marginTop: 3 }}>{lang === "tr" ? s.tr : s.en}</p>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.button onClick={() => go("about")} {...fd(1)} style={{ marginTop: 44, background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#444", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase" }}>{t.hero.scroll}</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 16, height: 28, borderRadius: 8, border: "1px solid #222", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 5 }}>
          <div style={{ width: 2, height: 6, background: "#333", borderRadius: 1 }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
