"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { go } from "@/lib/scroll";

const LINKS = [
  { id: "top", tr: "Ana", en: "Home" },
  { id: "about", tr: "Hakkımda", en: "About" },
  { id: "work", tr: "İşler", en: "Work" },
  { id: "experience", tr: "Yol", en: "Path" },
  { id: "contact", tr: "İletişim", en: "Mail" },
];

function Icon({ id }: { id: string }) {
  const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6 };
  if (id === "top")
    return (
      <svg {...p}>
        <path d="M4 11l8-7 8 7v9H4z" />
      </svg>
    );
  if (id === "about")
    return (
      <svg {...p}>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c1.5-4 12.5-4 14 0" />
      </svg>
    );
  if (id === "work")
    return (
      <svg {...p}>
        <rect x="3" y="7" width="18" height="13" rx="1" />
        <path d="M8 7V5h8v2" />
      </svg>
    );
  if (id === "experience")
    return (
      <svg {...p}>
        <path d="M12 4v16M8 8h8M8 12h8M8 16h5" />
      </svg>
    );
  return (
    <svg {...p}>
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M4 8l8 6 8-6" />
    </svg>
  );
}

export default function Navbar() {
  const { lang } = useLang();
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["about", "work", "experience", "contact"];
      const hit = [...ids].reverse().find((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top <= 120 : false;
      });
      setActive(window.scrollY < 80 ? "top" : (hit ?? "top"));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) => {
    setOpen(false);
    go(id);
  };

  return (
    <>
      <div className="mobile-bar">
        <b>Tufan Kiraz</b>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <nav onClick={(e) => e.stopPropagation()}>
            {LINKS.map((l) => (
              <button key={l.id} type="button" onClick={() => jump(l.id)}>
                {lang === "tr" ? l.tr : l.en}
              </button>
            ))}
          </nav>
        </div>
      )}

      <nav className="rail" aria-label="Sections">
        {LINKS.map((l) => (
          <button
            key={l.id}
            type="button"
            className={active === l.id ? "on" : ""}
            onClick={() => jump(l.id)}
            aria-label={lang === "tr" ? l.tr : l.en}
            title={lang === "tr" ? l.tr : l.en}
          >
            <Icon id={l.id} />
          </button>
        ))}
      </nav>
    </>
  );
}
