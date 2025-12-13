import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import DestinationCard from '../components/ui/DestinationCard'
import { destinations } from '../services/mockData'
import { useTripPlanner } from '../hooks/useTripPlanner'

const Destinations = () => {
  const { addDestination } = useTripPlanner()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    setFilteredDestinations(
      destinations.filter(
        (dest) =>
          dest.name.toLowerCase().includes(query) ||
          dest.location.toLowerCase().includes(query) ||
          dest.description.toLowerCase().includes(query)
      )
    )
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
            Explore Destinations
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover hand-picked destinations around the world, each offering unique experiences and unforgettable memories.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              aria-label="Search destinations"
            />
          </div>
        </motion.div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
                onAddToPlan={addDestination}
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
              No destinations found matching "{searchQuery}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Destinations

