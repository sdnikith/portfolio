import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'sdnikith@gmail.com', 
    href: 'mailto:sdnikith@gmail.com',
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    value: '650 605 3668', 
    href: 'tel:6506053668',
  },
  { 
    icon: MapPin, 
    label: 'Location', 
    value: 'USA', 
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub'
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-animate',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using Formspree for direct email delivery
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    console.log('Formspree endpoint:', endpoint); // Debug log
    
    if (!endpoint) {
      console.error('Formspree endpoint not found in environment variables');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        console.error('Formspree response error:', response.status, response.statusText);
        const errorText = await response.text();
        console.error('Error response:', errorText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 contact-animate">
          <span className="text-neon text-sm font-heading tracking-widest uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m open to new opportunities and collaborations in data engineering. 
            Reach out and let&apos;s discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6 contact-animate">
            <div>
              <h3 className="font-heading font-bold text-white text-2xl mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">I'm currently open to Senior Data Engineer roles. Let's discuss how I can contribute to your data infrastructure.</p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:border-neon/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                      <Icon size={22} className="text-neon" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{method.label}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="contact-animate">
              <p className="text-sm text-gray-500 mb-4">Connect on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-neon/20 hover:border-neon/50 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={22} className="text-neon" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="contact-animate">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-white font-heading font-semibold text-lg mb-5">
                Send Me a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Job Opportunity at Your Company"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm text-gray-400 mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about the role and what you're looking for..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full py-4 font-heading font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSent
                    ? 'bg-green-500 text-white'
                    : 'bg-neon hover:bg-neon-dark text-black hover:shadow-neon-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <span className="text-green-500">✓</span>
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center contact-animate">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sai Nikith Danday. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Senior Data Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
