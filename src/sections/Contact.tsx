import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { Mail, Phone, MessageCircle, Send, Calendar, User, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@abinayakumar.com',
    href: 'mailto:hello@abinayakumar.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Same number',
    href: 'https://wa.me/919876543210'
  }
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title mb-6">
              Let's Create Something <span className="text-burgundy">Beautiful</span> Together
            </h2>
            <p className="section-subtitle mx-auto">
              Every great event starts with a conversation. Tell me about your vision, your guests, and what you're hoping to create. I'll get back to you within 24 hours — promise.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <h3 className="font-playfair text-2xl text-charcoal mb-6">
                Reach Out Directly
              </h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Prefer to connect another way? I'm available through multiple channels and always happy to chat about your event.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-4">
              {contactMethods.map((method) => (
                <StaggerItem key={method.label}>
                  <motion.a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-burgundy" />
                    </div>
                    <div>
                      <div className="text-sm text-charcoal/50">{method.label}</div>
                      <div className="font-medium text-charcoal">{method.value}</div>
                    </div>
                  </motion.a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.4} className="mt-8 p-6 bg-blush rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-burgundy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-charcoal mb-1">
                    Quick Response Guarantee
                  </h4>
                  <p className="text-sm text-charcoal/70">
                    I personally respond to all inquiries within 24 hours. Your event is important to me.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-elegant p-8 lg:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-playfair text-2xl text-charcoal mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal/70">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-charcoal font-medium flex items-center gap-2">
                        <User className="w-4 h-4 text-burgundy" />
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 border-dusty-rose/30 focus:border-burgundy focus:ring-burgundy/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-charcoal font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4 text-burgundy" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 border-dusty-rose/30 focus:border-burgundy focus:ring-burgundy/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventType" className="text-charcoal font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4 text-burgundy" />
                        Event Type
                      </Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                      >
                        <SelectTrigger className="h-12 border-dusty-rose/30 focus:border-burgundy focus:ring-burgundy/20">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="college">College Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-charcoal font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-burgundy" />
                        Event Date
                      </Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="h-12 border-dusty-rose/30 focus:border-burgundy focus:ring-burgundy/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal font-medium">
                      Tell me about your event
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Share details about your event, your vision, and what you're looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="border-dusty-rose/30 focus:border-burgundy focus:ring-burgundy/20 resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-charcoal/60">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>I respect your privacy. Your information will never be shared.</span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-14 bg-burgundy hover:bg-burgundy-dark text-white font-medium text-lg rounded-lg transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
