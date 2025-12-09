import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <a href="#home" className="font-heading font-bold text-xl text-foreground">
              Zakaaye<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">Full-Stack & UI/UX Designer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Zackmohamd" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:zakariekaasim1@gmail.com" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Zakaaye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;