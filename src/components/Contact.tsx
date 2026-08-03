"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { social } from "@/lib/data";
import {
  FiMail,
  FiGithub,
  FiSend,
  FiCheckCircle,
  FiArrowUpRight,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

type ContactKey =
  | "email_label"
  | "phone_label"
  | "website_label"
  | "github_label"
  | "linkedin_label";

const CONTACT_ITEMS: {
  Icon: typeof FiMail;
  k: ContactKey;
  val: string;
  href: string;
}[] = [
  {
    Icon: FiMail,
    k: "email_label",
    val: social.email,
    href: `mailto:${social.email}`,
  },
  {
    Icon: FiPhone,
    k: "phone_label",
    val: social.phoneDisplay,
    href: `tel:${social.phone}`,
  },
  {
    Icon: FiGlobe,
    k: "website_label",
    val: social.websiteDisplay,
    href: social.website,
  },
  {
    Icon: FiGithub,
    k: "github_label",
    val: "github.com/xRevenge06",
    href: social.github,
  },
  {
    Icon: FaLinkedinIn,
    k: "linkedin_label",
    val: "linkedin.com/in/tufan-kiraz",
    href: social.linkedin,
  },
];

type FS = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const [fs, setFs] = useState<FS>("idle");
  const [fd, setFd] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFs("sending");
    await new Promise((r) => setTimeout(r, 1200));
    window.location.href = `mailto:${social.email}?subject=${encodeURIComponent(fd.subject)}&body=${encodeURIComponent(`Ad: ${fd.name}\nE-posta: ${fd.email}\n\n${fd.message}`)}`;
    setFs("success");
    setTimeout(() => {
      setFs("idle");
      setFd({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={iv ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.title2}</span>
          </h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid-contact">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={iv ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {CONTACT_ITEMS.map(({ Icon, k, val, href }) => (
              <a
                key={k}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card contact-item"
              >
                <div className="contact-icon">
                  <Icon size={16} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--color-subtle)",
                    }}
                  >
                    {t.contact[k]}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#d4d4d8",
                      marginTop: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {val}
                  </p>
                </div>
                <FiArrowUpRight size={13} style={{ color: "var(--color-subtle)", flexShrink: 0 }} />
              </a>
            ))}

            <div className="card contact-item">
              <div style={{ position: "relative", width: 8, height: 8, flexShrink: 0 }}>
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
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "var(--color-accent-light)",
                  }}
                />
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#eee" }}>
                  {t.contact.available_label}
                </p>
                <p style={{ fontSize: 12, color: "var(--color-subtle)", marginTop: 2 }}>
                  {t.contact.response_time}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={iv ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className="card" style={{ padding: 24, borderRadius: 16 }}>
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="grid-form">
                  <div className="form-group">
                    <label className="form-label">{t.contact.form.name}</label>
                    <input
                      type="text"
                      required
                      value={fd.name}
                      placeholder={t.contact.form.name_placeholder}
                      onChange={(e) => setFd({ ...fd, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.contact.form.email}</label>
                    <input
                      type="email"
                      required
                      value={fd.email}
                      placeholder={t.contact.form.email_placeholder}
                      onChange={(e) => setFd({ ...fd, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">{t.contact.form.subject}</label>
                  <input
                    type="text"
                    required
                    value={fd.subject}
                    placeholder={t.contact.form.subject_placeholder}
                    onChange={(e) => setFd({ ...fd, subject: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.contact.form.message}</label>
                  <textarea
                    required
                    rows={5}
                    value={fd.message}
                    placeholder={t.contact.form.message_placeholder}
                    onChange={(e) => setFd({ ...fd, message: e.target.value })}
                    className="form-input"
                    style={{ resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={fs === "sending" || fs === "success"}
                  className="btn-primary"
                  style={{
                    justifyContent: "center",
                    cursor: fs === "idle" ? "pointer" : "default",
                    opacity: fs === "idle" ? 1 : 0.7,
                  }}
                >
                  {fs === "sending" ? (
                    <>
                      <div
                        className="spin"
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.4)",
                          borderTopColor: "transparent",
                        }}
                      />
                      {t.contact.form.sending}
                    </>
                  ) : fs === "success" ? (
                    <>
                      <FiCheckCircle size={15} />
                      {t.contact.form.success}
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      {t.contact.form.send}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
