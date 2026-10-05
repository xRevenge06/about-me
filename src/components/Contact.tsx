"use client";

import { FormEvent, useState } from "react";
import { social } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, Globe, MapPin, Send, Check } from "@/components/icons";

type Status = "idle" | "sending" | "ok";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 600));
    window.location.href = `mailto:${social.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`${form.name}\n${form.email}\n\n${form.message}`)}`;
    setStatus("ok");
  };

  const contacts = [
    { icon: <Mail />, label: t.contact.email, value: social.email, href: `mailto:${social.email}` },
    { icon: <Phone />, label: t.contact.phone, value: social.phoneDisplay, href: `tel:${social.phone}` },
    { icon: <Globe />, label: t.contact.web, value: social.websiteDisplay, href: social.website },
    {
      icon: <MapPin />,
      label: t.contact.location,
      value: social.location,
      href: "https://www.google.com/maps/search/?api=1&query=Ankara",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t.contact.kicker}</span>
          <h2 className="h2">{t.contact.title}</h2>
          <p className="section-sub">{t.contact.sub}</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <ul className="clist">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <span className="ic">{c.icon}</span>
                    <span>
                      <small>{c.label}</small>
                      <b>{c.value}</b>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="form" onSubmit={submit}>
              <div className="form-row">
                <label>
                  {t.contact.form.name}
                  <input
                    required
                    value={form.name}
                    placeholder={t.contact.form.name_ph}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label>
                  {t.contact.form.email}
                  <input
                    required
                    type="email"
                    value={form.email}
                    placeholder={t.contact.form.email_ph}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
              </div>
              <label>
                {t.contact.form.subject}
                <input
                  required
                  value={form.subject}
                  placeholder={t.contact.form.subject_ph}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </label>
              <label>
                {t.contact.form.message}
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  placeholder={t.contact.form.message_ph}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              <button type="submit" className="btn btn-primary" disabled={status !== "idle"}>
                {status === "sending" ? (
                  t.contact.form.sending
                ) : status === "ok" ? (
                  <>
                    {t.contact.form.success}
                    <Check />
                  </>
                ) : (
                  <>
                    {t.contact.form.send}
                    <Send />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
