'use client'

import { motion } from 'framer-motion'

export default function Partners() {
  const partners = [
    { name: 'Nike', image: '/jf-academy/images/nike.png' },
    { name: 'Local School', image: '/jf-academy/images/school.png' },
    { name: 'Community', image: '/jf-academy/images/community.png' },
    { name: 'Sports Council', image: '/jf-academy/images/sports-council.png' },
    { name: 'Treverton', image: '/jf-academy/images/treverton.png' },
  ]

  return (
    <section className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2239] font-heading mb-4">
            Our Partners & Supporters
          </h2>
          <p className="text-lg text-[#0B2239]/70 font-sans max-w-3xl mx-auto">
            Working together with leading brands and institutions to develop the next generation of football talent
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <img
                src={partner.image}
                alt={`${partner.name} logo`}
                className="max-h-12 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
