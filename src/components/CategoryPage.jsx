import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'
import ProductCom from './ProductCom'
import { motion } from 'framer-motion'

const CategoryPage = () => {
  const { Category } = useParams()
  const { products } = useContext(ProductContext)

  const [filter, setFilter] = useState([])

  useEffect(() => {
    if (products && Category) {
      const filteredProducts = products.filter(
        (p) => String(p.array).toLowerCase() === Category.toLowerCase()
      )
      setFilter(filteredProducts)
    }
  }, [products, Category])

  return (
    <div className="min-h-screen w-full pt-32 sm:pt-36 bg-gradient-to-br from-[#f1fcfc] via-[#eef7ff] to-[#eafff0]">
      {/* Category Heading Banner */}
      <motion.div
        className="w-full bg-gradient-to-r from-[#76bc21]/10 via-white to-[#1d1b41]/10 py-10 sm:py-14 shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-2xl sm:max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1b41] tracking-tight leading-snug capitalize"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-[#76bc21]">{Category}</span>
          </motion.h1>
          <motion.p
            className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Browse all products in the {Category} category.
          </motion.p>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {filter[0].items.map((p) => (
              <motion.div
                key={p.id}
                className="w-full sm:w-auto"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <ProductCom
                  id={p.id}
                  name={p.Heading}
                  image={p.image}
                  navigation={`/productDetails/${filter[0].array}/${p.id}`}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
