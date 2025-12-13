import { Clock, MapPin } from 'lucide-react'

const ActivityItem = ({ activity }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
        <Clock className="w-5 h-5 text-primary-300" />
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <span className="text-primary-300 font-semibold text-sm">
            {activity.time}
          </span>
          {activity.location && (
            <div className="flex items-center space-x-1 text-white/60 text-xs">
              <MapPin className="w-3 h-3" />
              <span>{activity.location}</span>
            </div>
          )}
        </div>
        <h4 className="text-white font-medium mb-1">{activity.title}</h4>
        {activity.description && (
          <p className="text-white/70 text-sm">{activity.description}</p>
        )}
      </div>
    </div>
  )
}

export default ActivityItem

