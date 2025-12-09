import { Code, Palette, Layout, Monitor, Database, Smartphone } from "lucide-react";

const skills = [

 
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
  },
  
   {
    icon: Layout,
    title: "Frontend Development",
    description: "Crafting beautiful, responsive interfaces with React, Nextjs, and modern CSS frameworks like tailwind css.",
  },
  //  {
  //   icon: Code,
  //   title: "backend Development",
  //   description: "Building responsive, modern web applications with clean, maintainable code using the latest technologies.",
  // },
 
  {
    icon: Database,
    title: "Backend Development",
    description: "Building robust server-side applications and APIs with Node.js, django, databases, and cloud services.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Ensuring perfect viewing experiences across all devices and screen sizes.",
  },
  {
    icon: Smartphone,
    title: "Modern Interfaces",
    description: "Designing sleek, user-friendly interfaces that prioritize accessibility and usability.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            WHAT I <span className="text-gradient">DO</span>
          </h2>
          <p className="text-primary font-medium">My Services & Skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {skill.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary text-sm font-medium hover:underline"
              >
                Say Hello
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
