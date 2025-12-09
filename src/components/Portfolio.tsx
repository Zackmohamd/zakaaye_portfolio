import { ExternalLink, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Restaurant Website",
    category: "Frontend Development",
    description: "A fully responsive modern restaurant website built with React & Vite.",
    url: "https://restaurantfrontend-xi.vercel.app/",
    image: "https://www.upload.ee/image/18881572/HomePage.png",
    placeholder: false,
  },

  {
    title: "E-commerce Craft",
    category: "Full-Stack Application",
    description: "An exciting project is in development. Stay tuned for updates!",
    url: "https://commerce-craft-puce.vercel.app/",
    image: "https://i.postimg.cc/F1kRwmYG/3f7007d9.png",
    placeholder: false,
  },

  {
    title: "Cryptocurrency Platform",
    category: "Full-Stack Application",
    description: `
      Boggan weli wuu ku jiraa marxaladda horumarinta.
      A modern cryptocurrency platform is coming soon.
    `,
    image: "https://www.upload.ee/thumb/18881791/1031.jpg",
    placeholder: true,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            PORT<span className="text-gradient">FOLIO</span>
          </h2>
          <p className="text-primary font-medium">My Recent Work</p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 relative"
            >

              {/* IMAGE */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    project.placeholder
                      ? "opacity-40 blur-[2px]"
                      : "group-hover:scale-105"
                  }`}
                />

                {/* COMING SOON OVERLAY */}
                {project.placeholder && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="p-6">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>

                <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                  {project.description}
                </p>

                {/* BUTTONS */}
                {!project.placeholder ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                ) : (
                  <button
                    className="inline-flex items-center text-primary text-sm font-medium opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
