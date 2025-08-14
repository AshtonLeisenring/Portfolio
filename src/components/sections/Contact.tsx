import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="border-t bg-muted/30">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Let's connect and create something amazing together.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">ashton.leisenring@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (814) 323-8370</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/ashtonleisenring" target="_blank" rel="noopener" className="text-primary hover:underline">
                    linkedin.com/in/ashtonleisenring
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a href="https://github.com/AshtonLeisenring" target="_blank" rel="noopener" className="text-primary hover:underline">
                    github.com/AshtonLeisenring
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-xl bg-card border">
              <h4 className="font-semibold text-primary mb-3">Let's Collaborate</h4>
              <p className="text-sm text-muted-foreground mb-4">
                I'm always open to discussing new opportunities, research collaborations, or innovative projects that combine data science, cybersecurity, and business strategy.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Aldie, VA</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Send a Message</h3>
            
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background"
                  />
                </div>
              </div>
              
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="bg-background resize-none"
              />
              
              <Button size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;