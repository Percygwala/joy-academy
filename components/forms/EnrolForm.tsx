'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface FormData {
  parentName: string
  parentEmail: string
  parentPhone: string
  childName: string
  ageGroup: string
  program: string
  notes: string
}

export default function EnrolForm() {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    ageGroup: '',
    program: '',
    notes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Enrolment Form Data:', formData)
    setIsSubmitted(true)
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        childName: '',
        ageGroup: '',
        program: '',
        notes: ''
      })
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="space-y-6">
          {/* Parent Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#0B2239] mb-4 font-heading">Parent Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="parentName" className="block text-[#0B2239] font-medium mb-2 font-sans">
                  Parent Full Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D7263D] focus:border-[#D7263D] transition-colors duration-200 font-sans"
                  placeholder="Enter parent's full name"
                />
              </div>
              <div>
                <label htmlFor="parentEmail" className="block text-[#0B2239] font-medium mb-2 font-sans">
                  Parent Email *
                </label>
                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D7263D] focus:border-[#D7263D] transition-colors duration-200 font-sans"
                  placeholder="Enter parent's email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="parentPhone" className="block text-[#0B2239] font-medium mb-2 font-sans">
                Parent Phone *
              </label>
              <input
                type="tel"
                id="parentPhone"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D7263D] focus:border-[#D7263D] transition-colors duration-200 font-sans"
                placeholder="Enter parent's phone number"
              />
            </div>
          </motion.div>

          {/* Child Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#0B2239] mb-4 font-heading">Child Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="childName" className="block text-[#0B2239] font-medium mb-2 font-sans">
                  Child Full Name *
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D7263D] focus:border-[#D7263D] transition-colors duration-200 font-sans"
                  placeholder="Enter child's full name"
                />
              </div>
              <div>
                <label htmlFor="ageGroup" className="block text-[#0B2239] font-medium mb-2 font-sans">
                  Age Group *
                </label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D7263D] focus:border-[#D7263D] transition-colors duration-200 font-sans bg-white"
                >
                  <option value="">Select Age Group</option>
                  <option value="U6">U6 (Under 6)</option>
                  <option value="U9">U9 (Under 9)</option>
                  <option value="U11">U11 (Under 11)</option>
                  <option value="U13">U13 (Under 13)</option>
                  <option value="U15">U15 (Under 15)</option>
                  <option value="U17">U17 (Under 17)</option>
                  <option value="U19">U19 (Under 19)</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Program Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#0B2239] mb-4 font-heading">Program Selection</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="program"
                  value="twice-a-week"
                  checked={formData.program === 'twice-a-week'}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-[#D7263D] focus:ring-[#D7263D] border-gray-300"
                />
                <span className="text-[#0B2239] font-sans">Twice a week</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="program"
                  value="three-times-week"
                  checked={formData.program === 'three-times-week'}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-[#D7263D] focus:ring-[#D7263D] border-gray-300"
                />
                <span className="text-[#0B2239] font-sans">Up to 3x per week incl. conditioning</span>
              </label>
            </div>
          </motion.div>

          {/* Additional Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="notes" className="block text-[#0B2239] font-medium mb-2 font-sans">
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D7263D] focus:border-[#D7263D] transition-colors duration-200 font-sans resize-none"
              placeholder="Any additional information you'd like to share..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Submit Enrolment
            </Button>
          </motion.div>
        </div>
      </form>

      {/* Success Message */}
      {isSubmitted && (
        <motion.div 
          className="mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-xl font-bold mb-2 font-heading">Thank you for enrolling!</h3>
          <p className="font-sans">We&apos;ll contact you shortly to confirm your registration.</p>
        </motion.div>
      )}
    </motion.div>
  )
}
