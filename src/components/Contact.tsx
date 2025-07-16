import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7900220134",
      href: "tel:+917900220134"
    },
    {
      icon: Mail,
      label: "Email",
      value: "krishnabhambani9@gmail.com",
      href: "mailto:krishnabhambani9@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vellore, Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/krishnabhambani",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/krishnabhambani",
      color: "hover:text-blue-600"
    },
    {
      name: "LeetCode",
      icon: ExternalLink,
      href: "https://leetcode.com/krishnabhambani",
      color: "hover:text-orange-500"
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      href: "#",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  Whether you're looking for a dedicated developer for your team, 
                  have a project in mind, or want to discuss the latest in tech, 
                  I'd love to hear from you. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={info.label} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <a 
                          href={info.href}
                          className="flex items-center space-x-4 group-hover:text-primary transition-colors"
                        >
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{info.label}</p>
                            <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-2xl font-semibold">Ready to Work Together?</h3>
                  <p className="text-foreground/80">
                    I'm currently open to full-time opportunities, internships, 
                    and freelance projects. Let's build something amazing together!
                  </p>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full group">
                      <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Send Email
                    </Button>
                    <Button variant="outline" size="lg" className="w-full group">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-center">Find Me Online</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center space-x-2 p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;