import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { Mic, Volume2, Music, MessageSquare, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: 'Event Hosting / Emcee',
    description: 'From weddings to corporate conferences, I bring the perfect balance of energy and elegance to your event. I handle the flow, engage your audience, and ensure every moment feels seamless.',
    features: [
      'Complete event flow management',
      'Audience engagement & interaction',
      'Custom script writing',
      'Coordination with vendors',
      'Bilingual hosting (English/Hindi)'
    ]
  },
  {
    icon: Volume2,
    title: 'Voice-Over Services',
    description: 'Professional voice-overs for commercials, documentaries, IVR systems, and audio books. Clear, warm, and versatile — delivered in 24-48 hours.',
    features: [
      'Commercial voice-overs',
      'Documentary narration',
      'IVR & phone systems',
      'E-learning modules',
      'Quick turnaround time'
    ]
  },
  {
    icon: Music,
    title: 'DJ & Entertainment',
    description: 'Curated music experiences that keep your guests on the dance floor. From Bollywood nights to retro evenings, I read the crowd and deliver the perfect vibe.',
    features: [
      'Custom playlist curation',
      'Professional sound equipment',
      'Genre flexibility',
      'Crowd reading & adaptation',
      'Interactive music sessions'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Public Speaking',
    description: 'Keynotes, panel moderation, and workshop facilitation. I bring research, storytelling, and audience engagement to every speaking engagement.',
    features: [
      'Keynote presentations',
      'Panel moderation',
      'Workshop facilitation',
      'Corporate training',
      'Motivational speaking'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-warm-white to-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="section-label">What I Do</span>
            <h2 className="section-title mb-6">
              Services Crafted for <span className="text-burgundy">Unforgettable</span> Events
            </h2>
            <p className="section-subtitle mx-auto">
              Every event is unique, and so is my approach. I offer a range of services designed to make your special occasion truly memorable.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-400 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-burgundy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-burgundy transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-burgundy group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-charcoal/60">
                      <Check className="w-4 h-4 text-burgundy mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 border-t border-dusty-rose/30 flex justify-end">
                  <motion.button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-burgundy transition-colors group/btn"
                    whileHover={{ x: 2 }}
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <div className="bg-burgundy rounded-2xl p-8 lg:p-12">
            <h3 className="font-playfair text-2xl lg:text-3xl text-white mb-4">
              Not sure which service fits your event?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Let's have a quick chat about your vision. I'll help you figure out exactly what you need.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-burgundy font-medium rounded-lg hover:bg-blush transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
