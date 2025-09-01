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
  // Force rebuild for Vercel deployment with MutationObserver fix
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
                    <div className="absolute inset-0">
              <img
                src={`${process.env.NODE_ENV === 'production' ? '/jf-academy' : ''}/images/image.png`}
                alt="Joy Football Academy players training"
                className="w-full h-full object-cover"
              />
            </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-heading leading-tight drop-shadow-lg">
              Joy Football Academy
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 font-sans font-medium leading-relaxed drop-shadow-md max-w-4xl mx-auto">
              Touching lives through Football
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/programs/" variant="primary" size="lg">
                Explore Programs
              </Button>
              <Button href="/enroll/" variant="white" size="lg">
                Enroll Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-6 font-heading">
                About Us
              </h2>
              <p className="text-xl text-[#0B2239]/80 leading-relaxed font-sans">
                Joy Football Academy is committed to touching lives through football, preparing young players for elite football and life beyond the game.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <hr className="border-t border-gray-200" />

      {/* Vision Section */}
      <section className="bg-gradient-to-r from-[#0B2239] to-[#1a3a5a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
                Our Vision
              </h2>
              <p className="text-xl lg:text-2xl leading-relaxed font-sans">
                To empower and prepare young footballers for professional football and life beyond the game, enabling them to compete at the highest international levels by 17 years.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <hr className="border-t border-gray-200" />

      {/* Mission Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-6 font-heading">
                Our Mission
              </h2>
              <p className="text-xl text-[#0B2239]/80 leading-relaxed font-sans">
                To develop exceptional footballers with a lifelong passion for the game, built on a foundation of:
              </p>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#D7263D] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">💪</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-3 font-heading">Character</h3>
                <p className="text-[#0B2239]/80 font-sans text-lg leading-relaxed">
                  Reliable human beings with integrity, fairness, and a strong moral compass
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#FFD23F] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">⚽</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-3 font-heading">Football Excellence</h3>
                <p className="text-[#0B2239]/80 font-sans text-lg leading-relaxed">
                  Skilled players who are teachable, coachable, and driven by grit
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#A7D8F5] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#0B2239] text-2xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-3 font-heading">Love for the Game</h3>
                <p className="text-[#0B2239]/80 font-sans text-lg leading-relaxed">
                  Nurturing a deep passion that fosters enjoyment, growth, and improvement
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <hr className="border-t border-gray-200" />

      {/* Pillars Section */}
      <section className="bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-16 font-heading text-center">
              Our 5 Pillars
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative h-80 bg-gradient-to-br from-[#A7D8F5] via-[#8BC4E8] to-[#6BB0DB] rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#0B2239] text-lg font-bold font-heading">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center p-6 text-center">
                    <h3 className="text-2xl font-bold text-[#0B2239] mb-4 font-heading group-hover:text-[#D7263D] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-[#0B2239]/80 font-sans text-base leading-relaxed group-hover:text-[#0B2239] transition-colors duration-300">
                      {pillar.description}
                    </p>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A7D8F5] via-[#8BC4E8] to-[#6BB0DB]"></div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
