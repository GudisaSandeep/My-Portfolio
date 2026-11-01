"use client";
import { useEffect, useRef } from "react";
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current)
        bar.current.style.transform = `scaleX(${height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}
