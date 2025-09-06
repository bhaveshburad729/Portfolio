import { Card } from "@/components/ui/card";
import { Code, Brain, FileText, Palette, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Responsive websites and web applications built with React, Next.js, and modern technologies",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern UI/UX"],
      color: "text-blue-400"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent chatbots and GenAI-based applications for business automation",
      features: ["Chatbot Development", "GenAI Integration"],
      color: "text-purple-400"
    },
    {
      icon: FileText,
      title: "Document Tools",
      description: "Smart utilities for document processing, resume generation, and productivity enhancement",
      features: ["Resume Builders", "Document Processing", "Template Systems", "PDF Generation"],
      color: "text-green-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Modern, user-friendly, and accessible design solutions that enhance user experience",
      features: ["User Interface Design", "User Experience", "Accessibility", "Brand Identity"],
      color: "text-orange-400"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Project management and team coordination for hackathons and development projects",
      features: ["Project Management", "Team Coordination", "Agile Methodology", "Mentorship"],
      color: "text-cyan-400"
    },
    {
      icon: Zap,
      title: "Innovation Projects",
      description: "Cutting-edge solutions for startups and businesses with focus on emerging technologies",
      features: ["Startup Solutions", "Technology Consulting", "MVP Development", "Innovation Strategy"],
      color: "text-red-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            — What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-accent-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions from web development to AI integration, 
            designed to help businesses and individuals achieve their digital goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-4 border-t border-border/30">
                    <button className="text-primary hover:text-accent transition-colors duration-300 font-medium text-sm group-hover:underline">
                      Learn More →
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="bg-accent-gradient bg-clip-text text-transparent">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and requirements" },
              { step: "02", title: "Planning", description: "Strategic approach and timeline creation" },
              { step: "03", title: "Development", description: "Building solutions with best practices" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-border/50 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent">
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;