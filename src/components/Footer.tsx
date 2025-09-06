import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Bhavesh Nitin Burad. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Built with</span>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">TypeScript</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;