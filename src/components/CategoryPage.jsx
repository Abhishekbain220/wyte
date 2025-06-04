import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'
import ProductCom from './ProductCom'
import { motion } from 'framer-motion'

const CategoryPage = () => {
  const { Category } = useParams()
  const { products } = useContext(ProductContext)
  const [filter, setFilter] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Responsive check for animation staggering
    const checkScreen = () => setIsMobile(window.innerWidth < 640)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  useEffect(() => {
    if (products && Category) {
      const filteredProducts = products.filter(
        (p) => String(p.Category).toLowerCase() === Category.toLowerCase()
      )
      setFilter(filteredProducts)
    }
  }, [products, Category])

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: isMobile ? 0 : 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen w-full pt-32 sm:pt-36 bg-gradient-to-br from-[#f1fcfc] via-[#eef7ff] to-[#eafff0]">
      {/* Category Heading Banner */}
      <motion.div
        className="w-full bg-gradient-to-r from-[#76bc21]/10 via-white to-[#1d1b41]/10 py-10 sm:py-14 shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-2xl sm:max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1b41] tracking-tight leading-snug capitalize">
             <span className="text-[#76bc21]">{Category}</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Browse all products in the {Category} category.
          </p>
        </div>
      </motion.div>

      {/* Filtered Product List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        {filter.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No products found in this category.
          </p>
        ) : (
          <motion.div
            className="flex flex-wrap justify-center gap-5 sm:gap-15"
            variants={containerVariants}
            initial="hidden"
            animate={isMobile ? 'show' : undefined}
            whileInView={!isMobile ? 'show' : undefined}
            viewport={!isMobile ? { once: true, amount: 0.2 } : undefined}
          >
            {filter.map((p, i) => (
              <motion.div key={p.id} variants={itemVariants} className="w-full sm:w-auto">
                <ProductCom id={p.id} name={p.name} image={p.image} navigation={`/product/${p.id}`} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
