function ProjectCard({ title, description, technologies }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
      <p className="text-white/90 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-300/20">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Farm2Com — Expo React Native Mobile Application',
      description:
        'Developed an agriculture-focused mobile application featuring community posts, consultant chat, agricultural news, crop management, user profiles, and AI-based disease prediction and plant recommendation.',
      technologies: ['Expo', 'React Native', 'Node.js', 'MongoDB', 'AI Integrations'],
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} technologies={project.technologies} />
          ))}
        </div>
      </div>
    </section>
  );
}
