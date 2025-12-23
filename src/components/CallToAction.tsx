'use client';

import { motion } from 'framer-motion';
import { FadeInUp, FadeIn } from './AnimatedSection';

export function CallToAction() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <div className="mx-auto mb-8 h-px w-16 bg-white/30" />
        </FadeIn>

        <FadeInUp delay={0.1}>
          <h2 className="font-serif text-3xl font-light tracking-wide text-white sm:text-4xl md:text-5xl">
            Let&apos;s Create Together
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <motion.a
            href="https://www.instagram.com/tal_photograph/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mt-10 inline-flex items-center justify-center overflow-hidden"
          >
            {/* Button background with border */}
            <span className="relative border border-white/40 bg-transparent px-10 py-4 font-sans text-xs font-medium uppercase tracking-ultra text-white transition-all duration-500 hover:border-white/80 hover:bg-white hover:text-charcoal sm:px-12 sm:text-sm">
              View Latest Work
            </span>
          </motion.a>
        </FadeInUp>

        <FadeIn delay={0.4}>
          <div className="mx-auto mt-16 h-px w-16 bg-white/30" />
        </FadeIn>

        {/* Footer note */}
        <FadeInUp delay={0.5}>
          <p className="mt-8 font-serif text-sm italic text-white/40">
            © {new Date().getFullYear()} Tal Golan Photography
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
