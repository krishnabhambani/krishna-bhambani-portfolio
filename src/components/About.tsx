import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and hands-on experience 
            in building scalable web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a Computer Science student at Vellore Institute of Technology with a passion for 
                creating innovative web applications. My journey in technology has been driven by 
                curiosity and a desire to solve real-world problems through code.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                With experience in full-stack development, I enjoy working with modern technologies 
                like React, Node.js, and cloud platforms to build scalable and user-friendly applications.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Education</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium">Vellore Institute of Technology</p>
                        <p className="text-sm text-muted-foreground">B.Tech in Computer Science • CGPA: 8.86</p>
                      </div>
                      <div>
                        <p className="font-medium">Bethel Academy</p>
                        <p className="text-sm text-muted-foreground">Senior Secondary • 95%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Achievements</h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Azure AI-900 Certification</li>
                      <li>• 36-hour Hackathon Participant</li>
                      <li>• Frontend Development Certification</li>
                      <li>• IEEE International Conference</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-glow/10 rounded-lg group-hover:bg-primary-glow/20 transition-colors">
                    <Code2 className="h-6 w-6 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Focus Areas</h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Full Stack Web Development</li>
                      <li>• Cloud Computing & AWS</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Modern UI/UX Design</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;