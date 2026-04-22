"use client";

import Image from "next/image";

/**
 * TEAM PHOTOS SETUP
 * Place photos in: /public/team/
 *   - /public/team/samuel-njai.jpg
 *   - /public/team/zennah-karingi.jpg
 *   - /public/team/damaris-maina.jpg
 *   - /public/team/[4th-member].jpg  ← update when received
 */

interface TeamMember {
  name: string;
  role: string;
  title?: string;
  statement: string;
  photo: string;
  objectPosition?: string; // per-person crop control
  isFounder?: boolean;
}

const TEAM: TeamMember[] = [
  {
    name: "Samuel Njai Gikonyo",
    role: "Founder",
    statement:
      "We believe cancer can be stopped before it starts through awareness, lifestyle transformation and trusted blockchain systems that unify health data for collective action.",
    photo: "/team/samuel-njai.jpeg",
    objectPosition: "center 20%", // full body shot — show from top
    isFounder: true,
  },
  {
    name: "Zennah Karingi",
    role: "Co-Founder",
    statement:
      "We believe one day the world will be cancer-free. We aim to bridge the gap in healthcare for those affected while prioritizing prevention and keeping people healthy.",
    photo: "/team/zennah-karingi.jpeg",
    objectPosition: "center 15%", // pull frame up so full face + shoulders show
  },
  {
    name: "Dr. Damaris Mukami Maina",
    role: "Director & Chief Medical Specialist",
    title: "Cancer Prevention & Health Knowledge",
    statement:
      "Evidence-based prevention is our strongest weapon. By combining medical expertise with accessible health education, we empower communities to take control of their wellbeing.",
    photo: "/team/damaris-maina.jpeg",
    objectPosition: "center 10%", // she's centred in shot — pull up to show more
  },
  {
    name: "Coming Soon",
    role: "Team Member",
    statement: "",
    photo: "",
    objectPosition: "center center",
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.split(" ").filter(Boolean);
  const initials =
    parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0]?.[0] ?? "?";
  return (
    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 300, color: "var(--color-pink)", letterSpacing: "0.2em" }}>
      {initials.toUpperCase()}
    </span>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  const hasPhoto = !!member.photo;
  const isPlaceholder = member.name === "Coming Soon";

  return (
    <div className={[
      "group relative flex flex-col overflow-hidden transition-all duration-500",
      "border rounded-sm",
      member.isFounder
        ? "border-secondary/30 md:col-span-2"
        : "border-border hover:border-pink-500/25",
    ].join(" ")}
      style={{
        background: "hsl(150 25% 5%)",
        boxShadow: member.isFounder
          ? "0 0 0 1px hsl(42 45% 65% / 0.08), 0 8px 32px -8px hsl(42 45% 65% / 0.15)"
          : "none",
      }}
    >
      {/* Top accent line — gold for founder, pink for others */}
      <div className="h-px w-full" style={{
        background: member.isFounder
          ? "linear-gradient(90deg, transparent, hsl(42 45% 65% / 0.5), transparent)"
          : "linear-gradient(90deg, transparent, hsl(338 65% 62% / 0.4), transparent)",
      }} />

      <div className={[
        "flex gap-0",
        member.isFounder ? "md:flex-row flex-col" : "flex-col",
      ].join(" ")}>

        {/* ── Photo ─────────────────────────────────── */}
        <div className={[
          "relative flex-shrink-0 overflow-hidden",
          member.isFounder ? "md:w-56 w-full h-64 md:h-auto md:min-h-[260px]" : "w-full h-56",
        ].join(" ")}
          style={{
            borderRight: member.isFounder ? "1px solid hsl(42 45% 65% / 0.12)" : "none",
            borderBottom: !member.isFounder ? "1px solid hsl(338 65% 62% / 0.12)" : "none",
          }}
        >
          {hasPhoto ? (
            <>
              <Image
                src={member.photo}
                alt={`Photo of ${member.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 224px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                style={{ objectPosition: member.objectPosition ?? "center 20%" }}
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: member.isFounder
                  ? "linear-gradient(to right, transparent 60%, hsl(150 25% 5% / 0.6))"
                  : "linear-gradient(to bottom, transparent 50%, hsl(150 25% 5% / 0.7))",
              }} />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2"
              style={{ background: "hsl(150 20% 7%)", border: "1px dashed hsl(150 10% 15%)" }}>
              {isPlaceholder ? (
                <>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="hsl(150 10% 25%)" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "hsl(150 10% 35%)", fontFamily: "var(--font-body)" }}>
                    Coming soon
                  </span>
                </>
              ) : (
                <Initials name={member.name} />
              )}
            </div>
          )}
        </div>

        {/* ── Text ──────────────────────────────────── */}
        <div className="flex flex-col justify-center gap-4 p-6 flex-1 min-w-0">

          {/* Role badge */}
          <div className="flex items-center gap-3">
            <div className="h-px w-5 flex-shrink-0" style={{
              background: member.isFounder ? "hsl(42 45% 65% / 0.6)" : "hsl(338 65% 62% / 0.5)",
            }} />
            <span style={{
              fontSize: "15px",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              color: member.isFounder ? "hsl(42 45% 65%)" : "hsl(338 55% 68%)",
            }}>
              {member.role}
            </span>
          </div>

          {/* Name */}
          <div>
            <h3 className="font-display font-light text-foreground leading-tight"
              style={{ fontSize: member.isFounder ? "2rem" : "1.5rem" }}>
              {member.name}
            </h3>
            {member.title && (
              <p className="font-body text-muted-foreground mt-1" style={{ fontSize: "1.5rem", lineHeight: 1.5 }}>
                {member.title}
              </p>
            )}
          </div>

          {/* Statement */}
          {member.statement && (
            <blockquote className="font-display italic text-foreground/75 leading-relaxed pl-4"
              style={{
                fontSize: "1.05rem",
                borderLeft: `2px solid ${member.isFounder ? "hsl(42 45% 65% / 0.35)" : "hsl(338 65% 62% / 0.3)"}`,
              }}>
              &ldquo;{member.statement}&rdquo;
            </blockquote>
          )}
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-auto h-px w-full" style={{
        background: member.isFounder
          ? "linear-gradient(90deg, transparent, hsl(42 45% 65% / 0.12), transparent)"
          : "linear-gradient(90deg, transparent, hsl(338 65% 62% / 0.1), transparent)",
      }} />
    </div>
  );
}

export default function Founders() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-[72px]" style={{ background: "linear-gradient(to right, transparent, hsl(42 45% 65% / 0.35))" }} />
            <span className="font-body text-muted-foreground" style={{ fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.25em" }}>
              The People Behind the Mission
            </span>
            <div className="h-px flex-1 max-w-[72px]" style={{ background: "linear-gradient(to left, transparent, hsl(42 45% 65% / 0.35))" }} />
          </div>

          <h2 className="font-display font-light text-foreground tracking-wide mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Our{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, hsl(42 45% 65%), hsl(338 65% 62%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Founders
            </span>
          </h2>

          <p className="font-body text-muted-foreground leading-relaxed mx-auto"
            style={{ fontSize: "1.01rem", maxWidth: "380px" }}>
            A team of medical experts, technologists, and advocates united by
            one purpose — a world free from cancer.
          </p>

          {/* Gold-to-pink duo divider */}
          <div className="mt-8 mx-auto" style={{
            height: "1px",
            maxWidth: "320px",
            background: "linear-gradient(90deg, transparent, hsl(42 45% 65% / 0.4), hsl(338 65% 62% / 0.4), transparent)",
          }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TEAM.filter(m => m.name !== "Coming Soon").map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* Office */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="hsl(338 55% 62%)" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-body text-muted-foreground text-center" style={{ fontSize: "1.02rem" }}>
            Zuhura Place Building, Opp. Quickmart, 4th Floor — Thika Town, Kenya
          </span>
        </div>

      </div>
    </section>
  );
}
