import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Joy Football Academy — Touching lives through Football",
  description: "Touching lives through Football — Joy Football Academy empowers young footballers through training, education, and excellence.",
  openGraph: {
    title: "Joy Football Academy — Touching lives through Football",
    description: "Touching lives through Football — Joy Football Academy empowers young footballers through training, education, and excellence.",
  },
  twitter: {
    title: "Joy Football Academy — Touching lives through Football",
    description: "Touching lives through Football — Joy Football Academy empowers young footballers through training, education, and excellence.",
  },
}

const pillars = [
  {
    title: "Humility",
    description: "Stay grounded on and off the field."
  },
  {
    title: "Joy",
    description: "Football is about passion, fun, and energy."
  },
  {
    title: "Education",
    description: "Balancing learning and sports development."
  },
  {
    title: "Football",
    description: "The beautiful game is our foundation."
  },
  {
    title: "Excellence",
    description: "Striving for the highest standards in everything."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#D7263D] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FFD23F] rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#0B2239] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-bold text-[#0B2239] mb-8 font-heading leading-tight">
                  Joy Football Academy
                </h1>
                <p className="text-xl lg:text-2xl text-[#0B2239]/90 mb-12 font-sans font-medium leading-relaxed">
                  Touching lives through Football
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Button href="/programs" variant="primary" size="lg">
                    Explore Programs
                  </Button>
                  <Button href="/enrol" variant="secondary" size="lg">
                    Enrol Now
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-lg h-96 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D7263D] to-[#FFD23F] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">⚽</span>
                    </div>
                    <span className="text-[#0B2239] font-sans text-lg font-medium">Hero Image</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-8 font-heading">
                  About Us
                </h2>
                <p className="text-xl text-[#0B2239]/80 leading-relaxed font-sans">
                  Joy Football Academy is committed to touching lives through football, preparing young players for elite football and life beyond the game.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-lg h-80 bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] rounded-3xl flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#D7263D] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">🏆</span>
                    </div>
                    <span className="text-[#0B2239] font-sans text-lg font-medium">About Image</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-r from-[#0B2239] to-[#1a3a5a] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-heading">
                Our Vision
              </h2>
              <p className="text-xl lg:text-2xl leading-relaxed font-sans">
                To empower and prepare young footballers for professional football and life beyond the game, enabling them to compete at the highest international levels by 17.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-8 font-heading text-center">
              Our Mission
            </h2>
            <p className="text-xl text-[#0B2239]/80 leading-relaxed font-sans text-center max-w-4xl mx-auto mb-16">
              To develop exceptional footballers with a lifelong passion for the game, built on a foundation of:
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#D7263D] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">💪</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-4 font-heading">Character</h3>
                <p className="text-[#0B2239]/80 font-sans text-lg leading-relaxed">
                  Reliable human beings with integrity, fairness, and a strong moral compass
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#FFD23F] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">⚽</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-4 font-heading">Football Excellence</h3>
                <p className="text-[#0B2239]/80 font-sans text-lg leading-relaxed">
                  Skilled players who are teachable, coachable, and driven by grit
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#A7D8F5] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#0B2239] text-2xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-4 font-heading">Love for the Game</h3>
                <p className="text-[#0B2239]/80 font-sans text-lg leading-relaxed">
                  Nurturing a deep passion that fosters enjoyment, growth, and improvement
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-16 font-heading text-center">
              Our 5 Pillars
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D7263D] to-[#FFD23F] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2239] mb-4 font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-[#0B2239]/80 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
