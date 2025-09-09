'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYou() {
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  useEffect(() => {
    // Auto-redirect after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A7D8F5] to-[#8BC4E8] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-white text-4xl">✅</span>
            </div>
            
            {/* Thank You Message */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0B2239] mb-6 font-heading">
              Thank You for Enrolling!
            </h1>
            
            <p className="text-xl text-[#0B2239]/80 font-sans mb-6 leading-relaxed">
              We&apos;ve received your enrollment. A confirmation email has been sent to you.
            </p>
            
            <p className="text-lg text-[#0B2239]/60 font-sans mb-10">
              You will be automatically redirected to the home page in {countdown} seconds...
            </p>
            
            {/* Back to Home Button */}
            <Button
              href="/"
              variant="primary"
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg"
            >
              Back to Home Now
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
