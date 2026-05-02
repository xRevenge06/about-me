"use client";

import { useLang } from "@/context/LanguageContext";
import { social } from "@/lib/data";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

const NAV = [
  { id: "about",      tr: "Hakkımda",   en: "About"      },
  { id: "skills",     tr: "Yetenekler", en: "Skills"     },
  { id: "projects",   tr: "Projeler",   en: "Projects"   },
  { id: "experience", tr: "Deneyim",    en: "Experience" },
  { id: "contact",    tr: "İletişim",   en: "Contact"    },
];
const SOC = [
  { href: social.github,   Icon: FiGithub,   label: "GitHub"   },
  { href: social.linkedin, Icon: FiLinkedin, label: "LinkedIn" },
  { href: `mailto:${social.email}`, Icon: FiMail, label: "Email" },
];

export default function Footer() {
  const { lang } = useLang();
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  return (
    <footer style={{ borderTop: "1px solid #111", padding: "44px 24px 28px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div className="rg-footer" style={{ marginBottom: 28 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: 7, background: "#fff", color: "#000", fontWeight: 900, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>TK</span>
              <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>Tufan Kiraz</span>
            </div>
            <p style={{ color: "#666", fontSize: 13, lineHeight: 1.6 }}>Full Stack Developer · Ankara, TR</p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ color: "#444", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12 }}>{lang === "tr" ? "Sayfalar" : "Pages"}</p>
            {NAV.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                style={{ display: "block", background: "none", border: "none", cursor: "pointer", color: "#777", fontSize: 13.5, marginBottom: 8, padding: 0, transition: "color .15s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color="#ccc"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color="#777"; }}>
                {lang === "tr" ? l.tr : l.en}
              </button>
            ))}
          </div>

          {/* Social */}
          <div>
            <p style={{ color: "#444", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12 }}>{lang === "tr" ? "Bağlantılar" : "Links"}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SOC.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1a1a", border: "1px solid #1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", color: "#777", textDecoration: "none", transition: "all .15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="#ddd"; (e.currentTarget as HTMLElement).style.borderColor="#333"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="#777"; (e.currentTarget as HTMLElement).style.borderColor="#1e1e1e"; }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #111", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "#444", fontSize: 12.5 }}>© {new Date().getFullYear()} Tufan Kiraz. {lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}</p>
          <p style={{ color: "#2e2e2e", fontSize: 12 }}>Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
