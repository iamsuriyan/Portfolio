import './globals.css';

export const metadata = {
  title: 'Suriyan Dhanapal | Software Engineer',
  description:
    'Portfolio of Suriyan Dhanapal, Software Engineer focused on full-stack development, backend systems, and agent-driven automation.',
  keywords: 'Software Engineer, Full Stack Developer, Node.js, Next.js, React Native, AI Agents, Portfolio',
  author: 'Suriyan Dhanapal',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
