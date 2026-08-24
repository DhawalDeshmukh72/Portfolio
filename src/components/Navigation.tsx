
import React from 'react';
import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Dhawal_Deshmukh_Resume.pdf';
    link.download = 'Dhawal_Deshmukh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity tracking-tight">
            Dhawal Deshmukh
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/DhawalDeshmukh72" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-card rounded-full transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhawal-deshmukh-22a439289/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-card rounded-full transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex items-center gap-2 text-xs font-semibold"
              onClick={handleResumeDownload}
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
