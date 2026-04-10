import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { X, ExternalLink, Calendar, Users, MapPin } from 'lucide-react';

const categories = ['All', 'Weddings', 'Corporate', 'College Fests', 'Private Parties'];

const portfolioItems = [
  {
    id: 1,
    image: '/images/portfolio-1.jpg',
    title: 'Sarah & Rahul\'s Wedding Reception',
    category: 'Weddings',
    location: 'Jaipur, Rajasthan',
    guests: '500+ guests',
    date: 'December 2023',
    description: 'A magical destination wedding reception where I had the honor of hosting the grand celebration. The evening was filled with love, laughter, and unforgettable moments.'
  },
  {
    id: 2,
    image: '/images/portfolio-2.jpg',
    title: 'TechCorp Annual Strategy Summit',
    category: 'Corporate',
    location: 'Mumbai, Maharashtra',
    guests: '200+ executives',
    date: 'November 2023',
    description: 'Hosted the annual strategy summit for a leading tech company, facilitating discussions and ensuring smooth transitions between presentations.'
  },
  {
    id: 3,
    image: '/images/portfolio-3.jpg',
    title: 'St. Xavier\'s College Fest',
    category: 'College Fests',
    location: 'Mumbai, Maharashtra',
    guests: '5000+ students',
    date: 'February 2024',
    description: 'Three days of high-energy hosting for one of the biggest college festivals in the city. Managing multiple events and keeping the crowd engaged throughout.'
  },
  {
    id: 4,
    image: '/images/portfolio-4.jpg',
    title: 'Priya\'s 50th Birthday Celebration',
    category: 'Private Parties',
    location: 'Bangalore, Karnataka',
    guests: '50 guests',
    date: 'January 2024',
    description: 'An intimate milestone birthday celebration where I created a beautiful tribute segment that brought tears of joy to everyone present.'
  },
  {
    id: 5,
    image: '/images/portfolio-5.jpg',
    title: 'Aurora Innovations Product Launch',
    category: 'Corporate',
    location: 'Hyderabad, Telangana',
    guests: '150+ attendees',
    date: 'March 2024',
    description: 'Unveiling the latest innovation from Aurora. The event required a perfect blend of professionalism and excitement to match the groundbreaking product.'
  },
  {
    id: 6,
    image: '/images/portfolio-6.jpg',
    title: 'Evening Gala & Dance Night',
    category: 'Private Parties',
    location: 'Pune, Maharashtra',
    guests: '300+ guests',
    date: 'December 2023',
    description: 'A sophisticated evening event where I both hosted and provided DJ services, creating the perfect atmosphere for an unforgettable night.'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <span className="section-label">My Work</span>
            <h2 className="section-title mb-6">
              Moments I've Had the <span className="text-burgundy">Honor</span> to Create
            </h2>
            <p className="section-subtitle mx-auto">
              A glimpse into some of the incredible events I've been privileged to be a part of. Each one tells a unique story.
            </p>
          </AnimatedSection>
        </div>

        {/* Category Filter */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-burgundy text-white shadow-elegant'
                  : 'bg-white text-charcoal/70 hover:bg-blush hover:text-charcoal border border-dusty-rose/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-400">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-3">
                        {item.category}
                      </span>
                      <h3 className="font-playfair text-xl text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-burgundy" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <p className="text-charcoal/60 mb-4">
            These are just a few highlights from my journey.
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-burgundy font-medium hover:underline"
            whileHover={{ x: 2 }}
          >
            Let's discuss how I can make your event special
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </AnimatedSection>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-burgundy/10 rounded-full text-xs font-medium text-burgundy mb-4">
                  {selectedItem.category}
                </span>
                <h3 className="font-playfair text-2xl lg:text-3xl text-charcoal mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-charcoal/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-burgundy" />
                    {selectedItem.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-burgundy" />
                    {selectedItem.guests}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-burgundy" />
                    {selectedItem.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
