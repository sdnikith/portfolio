import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, Mail, Phone, GraduationCap, 
  Database, Code, LineChart, Brain, Workflow, Download
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const targetRoles = [
  { icon: Database, label: 'Senior Data Engineer', color: '#00ff9d' }
];

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'United States', href: '#' },
  { icon: Mail, label: 'Email', value: 'dsnikith6671@gmail.com', href: 'mailto:dsnikith6671@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 (650) 605-3069', href: 'tel:+16506053069' },
  { icon: GraduationCap, label: 'Education', value: 'M.S. Data Science', href: '#education' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const contentElements = contentRef.current?.querySelectorAll('.animate-item');
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-item mb-12">
          <span className="text-neon text-sm font-heading tracking-widest uppercase">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2">
            Building Data Solutions That Drive Business Impact
          </h2>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-item">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                I&apos;m a <span className="text-neon font-semibold">Data Professional</span> with 6 years of hands-on experience transforming raw data into actionable insights. I&apos;ve architected data pipelines processing terabytes daily, built ML models for fraud detection, and created analytics dashboards that shaped strategic decisions at Fortune 500 companies.
              </p>
            </div>

            <div className="animate-item">
              <h3 className="text-white font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                <Code size={18} className="text-neon" />
                What I Bring to the Table
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Design scalable data pipelines (ETL/ELT)',
                  'Build cloud-native solutions on AWS',
                  'Develop predictive ML models',
                  'Create interactive BI dashboards',
                  'Optimize query performance & costs',
                  'Implement data governance & security',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-400">
                    <span className="text-neon mt-1">›</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-item">
              <h3 className="text-white font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                <Workflow size={18} className="text-neon" />
                Roles I&apos;m Pursuing
              </h3>
              <div className="flex flex-wrap gap-3">
                {targetRoles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <div
                      key={role.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-neon/50 transition-all duration-300"
                    >
                      <Icon size={16} style={{ color: role.color }} />
                      <span className="text-white text-sm font-medium">{role.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="animate-item glass rounded-xl p-5 border-l-2 border-neon">
              <h3 className="text-white font-heading font-semibold mb-2">
                Why Hire Me?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I don&apos;t just write code—I solve business problems. At CitiBank, I reduced data processing costs by 25%. At Bank of America, I built a framework that achieved 99.9% data accuracy across billions of records. I understand that data engineering is about enabling better decisions, not just moving data from A to B.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="animate-item space-y-3">
              <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider">
                Contact
              </h3>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Icon size={16} className="text-neon group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* <div className="animate-item">
              <a
                href="/Sai_Nikith_Danday_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full p-4 bg-neon/10 border border-neon/30 rounded-xl text-neon font-medium hover:bg-neon/20 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div> */}

            <div className="animate-item">
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-neon/10 border border-neon/30">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neon"></span>
                </span>
                <span className="text-neon text-sm font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
