import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import profileImage from "@/assets/bhavesh-profile.jpg";
const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen flex items-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-12">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                — Hello
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I'm{" "}
                <span className="bg-accent-gradient bg-clip-text text-transparent">
                  Bhavesh
                </span>
                <br />
                <span className="text-foreground">Software Developer </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Passionate about building intelligent solutions, innovative web experiences, 
                and empowering others through technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToPortfolio} className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-xl transition-all duration-300">
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                View My Work
              </Button>
              
              {/* <Button variant="outline" className="px-8 py-6 text-lg font-semibold border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                 Resume
              </Button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">9.86</div>
                <div className="text-sm text-muted-foreground">GPA Sem 1</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gradient rounded-full blur-xl opacity-60 animate-glow"></div>
              <img src={profileImage} alt="Bhavesh Nitin Burad" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/20 shadow-2xl" />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card-gradient p-4 rounded-lg shadow-card animate-float">
                <div className="text-primary font-bold">AI Enginner </div>
                <div className="text-sm text-muted-foreground">
              </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card-gradient p-4 rounded-lg shadow-card animate-float" style={{
              animationDelay: '1.5s'
            }}>
                <div className="text-primary font-bold">Web Dev</div>
                {/* <div className="text-sm text-muted-foreground">AI Engineer</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;