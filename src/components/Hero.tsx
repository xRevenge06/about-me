"use client";

import { useLang } from "@/context/LanguageContext";
import { go } from "@/lib/scroll";
import { social } from "@/lib/data";
import HeroVisual from "@/components/HeroVisual";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, Github, Linkedin } from "@/components/icons";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <Reveal>
            <p className="hero-lead">{t.hero.lead}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="hero-title">{t.hero.title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-sub">{t.hero.sub}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => go("contact")}>
                {t.hero.primary}
                <ArrowRight />
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => go("work")}>
                {t.hero.secondary}
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="hero-socials">
              <a href={social.github} target="_blank" rel="noreferrer">
                <Github />
                GitHub
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                <Linkedin />
                LinkedIn
              </a>
              <a href={social.website} target="_blank" rel="noreferrer">
                <ArrowUpRight />
                {social.websiteDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
