import { useState } from 'react'
import { motion } from 'framer-motion'
import TipCard from '../components/ui/TipCard'
import { travelTips } from '../services/mockData'

const TravelTips = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const categories = ['all', ...new Set(travelTips.map(tip => tip.category))]

  const filteredTips = travelTips.filter(
    (tip) => selectedCategory === 'all' || tip.category === selectedCategory
  )

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Travel Tips & Insights
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expert advice and practical tips to make your travels smoother, safer, and more enjoyable.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All Tips' : category}
            </button>
          ))}
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTips.map((tip, index) => (
            <TipCard key={tip.id} tip={tip} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelTips

