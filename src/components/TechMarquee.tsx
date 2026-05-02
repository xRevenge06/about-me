"use client";

import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiDotnet, SiMongodb, SiPostgresql, SiMysql, SiGit, SiDocker, SiTailwindcss, SiVuedotjs, SiUnity, SiPython } from "react-icons/si";

const TECHS = [
  { Icon: SiReact, label: "React" }, { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" }, { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiDotnet, label: ".NET Core" }, { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiPostgresql, label: "PostgreSQL" }, { Icon: SiMysql, label: "MySQL" },
  { Icon: SiGit, label: "Git" }, { Icon: SiDocker, label: "Docker" },
  { Icon: SiTailwindcss, label: "TailwindCSS" }, { Icon: SiVuedotjs, label: "Vue.js" },
  { Icon: SiUnity, label: "Unity" }, { Icon: SiPython, label: "Python" },
];

const all = [...TECHS, ...TECHS];

export default function TechMarquee() {
  return (
      <div style={{ overflow: "hidden", borderTop: "1px solid #222", borderBottom: "1px solid #222", padding: "14px 0", position: "relative" }}>
      {/* Fade edges */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(to right, #111, transparent)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(to left, #111, transparent)", zIndex: 1, pointerEvents: "none" }} />

      <div className="marquee-inner">
        {all.map(({ Icon, label }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 18px", marginRight: 8, borderRadius: 8, border: "1px solid #252525", background: "#1a1a1a", flexShrink: 0, opacity: .65 }}>
            <Icon size={14} style={{ color: "#666" }} />
            <span style={{ color: "#666", fontSize: 12, fontWeight: 500, whiteSpace: "nowrap" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
