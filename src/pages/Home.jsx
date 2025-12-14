import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import DestinationCard from '../components/ui/DestinationCard'
import { destinations } from '../services/mockData'
import { useTripPlanner } from '../hooks/useTripPlanner'

const Home = () => {
  const { addDestination } = useTripPlanner()
  const featuredDestinations = destinations.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/90 via-primary-800/90 to-sunset-600/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Travel adventure"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container-custom section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <Compass className="w-16 h-16 text-primary-400 mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 text-balance">
              Discover Your Next
              <span className="block gradient-text">Adventure</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
              Join The Travel Tribe and explore the world's most breathtaking destinations with exclusive deals and expertly crafted itineraries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/itineraries" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Start Planning</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/destinations" className="btn-secondary text-lg px-8 py-4">
                Explore Destinations
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Destinations Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-ocean-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Hand-picked places to inspire your next trip.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
                onAddToPlan={addDestination}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/destinations"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600/20 via-ocean-600/20 to-sunset-600/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Plan Your Perfect Trip?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us help you create an unforgettable travel experience tailored to your preferences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/itineraries" className="btn-primary text-lg px-8 py-4">
                Build Your Itinerary
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

