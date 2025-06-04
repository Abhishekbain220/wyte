import React from 'react'
import { motion } from 'framer-motion';


const Heading = () => {
  return (
    <div>
        <motion.div
                        className="w-full bg-gradient-to-r from-[#76bc21]/10 via-white to-[#1d1b41]/10 py-10 sm:py-14 shadow-md"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <div className="max-w-2xl sm:max-w-4xl mx-auto px-4 text-center">
                          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1b41] tracking-tight leading-snug">
                             Our <span className="text-[#76bc21]">Categories</span>
                          </h1>
                          
                        </div>
                      </motion.div>
    </div>
  )
}

export default Heading