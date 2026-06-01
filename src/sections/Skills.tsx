import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code, Cloud, Database, Server, Workflow, GitBranch, 
  BarChart3, Shield, Cpu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'SQL', 'PySpark', 'Scala', 'Bash/Shell'],
    color: '#00ff9d',
  },
  {
    title: 'Frameworks & APIs',
    icon: Cpu,
    skills: ['FastAPI', 'Flask', 'REST', 'GraphQL', 'gRPC', 'Pydantic'],
    color: '#a855f7',
  },
  {
    title: 'Streaming & Messaging',
    icon: Database,
    skills: ['Apache Kafka', 'Kafka Connect', 'MSK', 'Kinesis', 'RabbitMQ', 'Schema Registry'],
    color: '#00d4ff',
  },
  {
    title: 'AI / ML & LLM',
    icon: BarChart3,
    skills: ['LLM Integration', 'Hugging Face', 'OpenAI', 'scikit-learn', 'XGBoost', 'SageMaker'],
    color: '#ff6b6b',
  },
  {
    title: 'ETL / Orchestration',
    icon: Workflow,
    skills: ['Airflow', 'DBT', 'AWS Glue', 'Fivetran', 'Step Functions'],
    color: '#14b8a6',
  },
  {
    title: 'Cloud & Infra',
    icon: Cloud,
    skills: ['AWS (Lambda, S3, EC2, MSK)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    color: '#f97316',
  },
  {
    title: 'Warehouses & Databases',
    icon: Database,
    skills: ['Snowflake', 'Redshift', 'PostgreSQL', 'MongoDB', 'DynamoDB'],
    color: '#8b5cf6',
  },
  {
    title: 'Observability & Quality',
    icon: Shield,
    skills: ['Grafana', 'Prometheus', 'Splunk', 'CloudWatch', 'Great Expectations', 'Pytest'],
    color: '#ef4444',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.skill-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.6,
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
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-neon text-sm font-heading tracking-widest uppercase">
            Technical Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Skills That Span the Data Spectrum
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From building data pipelines to training ML models, my toolkit covers 
            the full data lifecycle—making me versatile across Data Engineering, 
            Analytics, and Science roles.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          style={{ perspective: '2000px' }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="skill-card group relative glass rounded-xl p-5 hover:bg-white/5 transition-all duration-300 cursor-default"
                style={{ 
                  transformStyle: 'preserve-3d',
                  borderColor: `${category.color}20`
                }}
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 30px ${category.color}30` }}
                />

                <div className="relative">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon size={20} style={{ color: category.color }} />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-3 text-sm">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ 
                    background: `linear-gradient(135deg, transparent 50%, ${category.color} 50%)`,
                    borderRadius: '0px 0.75rem 0px 0px'
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            <span className="text-neon">★</span> Continuously learning and adapting to new technologies
          </p>
        </div>
      </div>
    </section>
  );
}
