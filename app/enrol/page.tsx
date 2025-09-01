import EnrolForm from '@/components/forms/EnrolForm'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Enrol Now — Joy Football Academy",
  description: "Join Joy Football Academy today! Complete our simple enrolment form to register your child for professional football training and development.",
  openGraph: {
    title: "Enrol Now — Joy Football Academy",
    description: "Join Joy Football Academy today! Complete our simple enrolment form to register your child for professional football training and development.",
  },
  twitter: {
    title: "Enrol Now — Joy Football Academy",
    description: "Join Joy Football Academy today! Complete our simple enrolment form to register your child for professional football training and development.",
  },
}

export default function Enrol() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0B2239] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Enrol at Joy Football Academy
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto font-sans leading-relaxed">
              Complete the form below to register your child with us and start their football journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Divider */}
      <hr className="border-t border-[#0B2239]/20" />

      {/* Enrolment Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src={`${process.env.NODE_ENV === 'production' ? '/jf-academy' : ''}/images/soccer-player-action-stadium.png`}
          alt="Enrolment banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl lg:text-6xl font-bold font-heading mb-4 drop-shadow-lg">
              Enroll Today
            </h2>
            <p className="text-xl lg:text-2xl font-sans drop-shadow-md">
              Join Joy Football Academy
            </p>
          </div>
        </div>
      </section>

      {/* Enrolment Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#0B2239] mb-4">
              Registration Form
            </h2>
            <p className="text-xl text-[#0B2239]/80 font-sans">
              Join our academy and become part of a community that values excellence, character, and the beautiful game.
            </p>
          </div>
        </AnimatedSection>
        
        <EnrolForm />
      </section>

      {/* Section Divider */}
      <hr className="border-t border-[#0B2239]/20" />

      {/* Information Section */}
      <section className="bg-gradient-to-r from-yellow-100/40 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#D7263D] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-3 font-heading">
                  Easy Registration
                </h3>
                <p className="text-[#0B2239]/80 font-sans leading-relaxed">
                  Simple and straightforward enrolment process designed for your convenience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFD23F] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚽</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-3 font-heading">
                  Professional Training
                </h3>
                <p className="text-[#0B2239]/80 font-sans leading-relaxed">
                  World-class coaching and training programs tailored to every age group.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#A7D8F5] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#0B2239] text-2xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2239] mb-3 font-heading">
                  Character Development
                </h3>
                <p className="text-[#0B2239]/80 font-sans leading-relaxed">
                  Building not just football skills, but strong character and values.
                </p>
              </div>
            </AnimatedSection>
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
              Questions About Enrolment?
            </h2>
            <p className="text-xl mb-10 font-sans max-w-3xl mx-auto">
              Our team is here to help you with any questions about our programs, pricing, or the enrolment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="tel:0659742376"
                variant="primary"
                size="lg"
                className="bg-white text-[#D7263D] hover:bg-gray-100"
              >
                Call Us: 065 974 2376
              </Button>
              <Button
                href="mailto:shange.kzn@gmail.com"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#D7263D]"
              >
                Email Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
