import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { href: 'https://github.com/iamsuriyan', label: 'GitHub', Icon: FiGithub },
  { href: 'https://www.linkedin.com/in/suriyan-d-74514223a/', label: 'LinkedIn', Icon: FiLinkedin },
  { href: 'mailto:suriyandhanapal@gmail.com', label: 'Email', Icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-6 sm:text-left">
          <span className="label">&copy; {new Date().getFullYear()} Suriyan Dhanapal</span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
          <span className="label">Full-Stack Engineer · AI &amp; LLM Integration</span>
        </div>

        <ul className="flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                className="block rounded-full p-2.5 text-fg-faint transition-colors duration-300 hover:text-fg"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
