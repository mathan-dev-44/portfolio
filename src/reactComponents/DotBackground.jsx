import { useEffect, useRef } from "react";

export default function DotBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      containerRef.current?.style.setProperty("--gx", `${e.clientX}px`);
      containerRef.current?.style.setProperty("--gy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ "--gx": "-999px", "--gy": "-999px" }}
    >
      {/* Base dot grid — subtle, always visible */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Active dots — revealed in a tight circle around cursor */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--dot-active-color) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient( transparent 75%)",
          WebkitMaskImage:
            "radial-gradient( transparent 75%)",
        }}
      />

      {/* Soft glow around cursor */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 140px at var(--gx) var(--gy), var(--dot-glow), transparent 70%)",
        }}
      />
    </div>
  );
}
