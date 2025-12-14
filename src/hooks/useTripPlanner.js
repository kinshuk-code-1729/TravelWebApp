import { useState, useEffect } from 'react'

export const useTripPlanner = () => {
  const [selectedDestinations, setSelectedDestinations] = useState([])
  const [itinerary, setItinerary] = useState(null)

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('tripPlan')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setSelectedDestinations(data.destinations || [])
        setItinerary(data.itinerary || null)
      } catch (e) {
        console.error('Error loading trip plan:', e)
      }
    }
  }, [])

  const addDestination = (destination) => {
    const updated = [...selectedDestinations, destination]
    setSelectedDestinations(updated)
    saveToStorage(updated, itinerary)
  }

  const removeDestination = (destinationId) => {
    const updated = selectedDestinations.filter(d => d.id !== destinationId)
    setSelectedDestinations(updated)
    saveToStorage(updated, itinerary)
  }

  const setItineraryData = (data) => {
    setItinerary(data)
    saveToStorage(selectedDestinations, data)
  }

  const clearTrip = () => {
    setSelectedDestinations([])
    setItinerary(null)
    localStorage.removeItem('tripPlan')
  }

  const saveToStorage = (dests, itin) => {
    localStorage.setItem('tripPlan', JSON.stringify({
      destinations: dests,
      itinerary: itin,
    }))
  }

  return {
    selectedDestinations,
    itinerary,
    addDestination,
    removeDestination,
    setItineraryData,
    clearTrip,
  }
}

