import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { Mic, Heart, Sparkles, Users } from 'lucide-react';

const highlights = [
  {
    icon: Mic,
    title: 'Stage Presence',
    description: 'Commanding attention and engaging audiences of any size'
  },
  {
    icon: Heart,
    title: 'Personal Touch',
    description: 'Every event crafted with care and attention to detail'
  },
  {
    icon: Sparkles,
    title: 'Versatile Style',
    description: 'From elegant weddings to high-energy corporate events'
  },
  {
    icon: Users,
    title: 'Audience Connection',
    description: 'Creating moments that resonate with every guest'
  }
];

export function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image Column */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-6 bg-blush rounded-3xl -z-10" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/images/about-photo.jpg"
                  alt="Abinaya Kumar behind the scenes"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Quote overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-xl shadow-card p-6 max-w-xs"
              >
                <div className="text-burgundy text-4xl font-playfair leading-none mb-2">"</div>
                <p className="text-charcoal/80 text-sm italic leading-relaxed">
                  The moment when an event transforms from a schedule into a living, breathing experience — that's what drives me.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content Column */}
          <div>
            <AnimatedSection>
              <span className="section-label">About Me</span>
              <h2 className="section-title mb-6">
                From Stage Fright to <span className="text-burgundy">Spotlight</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-5 text-charcoal/70 leading-relaxed">
                <p>
                  I still remember my first time on stage. My hands were shaking, my voice was trembling, and I was convinced everyone could see my heart pounding through my dress. But then something magical happened — I connected with the audience. I saw smiles, heard laughter, and felt that electric energy that only live events can create.
                </p>
                <p>
                  That was seven years ago. Today, I've hosted over 500 events across India — from destination weddings in Udaipur to product launches for Fortune 500 companies. Every event taught me something new: how to read a room, how to adapt on the fly, how to make 10 people feel as special as 1000.
                </p>
                <p>
                  What drives me? The moment when an event transforms from a schedule on paper into a living, breathing experience. When guests forget to check their phones because they're genuinely engaged. When clients tell me, "That was exactly what we envisioned."
                </p>
                <p className="text-burgundy font-medium">
                  I'm not just an emcee — I'm a partner in creating memories that last long after the lights go down.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Highlights Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400"
              >
                <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-burgundy" />
                </div>
                <h3 className="font-playfair font-semibold text-lg text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Bar */}
        <div ref={statsRef} className="bg-burgundy rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: '+', label: 'Events Hosted' },
              { value: 7, suffix: '+', label: 'Years Experience' },
              { value: 50, suffix: '+', label: 'Corporate Clients' },
              { value: 98, suffix: '%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-2"
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
