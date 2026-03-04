export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Hifresh Agro Private Limited',
      duration: 'October 2024 — June 2025',
      points: [
        'Designed and developed an internal delivery management mobile app from scratch using Expo (React Native).',
        'Owned frontend architecture and UI implementation while extending backend services with Node.js and Express.',
        'Built APIs for delivery management, billing, and invoice generation with Zoho Books integration.',
        'Integrated ESC/POS thermal printer support for instant bill printing from the app.',
        'Implemented caching, stale response handling, and structured logging to improve reliability and response times.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Mindgryd Software Private Limited',
      duration: 'June 2025 — Present',
      note: 'Shifted to Mindgryd under the same founder while HiFresh continues to operate; responsibilities unchanged.',
      points: [
        'Co-developing an agent-driven automation platform similar to Lindy / n8n for configurable workflows and integrations.',
        'Designed backend services in Node.js with scalable APIs, modular boundaries, and strong validation layers.',
        'Built a Next.js frontend for configuration-heavy workflow experiences.',
        'Architected a microservices setup with secure proxy routing between services and frontend.',
        'Delivered AI-powered agents and end-to-end social posting/scheduling pipelines across major platforms.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.duration}`} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                  <p className="text-blue-300 font-semibold">{exp.company}</p>
                </div>
                <p className="text-white/70 font-medium">{exp.duration}</p>
              </div>

              {exp.note && <p className="text-sm text-indigo-300 mb-4">{exp.note}</p>}

              <ul className="list-disc pl-5 space-y-2 text-white/90 leading-relaxed">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
