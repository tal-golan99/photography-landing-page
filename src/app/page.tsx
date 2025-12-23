import { Hero, PortfolioGrid, About, CallToAction } from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Full screen with stunning background */}
      <Hero />

      {/* Portfolio - Selected work grid */}
      <PortfolioGrid />

      {/* About - Brief introduction */}
      <About />

      {/* CTA - View latest work */}
      <CallToAction />
    </main>
  );
}

