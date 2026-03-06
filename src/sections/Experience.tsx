import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, TrendingUp, Zap, Shield, DollarSign, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Advithri Technologies',
    role: 'Senior Data Engineer',
    period: 'Sep 2024 - Present',
    summary: 'Leading data platform modernization initiatives for enterprise clients',
    impact: [
      { icon: TrendingUp, text: 'Improved pipeline reliability by 40% through Airflow orchestration' },
      { icon: DollarSign, text: 'Reduced compute costs by 25% via Snowflake optimization' },
      { icon: Zap, text: 'Cut processing time by 35% through Glue job tuning' },
    ],
    achievements: [
      'Architected event-driven data pipelines using Snowflake, DBT, and Fivetran for real-time analytics',
      'Built Snowpark (Python) processing logic eliminating external data movement bottlenecks',
      'Implemented column-level security and RBAC ensuring compliance with data governance standards',
      'Created Step Functions workflows with automated rollback and retry mechanisms',
      'Mentored 3 junior engineers on Snowflake best practices and DBT development',
    ],
    tech: ['Snowflake', 'DBT', 'Airflow', 'AWS Glue', 'Lambda', 'Python'],
  },
  {
    company: 'Infosys - CitiBank',
    role: 'Technology Analyst',
    period: 'Feb 2021 - Dec 2021',
    summary: 'Delivered critical data infrastructure for global banking operations',
    impact: [
      { icon: Shield, text: 'Achieved 99.9% data accuracy across billions of records' },
      { icon: TrendingUp, text: 'Improved query performance by 25% through optimization' },
      { icon: Zap, text: 'Automated multi-source ingestion reducing manual effort' },
    ],
    achievements: [
      'Designed ELT workflows using Snowflake, DBT, and AWS Glue for enterprise data warehouse',
      'Built reconciliation framework using PySpark validating billions of records daily',
      'Created Snowpark transformations enabling in-database computation',
      'Implemented event-driven architectures with S3 triggers and Lambda functions',
      'Tuned warehouse sizing and query patterns reducing costs without SLA impact',
    ],
    tech: ['Snowflake', 'PySpark', 'AWS', 'DBT', 'Airflow', 'Python'],
  },
  {
    company: 'Infosys - Bank of America',
    role: 'Technology Analyst',
    period: 'Oct 2018 - Jan 2021',
    summary: 'Pioneered synthetic data solutions for privacy-preserving ML workflows',
    impact: [
      { icon: Users, text: 'Enabled 50+ data scientists with anonymized datasets' },
      { icon: Shield, text: 'Ensured GDPR compliance for sensitive financial data' },
      { icon: Zap, text: 'Automated 1TB+ daily ETL processes' },
    ],
    achievements: [
      'Developed synthetic data generation framework using Python and PySpark for model testing',
      'Built data masking pipeline with Lambda and S3 triggers for secure PII handling',
      'Integrated Great Expectations for schema validation catching anomalies early',
      'Created self-healing pipeline using Step Functions for real-time failure recovery',
      'Established CI/CD pipeline using Jenkins and Git for automated deployments',
    ],
    tech: ['PySpark', 'Python', 'AWS Lambda', 'S3', 'Jenkins', 'Terraform'],
  },
  {
    company: 'Infosys - American Family Insurance',
    role: 'System Engineer',
    period: 'Jan 2017 - Oct 2018',
    summary: 'Led cloud migration transforming legacy data infrastructure',
    impact: [
      { icon: TrendingUp, text: 'Migrated 10TB+ enterprise data to cloud' },
      { icon: Zap, text: 'Reduced batch intervals enabling real-time reporting' },
      { icon: DollarSign, text: 'Cut infrastructure costs by 30%' },
    ],
    achievements: [
      'Migrated high-volume enterprise data from on-premise SQL/Oracle to AWS Snowflake',
      'Designed ETL pipelines using AWS Glue, PySpark, and Lambda across data domains',
      'Implemented CDC using AWS DMS improving incremental update efficiency',
      'Created metadata-driven ingestion with Glue Crawlers automating schema discovery',
      'Led Apache Flink implementation for streaming claims and policy updates',
    ],
    tech: ['AWS Glue', 'Snowflake', 'PySpark', 'Terraform', 'Flink', 'Redshift'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.exp-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
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
      id="experience"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-neon/20 to-transparent left-8 md:left-12" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-neon text-sm font-heading tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Impact That Speaks Numbers
          </h2>
          <p className="text-gray-400 max-w-2xl">
            From migrating legacy systems to building cutting-edge data platforms, 
            I&apos;ve delivered measurable results at Fortune 500 companies.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="exp-card relative"
            >
              <div className="absolute -left-4 md:-left-8 top-0 w-8 h-8 rounded-full bg-black border-2 border-neon flex items-center justify-center z-10">
                <span className="text-neon text-xs font-bold">{experiences.length - index}</span>
              </div>

              <div className="ml-8 md:ml-12 glass rounded-xl overflow-hidden hover:border-neon/30 transition-all duration-300">
                <div className="p-5 md:p-6 border-b border-white/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 size={18} className="text-neon" />
                        <h3 className="font-heading font-bold text-white text-lg md:text-xl">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-neon font-medium">{exp.role}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-3 italic">
                    &ldquo;{exp.summary}&rdquo;
                  </p>
                </div>

                <div className="px-5 md:px-6 py-4 bg-neon/5 border-b border-white/5">
                  <div className="grid sm:grid-cols-3 gap-4">
                    {exp.impact.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-2">
                          <Icon size={16} className="text-neon mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="text-neon mt-1">›</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 ml-8 md:ml-12 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            Ready to bring this expertise to your team?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-neon hover:underline mt-2"
          >
            Let&apos;s discuss how I can help <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
