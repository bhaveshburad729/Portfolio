import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
//import { ExternalLink, Github, Filter } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Smart Resume Generator",
      description: "Web app for dynamic resume creation with multiple templates and real-time preview",
      image: "https://i.postimg.cc/gkHJcb4S/project-3.png",
      category: "Web",
      technologies: ["React.js", "Tailwind CSS", "PDF Generation"],
      github: "https://github.com/bhaveshburad729/Smart_Resume",
      live: "#"
    },
    {
      title: "Smart ITR Filing Chatbot",
      description: "AI chatbot for tax filing assistance with personalized guidance and document support",
      image: "https://i.postimg.cc/L6V1CbYP/project-4.jpg",
      category: "AI",
      technologies: ["Next.js", "Node.js", "MongoDB", "html","Talwind CSS"],
      github: "https://github.com/bhaveshburad729/Smart_ITR_Chatbot",
      live: "#"
    },
    {
      title: "GenAI Financial Assistant",
      description: "AI-powered tool for investment literacy and financial planning guidance",
      image: "https://i.postimg.cc/PJ3yWwKN/project-2.jpg",
      category: "AI",
      technologies: ["GenAI", "Financial APIs", "React", "Python"],
      github: "https://github.com/bhaveshburad729/Financial-Assistant-Web",
      live: "#"
    },
    {
      title: "AYUSH Startup Portal",
      description: "Streamlined registration platform for healthcare startups with document management",
      image: "https://i.postimg.cc/ZKx77GQr/project1.png",
      category: "Web",
      technologies: ["Next.js", "Node.js", "MongoDB", "Document Upload"],
      github: "https://github.com/bhaveshburad729/Ayush-Portal",
      live: "#"
    },
    {
      title: "Image Resizer Tool",
      description: "Quick and efficient utility for batch image resizing with quality preservation",
      image: "https://i.postimg.cc/QdZTjD3z/project-5.png",
      category: "Tools",
      technologies: ["JavaScript",  "File Processing"],
      github: "https://github.com/bhaveshburad729/Image_Resizer",
      live: "#"
    }
  ];

  const categories = ["All", "Web", "AI", "Tools"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            — My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-accent-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning web development, AI applications, 
            and productivity tools that solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 bg-card rounded-lg p-2 border border-border/50">
            <Filter className="h-4 w-4 text-muted-foreground ml-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {/* <Button size="sm" variant="secondary" className="bg-background/90">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button> */}
                  {/* <Button size="sm" variant="secondary" className="bg-background/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button> */}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {project.category}
                </span>

                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-card-gradient border-primary/30 shadow-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Have a <span className="bg-accent-gradient bg-clip-text text-transparent">Project Idea?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to collaborate on innovative projects and bring creative ideas to life.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 shadow-glow"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;