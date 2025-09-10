'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-gradient-to-r from-[#0B2239] to-[#1a3a5a] text-white py-16 border-t border-[#0B2239]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Academy Info */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
                                  <img 
              src="/images/final-logo-w.png"
              alt="Joy Football Academy Logo" 
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[250px] sm:max-w-[300px]"
            />
            </div>
            <p className="text-[#A7D8F5] font-sans text-lg mb-6">
              Touching lives through Football
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.div 
                className="w-10 h-10 bg-[#D7263D] rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white text-lg">⚽</span>
              </motion.div>
              <motion.div 
                className="w-10 h-10 bg-[#FFD23F] rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white text-lg">🏆</span>
              </motion.div>
              <motion.div 
                className="w-10 h-10 bg-[#A7D8F5] rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#0B2239] text-lg">💪</span>
              </motion.div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="text-center">
            <h4 className="text-xl font-bold font-heading mb-6">Contact Us</h4>
            <div className="space-y-4">
              <motion.p 
                className="font-sans"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="tel:0659742376"
                  className="hover:text-[#D7263D] transition-colors duration-200 text-lg"
                >
                  📞 065 974 2376
                </a>
              </motion.p>
              <motion.p 
                className="font-sans"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="mailto:admin@joyfootballacademy.co.za"
                  className="hover:text-[#D7263D] transition-colors duration-200 text-lg"
                >
                  ✉️ admin@joyfootballacademy.co.za
                </a>
              </motion.p>
              <p className="font-sans text-lg">
                📍 Treverton, KwaZulu-Natal
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold font-heading mb-6">Quick Links</h4>
            <div className="space-y-3">
              {mounted ? (
                <>
                  <motion.p 
                    className="font-sans"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="/programs/" className="hover:text-[#D7263D] transition-colors duration-200 text-lg">
                      Programs & Pricing
                    </a>
                  </motion.p>

                  <motion.p 
                    className="font-sans"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="/enroll/" className="hover:text-[#D7263D] transition-colors duration-200 text-lg">
                      Enroll Now
                    </a>
                  </motion.p>
                </>
              ) : (
                <>
                  <p className="font-sans">
                    <a href="/programs/" className="hover:text-[#D7263D] transition-colors duration-200 text-lg">
                      Programs & Pricing
                    </a>
                  </p>
                  <p className="font-sans">
                    <a href="/enroll/" className="hover:text-[#D7263D] transition-colors duration-200 text-lg">
                      Enroll Now
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-sm text-white/80 font-sans">
            © 2025 Joy Football Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
