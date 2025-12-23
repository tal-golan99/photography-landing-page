'use client';

import { FadeInUp, FadeIn } from './AnimatedSection';

export function About() {
  return (
    <section className="bg-cream px-6 py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto mb-12 h-px w-16 bg-stone/40" />
        </FadeIn>

        {/* Introduction */}
        <div className="mb-16 text-center sm:mb-20">
          <FadeInUp>
            <h2 className="font-serif text-3xl font-light tracking-wide text-charcoal sm:text-4xl md:text-5xl">
              Hi, I&apos;m Tal Golan
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl font-sans text-base font-light leading-relaxed text-graphite sm:text-lg">
              At 26, photography is more than just a profession to me—it&apos;s how I tell stories. 
              As a wedding photographer, I live for the small moments: a fleeting glance, 
              a burst of laughter, and all the raw emotion in between.
            </p>
          </FadeInUp>
        </div>

        {/* Decorative divider */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mb-16 flex items-center justify-center gap-4 sm:mb-20">
            <div className="h-px w-8 bg-stone/30" />
            <div className="h-1.5 w-1.5 rotate-45 border border-stone/40" />
            <div className="h-px w-8 bg-stone/30" />
          </div>
        </FadeIn>

        {/* My Approach */}
        <div className="mb-16 text-center sm:mb-20">
          <FadeInUp delay={0.2}>
            <h3 className="font-serif text-2xl font-light italic tracking-wide text-charcoal sm:text-3xl">
              My Approach
            </h3>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-graphite sm:text-lg">
              My approach is simple: I want to tell your story exactly as it unfolds—authentic, 
              candid, and completely unposed. I believe a great photograph should make you feel 
              the magic of your day years later, as if it&apos;s happening all over again.
            </p>
          </FadeInUp>
        </div>

        {/* Decorative divider */}
        <FadeIn delay={0.3}>
          <div className="mx-auto mb-16 flex items-center justify-center gap-4 sm:mb-20">
            <div className="h-px w-8 bg-stone/30" />
            <div className="h-1.5 w-1.5 rotate-45 border border-stone/40" />
            <div className="h-px w-8 bg-stone/30" />
          </div>
        </FadeIn>

        {/* What I Offer */}
        <div className="mb-16 text-center sm:mb-20">
          <FadeInUp delay={0.35}>
            <h3 className="font-serif text-2xl font-light italic tracking-wide text-charcoal sm:text-3xl">
              What I Offer
            </h3>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-graphite sm:text-lg">
              Natural documentation, a personal touch, and a focus that stays entirely on you. 
              Our journey starts with an open conversation, moves through careful planning for 
              your big day, and ends with editing that highlights who you truly are.
            </p>
          </FadeInUp>
        </div>

        {/* Closing statement */}
        <FadeInUp delay={0.45}>
          <p className="mx-auto max-w-xl text-center font-serif text-lg italic leading-relaxed text-stone sm:text-xl">
            If you&apos;re looking for a photographer who understands the significance of your 
            wedding day and captures your story through genuine imagery—I&apos;m here for you.
          </p>
        </FadeInUp>

        <FadeIn delay={0.5}>
          <div className="mx-auto mt-12 h-px w-16 bg-stone/40" />
        </FadeIn>
      </div>
    </section>
  );
}
