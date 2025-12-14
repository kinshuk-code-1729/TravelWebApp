# The Travel Tribe - Travel & Tourism Management Website

A premium, production-ready travel and tourism management website built with React 18, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX**: Glassmorphism design, smooth animations, and premium aesthetics
- 🗺️ **Trip Planner**: Interactive itinerary builder with day-by-day planning
- 🌍 **Destinations**: Browse and explore featured destinations worldwide
- 📦 **Travel Packages**: Filterable packages (Budget, Standard, Premium)
- 💡 **Travel Tips**: Expert advice and practical travel insights
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance**: Fast loading with lazy images and optimized assets
- 🎭 **Animations**: Smooth page transitions powered by Framer Motion

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kinshuk-code-1729/TravelWebApp.git
cd TravelWebApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/          # Layout components (Navigation, Footer)
│   └── ui/             # UI components (Cards, Badges, etc.)
├── pages/              # Page components
├── layouts/            # Layout wrappers
├── hooks/              # Custom React hooks
├── services/           # Data services and mock data
├── styles/             # Global styles and Tailwind config
└── assets/             # Static assets (images, etc.)
```

## Key Pages

- **Home**: Hero section with featured destinations
- **Destinations**: Browse all available destinations with search
- **Itineraries**: Trip planner with "My Trip" sidebar
- **Packages**: Filterable travel packages by tier and destination
- **Travel Tips**: Category-filtered travel advice
- **About**: Company information and values
- **Contact**: Contact form and information

## Features in Detail

### Trip Planner
- Add destinations to your trip plan
- View day-by-day itineraries
- Export to PDF (mock functionality)
- Print itinerary
- Map preview placeholder

### Package Filtering
- Filter by tier (Budget, Standard, Premium)
- Filter by destination
- Price range slider
- Responsive card layout

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized images for different screen sizes

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
- Primary (teal)
- Ocean (blue)
- Sunset (orange)
- Sand (beige)

### Fonts
The project uses Google Fonts:
- **Inter** - Body text
- **Poppins** - Headings
- **Playfair Display** - Serif accents

### Mock Data
Edit `src/services/mockData.js` to customize:
- Destinations
- Travel packages
- Travel tips
- Sample itineraries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- Fast page transitions

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real PDF export functionality
- [ ] Mapbox integration for interactive maps
- [ ] Payment gateway integration
- [ ] Booking system
- [ ] User reviews and ratings
- [ ] Social media integration

## License

This project is created for The Travel Tribe. All rights reserved.

## Support

For support, email thetraveltribe25@gmail.com

---

Built with ❤️ by The Travel Tribe
