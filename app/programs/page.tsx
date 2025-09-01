import ProgramCard from '@/components/ui/ProgramCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Programs & Fees — Joy Football Academy",
  description: "Explore our comprehensive football training programs for all age groups. From U6 to U19, we offer professional coaching and competitive pricing.",
  openGraph: {
    title: "Our Programs & Fees — Joy Football Academy",
    description: "Explore our comprehensive football training programs for all age groups. From U6 to U19, we offer professional coaching and competitive pricing.",
  },
  twitter: {
    title: "Our Programs & Fees — Joy Football Academy",
    description: "Explore our comprehensive football training programs for all age groups. From U6 to U19, we offer professional coaching and competitive pricing.",
  },
}

const twiceAWeekPrograms = [
  {
    title: "U6",
    price: "R850/month",
    description: "Foundational skills, fun-focused, ball familiarity.",
    frequency: "Twice a Week",
                    href: "/enrol/?program=U6"
  },
  {
    title: "U9",
    price: "R950/month",
    description: "Skill development, small-sided games, coordination.",
    frequency: "Twice a Week",
                    href: "/enrol/?program=U9"
  },
  {
    title: "U11",
    price: "R1,050/month",
    description: "Technique, tactical foundations, team play.",
    frequency: "Twice a Week",
                    href: "/enrol/?program=U11"
  }
]

const threeTimesAWeekPrograms = [
  {
    title: "U13",
    price: "R1,350/month",
    description: "Advanced techniques, conditioning & match prep.",
    frequency: "Up to 3x a Week",
                    href: "/enrol/?program=U13"
  },
  {
    title: "U15",
    price: "R1,450/month",
    description: "Strength & tactics, pathway focus.",
    frequency: "Up to 3x a Week",
                    href: "/enrol/?program=U15"
  },
  {
    title: "U17",
    price: "R1,550/month",
    description: "High-performance training, trials & exposure.",
    frequency: "Up to 3x a Week",
                    href: "/enrol/?program=U17"
  },
  {
    title: "U19",
    price: "R1,800/month",
    description: "Elite prep & life-after-football support.",
    frequency: "Up to 3x a Week",
                    href: "/enrol/?program=U19"
  }
]

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0B2239] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Our Programs & Fees
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto font-sans leading-relaxed">
              Training sessions tailored to every age group, designed for growth, skill, and excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Divider */}
      <hr className="border-t border-[#0B2239]/20" />

      {/* Programs Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src={`${process.env.NODE_ENV === 'production' ? '/jf-academy' : ''}/images/full.png`}
          alt="Football training programs" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl lg:text-6xl font-bold font-heading mb-4 drop-shadow-lg">
              Our Programs
            </h2>
            <p className="text-xl lg:text-2xl font-sans drop-shadow-md">
              Professional training for every age group
            </p>
          </div>
        </div>
      </section>

      {/* Twice a Week Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B2239' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <AnimatedSection>
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-4 font-heading">
              Twice a Week
            </h2>
            <p className="text-xl text-[#0B2239]/80 font-sans">
              Perfect for beginners and developing players
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {twiceAWeekPrograms.map((program, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <ProgramCard
                title={program.title}
                price={program.price}
                description={program.description}
                frequency={program.frequency}
                href={program.href}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Section Divider */}
      <hr className="border-t border-[#0B2239]/20" />

      {/* Up to 3x a Week Section */}
      <section className="bg-gradient-to-r from-yellow-100/40 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-4 font-heading">
                Up to 3x a Week
              </h2>
              <p className="text-xl text-[#0B2239]/80 font-sans">
                Includes morning conditioning for serious players
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threeTimesAWeekPrograms.map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <ProgramCard
                  title={program.title}
                  price={program.price}
                  description={program.description}
                  frequency={program.frequency}
                  href={program.href}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <hr className="border-t border-[#0B2239]/20" />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#D7263D] to-[#B91C3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-10 font-sans max-w-3xl mx-auto">
              Join Joy Football Academy and become part of a community that values excellence, character, and the beautiful game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/enrol/"
                variant="primary"
                size="lg"
                className="bg-white text-[#D7263D] hover:bg-gray-100"
              >
                Enrol Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
