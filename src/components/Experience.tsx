import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Tech Mentor",
      company: "VIT VELLORE",
      type: "IEEE-SSIT",
      duration: "12/24 - Present",
      description: "Led technical strategy and spearheaded 5+ innovation-driven projects as a Board Member for IEEE Society on Social Implications of Technology.",
      responsibilities: [
        "Mentored 100+ students during VIT hackathons",
        "Guided 50+ teams to develop scalable web and AI solutions",
        "Organized technical workshops and seminars",
        "Led innovation-driven projects with social impact"
      ],
      skills: ["Leadership", "Mentoring", "Project Management", "Technical Strategy"],
      icon: Users,
      color: "bg-primary/10 text-primary"
    },
    {
      role: "Developer Intern",
      company: "CodeResite",
      type: "Remote Internship",
      duration: "05/25 - 07/25",
      description: "Boosted website responsiveness by improving user satisfaction by 25%. Optimized user experience, contributing to a 15% uptick in engagement and a 10% drop in bounce rates. Improved accessibility scores by 20% through semantic markup attributes.",
      responsibilities: [
        "Developed responsive web applications using React.js and Tailwind CSS",
        "Implemented semantic markup for improved accessibility",
        "Optimized website performance and user experience",
        "Collaborated with design team on UI/UX improvements"
      ],
      achievements: [
        "25% improvement in user satisfaction",
        "15% increase in user engagement", 
        "10% reduction in bounce rates",
        "20% improvement in accessibility scores"
      ],
      skills: ["React.js", "Tailwind CSS", "Node.js", "Supabase", "Performance Optimization"],
      icon: Briefcase,
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on development and technical leadership roles
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                    
                    <Card className="md:ml-20 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg ${exp.color} group-hover:scale-110 transition-transform`}>
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{exp.role}</CardTitle>
                              <div className="text-lg font-medium text-muted-foreground">{exp.company}</div>
                              <div className="text-sm text-muted-foreground">{exp.type}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <p className="text-foreground/80 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="text-sm text-foreground/80 flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {exp.achievements && (
                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {exp.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm bg-primary/5 p-2 rounded-lg">
                                  <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="font-semibold mb-3">Skills & Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge 
                                key={skill}
                                variant="secondary" 
                                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;