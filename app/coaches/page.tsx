import CoachCard from '@/components/ui/CoachCard'
import { Phone, Mail, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Coaches — Joy Football Academy",
  description: "Meet our experienced coaching staff dedicated to developing young football talent. Professional coaches with expertise in youth development and elite training.",
  openGraph: {
    title: "Our Coaches — Joy Football Academy",
    description: "Meet our experienced coaching staff dedicated to developing young football talent. Professional coaches with expertise in youth development and elite training.",
  },
  twitter: {
    title: "Our Coaches — Joy Football Academy",
    description: "Meet our experienced coaching staff dedicated to developing young football talent. Professional coaches with expertise in youth development and elite training.",
  },
}

export default function Coaches() {
  const coaches = [
    {
      name: "Coach Sipho",
      role: "Head Coach",
      bio: "Former professional player, 15+ years of coaching experience.",
      image: "https://placehold.co/200x200"
    },
    {
      name: "Coach Zanele",
      role: "Conditioning Coach",
      bio: "Sports scientist specializing in youth athletic development.",
      image: "https://placehold.co/200x200"
    },
    {
      name: "Coach Themba",
      role: "Goalkeeper Coach",
      bio: "Focused on goalkeeping excellence and mental strength.",
      image: "https://placehold.co/200x200"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0B2239] to-[#1a3a5a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 font-heading">
              Our Coaching Staff
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto font-sans leading-relaxed">
              Meet the passionate team guiding the next generation of footballers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#0B2239] mb-4">
              Meet Our Coaches
            </h2>
            <p className="text-xl text-[#0B2239]/80 font-sans">
              Experienced professionals dedicated to developing young talent
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <CoachCard
                name={coach.name}
                role={coach.role}
                bio={coach.bio}
                image={coach.image}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#0B2239] mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-[#0B2239]/80 font-sans">
                Ready to start your football journey? Contact us today.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] rounded-3xl shadow-xl p-10">
                <h3 className="font-heading text-3xl font-bold text-[#0B2239] mb-8">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="bg-[#D7263D] p-4 rounded-full shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-sans text-[#0B2239] font-bold text-lg mb-1">Phone</p>
                      <a
                        href="tel:0659742376"
                        className="font-sans text-[#0B2239]/80 hover:text-[#D7263D] transition-colors duration-200 text-lg"
                      >
                        065 974 2376
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-[#D7263D] p-4 rounded-full shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-sans text-[#0B2239] font-bold text-lg mb-1">Email</p>
                      <a
                        href="mailto:shange.kzn@gmail.com"
                        className="font-sans text-[#0B2239]/80 hover:text-[#D7263D] transition-colors duration-200 text-lg"
                      >
                        shange.kzn@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="bg-[#D7263D] p-4 rounded-full shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-sans text-[#0B2239] font-bold text-lg mb-1">Address</p>
                      <p className="font-sans text-[#0B2239]/80 text-lg">
                        Treverton, KwaZulu-Natal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map Placeholder */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] rounded-3xl shadow-xl p-10">
                <h3 className="font-heading text-3xl font-bold text-[#0B2239] mb-8">
                  Location
                </h3>
                <div className="bg-white rounded-2xl h-80 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#D7263D] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-[#0B2239] font-sans text-lg font-medium">Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#D7263D] to-[#B91C3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-heading">
              Ready to Join Our Academy?
            </h2>
            <p className="text-xl mb-12 font-sans max-w-3xl mx-auto">
              Start your football journey with our experienced coaching team and world-class training programs.
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
                href="/programs"
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#D7263D]"
              >
                View Programs
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
