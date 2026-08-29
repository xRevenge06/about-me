"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Magnetic({ children, className, onClick, href, type = "button", disabled }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 20, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 240, damping: 20, mass: 0.3 });

  const move = (e: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.32);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.32);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (href) {
    return (
      <motion.a
        className={className}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        style={{ x: sx, y: sy }}
        onMouseMove={move}
        onMouseLeave={reset}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </motion.button>
  );
}
