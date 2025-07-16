import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintaining CGPA of 8.80 in B.Tech Computer Science at VIT",
      icon: Trophy,
      category: "Academic"
    },
    {
      title: "Full Stack Development",
      description: "Developed multiple production-ready applications with modern tech stacks",
      icon: Award,
      category: "Technical"
    },
    {
      title: "AI Integration Expert",
      description: "Successfully integrated multiple AI APIs including Gemini API for real-time content generation",
      icon: Star,
      category: "Innovation"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open source projects on GitHub",
      icon: Target,
      category: "Community"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones that showcase my commitment to excellence in technology and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={achievement.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;