import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Microsoft Azure AI-900 Certification",
      description: "Achieved Microsoft Azure AI-900 Certification, validating the core understanding of Azure cloud services.",
      icon: Trophy,
      category: "Certification"
    },
    {
      title: "36-Hour Hackathon Organizer",
      description: "Organised a 36-hour hackathon focused on Sustainable Goals, managing logistics, sponsors, and 1000+ participants.",
      icon: Target,
      category: "Leadership"
    },
    {
      title: "Frontend Development Certification - IIT Kanpur",
      description: "Certified in Frontend Development by IIT Kanpur – Gained hands-on experience in frontend technologies.",
      icon: Award,
      category: "Education"
    },
    {
      title: "IEEE International Conference Management",
      description: "Served in the Management team of an IEEE International conference, overseeing event coordination.",
      icon: Star,
      category: "Professional"
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