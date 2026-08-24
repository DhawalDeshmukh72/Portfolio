import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface LeadershipRole {
  organization: string;
  role: string;
  period: string;
  stats: { label: string; value: string; highlight: string }[];
  highlights: string[];
  badges: string[];
  photos: { url: string; title: string; description: string }[];
}

const RoleCard = ({ role }: { role: LeadershipRole }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % role.photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + role.photos.length) % role.photos.length);
  };

  return (
    <Card className="bg-card/70 border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden">
      <div>
        {/* Photo Gallery Carousel inside Card */}
        {role.photos.length > 0 && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-border/40 group">
            <img 
              src={role.photos[activePhotoIndex].url} 
              alt={role.photos[activePhotoIndex].title} 
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Next / Previous Controls */}
            {role.photos.length > 1 && (
              <>
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-all shadow-md"
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-all shadow-md"
                  onClick={nextPhoto}
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}

            {/* Photo Caption Overlay & Slide Counter */}
            <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-end">
              <div>
                <div className="text-xs font-semibold text-primary">{role.photos[activePhotoIndex].title}</div>
                <div className="text-[11px] text-gray-300 line-clamp-1">{role.photos[activePhotoIndex].description}</div>
              </div>
              {role.photos.length > 1 && (
                <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded-full text-[10px] text-gray-300 border border-white/10 shrink-0">
                  {activePhotoIndex + 1} / {role.photos.length}
                </div>
              )}
            </div>
          </div>
        )}

        <CardContent className="p-8 space-y-6">
          <div className="flex flex-wrap justify-between items-start gap-2 border-b border-border/40 pb-4 min-h-[130px] md:min-h-[110px]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">Leadership Role</span>
              <h3 className="text-2xl font-bold text-foreground mt-1">{role.organization}</h3>
              <div className="text-primary font-medium">{role.role}</div>
            </div>
            <Badge variant="outline" className="text-xs px-3 py-1 bg-primary/10 border-primary/30 shrink-0">
              {role.period}
            </Badge>
          </div>

          {/* Key Stats Callout */}
          <div className="grid grid-cols-2 gap-4">
            {role.stats.map((stat, sIdx) => (
              <div key={sIdx} className="bg-background/50 p-3.5 rounded-lg border border-border/40 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-xs font-semibold text-foreground/90">{stat.label}</div>
                <div className="text-[10px] text-muted-foreground">{stat.highlight}</div>
              </div>
            ))}
          </div>

          {/* Bullet Highlights */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Contributions</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {role.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>

      {/* Badges */}
      <CardContent className="px-8 pb-8 pt-0">
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
          {role.badges.map((b, bIdx) => (
            <Badge key={bIdx} variant="secondary" className="text-xs bg-secondary/60">
              {b}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Leadership = () => {
  const leadershipRoles: LeadershipRole[] = [
    {
      organization: "TEDxKKWIEER",
      role: "Social Media Manager, Content Writer & Head of Social Media Team",
      period: "2024 – Present",
      stats: [
        { label: "Accounts Reached", value: "300K+", highlight: "Organically in 3 months" },
        { label: "Total Views", value: "4M+", highlight: "Reels & Event content" }
      ],
      highlights: [
        "Spearheaded digital content strategy, copywriting, and social media team management for TEDxKKWIEER.",
        "Engineered organic campaigns reaching over 300,000 unique accounts in a 3-month campaign window.",
        "Generated over 4 Million+ total impressions and video views across social platforms.",
        "Managed speaker promotion series, content creation, audience engagement, and post-event media."
      ],
      badges: ["Social Media Manager", "Content Writer", "Team Leader", "Event Marketing"],
      photos: [
        {
          url: "/images/tedx-2.jpg",
          title: "Social Media Manager & Content Lead",
          description: "Social Media Manager, Content Writer & Overall Head of the Social Media Team"
        },
        {
          url: "/images/tedx-1.jpg",
          title: "TEDx Core Team",
          description: "Organizing team members behind the successful TEDxKKWIEER event"
        },
        {
          url: "/images/tedx-3.jpg",
          title: "Auditorium Grand Finale",
          description: "Full team celebration on stage after reaching over 4 million impressions"
        }
      ]
    },
    {
      organization: "Phoenix Club KKWIEER",
      role: "Social Media Head",
      period: "2025 – 2026",
      stats: [
        { label: "Team & Design", value: "Lead", highlight: "Creative & Content Team" },
        { label: "Campaign Scope", value: "100%", highlight: "End-to-End Execution" }
      ],
      highlights: [
        "Led full social media operations, content creation strategy, and visual design direction.",
        "Collaborated with design teams to produce high-impact graphic assets and promotional media.",
        "Managed cross-functional student teams to boost engagement for club workshops and technical events.",
        "Maintained brand consistency across Instagram, LinkedIn, and internal college communications."
      ],
      badges: ["Leadership", "Graphic Design Strategy", "Social Media Management", "Team Building"],
      photos: [
        {
          url: "/images/leadership-1.jpg",
          title: "Felicitation Ceremony",
          description: "Receiving leadership recognition for outstanding club contribution"
        },
        {
          url: "/images/leadership-2.jpg",
          title: "Phoenix Club Team",
          description: "Leading the creative and social media team at KKWIEER"
        }
      ]
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {["Extracurricular", "&", "Leadership"].map((word, index) => (
              <React.Fragment key={index}>
                {index > 0 && ' '}
                <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                  {word}
                </span>
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading digital media strategy, community building, and creative outreach.
          </p>
        </div>

        {/* Roles Grid with embedded photo carousels */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {leadershipRoles.map((role, idx) => (
            <RoleCard key={idx} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
