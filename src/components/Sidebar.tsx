"use client";

import { social } from "@/lib/data";
import { go } from "@/lib/scroll";
import Magnetic from "@/components/Magnetic";
import { useLang } from "@/context/LanguageContext";

export default function Sidebar() {
  const { t, lang, setLang } = useLang();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="portrait">
          <span className="portrait-id">tufan@ankara:~</span>
          <p className="portrait-name">
            Tufan
            <br />
            <em>Kiraz</em>
          </p>
        </div>

        <div>
          <p className="avail">
            <i /> {t.sidebar.available}
          </p>
          <p className="side-hello">{t.sidebar.greeting}</p>
          <p className="side-bio">{t.sidebar.bio}</p>
        </div>

        <div className="side-actions">
          <Magnetic className="btn btn-lime" onClick={() => go("contact")}>
            {t.sidebar.talk}
          </Magnetic>
          <Magnetic className="btn btn-ghost" href={social.website}>
            Revark
          </Magnetic>
        </div>

        <div className="side-meta">
          <div className="socials">
            <a href={social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="lang">
            <button type="button" className={lang === "tr" ? "on" : ""} onClick={() => setLang("tr")}>
              TR
            </button>
            <button type="button" className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>
              EN
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
