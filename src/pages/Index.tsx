
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Leadership />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="#" className="text-2xl font-bold mb-4 md:mb-0 text-primary hover:opacity-80 transition-opacity tracking-tight">
              &lt;Dhawal<span className="text-primary/80 inline-block align-middle transform -translate-y-[1px]">/</span>&gt;
            </a>
            <div className="text-muted-foreground">
              © 2026 Dhawal Deshmukh. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
