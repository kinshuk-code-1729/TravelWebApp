import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, X } from 'lucide-react'
import PackageCard from '../components/ui/PackageCard'
import { packages } from '../services/mockData'

const Packages = () => {
  const [selectedTier, setSelectedTier] = useState('all')
  const [selectedDestination, setSelectedDestination] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [showFilters, setShowFilters] = useState(false)

  const tiers = ['all', 'budget', 'standard', 'premium']
  const destinations = ['all', ...new Set(packages.map(p => p.destination))]

  const filteredPackages = packages.filter((pkg) => {
    const tierMatch = selectedTier === 'all' || pkg.tier === selectedTier
    const destMatch = selectedDestination === 'all' || pkg.destination === selectedDestination
    const priceMatch = pkg.price >= priceRange[0] && pkg.price <= priceRange[1]
    return tierMatch && destMatch && priceMatch
  })

  const handleSelectPackage = (pkg) => {
    // In production, this would navigate to booking or add to cart
    alert(`Selected: ${pkg.name}\nPrice: INR ${pkg.price.toLocaleString()}`)
  }

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
            Travel Packages
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose from our carefully curated packages, designed to suit every traveler's needs and budget.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Tier Filter */}
            <div className="flex flex-wrap gap-2">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTier === tier
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {tier === 'all' ? 'All Packages' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                </button>
              ))}
            </div>

            {/* Destination Filter */}
            <div className="flex items-center space-x-2">
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                {destinations.map((dest) => (
                  <option key={dest} value={dest} className="bg-ocean-900">
                    {dest === 'all' ? 'All Destinations' : dest}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-4 glass-card p-4">
            <label className="block text-white font-medium mb-2">
              Price Range: INR {priceRange[0].toLocaleString()} - INR {priceRange[1].toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                index={index}
                onSelect={handleSelectPackage}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-white/60 text-lg">
              No packages found matching your filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Packages

