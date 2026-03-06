import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Master of Science',
    field: 'Data Science',
    school: 'University of the Cumberlands',
    location: 'Williamsburg, KY',
    period: '2023 - 2024',
    focus: ['Machine Learning', 'Deep Learning', 'Big Data Analytics'],
  },
  {
    degree: 'Master of Science',
    field: 'Data Analytics',
    school: 'San Jose State University',
    location: 'San Jose, CA',
    period: '2022 - 2023',
    focus: ['Data Engineering', 'Statistical Modeling', 'Cloud Computing'],
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Electrical & Electronics Engineering',
    school: 'Sathyabama Institute',
    location: 'Chennai, India',
    period: '2012 - 2016',
    focus: ['Programming', 'System Design', 'Mathematics'],
  },
];

const certifications = [
  { name: 'AWS Certified Data Analytics - Specialty', status: 'Completed' },
  { name: 'Snowflake SnowPro Core Certification', status: 'Completed' },
  { name: 'Databricks Data Engineer Associate', status: 'Completed' },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.edu-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
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
      id="education"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-neon text-sm font-heading tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Education That Powers My Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Two Master&apos;s degrees and continuous learning keep me at the forefront 
            of data engineering, analytics, and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6" ref={cardsRef}>
          {/* Education Cards */}
          {education.map((edu, index) => (
            <div
              key={edu.school}
              className="edu-card glass rounded-xl p-5 hover:border-neon/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-neon" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm">
                    {edu.degree}
                  </h3>
                  <p className="text-neon text-sm">{edu.field}</p>
                </div>
              </div>

              {/* School */}
              <p className="text-gray-300 font-medium text-sm mb-3">
                {edu.school}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {edu.period}
                </span>
              </div>

              {/* Focus Areas */}
              <div className="pt-3 border-t border-white/5">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                  Key Focus Areas
                </p>
                <div className="flex flex-wrap gap-1">
                  {edu.focus.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Number */}
              <div className="absolute top-4 right-4 font-heading text-3xl font-bold text-white/5">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-8 glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center">
              <Award className="text-neon" size={20} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white">
                Certifications
              </h3>
              <p className="text-xs text-gray-500">Industry-recognized credentials</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
              >
                <BookOpen size={16} className="text-neon mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">{cert.name}</p>
                  <span 
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      cert.status === 'Completed' 
                        ? 'bg-neon/20 text-neon' 
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
