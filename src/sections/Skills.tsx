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
    title: 'Programming & Scripting',
    icon: Code,
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Scala', 'Bash', 'Java'],
    color: '#00ff9d',
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'GCP', 'AWS S3', 'EC2', 'Lambda', 'EMR', 'Athena', 'Redshift', 'BigQuery'],
    color: '#ff9500',
  },
  {
    title: 'Big Data Technologies',
    icon: Database,
    skills: ['Spark', 'PySpark', 'Hadoop', 'Kafka', 'Hive', 'HBase', 'Flink', 'Databricks'],
    color: '#00d4ff',
  },
  {
    title: 'Data Warehousing',
    icon: Server,
    skills: ['Snowflake', 'Snowpark', 'Redshift', 'BigQuery', 'Data Lakes', 'Dimensional Modeling', 'Star/Snowflake Schema'],
    color: '#ff6b6b',
  },
  {
    title: 'ETL & Orchestration',
    icon: Workflow,
    skills: ['Apache Airflow', 'DBT', 'AWS Glue', 'Fivetran', 'Step Functions', 'Azure Data Factory', 'Talend'],
    color: '#a855f7',
  },
  {
    title: 'DevOps & CI/CD',
    icon: GitBranch,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub Actions', 'Terraform', 'CI/CD Pipelines', 'Infrastructure as Code', 'Bitbucket'],
    color: '#f97316',
  },
  {
    title: 'Data Analysis',
    icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Excel', 'Statistical Analysis', 'A/B Testing'],
    color: '#ec4899',
  },
  {
    title: 'Data Visualization',
    icon: BarChart3,
    skills: ['Tableau', 'Power BI', 'Plotly', 'D3.js', 'Looker', 'Matplotlib', 'Seaborn'],
    color: '#14b8a6',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'DynamoDB', 'Cassandra', 'Elasticsearch'],
    color: '#14b8a6',
  },
  {
    title: 'Machine Learning & MLOps',
    icon: Cpu,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Keras', 'NLP', 'Feature Engineering', 'MLflow', 'AWS SageMaker', 'Kubeflow', 'Model Monitoring', 'Model Registry', 'Docker'],
    color: '#8b5cf6',
  },
  {
    title: 'Monitoring & Security',
    icon: Shield,
    skills: ['AWS CloudWatch', 'Prometheus', 'Grafana', 'IAM', 'KMS', 'Data Quality', 'Airflow Logs', 'Glue Job Metrics'],
    color: '#ef4444',
  },
  {
    title: 'Architecture & Design',
    icon: Cpu,
    skills: ['Microservices', 'Event-driven Architecture', 'Data Governance', 'Schema Evolution', 'Data Mesh', 'Lambda Architecture'],
    color: '#8b5cf6',
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
