import { GraduationCap, Code2, Palette } from "lucide-react";
import { Server } from "lucide-react";

const About = () => {
  return <section id="about" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ABOUT <span className="text-gradient">ME</span>
          </h2>
          <p className="text-primary font-medium">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              A Passionate Software Engineer & Designer
            </h3>
            <p className="text-muted-foreground leading-relaxed">i'm a full-stack developer and UI/UX designer who creates modern, easy-to-use digital experiences. I enjoy building complete solutions from frontend to backend and designing clean, professional interfaces.</p>
            
            
            {/* Quick facts */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Full-Stack Dev</p>
                  <p className="text-muted-foreground text-sm">Modern Applications</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">UI/UX Design</p>
                  <p className="text-muted-foreground text-sm">Beautiful Interfaces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-semibold text-foreground">Education</h4>
                <p className="text-muted-foreground text-sm">Academic Background</p>
              </div>
            </div>
            

            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h5 className="font-semibold text-foreground mb-1">
                  Bachelor's Degree in Information Technology
                </h5>
                <p className="text-primary font-medium text-sm mb-2">
                  Jamhuriya University
                </p>
                <p className="text-muted-foreground text-sm">
                  Graduated 2025 • Specialized in software development and modern web technologies
                </p>
              </div>
            </div>
          </div>
         {/*sofware i use */}
 

         <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
      <GraduationCap className="w-7 h-7 text-primary" />
    </div>
    <div>
      <h4 className="font-heading text-xl font-semibold text-foreground">Tools & Technologies</h4>
      <p className="text-muted-foreground text-sm">Software & Development Stack</p>
    </div>
  </div>

  <div className="space-y-4">
    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

      <h5 className="font-semibold text-foreground mb-1">UI/UX Design</h5>
      <p className="text-muted-foreground text-sm">
        🎨 Figma • 🖼️ Canva• ✒️ Illustrator
      </p>
    </div>

    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

      <h5 className="font-semibold text-foreground mb-1">Frontend Development</h5>
      <p className="text-muted-foreground text-sm">
        ⚛️ React • ▲ Next.js •  • 🌬️ Tailwind CSS
      </p>
    </div>

    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

      <h5 className="font-semibold text-foreground mb-1">Backend Development</h5>
      <p className="text-muted-foreground text-sm">
        🟩 Node.js • 📗 django • 🍃 MongoDB • 🐬 MySQL
      </p>
    </div>
  </div>
</div>

{/* Technical Skills Section */}
<div className="bg-secondary/50 rounded-2xl p-8 border border-border">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
      <GraduationCap className="w-7 h-7 text-primary" />
    </div>
    <div>
      <h4 className="font-heading text-xl font-semibold text-foreground">Technical Skills</h4>
      {/* Removed background text */}
    </div>
  </div>

  <div className="space-y-6">

    {/* Linux Knowledge ONLY */}
    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
      <h5 className="font-semibold text-foreground mb-1 flex items-center gap-2">
        <Server className="w-4 h-4 text-primary" />

        Linux Knowledge
      </h5>
      <p className="text-muted-foreground text-sm">
        Proficient in Linux system usage, including command-line operations, file management, and basic system administration. Hands-on experience with Linux for development, troubleshooting, and server tasks.
      </p>
    </div>

  </div>
</div>



        </div>
      </div>
    </section>;
};
export default About;