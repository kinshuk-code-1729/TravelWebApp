import { motion } from 'framer-motion'
import { MapPin, Clock, Plus } from 'lucide-react'
import { useState } from 'react'

const DestinationCard = ({ destination, onAddToPlan, index = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToPlan = () => {
    setIsAdded(true)
    if (onAddToPlan) {
      onAddToPlan(destination)
    }
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-ocean-500 animate-pulse" />
        )}
        <img
          src={destination.image}
          alt={destination.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-transparent to-transparent" />
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">{destination.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-white mb-2">
          {destination.name}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        {/* Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-white/60 text-sm">
            <Clock className="w-4 h-4" />
            <span>{destination.duration}</span>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-xs">Starting from</p>
            <p className="text-primary-300 font-bold text-lg">
              {destination.price}
            </p>
          </div>
        </div>

        {/* Add to Plan Button */}
        <button
          onClick={handleAddToPlan}
          className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
            isAdded
              ? 'bg-green-500 text-white'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
        >
          <Plus className={`w-5 h-5 transition-transform ${isAdded ? 'rotate-45' : ''}`} />
          <span>{isAdded ? 'Added!' : 'Add to Plan'}</span>
        </button>
      </div>
    </motion.div>
  )
}

export default DestinationCard

