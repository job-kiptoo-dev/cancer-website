"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Leaf, Heart, Sun } from "lucide-react";
import soursopImg from "@/assets/soursop.jpg";
import Image from "next/image";

const benefits = [
  { icon: Leaf, text: "Rich in acetogenins & antioxidants" },
  { icon: Heart, text: "Supports immune health" },
  { icon: Sun, text: "Vitamin C & essential minerals" },
  { icon: TreePine, text: "Sustainable community orchards" },
];

export default function SourSoupSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="soursop" className="py-28 relative">
      <div className="line-gold mb-28" />

      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-1 border border-glass-gold bg-glass rounded-sm overflow-hidden">
              <Image
                src={soursopImg}
                alt="Fresh soursop fruit on tree"
                width={800}
                height={800}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 rounded-sm"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-sm text-gold font-body font-semibold tracking-widest uppercase mb-1">
                  Flagship Initiative
                </p>

                <p className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                  2M <span className="text-xl md:text-2xl text-muted-foreground font-medium">trees planned</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-gold">
              Agroforestry Project
            </span>

            <h2 className="font-display text-5xl md:text-6xl font-medium text-foreground mt-4 mb-8 tracking-tight">
              The Soursop <span className="italic text-pink-200">Revolution</span>
            </h2>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              We are planting <strong className="text-foreground font-semibold">2 million soursop trees</strong> across
              strategically mapped counties in Kenya. This agroforestry project creates sustainable nutrition
              sources, generates family income, and increases access to a plant traditionally valued for its
              health benefits.
            </p>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-gold/40 pl-4 max-w-xl">
              Note: While promising lab research exists, we promote soursop as a nutritious addition to a
              healthy, cancer-preventive lifestyle — not as a replacement for medical treatment.
            </p>

            {/* BENEFITS */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-500">
                    <b.icon size={18} className="text-gold" />
                  </div>

                  <span className="font-body text-base md:text-lg text-muted-foreground leading-snug">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
