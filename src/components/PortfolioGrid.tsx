'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeInUp } from './AnimatedSection';

const portfolioImages = [
  {
    src: '/images/DSC05605.jpg',
    alt: 'Wedding photography, joyful moment',
  },
  {
    src: '/images/DSC03217.jpg',
    alt: 'Wedding photography, intimate celebration',
  },
  {
    src: '/images/DSC09479.jpg',
    alt: 'Wedding photography, golden hour portrait',
  },
];

export function PortfolioGrid() {
  return (
    <section className="bg-ivory px-6 py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeInUp className="mb-12 text-center sm:mb-16">
          <h2 className="font-serif text-3xl font-light tracking-wide text-charcoal sm:text-4xl md:text-5xl">
            Selected Work
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-stone/40" />
        </FadeInUp>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {portfolioImages.map((image, index) => (
            <FadeInUp key={image.src} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden bg-cream"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                
                {/* Corner accents on hover */}
                <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-white/0 transition-all duration-500 group-hover:border-white/60" />
                <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-white/0 transition-all duration-500 group-hover:border-white/60" />
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* View Latest Work Button */}
        <FadeInUp delay={0.5} className="mt-12 text-center sm:mt-16">
          <motion.a
            href="https://www.instagram.com/tal_photograph/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block border border-charcoal/40 bg-transparent px-10 py-4 font-sans text-xs font-medium uppercase tracking-ultra text-charcoal transition-all duration-500 hover:border-charcoal hover:bg-charcoal hover:text-ivory sm:px-12 sm:text-sm"
          >
            View Latest Work
          </motion.a>
        </FadeInUp>
      </div>
    </section>
  );
}
