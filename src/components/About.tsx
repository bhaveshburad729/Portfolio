import { Card } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Award, Users } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: GraduationCap, title: "Academic Excellence", description: "9.86 GPA in Sem 1, 9.41 in Sem 2, 9.32 in Sem 3 & 4" },
    { icon: Award, title: "Certifications", description: "Python (IIT Madras – NPTEL), Java, Data Structures And Algorithm(Java), C Programming" },
    { icon: Users, title: "Leadership", description: " SIH Team Lead" },
  ];

  const timeline = [
    { year: "2020-2022", title: "Higher Secondary", description: "Completed 11th/12th with excellent grades", status: "completed" },
    { year: "2023-2027", title: "B.E. in IT", description: "Currently in third year with outstanding GPA", status: "current" },
    { year: "2024+", title: "Future Goals", description: "Full-stack development and AI specialization", status: "upcoming" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            — About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-accent-gradient bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A third-year IT student with exceptional academic achievements, passionate about 
            technology innovation and building solutions that make a difference.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            Academic <span className="bg-accent-gradient bg-clip-text text-transparent">Timeline</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <Card className={`w-full max-w-md p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <CheckCircle className={`h-5 w-5 ${item.status === 'completed' ? 'text-primary' : item.status === 'current' ? 'text-accent' : 'text-muted-foreground'}`} />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;