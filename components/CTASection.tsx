"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="donate" className="py-35 bg-background relative overflow-hidden">
      
      {/* ── The Vertical Thread ────────────────── */}
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border/20 hidden md:block" />

      <div className="container mx-auto px-6 lg:pl-32" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: The Manifesto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="badge-pink mb-8 inline-flex items-center gap-2">
              <ShieldCheck size={12} />
              <span className="text-[10px] uppercase tracking-widest font-bold">On-Chain Verified</span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl font-light text-foreground leading-[0.85] tracking-tighter mb-10">
              Join the <br />
              <span className="italic text-pink-500">Movement.</span>
            </h2>

            <div className="space-y-6 max-w-md">
              <p className="font-body text-xl text-muted-foreground font-light leading-relaxed">
                We are re-engineering hope. Every shilling is a hashed commitment to a Kenyan family's survival.
              </p>
              
              <div className="flex items-center gap-4 text-gold py-4 border-y border-border/40">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="font-display text-xs uppercase tracking-[0.2em]">Live Mission Updates: Of Supported  Families</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The "Action Card" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Decorative Glass Background */}
            <div className="absolute inset-0 bg-card border border-border -rotate-1 hidden lg:block" />
            
            <div className="relative z-10 bg-card border border-border p-10 md:p-16 shadow-2xl">
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-12 italic border-l-2 border-pink-500 pl-6">
                "Every donation ensures nutritious food, medication, shelter, and keeping children in school. Be the change that is recorded forever."
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="/donate"
                  className="group flex items-center justify-center gap-4 bg-foreground text-background px-10 py-6 rounded-sm transition-all duration-500 hover:bg-pink-600 hover:text-white"
                >
                  <Heart size={18} className="group-hover:scale-125 transition-transform" />
                  <span className="font-body font-bold uppercase tracking-widest text-xs">Donate to the Mission</span>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </Link>
                
                <a
                  href="mailto:info@cancerfreeblockchain.org"
                  className="group flex items-center justify-center gap-4 border border-border px-10 py-6 rounded-sm hover:border-gold/50 transition-all duration-500"
                >
                  <Mail size={18} className="text-gold" />
                  <span className="font-body font-bold uppercase tracking-widest text-xs">Partner With Us</span>
                </a>
              </div>

              {/* Technical Footnote */}
              <div className="mt-12 pt-8 border-t border-border/40 flex justify-between items-center">
                <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60">Transparency Protocol v2.1</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1 h-1 bg-pink-500/20 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
