import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Krishna Bhambani
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & Software Engineer
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating scalable web applications and innovative solutions. 
            Currently pursuing B.Tech in Computer Science at VIT with expertise in modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
            <Button className="group" size="lg">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group">
              <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/krishnabhambani" 
              className="p-3 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/krishnabhambani" 
              className="p-3 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:krishnabhambani9@gmail.com" 
              className="p-3 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;