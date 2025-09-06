import { Card } from "@/components/ui/card";
import { Trophy, Briefcase, Users,  ShieldCheck, Lightbulb} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Trophy,
      title: "SIH Finalist - Team Lead",
      organization: "Smart India Hackathon",
      period: "2024",
      description: "Led a team of 6 members to develop innovative solutions for national challenges, demonstrating leadership and technical expertise.",
      achievements: ["Team Leadership", "Innovation", "National Recognition"],
      type: "competition"
    },
    {
      icon: Briefcase,
      title: "Web Development Intern",
      organization: "Bluestocks",
      period: "2024",
      description: "Designed and optimized home page components, improving user experience and website performance through modern web technologies.",
      achievements: ["Frontend Development", "UI/UX Optimization", "Performance Improvement"],
      type: "internship"
    },
    {
      icon:  ShieldCheck,
      title: "Road Safety Hackathon - Team Lead",
      organization: "Ministry of Road Transport and Highways (MoRTH)",
      period: "2025",
      description: "National Road Safety Hackathon 2025: Proposed data-driven strategies to improve Foot Over Bridges (FOBs), enhancing pedestrian safety and accessibility.",
      achievements: ["Innovation", "Data-Driven Solutions", "Road Safety", "Urban Accessibility"],
      type: "community"
    },
    {
      icon: Lightbulb,
      title: "Google Soluions ",
      organization: "Google",
      period: "2025",
      description: "I developed a GenAI-powered Financial Assistant that simplifies investing decisions by providing AI-driven guidance on mutual funds, SIPs, stocks, and bonds",
      achievements: ["Innovation", "Leadership", "Accessibility", "Financial Literacy"],

      type: "conference"
    }
  ];

  const hackathons = [
    {
      name: "Smart India Hackathon",
      achievement: "Finalist",
      year: "2024",
      description: "Developed AI-powered solution for government challenge"
    },
    {
      name: "Google Solutions Challenge",
      achievement: "Participant",
      year: "2025",
      description: "Created sustainable technology solution using Google technologies"
    },
    {
      name: "Army Institute Hackathon",
      achievement: "Participant",
      year: "2025",
      description: "Built innovative solution for defense-related challenges"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "competition": return "text-yellow-400";
      case "internship": return "text-blue-400";
      case "community": return "text-green-400";
      case "conference": return "text-purple-400";
      default: return "text-primary";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            — Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-accent-gradient bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A track record of leadership, innovation, and continuous learning through 
            diverse experiences in technology and community building.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={index} className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Icon and Period */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                      <IconComponent className={`h-8 w-8 ${getTypeColor(exp.type)} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {exp.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium">{exp.organization}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span key={achIndex} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Hackathons Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            Hackathon <span className="bg-accent-gradient bg-clip-text text-transparent">Participation</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group text-center">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{hackathon.name}</h4>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-primary font-medium">{hackathon.achievement}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{hackathon.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{hackathon.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-card-gradient border-primary/30 shadow-glow max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4 italic">
              "Leadership is not about being in charge. It's about taking care of those in your charge 
              and empowering them to achieve their best."
            </blockquote>
            <p className="text-muted-foreground">— My Leadership Philosophy</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;