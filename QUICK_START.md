# Quick Start Guide

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Overview

This is a fully functional travel & tourism management website with the following features:

### ✅ Completed Features

- **Home Page**: Hero section with featured destinations
- **Destinations Page**: Browse and search all destinations
- **Itineraries Page**: Trip planner with "My Trip" sidebar
- **Packages Page**: Filterable travel packages (Budget/Standard/Premium)
- **Travel Tips Page**: Category-filtered travel advice
- **About Page**: Company information
- **Contact Page**: Contact form

### Key Components

- **Navigation**: Sticky header with mobile menu
- **Footer**: Newsletter signup, social links, contact info
- **Destination Cards**: Image, location, price, "Add to Plan" button
- **Package Cards**: Tier badges, features, pricing
- **Day Timeline**: Itinerary day view with activities
- **Activity Items**: Time-based activity cards

### Design Features

- Glassmorphism UI with backdrop blur
- Smooth animations with Framer Motion
- Responsive design (mobile, tablet, desktop)
- Premium color palette (teal, ocean blue, sunset)
- Modern typography (Inter, Poppins, Playfair Display)

### Data Management

- Mock data in `src/services/mockData.js`
- Trip planner state in localStorage
- Custom hook: `useTripPlanner`

### Export Features

- Print itinerary (browser print)
- Export PDF (mock - ready for jsPDF integration)

## Customization

### Adding New Destinations

Edit `src/services/mockData.js`:
```javascript
export const destinations = [
  {
    id: 7,
    name: 'Your Destination',
    location: 'Country',
    description: 'Description...',
    duration: 'X days',
    price: 'INR XX,XXX',
    image: 'image-url',
  },
  // ...
]
```

### Changing Colors

Edit `tailwind.config.js` - modify the color palette in the `theme.extend.colors` section.

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Navigation.jsx`

## Next Steps

- Integrate backend API
- Add user authentication
- Implement real PDF export (jsPDF)
- Add Mapbox for interactive maps
- Payment gateway integration
- Booking system

---

Happy coding! 🚀

