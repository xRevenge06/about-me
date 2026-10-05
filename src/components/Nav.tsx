"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { go } from "@/lib/scroll";
import { Menu, Close } from "@/components/icons";

const LINKS = [
  { id: "home", key: "home" as const },
  { id: "services", key: "services" as const },
  { id: "work", key: "work" as const },
  { id: "about", key: "about" as const },
  { id: "contact", key: "contact" as const },
];

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ["services", "work", "about", "contact"];
      const hit = [...ids].reverse().find((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top <= 140 : false;
      });
      setActive(window.scrollY < 120 ? "home" : hit ?? "home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const jump = (id: string) => {
    setOpen(false);
    go(id);
  };

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="brand" type="button" onClick={() => jump("home")} aria-label="Tufan Kiraz home">
          <span className="brand-dot" />
          <span>
            <b>Tufan</b> Kiraz
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                jump(l.id);
              }}
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Language">
            <button type="button" className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>
              EN
            </button>
            <button type="button" className={lang === "tr" ? "on" : ""} onClick={() => setLang("tr")}>
              TR
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-sm nav-desktop-cta"
            onClick={() => jump("contact")}
          >
            {t.nav.cta}
          </button>
          <button
            type="button"
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="nav-burger"
              style={{ alignSelf: "flex-end", marginBottom: 6 }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <Close />
            </button>
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  jump(l.id);
                }}
              >
                {t.nav[l.key]}
              </a>
            ))}
            <button type="button" className="btn btn-primary" onClick={() => jump("contact")}>
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
