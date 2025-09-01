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
  const normalizedTitle = title.toUpperCase()
  const imageFileMap: Record<string, string> = {
    U6: 'U6.jpg',
    U9: 'U9.jpg',
    U11: 'U11.jpg',
    U13: 'u13.png',
    U15: 'U15.png',
    U17: 'U17.png',
    U19: 'U19.png',
    'FOOTBALL TRAINING PROGRAMS': 'full-shot-children-laying-grass.png',
  }
  const fileName = imageFileMap[normalizedTitle] ?? `${title.toLowerCase()}.jpg`
  const imageSrc = `${process.env.NODE_ENV === 'production' ? '/jf-academy' : ''}/images/${fileName}`

  return (
    <motion.div
      className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={`${title} age group`}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${process.env.NODE_ENV === 'production' ? '/jf-academy' : ''}/images/U6.jpg` }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
          {title}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <p className="text-white/90 text-lg sm:text-xl font-bold drop-shadow-md">
            {price}
          </p>
          <span className="text-white/90 text-xl sm:text-2xl font-bold">»»</span>
        </div>
        <p className="text-white/80 font-sans text-sm mt-2 line-clamp-2">
          {description}
        </p>
        <p className="text-white/70 font-sans text-xs mt-2">{frequency}</p>
      </div>

      {/* Make entire card clickable */}
      <Link href={href} className="absolute inset-0" aria-label={`Enrol for ${title}`}>
        <span className="sr-only">Enrol Now</span>
      </Link>
    </motion.div>
  )
}
