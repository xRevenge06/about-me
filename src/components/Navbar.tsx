"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const NAV_LINKS = [
  { id: "about", tr: "Hakkımda", en: "About" },
  { id: "skills", tr: "Yetenekler", en: "Skills" },
  { id: "projects", tr: "Projeler", en: "Projects" },
  { id: "experience", tr: "Deneyim", en: "Experience" },
  { id: "contact", tr: "İletişim", en: "Contact" },
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const found = NAV_LINKS.map((l) => l.id).find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 90 && r.bottom >= 90;
      });
      setActive(found ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`nav-header${scrolled ? " scrolled" : ""}`}
      >
        <div className="nav-inner">
          <button
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="nav-logo-icon">TK</span>
            <span className="nav-logo-text">Tufan Kiraz</span>
          </button>

          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nav-link${active === l.id ? " active" : ""}`}
              >
                {lang === "tr" ? l.tr : l.en}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="nav-lang">
              {(["tr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`nav-lang-btn${lang === l ? " active" : ""}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              className="nav-mobile-btn"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2 5h14M2 9h14M2 13h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay"
          >
            <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              className="mobile-menu-panel"
            >
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`mobile-menu-item${active === l.id ? " active" : ""}`}
                >
                  {lang === "tr" ? l.tr : l.en}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
