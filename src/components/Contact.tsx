"use client";

import { FormEvent, useState } from "react";
import { social } from "@/lib/data";
import Magnetic from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/context/LanguageContext";

type Status = "idle" | "sending" | "ok";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700));
    window.location.href = `mailto:${social.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`${form.name}\n${form.email}\n\n${form.message}`)}`;
    setStatus("ok");
  };

  return (
    <section id="contact" className="block">
      <Reveal>
        <p className="kicker">{t.contact.kicker}</p>
        <h2 className="h2">{t.contact.title}</h2>
        <p className="lead" style={{ marginTop: 0, marginBottom: 36 }}>
          {t.contact.subtitle}
        </p>
      </Reveal>
      <div className="contact-grid">
        <ul className="clist">
          <li>
            <a href={`mailto:${social.email}`}>
              <small>{t.contact.email}</small>
              <b>{social.email}</b>
            </a>
          </li>
          <li>
            <a href={`tel:${social.phone}`}>
              <small>{t.contact.phone}</small>
              <b>{social.phoneDisplay}</b>
            </a>
          </li>
          <li>
            <a href={social.website} target="_blank" rel="noreferrer">
              <small>{t.contact.web}</small>
              <b>{social.websiteDisplay}</b>
            </a>
          </li>
          <li>
            <a href={social.github} target="_blank" rel="noreferrer">
              <small>{t.contact.github}</small>
              <b>xRevenge06</b>
            </a>
          </li>
          <li>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <small>{t.contact.linkedin}</small>
              <b>tufan-kiraz</b>
            </a>
          </li>
        </ul>

        <form onSubmit={submit}>
          <div className="row2">
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
              rows={4}
              value={form.message}
              placeholder={t.contact.form.message_ph}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <Magnetic className="btn btn-lime" type="submit" disabled={status !== "idle"}>
            {status === "sending" ? t.contact.form.sending : status === "ok" ? t.contact.form.success : t.contact.form.send}
          </Magnetic>
        </form>
      </div>
    </section>
  );
}
