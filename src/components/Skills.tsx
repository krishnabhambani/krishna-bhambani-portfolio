import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "HTML", "CSS", "SQL"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Next.js", "GSAP"],
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Tools & Platforms", 
      skills: ["Git", "GitHub", "AWS", "MySQL", "Clerk", "Supabase"],
      color: "bg-primary-glow/10 text-primary-glow"
    },
    {
      title: "Computer Science Fundamentals",
      skills: ["Data Structures", "Algorithms", "OOPs", "DBMS", "Computer Networks", "Operating Systems"],
      color: "bg-secondary/60 text-secondary-foreground"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className={`${category.color} hover:scale-105 transition-transform cursor-default text-sm py-1 px-3`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-lg">FS</span>
              </div>
              <p className="font-medium">Full Stack Development</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary-glow rounded-full flex items-center justify-center mx-auto">
                <span className="text-accent-foreground font-bold text-lg">UI</span>
              </div>
              <p className="font-medium">UI/UX Design</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-lg">CP</span>
              </div>
              <p className="font-medium">Competitive Programming</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-lg">CL</span>
              </div>
              <p className="font-medium">Cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;