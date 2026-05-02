"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { social } from "@/lib/data";
import { FiMail, FiGithub, FiSend, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";

const ITEMS = [
  { Icon: FiMail,   k: "email_label"   as const, val: "tufanege123@gmail.com", href: `mailto:${social.email}` },
  { Icon: FiGithub, k: "github_label"  as const, val: "github.com/xRevenge06",  href: social.github           },
  { Icon: FiMail,   k: "bionluk_label" as const, val: "bionluk.com/revtufan",   href: social.bionluk          },
];

type FS = "idle"|"sending"|"success"|"error";

export default function Contact() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const [fs, setFs] = useState<FS>("idle");
  const [fd, setFd] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setFs("sending");
    await new Promise(r => setTimeout(r, 1400));
    window.location.href = `mailto:${social.email}?subject=${encodeURIComponent(fd.subject)}&body=${encodeURIComponent(`Ad: ${fd.name}\nE-posta: ${fd.email}\n\n${fd.message}`)}`;
    setFs("success");
    setTimeout(() => { setFs("idle"); setFd({ name: "", email: "", subject: "", message: "" }); }, 3000);
  };

  const inp: React.CSSProperties = { width: "100%", background: "#1a1a1a", border: "1px solid #1e1e1e", borderRadius: 9, padding: "11px 14px", color: "#eee", fontSize: 14, outline: "none", transition: "border-color .15s" };
  const lbl: React.CSSProperties = { display: "block", color: "#555", fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 7 };

  return (
    <section id="contact" ref={ref} className="s-pad">
      <div style={{ maxWidth: 880, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }}
          style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="s-label">{t.contact.label}</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, color: "#fff", marginTop: 14 }}>
            {t.contact.title} <span className="g-text">{t.contact.title2}</span>
          </h2>
          <p style={{ color: "#777", fontSize: 14.5, marginTop: 12 }}>{t.contact.subtitle}</p>
        </motion.div>

        <div className="rg-contact">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: .45, delay: .1 }}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ITEMS.map(({ Icon, k, val, href }) => (
              <a key={k} href={href} target="_blank" rel="noopener noreferrer" className="c-card"
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 11, textDecoration: "none", transition: "border-color .15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#2e2e2e"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="#1c1c1c"; }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "#202020", border: "1px solid #1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={14} style={{ color: "#777" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "#444", fontSize: 10, textTransform: "uppercase", letterSpacing: ".1em" }}>{t.contact[k]}</p>
                  <p style={{ color: "#bbb", fontSize: 13, fontWeight: 500, marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{val}</p>
                </div>
                <FiArrowUpRight size={12} style={{ color: "#333", flexShrink: 0 }} />
              </a>
            ))}
            {/* Status */}
            <div className="c-card" style={{ padding: "12px 14px", borderRadius: 11, display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ position: "relative", width: 8, height: 8, flexShrink: 0 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#fff", opacity: .3, animation: "ping2 1.5s ease-in-out infinite" }} />
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#fff" }} />
              </div>
              <div>
                <p style={{ color: "#ddd", fontSize: 13, fontWeight: 500 }}>{t.contact.available_label}</p>
                <p style={{ color: "#666", fontSize: 11.5, marginTop: 1 }}>{t.contact.response_time}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: .45, delay: .2 }}>
            <div className="c-card" style={{ borderRadius: 14, padding: "22px" }}>
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="rg-form">
                  <div>
                    <label style={lbl}>{t.contact.form.name}</label>
                    <input type="text" required value={fd.name} placeholder={t.contact.form.name_placeholder} onChange={e => setFd({ ...fd, name: e.target.value })} style={inp}
                      onFocus={e => e.target.style.borderColor="#333"} onBlur={e => e.target.style.borderColor="#1e1e1e"} />
                  </div>
                  <div>
                    <label style={lbl}>{t.contact.form.email}</label>
                    <input type="email" required value={fd.email} placeholder={t.contact.form.email_placeholder} onChange={e => setFd({ ...fd, email: e.target.value })} style={inp}
                      onFocus={e => e.target.style.borderColor="#333"} onBlur={e => e.target.style.borderColor="#1e1e1e"} />
                  </div>
                </div>
                <div>
                  <label style={lbl}>{t.contact.form.subject}</label>
                  <input type="text" required value={fd.subject} placeholder={t.contact.form.subject_placeholder} onChange={e => setFd({ ...fd, subject: e.target.value })} style={inp}
                    onFocus={e => e.target.style.borderColor="#333"} onBlur={e => e.target.style.borderColor="#1e1e1e"} />
                </div>
                <div>
                  <label style={lbl}>{t.contact.form.message}</label>
                  <textarea required rows={5} value={fd.message} placeholder={t.contact.form.message_placeholder} onChange={e => setFd({ ...fd, message: e.target.value })} style={{ ...inp, resize: "none" }}
                    onFocus={e => e.target.style.borderColor="#333"} onBlur={e => e.target.style.borderColor="#1e1e1e"} />
                </div>
                <button type="submit" disabled={fs === "sending" || fs === "success"}
                  style={{ padding: "13px 20px", borderRadius: 10, fontWeight: 600, fontSize: 14, border: "none", cursor: fs === "idle" ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all .2s",
                    background: fs === "idle" ? "#fff" : "#111", color: fs === "idle" ? "#000" : "#888" }}>
                  {fs === "sending" ? <><div style={{ width: 13, height: 13, borderRadius: "50%", border: "2px solid #666", borderTopColor: "transparent", animation: "spin2 .7s linear infinite" }} />{t.contact.form.sending}</>
                   : fs === "success" ? <><FiCheckCircle size={14} />{t.contact.form.success}</>
                   : <><FiSend size={13} />{t.contact.form.send}</>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes ping2{0%,100%{transform:scale(1);opacity:.3}50%{transform:scale(2);opacity:0}} @keyframes spin2{to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}
