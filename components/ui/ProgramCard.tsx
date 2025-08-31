'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProgramCardProps {
  title: string
  price: string
  description: string
  frequency: string
  href: string
}

export default function ProgramCard({ title, price, description, frequency, href }: ProgramCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-8 text-[#0B2239] hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group border border-gray-100"
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-[#D7263D] to-[#FFD23F] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white text-xl font-bold">{title}</span>
        </motion.div>
        <h3 className="font-heading text-3xl text-[#0B2239] mb-3 text-center font-bold">
          {title}
        </h3>
        <p className="text-[#D7263D] font-bold text-3xl mb-2 text-center">
          {price}
        </p>
        <p className="text-sm text-[#0B2239]/70 font-sans text-center bg-[#A7D8F5]/20 px-4 py-2 rounded-full">
          {frequency}
        </p>
      </div>

      <p className="text-[#0B2239]/80 mb-8 font-sans leading-relaxed text-center">
        {description}
      </p>

      <Link
        href={href}
        className="bg-gradient-to-r from-[#D7263D] to-[#B91C3A] text-white px-8 py-4 rounded-xl font-bold hover:from-[#B91C3A] hover:to-[#A01530] transition-all duration-300 transform hover:scale-105 font-sans text-center block w-full shadow-lg"
      >
        Enrol Now
      </Link>
    </motion.div>
  )
}
