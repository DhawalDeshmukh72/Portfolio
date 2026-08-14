
import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleOrb from './ParticleOrb';

const Contact = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Dhawal_Deshmukh_Resume.pdf';
    link.download = 'Dhawal_Deshmukh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <ParticleOrb />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {["Let's", "Connect"].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </h2>
            <p className="text-xl text-muted-foreground">
              {["Feel", "free", "to", "reach", "out", "for", "opportunities", "or", "collaborations!"].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-16 max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {["Get", "in", "Touch"].map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className="hover:text-foreground hover:drop-shadow-[0_0_16px_rgba(255,255,255,1)] hover:scale-110 transition-all duration-300 cursor-default inline-block">
                      {word}
                    </span>
                  </React.Fragment>
                ))}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <a 
                    href="mailto:dhawaldeshmukh72@gmail.com?subject=Portfolio%20Contact"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    dhawaldeshmukh72@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <a href="https://www.linkedin.com/in/dhawal-deshmukh-22a439289/" target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>linkedin.com/in/dhawal-deshmukh</span>
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <a href="https://github.com/DhawalDeshmukh72" target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>github.com/DhawalDeshmukh72</span>
                  </a>
                </div>

                <div className="pt-2">
                  <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform" onClick={handleResumeDownload}>
                    <Download className="w-4 h-4" /> Download Resume
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {["Open", "to", "Opportunities"].map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className="hover:text-foreground hover:drop-shadow-[0_0_16px_rgba(255,255,255,1)] hover:scale-110 transition-all duration-300 cursor-default inline-block">
                      {word}
                    </span>
                  </React.Fragment>
                ))}
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="hover:text-foreground hover:drop-shadow-[0_0_16px_rgba(255,255,255,1.2)] transition-all duration-300 cursor-default">• Full-Time Jobs & Internships</div>
                <div className="hover:text-foreground hover:drop-shadow-[0_0_16px_rgba(255,255,255,1.2)] transition-all duration-300 cursor-default">• Machine Learning & Data Science Engineering</div>
                <div className="hover:text-foreground hover:drop-shadow-[0_0_16px_rgba(255,255,255,1.2)] transition-all duration-300 cursor-default">• AI & RAG Solutions Development</div>
                <div className="hover:text-foreground hover:drop-shadow-[0_0_16px_rgba(255,255,255,1.2)] transition-all duration-300 cursor-default">• Data Analytics & Content Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
