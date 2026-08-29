"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} Tufan Kiraz</span>
      <span>{t.footer.rights}</span>
    </footer>
  );
}
