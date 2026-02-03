import useDarkMode from "../hooks/useThemehook";
import React, { useEffect, useRef, useState, useMemo } from "react";

export default function CanvasGrid({
  gridSize = 22,
  dotRadius = 1.2,
  highlightRadius = 2.8,
  highlightCells = { w: 6, h: 6 },
  className = "",
  children,
  hoverColor = "#00ffff"
}) {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);

  const [size, setSize] = useState({ w: 0, h: 0 });

  const rafRef = useRef(null);
  const hoverCellRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!size.w || !size.h) return;

    const cols = Math.ceil(size.w / gridSize);
    const rows = Math.ceil(size.h / gridSize);
    const total = rows * cols;

    const svg = svgRef.current;
    svg.innerHTML = ""; // clear old circles

    const dots = [];
    for (let i = 0; i < total; i++) {
      const x = i % cols;
      const y = Math.floor(i / cols);
      const cx = x * gridSize + gridSize / 2;
      const cy = y * gridSize + gridSize / 2;

      // Glow layer
      const glow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      glow.setAttribute("cx", cx);
      glow.setAttribute("cy", cy);
      glow.setAttribute("r", 0);
      glow.setAttribute("fill", hoverColor);
      glow.style.opacity = 0;
      glow.style.filter = "blur(4px)";
      svg.appendChild(glow);

      // main dot
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", cy);
      dot.setAttribute("r", dotRadius);
      dot.setAttribute("fill", hoverColor);
      dot.style.opacity = 0.07;
      svg.appendChild(dot);

      dots.push({ x, y, dot, glow });
    }

    const maxDist = Math.sqrt(highlightCells.w ** 2 + highlightCells.h ** 2);

    const animate = () => {
      const hover = hoverCellRef.current;

      for (const p of dots) {
        if (!hover) {
          p.dot.setAttribute("r", dotRadius);
          p.dot.style.opacity = 0.07;
          p.glow.style.opacity = 0;
          continue;
        }

        const dist = Math.hypot(p.x - hover.x, p.y - hover.y);
        const intensity = Math.max(0, 1 - dist / maxDist);

        const r = dotRadius + intensity * (highlightRadius - dotRadius);
        const opacity = 0.05 + intensity * 0.55;

        p.dot.setAttribute("r", r);
        p.dot.style.opacity = opacity;
        p.glow.setAttribute("r", r * 4);
        p.glow.style.opacity = intensity * 0.13;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [size.w, size.h, gridSize, dotRadius, highlightRadius, hoverColor]);

  const onMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    hoverCellRef.current = {
      x: Math.floor((e.clientX - rect.left) / gridSize),
      y: Math.floor((e.clientY - rect.top) / gridSize),
    };
  };

  const onLeave = () => {
    hoverCellRef.current = null;
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden ${className}`}
      style={{ width: "100%", height: "100vh" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      <svg ref={svgRef} width={size.w} height={size.h} className="absolute inset-0" />

      {children}
    </div>
  );
}
