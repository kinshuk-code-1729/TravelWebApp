import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import ActivityItem from './ActivityItem'

const DayTimeline = ({ day, activities = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-6 mb-6"
    >
      {/* Day Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {day.title}
          </h3>
          {day.description && (
            <p className="text-white/70 text-sm">{day.description}</p>
          )}
        </div>
        {day.timeRange && (
          <div className="flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-lg">
            <Clock className="w-4 h-4 text-primary-300" />
            <span className="text-primary-300 font-medium text-sm">
              {day.timeRange}
            </span>
          </div>
        )}
      </div>

      {/* Activities */}
      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <ActivityItem key={index} activity={activity} />
          ))
        ) : (
          <p className="text-white/50 text-sm italic">No activities scheduled</p>
        )}
      </div>
    </motion.div>
  )
}

export default DayTimeline

