"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { social } from "@/lib/data";
import { FiGithub, FiMail, FiArrowRight } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SOCIALS = [
  { href: social.github, Icon: FiGithub, label: "GitHub" },
  { href: social.linkedin, Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: `mailto:${social.email}`, Icon: FiMail, label: "Email" },
];

export default function Hero() {
  const { t } = useLang();
  const roles = t.hero.roles;
  const [ri, setRi] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  const [ci, setCi] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cur = roles[ri];
    if (!del) {
      if (ci < cur.length) {
        timer.current = setTimeout(() => {
          setTxt(cur.slice(0, ci + 1));
          setCi((c) => c + 1);
        }, 70);
      } else {
        timer.current = setTimeout(() => setDel(true), 2200);
      }
    } else {
      if (ci > 0) {
        timer.current = setTimeout(() => {
          setTxt(cur.slice(0, ci - 1));
          setCi((c) => c - 1);
        }, 35);
      } else {
        setDel(false);
        setRi((r) => (r + 1) % roles.length);
      }
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [ci, del, ri, roles]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  const fade = (d: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: d },
  });

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
      </div>

      <div className="hero-content">
        <motion.div {...fade(0)} style={{ marginBottom: 32 }}>
          <span className="section-label">
            <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
              <span
                className="status-ping"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "var(--color-accent-light)",
                  opacity: 0.4,
                }}
              />
              <span
                style={{
                  position: "relative",
                  display: "flex",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--color-accent-light)",
                }}
              />
            </span>
            {t.hero.available}
          </span>
        </motion.div>

        <motion.p {...fade(0.08)} className="hero-greeting">
          {t.hero.greeting}
        </motion.p>

        <motion.h1 {...fade(0.15)} className="hero-name">
          <span style={{ color: "#fff" }}>Tufan </span>
          <span className="gradient-text">Kiraz</span>
        </motion.h1>

        <motion.div {...fade(0.25)} className="hero-role">
          <span>{txt}</span>
          <span className="type-cursor" />
        </motion.div>

        <motion.p {...fade(0.35)} className="hero-desc">
          {t.hero.description}
        </motion.p>

        <motion.div {...fade(0.45)} className="hero-cta">
          <button className="btn-primary" onClick={() => go("projects")}>
            {t.hero.cta_work}
            <FiArrowRight size={15} />
          </button>
          <button className="btn-secondary" onClick={() => go("contact")}>
            {t.hero.cta_contact}
          </button>
        </motion.div>

        <motion.div {...fade(0.55)} className="hero-socials">
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => go("about")}
        {...fade(1)}
        className="hero-scroll"
      >
        <span
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--color-subtle)",
          }}
        >
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            display: "flex",
            height: 28,
            width: 16,
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: 100,
            border: "1px solid var(--color-border)",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              height: 6,
              width: 2,
              borderRadius: 2,
              background: "var(--color-accent)",
            }}
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
