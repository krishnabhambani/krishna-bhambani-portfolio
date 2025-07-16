import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP"]
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication"]
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman", "Figma"]
    },
    {
      title: "AI & APIs",
      icon: Cloud,
      skills: ["Gemini API", "Clerk API", "API Integration", "AI Tools Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and AI-driven solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Animated Tech Stack Symbols */}
{/*         <div className="mt-16 overflow-hidden">
          <div className="flex items-center gap-8 animate-scroll">
            <div className="flex items-center gap-8 text-4xl">
              ⚛️ 🟢 📘 🔷 🎨 🍃 ⚡ 🔧 🗄️ 🔗 🌐 🛠️ 
              ⚛️ 🟢 📘 🔷 🎨 🍃 ⚡ 🔧 🗄️ 🔗 🌐 🛠️
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
