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
    href: "/enrol?program=U6"
  },
  {
    title: "U9",
    price: "R950/month",
    description: "Skill development, small-sided games, coordination.",
    frequency: "Twice a Week",
    href: "/enrol?program=U9"
  },
  {
    title: "U11",
    price: "R1,050/month",
    description: "Technique, tactical foundations, team play.",
    frequency: "Twice a Week",
    href: "/enrol?program=U11"
  }
]

const threeTimesAWeekPrograms = [
  {
    title: "U13",
    price: "R1,350/month",
    description: "Advanced techniques, conditioning & match prep.",
    frequency: "Up to 3x a Week",
    href: "/enrol?program=U13"
  },
  {
    title: "U15",
    price: "R1,450/month",
    description: "Strength & tactics, pathway focus.",
    frequency: "Up to 3x a Week",
    href: "/enrol?program=U15"
  },
  {
    title: "U17",
    price: "R1,550/month",
    description: "High-performance training, trials & exposure.",
    frequency: "Up to 3x a Week",
    href: "/enrol?program=U17"
  },
  {
    title: "U19",
    price: "R1,800/month",
    description: "Elite prep & life-after-football support.",
    frequency: "Up to 3x a Week",
    href: "/enrol?program=U19"
  }
]

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0B2239] to-[#1a3a5a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 font-heading">
              Our Programs & Fees
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto font-sans leading-relaxed">
              Training sessions tailored to every age group, designed for growth, skill, and excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Twice a Week Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-4 font-heading">
              Twice a Week
            </h2>
            <p className="text-xl text-[#0B2239]/80 font-sans">
              Perfect for beginners and developing players
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Up to 3x a Week Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-4 font-heading">
                Up to 3x a Week
              </h2>
              <p className="text-xl text-[#0B2239]/80 font-sans">
                Includes morning conditioning for serious players
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#D7263D] to-[#B91C3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-heading">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-12 font-sans max-w-3xl mx-auto">
              Join Joy Football Academy and become part of a community that values excellence, character, and the beautiful game.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/enrol"
                variant="primary"
                size="lg"
                className="bg-white text-[#D7263D] hover:bg-gray-100"
              >
                Enrol Now
              </Button>
              <Button
                href="/coaches"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#D7263D]"
              >
                Meet Our Coaches
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
