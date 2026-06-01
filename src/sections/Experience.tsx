import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, TrendingUp, Zap, Shield, DollarSign, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Advithri Technologies',
    role: 'Senior Python Developer',
    period: 'Sep 2024 – Present',
    summary: 'Led architecture and delivery of FastAPI microservices, LLM integrations, and event-driven streaming infrastructure for analytics and governance',
    impact: [
      { icon: TrendingUp, text: 'Delivered $216K annualized Snowflake compute savings' },
      { icon: DollarSign, text: 'Improved pipeline reliability to 99.6% via orchestration and monitoring' },
      { icon: Zap, text: 'Reduced MTTR from 45 to 8 minutes with self-healing CI/CD' },
    ],
    achievements: [
      'Built FastAPI microservices exposing governed Snowflake analytics with Pydantic validation and rate limiting',
      'Integrated LLMs (SageMaker, Hugging Face) for document summarization and automated reporting',
      'Architected Kafka event-driven ingestion using MSK and CDC connectors for sub-30s data freshness',
      'Orchestrated 50+ Airflow DAGs with SLA alerting and retry policies',
      'Developed reusable Python SDK for authentication, retries, and logging across services',
    ],
    tech: ['Python', 'FastAPI', 'Kafka', 'Snowflake', 'Airflow', 'AWS'],
  },
  {
    company: 'DataBridge Analytics',
    role: 'Python Developer',
    period: 'May 2022 – Aug 2024',
    summary: 'Designed and built REST APIs, Kafka pipelines, and ETL workflows to support analytics and reporting for cross-functional teams',
    impact: [
      { icon: TrendingUp, text: 'Handled 50K+ events/minute with sub-second propagation latency' },
      { icon: Zap, text: 'Reduced nightly batch processing time by 30% via optimized Glue & PySpark jobs' },
      { icon: Shield, text: 'Improved anomaly detection and monitoring using Grafana and Prometheus' },
    ],
    achievements: [
      'Built FastAPI and Flask REST APIs with async handlers, dependency injection, and OpenAPI docs',
      'Developed Kafka producer/consumer pipelines to centralize clickstream and application events',
      'Designed ETL pipelines using AWS Glue and PySpark for heterogeneous source systems into Redshift',
      'Implemented Great Expectations data validation integrated with Airflow and CI pipelines',
      'Implemented OAuth2/JWT-based auth and role-based access controls for internal APIs',
    ],
    tech: ['FastAPI', 'Flask', 'Kafka', 'PySpark', 'AWS Glue', 'Great Expectations'],
  },
  {
    company: 'Infosys · CitiBank',
    role: 'Python Developer',
    period: 'Feb 2021 – Dec 2021',
    summary: 'Architected high-throughput Kafka streaming and reconciliation frameworks for financial transactions',
    impact: [
      { icon: Shield, text: 'Ingested 500k+ events/sec with sub-second latency' },
      { icon: TrendingUp, text: 'Enabled sub-30s data freshness via CDC connectors' },
      { icon: Zap, text: 'Achieved 99.9% accuracy in reconciliation at scale' },
    ],
    achievements: [
      'Built Kafka streaming platform on AWS MSK ingesting 500k+ events/sec',
      'Engineered Spark Structured Streaming fraud detection pipeline with sub-5s signal delivery',
      'Configured Debezium CDC connectors and S3 sink to deliver near-real-time Snowflake loads',
      'Implemented idempotent producers and DLQ patterns for guaranteed delivery',
    ],
    tech: ['Kafka', 'Spark', 'Python', 'Debezium', 'Snowflake'],
  },
  {
    company: 'Infosys · Bank of America',
    role: 'Python Developer',
    period: 'Oct 2018 – Jan 2021',
    summary: 'Built FastAPI serving layers, ML model A/B testing, and large-scale ETL for fraud analytics',
    impact: [
      { icon: Users, text: 'Served real-time scoring for 500M+ daily transactions' },
      { icon: Shield, text: 'Maintained sub-100ms P99 API responses for model serving' },
      { icon: Zap, text: 'Automated 1TB+ daily transformations with PySpark' },
    ],
    achievements: [
      'Developed FastAPI microservices exposing ML models with Redis caching and versioned endpoints',
      'Implemented A/B testing framework to compare model versions and drive promotion decisions',
      'Automated PySpark transformations on EMR for large-scale data processing',
      'Built Lambda + S3 PII masking pipelines using KMS for field-level encryption',
    ],
    tech: ['FastAPI', 'Python', 'PySpark', 'Redis', 'EMR'],
  },
  {
    company: 'Infosys · American Family Insurance',
    role: 'Python Developer',
    period: 'Dec 2016 – Oct 2018',
    summary: 'Led migrations and built ETL pipelines, Flink streaming jobs, and serverless masking solutions for insurance workloads',
    impact: [
      { icon: TrendingUp, text: 'Migrated 50+ enterprise datasets to Snowflake' },
      { icon: Zap, text: 'Reduced data freshness from hours to minutes with CDC' },
      { icon: DollarSign, text: 'Saved $12K/month by removing redundant Redshift storage' },
    ],
    achievements: [
      'Spearheaded migration of enterprise datasets to Snowflake and Redshift',
      'Built 20+ ETL pipelines using Glue and Lambda across multiple domains',
      'Implemented Flink streaming jobs for real-time claims analytics',
      'Deployed Athena/Redshift Spectrum federated queries to reduce compute costs',
    ],
    tech: ['Glue', 'Flink', 'Snowflake', 'Redshift', 'Lambda'],
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
