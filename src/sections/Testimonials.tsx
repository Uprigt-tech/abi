import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Abinaya made our wedding day absolutely magical. She didn't just host — she understood our story and wove it into every introduction. Our guests are still talking about how personal and beautiful the ceremony felt.",
    name: 'Priya Sharma',
    role: 'Bride',
    location: 'Mumbai',
    image: '/images/client-1.jpg',
    event: 'Wedding Reception',
    rating: 5
  },
  {
    id: 2,
    quote: "We've worked with many emcees for our annual events, but Abinaya stands out. She's professional, punctual, and has this incredible ability to engage a diverse audience. Our CEO specifically requested her for the next event.",
    name: 'Rajesh Mehta',
    role: 'Marketing Director, TechFlow Solutions',
    location: 'Bangalore',
    image: '/images/client-2.jpg',
    event: 'Corporate Annual Meet',
    rating: 5
  },
  {
    id: 3,
    quote: "Managing a 3-day college fest with 5000+ students is chaotic, but Abinaya handled it like a pro. She kept the energy high, managed schedule changes gracefully, and the students absolutely loved her.",
    name: 'Ananya Patel',
    role: 'Event Head, IIT Bombay',
    location: 'Mumbai',
    image: '/images/client-3.jpg',
    event: 'College Fest',
    rating: 5
  },
  {
    id: 4,
    quote: "For my mother's 60th birthday, I wanted something special. Abinaya created a beautiful tribute segment that had everyone in tears (the good kind!). She has this gift for making moments memorable.",
    name: 'Kavita Reddy',
    role: 'Daughter of the Celebrant',
    location: 'Bangalore',
    image: '/images/client-4.jpg',
    event: 'Milestone Birthday',
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-b from-blush/20 to-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="section-label">Kind Words</span>
            <h2 className="section-title mb-6">
              What Clients Say About <span className="text-burgundy">Working</span> With Me
            </h2>
            <p className="section-subtitle mx-auto">
              Nothing makes me happier than hearing from satisfied clients. Here's what some of them have to say.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonials Carousel */}
        <AnimatedSection delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="relative bg-white rounded-3xl shadow-elegant p-8 lg:p-12 overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 text-burgundy/10">
                <Quote className="w-24 h-24" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-champagne text-champagne" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-charcoal leading-relaxed mb-8 font-playfair italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-burgundy/20">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-playfair font-semibold text-lg text-charcoal">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-charcoal/60">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-xs text-burgundy mt-1">
                        {testimonials[currentIndex].event}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                <motion.button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-burgundy hover:bg-burgundy hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-burgundy hover:bg-burgundy hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-burgundy w-8'
                      : 'bg-dusty-rose/50 hover:bg-dusty-rose'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Trust Badges */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div className="text-center mb-8">
            <p className="text-sm text-charcoal/50 uppercase tracking-widest">
              Trusted by leading brands & organizations
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
            {['Taj Hotels', 'Reliance', 'Google India', 'IIT Bombay', 'Infosys', 'Marriott'].map((brand) => (
              <motion.div
                key={brand}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="text-xl lg:text-2xl font-playfair font-semibold text-charcoal/40 hover:text-charcoal transition-all cursor-default"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
