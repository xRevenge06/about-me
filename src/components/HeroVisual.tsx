"use client";

import { motion, useReducedMotion } from "framer-motion";
import { focus } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import Counter from "@/components/Counter";
import { Layers } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroVisual() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();

  return (
    <div className="hero-visual">
      <div className="hv-float">
        <div className="hv-card">
          <div className="hv-head">
            <h3>{t.hero.visual.focus}</h3>
            <span className="hv-live">
              <i />
              {t.hero.visual.live}
            </span>
          </div>

          <div className="hv-bars">
            {focus.map((f, i) => (
              <div key={f.labelEn}>
                <div className="hv-bar-top">
                  <span className="hv-bar-label">{lang === "tr" ? f.labelTr : f.labelEn}</span>
                  <span className="hv-bar-val">{f.value}%</span>
                </div>
                <div className="hv-bar-track">
                  <motion.div
                    className="hv-bar-fill"
                    initial={reduce ? { width: `${f.value}%` } : { width: 0 }}
                    whileInView={{ width: `${f.value}%` }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.12, ease }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="float-card">
          <span className="fc-ic">
            <Layers />
          </span>
          <span>
            <span className="fc-num">
              <Counter to={100} suffix="+" />
            </span>
            <span className="fc-label">{t.hero.card.projects}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
