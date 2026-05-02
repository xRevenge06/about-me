"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const NAV_LINKS = [
  { id: "about",      tr: "Hakkımda",  en: "About"      },
  { id: "skills",     tr: "Yetenekler", en: "Skills"    },
  { id: "projects",   tr: "Projeler",  en: "Projects"   },
  { id: "experience", tr: "Deneyim",   en: "Experience" },
  { id: "contact",    tr: "İletişim",  en: "Contact"    },
];

const W = 840; // shared container max-width

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const found = NAV_LINKS.map(l => l.id).find(id => {
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
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          borderBottom: scrolled ? "1px solid #111" : "1px solid transparent",
          background: scrolled ? "rgba(0,0,0,.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          transition: "all .25s",
        }}
      >
        <div style={{ maxWidth: W, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", background: "none", border: "none", padding: 0, flexShrink: 0 }}>
            <span style={{ width: 30, height: 30, borderRadius: 8, background: "#fff", color: "#000", fontWeight: 900, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: "-0.03em" }}>TK</span>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>Tufan Kiraz</span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}>
            {NAV_LINKS.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                style={{ padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", border: "none", background: active === l.id ? "rgba(255,255,255,.07)" : "transparent", color: active === l.id ? "#fff" : "#666", transition: "all .15s" }}
                className="hidden md:block"
                onMouseEnter={e => { if (active !== l.id) (e.target as HTMLElement).style.color = "#ccc"; }}
                onMouseLeave={e => { if (active !== l.id) (e.target as HTMLElement).style.color = "#666"; }}
              >
                {lang === "tr" ? l.tr : l.en}
              </button>
            ))}
          </nav>

          {/* Right: lang + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            {/* Lang toggle */}
            <div style={{ display: "flex", background: "rgba(255,255,255,.05)", border: "1px solid #1e1e1e", borderRadius: 100, padding: 3, gap: 2 }}>
              {(["tr", "en"] as const).map(l => (
                <button key={l} onClick={() => setLang(l)}
                  style={{ padding: "3px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700, cursor: "pointer", border: "none", textTransform: "uppercase", transition: "all .15s", background: lang === l ? "#fff" : "transparent", color: lang === l ? "#000" : "#555" }}>
                  {l}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button className="md:hidden" onClick={() => setOpen(!open)}
              style={{ background: "none", border: "1px solid #222", borderRadius: 8, padding: "6px 8px", cursor: "pointer", color: "#666" }}>
              <span style={{ display: "block", width: 16, height: 1.5, background: "currentColor", marginBottom: 4 }} />
              <span style={{ display: "block", width: 16, height: 1.5, background: "currentColor" }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 99 }}>
            <div onClick={() => setOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)" }} />
            <motion.div initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }}
              style={{ position: "absolute", top: 68, left: 16, right: 16, background: "#1e1e1e", border: "1px solid #2e2e2e", borderRadius: 14, padding: 12 }}>
              {NAV_LINKS.map(l => (
                <button key={l.id} onClick={() => go(l.id)}
                  style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer", border: "none", marginBottom: 2, background: active === l.id ? "rgba(255,255,255,.06)" : "transparent", color: active === l.id ? "#fff" : "#888", transition: "all .15s" }}>
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
