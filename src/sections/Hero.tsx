import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roles = ['Senior Data Engineer'];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const gridSize = 50;
    const cols = Math.ceil(canvas.width / gridSize);
    const rows = Math.ceil(canvas.height / gridSize);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: i * gridSize + gridSize / 2,
          y: j * gridSize + gridSize / 2,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.003;

      particles.forEach((p, i) => {
        const waveX = Math.sin(time + i * 0.05) * 1.5;
        const waveY = Math.cos(time + i * 0.05) * 1.5;

        p.x += p.vx + waveX * 0.05;
        p.y += p.vy + waveY * 0.05;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 157, 0.35)';
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < gridSize * 1.3) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 157, ${0.08 * (1 - dist / (gridSize * 1.3))})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      const nameChars = nameRef.current?.querySelectorAll('.char');
      if (nameChars) {
        tl.fromTo(
          nameChars,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, duration: 0.8 },
          0
        );
      }

      tl.fromTo(
        '.hero-subtitle',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.4
      );

      tl.fromTo(
        '.hero-roles',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.5
      );

      tl.fromTo(
        '.hero-skills span',
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, stagger: 0.05, duration: 0.4 },
        0.6
      );

      tl.fromTo(
        '.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.8
      );

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '40% top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set('.hero-content', {
            y: progress * -100,
            opacity: 1 - progress,
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Typing effect for roles
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000; // Pause before deleting
    
    const timeout = setTimeout(() => {
      const currentFullRole = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing
        if (charIndex < currentFullRole.length) {
          setCurrentRole(currentFullRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentRole(currentFullRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const name = "Sai Nikith Danday";

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="hero-content relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-neon text-sm md:text-base font-heading tracking-widest uppercase mb-4">
          6 Years of Turning Data Into Decisions
        </p>

        <h1
          ref={nameRef}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4"
        >
          {name.split('').map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl text-neon mb-8">
          {currentRole}
          <span className="animate-pulse">|</span>
        </p>

        <p className="hero-roles text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
          I build data pipelines that scale, analytics that inform, 
          and ML models that predict—helping businesses make smarter decisions.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-neon text-black font-heading font-semibold rounded-full hover:bg-neon-dark transition-all duration-300 hover:shadow-neon-lg flex items-center gap-2"
          >
            Let&apos;s Talk
            <ArrowRight size={18} />
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 border border-white/30 text-white font-heading font-semibold rounded-full hover:border-neon hover:text-neon transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="text-neon/50 animate-bounce" size={24} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
