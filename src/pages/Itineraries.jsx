import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Printer, Map, X, Plus } from 'lucide-react'
import DayTimeline from '../components/ui/DayTimeline'
import { useTripPlanner } from '../hooks/useTripPlanner'
import { sampleItineraries } from '../services/mockData'

const Itineraries = () => {
  const { selectedDestinations, itinerary, setItineraryData, clearTrip, removeDestination } = useTripPlanner()
  const [selectedItinerary, setSelectedItinerary] = useState(sampleItineraries.lisbon)

  const handleExportPDF = () => {
    // Mock PDF export - in production, use a library like jsPDF
    alert('PDF export functionality will be available soon!')
  }

  const handlePrint = () => {
    window.print()
  }

  const handleLoadItinerary = (itin) => {
    setSelectedItinerary(itin)
    setItineraryData(itin)
  }

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - My Trip */}
          <aside className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                My Trip
              </h2>
              
              {selectedDestinations.length === 0 && !itinerary ? (
                <p className="text-white/60 text-sm mb-4">
                  Select any "Add to plan" checkbox above to imagine items here (static demo).
                </p>
              ) : null}

              {/* Selected Destinations */}
              {selectedDestinations.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Destinations</h3>
                  <div className="space-y-2">
                    {selectedDestinations.map((dest) => (
                      <div
                        key={dest.id}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                      >
                        <div>
                          <p className="text-white text-sm font-medium">{dest.name}</p>
                          <p className="text-white/60 text-xs">{dest.duration}</p>
                        </div>
                        <button
                          onClick={() => removeDestination(dest.id)}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                          aria-label="Remove destination"
                        >
                          <X className="w-4 h-4 text-white/60" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Itinerary Summary */}
              {itinerary && (
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">
                    {itinerary.destination} • {itinerary.duration}
                  </h3>
                  <ul className="space-y-2">
                    {itinerary.days.map((day, idx) => (
                      <li key={idx} className="text-white/70 text-sm">
                        {day.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              {(selectedDestinations.length > 0 || itinerary) && (
                <div className="space-y-3">
                  <button
                    onClick={handleExportPDF}
                    className="w-full flex items-center justify-center space-x-2 bg-ocean-500/20 hover:bg-ocean-500/30 text-white py-3 rounded-xl transition-all border border-ocean-400/30"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Export PDF</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="w-full flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl transition-all"
                  >
                    <Printer className="w-5 h-5" />
                    <span>Print</span>
                  </button>
                  <button
                    onClick={clearTrip}
                    className="w-full text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Clear Trip
                  </button>
                </div>
              )}

              {/* Quick Itinerary Templates */}
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-3">Quick Templates</h3>
                <button
                  onClick={() => handleLoadItinerary(sampleItineraries.lisbon)}
                  className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors mb-2"
                >
                  <p className="text-white text-sm font-medium">Lisbon • 4 days</p>
                  <p className="text-white/60 text-xs">Sample itinerary</p>
                </button>
              </div>
            </motion.div>

            {/* Trip Preferences */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <button className="w-full glass-card p-4 text-white hover:bg-white/10 transition-colors rounded-xl">
                Trip Preferences
              </button>
            </motion.div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card mb-8 overflow-hidden"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-400 to-ocean-500 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                  alt="Map preview"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-ocean-900/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-12 h-12 text-primary-300 mx-auto mb-2" />
                    <p className="text-white font-semibold">Map Preview</p>
                    <p className="text-white/60 text-sm">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Itinerary Days */}
            {selectedItinerary ? (
              <div>
                {selectedItinerary.days.map((day, index) => (
                  <DayTimeline
                    key={index}
                    day={day}
                    activities={day.activities}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card p-12 text-center"
              >
                <Map className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  No Itinerary Selected
                </h3>
                <p className="text-white/60 mb-6">
                  Select a destination or load a template to view your itinerary.
                </p>
                <button
                  onClick={() => handleLoadItinerary(sampleItineraries.lisbon)}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Load Sample Itinerary</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Itineraries

