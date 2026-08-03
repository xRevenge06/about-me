"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiVuedotjs,
  SiUnity,
} from "react-icons/si";

const TECHS = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiDotnet, label: ".NET Core" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiVuedotjs, label: "Vue.js" },
  { Icon: SiUnity, label: "Unity" },
];

const all = [...TECHS, ...TECHS];

export default function TechMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-fade-l" />
      <div className="marquee-fade-r" />
      <div className="marquee-track">
        {all.map(({ Icon, label }, i) => (
          <div key={i} className="marquee-item">
            <Icon size={14} style={{ color: "var(--color-accent-light)" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-muted)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
