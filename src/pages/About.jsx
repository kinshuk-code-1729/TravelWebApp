import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, Users, Globe, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Compass,
      title: 'Expert Guidance',
      description: 'Our team of travel experts curates every itinerary with care and attention to detail.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building a community of travelers who share experiences and insights.',
    },
    {
      icon: Globe,
      title: 'Sustainable Travel',
      description: 'We promote responsible tourism that respects local cultures and environments.',
    },
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'Travel is our passion, and we want to share that passion with you.',
    },
  ]

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            About The Travel Tribe
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate travelers dedicated to helping you discover the world's most
            beautiful destinations. Our mission is to make travel planning effortless and enjoyable.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-6">Our Story</h2>
          <div className="prose prose-invert max-w-none text-white/80 space-y-4">
            <p>
              The Travel Tribe was born from a simple idea: travel should be accessible, enjoyable,
              and transformative. Founded by a group of travel enthusiasts who were frustrated with
              the complexity of planning trips, we set out to create a platform that makes travel
              planning as exciting as the journey itself.
            </p>
            <p>
              Today, we've helped thousands of travelers discover new destinations, create
              unforgettable memories, and build connections with cultures around the world. We
              believe that every trip is an opportunity for growth, adventure, and discovery.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-300" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-white/80 mb-8">
              Ready to start your next adventure? Let's plan something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/packages" className="btn-primary">
                View Packages
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

