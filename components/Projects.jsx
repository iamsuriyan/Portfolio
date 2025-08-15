

function ProjectCard({ title, description, technologies, index }) {
  return (
    <div className="mb-12">
      {/* Project Title */}
      <h3 className="text-2xl font-black text-white mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/90 leading-relaxed mb-4">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <span 
            key={techIndex} 
            className="text-sm font-medium text-blue-300"
          >
            {tech}{techIndex < technologies.length - 1 ? ' • ' : ''}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Farm2Com – Agriculture App",
      description: "React Native application featuring community posts, consultant chat, news section, crop management, and AI-based plant disease prediction with intelligent recommendations.",
      technologies: ['React Native', 'AI/ML', 'Node.js', 'MongoDB']
    },
    {
      title: "Echoes – Social Media Platform",
      description: "Secure social media application built with blockchain technology and React Native. Features complete data protection, privacy-focused architecture, and zero data leaks ensuring user security.",
      technologies: ['React Native', 'Blockchain', 'Node.js', 'TypeScript', 'Security']
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Personal projects showcasing innovative solutions and modern technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="flex">
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
