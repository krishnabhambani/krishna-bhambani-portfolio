import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";
import lmsProject from "@/assets/lms-project.png";
import toolsProject from "@/assets/tools-platform.png";
import codifyProject from "@/assets/codify-project.png";

const Projects = () => {
  const projects = [
    {
      title: "Learning Management System",
      description: "Developed a scalable frontend for a Learning Management System using React.js and Tailwind CSS, improving page responsiveness by 40%. Integrated 15+ RESTful API endpoints for real-time updates on courses and performance, enhancing UI interactivity and user experience.",
      image: lmsProject,
      technologies: ["React.js", "Tailwind CSS", "MongoDB", "Node.js", "Clerk"],
      timeline: "04/25 - 05/25",
      features: [
        "Scalable frontend with 40% improved responsiveness",
        "15+ RESTful API endpoints integration",
        "Real-time course updates and performance tracking",
        "Enhanced UI interactivity"
      ],
      githubUrl: "#",
      liveUrl: "https://lms-rfontend.vercel.app/"
    },
    {
      title: "Tools Cult Platform",
      description: "Designed and built a sleek interface for Tools Cult, streamlining workflows across 5+ AI tools. Integrated Gemini API for real-time content generation, enabling smart document automation. Features include real-time content optimization and enhanced user experience with AI-driven functionality.",
      image: toolsProject,
      technologies: ["React.js", "Tailwind CSS", "Gemini API", "Vercel"],
      timeline: "06/25 - 07/25",
      features: [
        "Streamlined workflows across 5+ AI tools",
        "Gemini API integration for content generation",
        "Smart document automation",
        "Real-time content optimization"
      ],
      githubUrl: "#",
      liveUrl: "https://tools-cult.vercel.app/"
    },
    {
      title: "Codify Website",
      description: "Designed and developed AI-driven tools for resume generation, mock interviews, and job matching, improving user placement readiness. Integrated academic resources including cloud-based access to past papers, notes, and video tutorials for comprehensive learning support.",
      image: codifyProject,
      technologies: ["Next.js", "Tailwind CSS", "GSAP", "Git", "Clerk API"],
      timeline: "06/24 - 09/24",
      features: [
        "AI-driven resume generation tools",
        "Mock interview system",
        "Job matching algorithm",
        "Cloud-based academic resources"
      ],
      githubUrl: "#",
      liveUrl: "https://codifykrishna.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            AI integration, and user experience design.
          </p>
        </div>
        
        <div className="grid gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {project.timeline}
                    </div>
                    <CardTitle className="text-2xl mb-4">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button size="sm" className="group/btn" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          View Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="group/btn" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;