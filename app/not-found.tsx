import Link from 'next/link'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Page Not Found — Joy Football Academy",
  description: "The page you're looking for could not be found. Return to Joy Football Academy's homepage.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#A7D8F5] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl lg:text-8xl font-bold text-[#D7263D] font-heading mb-4">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2239] font-heading mb-4">
            Oops! This page could not be found.
          </h2>
          <p className="text-lg text-[#0B2239]/80 font-sans mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to the beautiful game!
          </p>
        </div>

        <div className="space-y-4">
          <Button href="/" variant="primary" size="lg">
            Go Home
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/programs" 
              className="text-[#0B2239] hover:text-[#D7263D] transition-colors duration-200 font-sans font-medium"
            >
              View Programs
            </Link>
            <span className="hidden sm:inline text-[#0B2239]/50">•</span>
            <Link 
              href="/coaches" 
              className="text-[#0B2239] hover:text-[#D7263D] transition-colors duration-200 font-sans font-medium"
            >
              Meet Our Coaches
            </Link>
            <span className="hidden sm:inline text-[#0B2239]/50">•</span>
            <Link 
              href="/enrol" 
              className="text-[#0B2239] hover:text-[#D7263D] transition-colors duration-200 font-sans font-medium"
            >
              Enrol Now
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#D7263D]/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FFD23F]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#0B2239]/10 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
