import { useState } from "react";
import { Mail, Phone, MapPin, Send, User, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_9bz97oh",
        "template_gettcd1",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "EH1F52BW2I_T7vom_"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      toast({
        title: "Email Failed!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            CONTACT <span className="text-gradient">ME</span>
          </h2>
          <p className="text-primary font-medium">Let's Work Together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Looking for a software engineer or designer? I'm here to help bring 
                your ideas to life. Let's discuss your project and create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:zakariekaasim1@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">zakariekaasim1@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+252617999339"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">+252 617 999 339</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">Somalia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-muted-foreground text-sm mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Zackmohamd"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div className="space-y-2">
                <label className="text-foreground font-medium text-sm">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-12 h-12 bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-foreground font-medium text-sm">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-12 h-12 bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-foreground font-medium text-sm">Your Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-full">
                {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
