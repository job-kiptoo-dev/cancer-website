"use client";

import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background ─────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Kenyan community"
          fill
          priority
          className="object-cover opacity-25 mix-blend-luminosity"
        />
        {/* Deep rose-black gradient over image */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />
      </div>

      {/* ── Ambient glows ──────────────────────────────── */}
      {/* Pink glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-8%",
          right: "-4%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(338 65% 58% / 0.07), transparent 65%)",
        }}
      />
      {/* Softer pink glow — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          left: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(338 50% 30% / 0.08), transparent 70%)",
        }}
      />
      {/* Gold hint — far right edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          right: "0",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(42 45% 65% / 0.04), transparent 70%)",
        }}
      />

      {/* ── Awareness ribbon strip — top ───────────────── */}
      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          height: 3,
          background: "linear-gradient(90deg, hsl(338 65% 58%), hsl(338 50% 72%), hsl(42 45% 65%), hsl(338 65% 58%))",
          backgroundSize: "200% 100%",
          animation: "ribbonSlide 4s linear infinite",
        }}
      />

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-32 pb-24">

        {/* Left: Typography */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              {/* Pink ribbon icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="hsl(338 65% 62%)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.335 4.068 1 6.938 1c1.71 0 3.591.786 5.062 2.965C13.47 1.787 15.35 1 17.062 1 19.932 1 23 3.335 23 7.191c0 4.105-5.37 8.863-11 14.402z" />
              </svg>
              <span
                className="font-body"
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "hsl(338 45% 72%)",
                }}
              >
                Cancer Prevention Kenya
              </span>
              <div style={{ height: 1, width: 24, background: "hsl(338 65% 58% / 0.4)" }} />
              <span
                className="font-body"
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "hsl(42 45% 65% / 0.7)",
                }}
              >
                Blockchain-Powered
              </span>
            </div>

            {/* Hero headline */}
            <h1
              className="font-display font-light text-foreground mb-8"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.01em",
              }}
            >
              Prevention
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  backgroundImage: "linear-gradient(135deg, hsl(338 65% 62%), hsl(338 45% 72%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                is the New
              </span>
              <br />
              Cure.
            </h1>

            {/* Pink divider under headline */}
            <div
              className="mb-8"
              style={{
                height: 1,
                width: 120,
                background: "linear-gradient(90deg, hsl(338 65% 58% / 0.6), transparent)",
              }}
            />

            <p
              className="font-body font-light text-muted-foreground mb-12"
              style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "50ch" }}
            >
              We empower marginalized Kenyan families to defeat cancer through
              prevention — with nutrition, education, shelter, and
              blockchain-verified accountability for every donation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#donate"
                className="font-body font-semibold transition-all duration-300"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "hsl(338 65% 58%)",
                  color: "#fff",
                  borderRadius: 2,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 28px -6px hsl(338 65% 58% / 0.45)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "hsl(338 55% 65%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "hsl(338 65% 58%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Support a Family Today
              </a>

              <a
                href="#about"
                className="font-body font-medium text-muted-foreground transition-all duration-300"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px",
                  background: "transparent",
                  border: "1px solid hsl(338 15% 18%)",
                  borderRadius: 2,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  color: "hsl(340 8% 62%)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(338 40% 30%)";
                  (e.currentTarget as HTMLElement).style.color = "hsl(340 15% 88%)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(338 15% 18%)";
                  (e.currentTarget as HTMLElement).style.color = "hsl(340 8% 62%)";
                }}
              >
                Learn Our Mission
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </motion.div>
        </div>

        {/* Right: Data cards */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 gap-3"
          >

            {/* Main image card */}
            <div
              className="col-span-2 relative overflow-hidden"
              style={{
                height: 240,
                borderRadius: 2,
                border: "1px solid hsl(338 30% 14%)",
                background: "hsl(340 18% 7%)",
              }}
            >
              <Image
                src={heroBg}
                alt="Community impact"
                fill
                className="object-cover opacity-70 "
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, hsl(340 20% 4%) 0%, transparent 60%)" }}
              />
              {/* Pink top accent line */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: 2,
                  background: "linear-gradient(90deg, hsl(338 65% 58%), hsl(338 45% 72% / 0.4), transparent)",
                }}
              />
              <div className="absolute bottom-5 left-5">
                <p
                  className="font-body font-medium mb-1"
                  style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", color: "hsl(338 45% 72%)" }}
                >
                  Active Mission
                </p>
                <p className="font-display font-light text-foreground" style={{ fontSize: "1.1rem" }}>
                  Cancer Prevention Kenya
                </p>
              </div>
            </div>

            {/* Stat cards */}
            {[
              { label: "Soursop Trees Planned", value: "2M",    color: "hsl(338 65% 62%)" },
              { label: "Kenyans Educated Yearly", value: "100K+", color: "hsl(42 45% 65%)" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden"
                style={{
                  padding: "1.25rem",
                  borderRadius: 2,
                  border: "1px solid hsl(338 15% 12%)",
                  background: "hsl(340 18% 6%)",
                  transition: "border-color .3s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "hsl(338 40% 18%)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "hsl(338 15% 12%)"}
              >
                {/* Hover top line */}
                <div
                  className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ height: 1, background: `linear-gradient(90deg, transparent, ${stat.color} / 0.4, transparent)` }}
                />
                <p
                  className="font-body font-medium"
                  style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.18em", color: "hsl(340 8% 50%)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="font-display font-light mt-4"
                  style={{ fontSize: "2rem", color: stat.color, lineHeight: 1 }}
                >
                  {stat.value}
                </p>
              </div>
            ))}

            {/* Blockchain stat — full width */}
            <div
              className="col-span-2 flex items-center justify-between"
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: 2,
                border: "1px solid hsl(338 30% 14%)",
                background: "linear-gradient(135deg, hsl(338 30% 8%), hsl(340 18% 6%))",
              }}
            >
              <div>
                <p
                  className="font-body font-medium"
                  style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.18em", color: "hsl(340 8% 50%)" }}
                >
                  Blockchain Tracked
                </p>
                <p
                  className="font-display font-light mt-2"
                  style={{
                    fontSize: "1.75rem",
                    backgroundImage: "linear-gradient(135deg, hsl(338 65% 62%), hsl(42 45% 65%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  100%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex" style={{ width: 8, height: 8 }}>
                  <span
                    className="animate-ping absolute inline-flex rounded-full"
                    style={{ width: "100%", height: "100%", background: "hsl(338 65% 62%)", opacity: 0.6 }}
                  />
                  <span
                    className="relative inline-flex rounded-full"
                    style={{ width: 8, height: 8, background: "hsl(338 65% 62%)" }}
                  />
                </span>
                <p
                  className="font-body"
                  style={{ fontSize: "10px", letterSpacing: "0.08em", color: "hsl(340 8% 50%)" }}
                >
                  Ledger synced
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ── Bottom fade ────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 120, background: "linear-gradient(to bottom, transparent, var(--color-background))" }}
      />

      {/* ── Ribbon animation keyframe ───────────────────── */}
      <style>{`
        @keyframes ribbonSlide {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>

    </section>
  );
}
