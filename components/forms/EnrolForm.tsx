'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EnrollForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <form 
        action="https://formsubmit.co/admin@joyfootballacademy.co.za" 
        method="POST" 
        className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
        onSubmit={() => setIsSubmitting(true)}
      >
        {/* FormSubmit Hidden Inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_autoresponse" value="Thank you for enrolling at Joy Football Academy. We will get back to you soon." />
        <input type="hidden" name="_next" value="https://joyfootballacademy.co.za/thank-you" />
        <input type="hidden" name="_subject" value="New Enrollment - Joy Football Academy" />
        <input type="hidden" name="_cc" value="admin@joyfootballacademy.co.za" />
        
        <div className="space-y-6">
          {/* Full Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label htmlFor="fullName" className="block text-[#0B2239] font-medium mb-2 font-sans">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 transition-colors duration-200 font-sans"
              placeholder="Enter full name"
            />
          </motion.div>

          {/* Parent Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="parentEmail" className="block text-[#0B2239] font-medium mb-2 font-sans">
              Parent Email *
            </label>
            <input
              type="email"
              id="parentEmail"
              name="parentEmail"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 transition-colors duration-200 font-sans"
              placeholder="Enter parent's email"
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="phoneNumber" className="block text-[#0B2239] font-medium mb-2 font-sans">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 transition-colors duration-200 font-sans"
              placeholder="Enter phone number"
            />
          </motion.div>

          {/* Player Age Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="ageGroup" className="block text-[#0B2239] font-medium mb-2 font-sans">
              Player Age Group *
            </label>
            <select
              id="ageGroup"
              name="ageGroup"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 transition-colors duration-200 font-sans bg-white"
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
          </motion.div>

          {/* Additional Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="additionalNotes" className="block text-[#0B2239] font-medium mb-2 font-sans">
              Additional Notes (Optional)
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500 transition-colors duration-200 font-sans resize-none"
              placeholder="Any additional information you'd like to share..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700'
              } text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto transition-colors duration-200 flex items-center justify-center gap-2`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                'Submit Enrollment'
              )}
            </button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  )
}
