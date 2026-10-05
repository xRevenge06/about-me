"use client";

import { social, services } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { go } from "@/lib/scroll";
import { Github, Linkedin, Mail } from "@/components/icons";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  const navLinks = [
    { id: "services", label: t.nav.services },
    { id: "work", label: t.nav.work },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-dot" />
              <span>
                <b>Tufan</b> Kiraz
              </span>
            </span>
            <p>{t.footer.tagline}</p>
            <div className="footer-socials">
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href={`mailto:${social.email}`} aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.nav}</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(l.id);
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.services}</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      go("services");
                    }}
                  >
                    {lang === "tr" ? s.titleTr : s.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contact}</h4>
            <ul>
              <li>
                <a href={`mailto:${social.email}`}>{social.email}</a>
              </li>
              <li>
                <a href={`tel:${social.phone}`}>{social.phoneDisplay}</a>
              </li>
              <li>
                <a href={social.website} target="_blank" rel="noreferrer">
                  {social.websiteDisplay}
                </a>
              </li>
              <li>{social.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} Tufan Kiraz. {t.footer.rights}
          </span>
          <span>Next.js · React · TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
