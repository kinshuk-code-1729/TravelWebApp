import { motion } from 'framer-motion'
import { Tag } from 'lucide-react'

const TipCard = ({ tip, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover p-6 h-full flex flex-col"
    >
      {tip.category && (
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="w-4 h-4 text-primary-400" />
          <span className="text-primary-300 text-xs font-semibold uppercase">
            {tip.category}
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-display font-bold text-white mb-3">
        {tip.title}
      </h3>
      
      <p className="text-white/70 text-sm leading-relaxed flex-grow">
        {tip.content}
      </p>

      {tip.readTime && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <span className="text-white/50 text-xs">{tip.readTime} min read</span>
        </div>
      )}
    </motion.div>
  )
}

export default TipCard

