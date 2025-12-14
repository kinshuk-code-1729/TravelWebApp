import { Link } from 'react-router-dom'
import { Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { path: '/destinations', label: 'Destinations' },
      { path: '/packages', label: 'Travel Packages' },
      { path: '/travel-tips', label: 'Travel Tips' },
    ],
    company: [
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
      { path: '#', label: 'Privacy Policy' },
      { path: '#', label: 'Terms of Service' },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/thetraveltribe_in/', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-ocean-900/50 backdrop-blur-sm border-t border-white/10 mt-auto">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="The Travel Tribe Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-display font-bold gradient-text">
                The Travel Tribe
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Discover your next adventure with expertly crafted itineraries and exclusive travel deals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-primary-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-primary-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-4">
              Get travel inspiration and exclusive deals delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © {currentYear} The Travel Tribe. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-white/60 text-sm">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:thetraveltribe25@gmail.com"
              className="hover:text-primary-300 transition-colors"
            >
              thetraveltribe25@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

