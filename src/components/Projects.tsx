import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GradientLayer {
  gradient: CanvasGradient;
  alpha: number;
  size: number;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  gradients?: GradientLayer[];
}

interface ProjectItem {
  title: string;
  subtitle: string;
  images: { url: string; caption: string }[];
  description: string;
  highlights: string[];
  tech: string[];
  demoUrl: string;
  github: string;
}

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-2xl hover:border-primary/50 transition-all duration-300 bg-card/60 backdrop-blur-sm border border-border">
      <div className="space-y-6">
        {/* Project Multi-Image Carousel Header */}
        {project.images.length > 0 && (
          <div className="relative aspect-video w-full overflow-hidden bg-black/50 border-b border-border/40 group/carousel">
            <img 
              src={project.images[activeImageIndex].url} 
              alt={`${project.title} screenshot ${activeImageIndex + 1}`} 
              className="w-full h-full object-cover object-top transition-all duration-500 group-hover/carousel:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />

            {/* Next / Prev Buttons */}
            {project.images.length > 1 && (
              <>
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-all shadow-md"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-all shadow-md"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}

            {/* Caption & Counter Overlay */}
            <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-end">
              <span className="text-xs font-semibold text-primary bg-black/60 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                {project.images[activeImageIndex].caption}
              </span>
              {project.images.length > 1 && (
                <div className="flex items-center gap-1.5 bg-black/70 px-2.5 py-0.5 rounded-full text-[10px] text-gray-200 border border-white/10 shrink-0 font-mono">
                  {activeImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Project Header Banner */}
        <div className="px-8 pt-2 pb-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-primary font-mono font-semibold">Featured Project</span>
            <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-primary/80 font-medium">{project.subtitle}</p>
          </div>
        </div>
        
        {/* Project Details */}
        <CardContent className="px-8 pb-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>
          
          {project.highlights && (
            <div className="space-y-2 bg-background/40 p-4 rounded-lg border border-border/40">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Key Highlights</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-foreground/90">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Technologies Used</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="bg-primary/5 border-primary/20 text-xs py-1 px-2.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="gap-2 shadow-md hover:scale-105 transition-transform">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <ExternalLink className="w-4 h-4 ml-0.5" />
                  Live App
                </Button>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                  <Github className="w-4 h-4" />
                  GitHub Code
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const Projects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  // Pre-create gradients to avoid recreation every frame
  const createParticleGradients = useCallback((ctx: CanvasRenderingContext2D, size: number): GradientLayer[] => {
    const gradients: GradientLayer[] = [];
    const glowLayers = [
      { size: size * 8, alpha: 0.03, color: '#6969b3' },
      { size: size * 5, alpha: 0.08, color: '#98c1d9' },
      { size: size * 3, alpha: 0.15, color: '#b8e0f5' },
      { size: size * 1.8, alpha: 0.3, color: '#ffffff' }
    ];
    
    glowLayers.forEach(layer => {
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, layer.size);
      gradient.addColorStop(0, layer.color);
      gradient.addColorStop(1, 'transparent');
      gradients.push({ gradient, alpha: layer.alpha, size: layer.size });
    });
    
    return gradients;
  }, []);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const section = canvas.parentElement;
      if (section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
        canvas.style.width = section.offsetWidth + 'px';
        canvas.style.height = section.offsetHeight + 'px';
      }
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', updateMousePosition);

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      updateCanvasSize();
      const particleCount = window.innerWidth < 768 ? 50 : 100;

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        const particle: Particle = {
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size: 1.5 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.5
        };

        particle.gradients = createParticleGradients(ctx, particle.size);
        particles.current.push(particle);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.016;

      particles.current.forEach((particle) => {
        const mouse = mouseRef.current;
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;
        
        if (distance < repelRadius && distance > 0) {
          const force = Math.pow((repelRadius - distance) / repelRadius, 3);
          const repelStrength = 0.8;
          particle.vx += (dx / distance) * force * repelStrength;
          particle.vy += (dy / distance) * force * repelStrength;
        }
        
        const floatSeedX = particle.baseX * 0.001;
        const floatSeedY = particle.baseY * 0.001;
        const floatX = Math.sin(timeRef.current * 0.2 + floatSeedX) * 0.005;
        const floatY = Math.cos(timeRef.current * 0.15 + floatSeedY) * 0.004;
        
        particle.vx += floatX;
        particle.vy += floatY;
        particle.vx *= 0.997;
        particle.vy *= 0.997;
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        ctx.save();
        const baseAlpha = particle.opacity;
        
        if (particle.gradients) {
          particle.gradients.forEach(({ gradient, alpha, size }) => {
            ctx.globalAlpha = baseAlpha * alpha;
            ctx.translate(particle.x, particle.y);
            ctx.fillStyle = gradient;
            ctx.fillRect(-size, -size, size * 2, size * 2);
            ctx.translate(-particle.x, -particle.y);
          });
        }
        
        ctx.globalAlpha = baseAlpha;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.globalAlpha = baseAlpha * 0.6;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.5;
        
        const rayLength = particle.size * 3;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y - rayLength);
        ctx.lineTo(particle.x, particle.y + rayLength);
        ctx.moveTo(particle.x - rayLength, particle.y);
        ctx.lineTo(particle.x + rayLength, particle.y);
        ctx.stroke();
        
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateMousePosition, createParticleGradients]);

  const projects: ProjectItem[] = [
    {
      title: "Contract Lens",
      subtitle: "AI-Powered Legal Contract Risk Analysis & Privacy Protection",
      images: [
        {
          url: "/images/contract-lens-1.png",
          caption: "RAG Based Risk Detection Landing Page"
        },
        {
          url: "/images/contract-lens-2.png",
          caption: "Contract Analysis Report & Risk Score Chart"
        },
        {
          url: "/images/contract-lens-3.png",
          caption: "Clause Risk Analysis & Interactive Legal Assistant"
        }
      ],
      description: "An AI system that simplifies legal agreements. Upload any rent or leave & license agreement PDF to receive clause-by-clause risk scoring (Low / Medium / High) with explanations, automatic PII anonymization (masking Aadhaar, PAN, IFSC, names before API calls), RAG-based legal context via FAISS, interactive QA, and illegal clause detection for Indian rental laws.",
      highlights: [
        "Clause-by-clause risk scoring with detailed explanations",
        "Local PII Anonymization via Presidio & SpaCy",
        "FAISS RAG store retrieving relevant legal clauses",
        "Interactive plain-English contract QA assistant"
      ],
      tech: ["FastAPI", "Groq (Llama-3.1)", "RAG", "FAISS", "Presidio", "SpaCy", "PyMuPDF", "Python"],
      demoUrl: "https://contract-lens-rihn.onrender.com/",
      github: "https://github.com/DhawalDeshmukh72/ContractLensDhawal.git"
    },
    {
      title: "DhawalKart Business Analyst",
      subtitle: "Autonomous E-Commerce Business Intelligence & LLM Reporting System",
      images: [
        {
          url: "/images/business-analyzer-1.png",
          caption: "Daily Executive Email Digest with Color-Coded Severity Metrics"
        }
      ],
      description: "An autonomous business intelligence and reporting system designed for DhawalKart. The system runs an automated daily pipeline: generating realistic metric streams, running multi-period deterministic anomaly detection in pure Python, executing local LLM (Ollama) reasoning to write executive business highlights, and dispatching responsive styled HTML email digests.",
      highlights: [
        "100% mathematically accurate metrics engine built in pure Python",
        "Rule-based anomaly detection with dynamic severity classifications (±10% to ±30%)",
        "Local LLM (Ollama) integration with offline fallback reasoning",
        "Responsive, modern HTML email reports with severity status badges",
        "Fully automated daily analysis run via GitHub Actions cron trigger",
        "Dual-sync data storage persisting to SQLite databases and flat CSV files"
      ],
      tech: ["Python", "SQLite", "Ollama", "GitHub Actions", "SMTP", "CLI"],
      demoUrl: "",
      github: "https://github.com/DhawalDeshmukh72/Business_Analyzer"
    },
    {
      title: "Car Price Predictor",
      subtitle: "Machine Learning Resale Price Estimation System",
      images: [
        {
          url: "/images/car-price-1.png",
          caption: "Real-Time Resale Price Estimation Output"
        },
        {
          url: "/images/car-price-2.png",
          caption: "Interactive Vehicle Specification Input Form"
        }
      ],
      description: "An end-to-end Machine Learning web application that predicts the expected resale price of used cars based on vehicle specifications such as brand, manufacturing year, fuel type, transmission, engine size, mileage, owner history, and insurance type.",
      highlights: [
        "Supervised regression pipeline with Scikit-learn",
        "Data preprocessing & multi-feature encoding",
        "Interactive Flask web dashboard for real-time predictions",
        "Deployed for public access on Render"
      ],
      tech: ["Machine Learning", "Python", "Scikit-Learn", "Pandas", "NumPy", "Flask", "Joblib", "Render"],
      demoUrl: "https://car-price-predictor-oe62.onrender.com/",
      github: "https://github.com/DhawalDeshmukh72/Car_Price_Predictor.git"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my recent Machine Learning, RAG AI, and Data Science projects.
          </p>
        </div>
        
        <div className="grid gap-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
