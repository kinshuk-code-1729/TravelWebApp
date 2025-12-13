import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import PricingBadge from './PricingBadge'

const PackageCard = ({ package: pkg, index = 0, onSelect }) => {
  const isPremium = pkg.tier === 'premium'
  const isStandard = pkg.tier === 'standard'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card-hover p-8 relative ${
        isPremium ? 'ring-2 ring-primary-400' : ''
      }`}
    >
      {isPremium && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-400 to-ocean-400 px-4 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-4 h-4 text-white fill-white" />
            <span className="text-white text-xs font-semibold">POPULAR</span>
          </div>
        </div>
      )}

      {/* Tier Badge */}
      <div className="mb-6">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
          isPremium
            ? 'bg-primary-500/20 text-primary-300'
            : isStandard
            ? 'bg-ocean-500/20 text-ocean-300'
            : 'bg-sand-500/20 text-sand-300'
        }`}>
          {pkg.tier.toUpperCase()}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-display font-bold text-white mb-2">
        {pkg.name}
      </h3>
      <p className="text-white/70 text-sm mb-6">{pkg.description}</p>

      {/* Price */}
      <div className="mb-6">
        <PricingBadge price={pkg.price} size="lg" />
        <p className="text-white/60 text-xs mt-1">per person</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
            <span className="text-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => onSelect && onSelect(pkg)}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          isPremium
            ? 'btn-primary'
            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
        }`}
      >
        Select Package
      </button>
    </motion.div>
  )
}

export default PackageCard

