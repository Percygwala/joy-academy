'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface CoachCardProps {
  name: string
  role: string
  bio: string
  image: string
}

export default function CoachCard({ name, role, bio, image }: CoachCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 group border border-gray-100"
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-6">
        <motion.div 
          className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-lg border-4 border-[#A7D8F5]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {!imageError ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#D7263D] to-[#FFD23F] flex items-center justify-center">
              <span className="text-white font-bold text-4xl">{name.charAt(0)}</span>
            </div>
          )}
        </motion.div>
      </div>
      
      <h3 className="font-heading text-2xl text-[#0B2239] mb-3 font-bold">
        {name}
      </h3>
      
      <p className="text-[#D7263D] font-bold text-lg mb-4 bg-[#A7D8F5]/20 px-4 py-2 rounded-full inline-block">
        {role}
      </p>
      
      <p className="text-[#0B2239]/80 text-base leading-relaxed">
        {bio}
      </p>
    </motion.div>
  )
}
