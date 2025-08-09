function SkillItem({ name, icon }) {
  return (
    <div className="group flex flex-col items-center p-3 hover:scale-110 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
        <img 
          src={icon} 
          alt={name}
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-white/80 font-medium text-center text-xs group-hover:text-cyan-300 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const programmingSkills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', icon: 'https://img.icons8.com/color/48/react-native.png' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Google Cloud Platform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'AI Agent Integration', icon: 'https://img.icons8.com/color/48/artificial-intelligence.png' },
    { name: 'API Development', icon: 'https://img.icons8.com/color/48/api-settings.png' },
    { name: 'Prompt Engineering', icon: 'https://img.icons8.com/color/48/chatgpt.png' },
  ];

  const tools = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Cursor', icon: 'https://img.icons8.com/fluency/48/code.png' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'MongoDB Compass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'PIP', icon: 'https://img.icons8.com/color/48/python--v1.png' },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life and deliver exceptional digital experiences.
          </p>
        </div>

        {/* Programming Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Programming Technologies
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {programmingSkills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Development Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <SkillItem
                key={tool.name}
                name={tool.name}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
