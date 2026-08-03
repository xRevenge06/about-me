"use client";

import { useLang } from "@/context/LanguageContext";
import { social } from "@/lib/data";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const NAV = [
  { id: "about", tr: "Hakkımda", en: "About" },
  { id: "skills", tr: "Yetenekler", en: "Skills" },
  { id: "projects", tr: "Projeler", en: "Projects" },
  { id: "experience", tr: "Deneyim", en: "Experience" },
  { id: "contact", tr: "İletişim", en: "Contact" },
];

const SOC = [
  { href: social.github, Icon: FiGithub, label: "GitHub" },
  { href: social.linkedin, Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: `mailto:${social.email}`, Icon: FiMail, label: "Email" },
];

export default function Footer() {
  const { t, lang } = useLang();

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-footer">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  background: "var(--color-accent)",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 900,
                }}
              >
                TK
              </span>
              <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
                Tufan Kiraz
              </span>
            </div>
            <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-subtle)",
                marginBottom: 16,
              }}
            >
              {t.footer.nav_title}
            </p>
            {NAV.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="footer-link">
                {lang === "tr" ? l.tr : l.en}
              </button>
            ))}
          </div>

          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-subtle)",
                marginBottom: 16,
              }}
            >
              {t.footer.social_title}
            </p>
            <div className="footer-social">
              {SOC.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ fontSize: 12, color: "var(--color-subtle)" }}>
            © {new Date().getFullYear()} Tufan Kiraz. {t.footer.rights}
          </p>
          <p style={{ fontSize: 12, color: "var(--color-border)" }}>
            Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
