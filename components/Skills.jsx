const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Next.js', 'React', 'React Native (Expo)', 'Node.js', 'Express'],
  },
  {
    title: 'Backend & Databases',
    skills: ['RESTful API Design', 'Microservices Architecture', 'MongoDB', 'Authentication & Authorization', 'Data Modeling'],
  },
  {
    title: 'AI & Automation',
    skills: ['AI Agents', 'Workflow Automation', 'Prompt Engineering', 'Browser Automation'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GCP', 'Postman', 'VS Code', 'MongoDB Compass', 'NPM', 'PIP', 'Claude Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-white/90 border border-indigo-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
