import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-zakarie.png";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden" style={{
    background: "var(--gradient-hero)"
  }}>
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 opacity-0 animate-fade-in-up">
              HELLO, I'M
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in-up animation-delay-200">
              Zakarie Mohamed<br />
              <span className="text-gradient">Kasim</span>
            </h1>
            <p className="text-primary font-semibold text-lg md:text-xl mb-6 opacity-0 animate-fade-in-up animation-delay-400">full-stack Developer & UI/UX Designer</p>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in-up animation-delay-600">
              I build modern and useful digital products, specializing in full-stack applications 
              and crafting simple, beautiful user interfaces that help others and look great.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-600">
              <Button asChild size="lg" className="rounded-full px-8 hover-glow">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/50 hover:bg-primary/10">
                <a href="#portfolio">View Projects</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative opacity-0 animate-slide-in-right">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                <img src={profileImage} alt="Zakarie Mohamed Kasim - Software Engineer" className="w-full h-full object-cover object-top" />
              </div>
              {/* Stats badges */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
                <div className="bg-card border border-border px-6 py-3 rounded-full shadow-lg">
                  <p className="text-primary font-bold text-xl">Let's</p>
                  
                </div>
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
                  <p className="font-bold text-xl">Connect</p>
                  <p className="text-xs opacity-80">
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;