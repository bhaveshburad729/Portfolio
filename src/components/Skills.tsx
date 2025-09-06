import { Card } from "@/components/ui/card";
import { Code, Globe, Database, Brain, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      skills: ["Python", "Java", "C", "Java DSA", "JavaScript", "TypeScript"],
      color: "text-blue-400"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Responsive Design"],
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: ["SQL", "Node.js", "Firebase", "RESTful APIs", "Database Design"],
      color: "text-purple-400"
    },
    {
      icon: Brain,
      title: "AI & Cloud",
      skills: ["AI-powered Chatbots", "GenAI Apps", "Google Cloud", "Machine Learning", "n8n"],
      color: "text-orange-400"
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["GitHub", "Docker", "Vite"],
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Problem-solving", "Adaptability", "Communication"],
      color: "text-cyan-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            — Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-accent-gradient bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning full-stack development, AI technologies, 
            and modern development tools with strong leadership capabilities.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-semibold">Advanced</span>
                    </div>
                    <div className="mt-2 w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent-gradient h-2 rounded-full transition-all duration-1000 group-hover:w-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Banner */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card-gradient border-primary/30 shadow-glow">
            <h3 className="text-2xl font-bold mb-4">
              Always <span className="bg-accent-gradient bg-clip-text text-transparent">Learning</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI/ML concepts, 
              cloud architecture patterns, and modern DevOps practices to stay ahead of the curve.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Docker", "Kubernetes", "AWS", "TensorFlow", "GraphQL", "Microservices"].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;