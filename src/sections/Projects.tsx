import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, Car, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Enterprise Data Platform',
    description: 'Architected and built a cloud-native data platform processing 1TB+ daily across 50+ data sources. Implemented real-time CDC, automated data quality checks, and self-healing pipelines that reduced downtime by 80%. The platform serves 200+ analysts and data scientists.',
    image: '/project-youtube.jpg',
    icon: BarChart3,
    technologies: ['Python', 'Airflow', 'Snowflake', 'DBT', 'AWS Glue', 'Kafka'],
    impact: [
      { label: 'Daily Volume', value: '1TB+' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Users Served', value: '200+' },
    ],
    color: '#00ff9d',
  },
  {
    title: 'Real-Time Fraud Detection System',
    description: 'Built an end-to-end ML-powered fraud detection pipeline that processes millions of transactions in real-time. Used ensemble methods and anomaly detection to identify suspicious patterns with 98% accuracy while maintaining sub-100ms latency for decision-making.',
    image: '/project-fraud.jpg',
    icon: Shield,
    technologies: ['Python', 'XGBoost', 'AWS SageMaker', 'Spark Streaming', 'Kafka'],
    impact: [
      { label: 'Detection Rate', value: '98%' },
      { label: 'False Positives', value: '<2%' },
      { label: 'Latency', value: '<100ms' },
    ],
    color: '#a855f7',
  },
  {
    title: 'Smart City Traffic Analytics',
    description: 'Developed a comprehensive traffic management system integrating 500+ IoT sensors with predictive ML models. Created real-time dashboards for city planners and implemented automated alert systems for congestion hotspots, improving traffic flow by 25%.',
    image: '/project-traffic.jpg',
    icon: Car,
    technologies: ['Python', 'Spark Streaming', 'Tableau', 'TensorFlow', 'AWS'],
    impact: [
      { label: 'Sensors', value: '500+' },
      { label: 'Accuracy', value: '92%' },
      { label: 'Flow Improvement', value: '25%' },
    ],
    color: '#00d4ff',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-neon text-sm font-heading tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Projects That Deliver Results
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here&apos;s how I&apos;ve solved real business problems—from building data platforms 
            to deploying machine learning models at scale.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="project-card group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-neon/30 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  
                  <div 
                    className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <Icon size={24} style={{ color: project.color }} />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-white text-lg mb-3 group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-6 mb-5 pb-5 border-b border-white/5">
                    {project.impact.map((metric) => (
                      <div key={metric.label}>
                        <p 
                          className="font-heading font-bold text-xl"
                          style={{ color: project.color }}
                        >
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Want to discuss these projects in detail?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-neon/50 text-neon rounded-full hover:bg-neon/10 transition-all duration-300"
          >
            Let&apos;s Talk
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
