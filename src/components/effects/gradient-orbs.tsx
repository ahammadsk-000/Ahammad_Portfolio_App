"use client";

/**
 * Floating, blurred gradient orbs + grid overlay for an ambient,
 * futuristic background. Purely decorative.
 */
export function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* Orbs */}
      <div className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-[120px] animate-float-slow" />
      <div className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-[120px] animate-float-slow [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[130px] animate-float-slow [animation-delay:-12s]" />
      <div className="absolute -bottom-24 right-1/4 h-[24rem] w-[24rem] rounded-full bg-cyan-400/15 blur-[120px] animate-float-slow [animation-delay:-3s]" />
    </div>
  );
}
