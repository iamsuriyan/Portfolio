import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Suriyan Dhanapal — Software Engineer | AI & Full-Stack",
  description: "Software Engineer building production AI products — Areev, Atmatic and Axtion at Mindgryd. Full-stack development, backend system design, OAuth identity, and agentic automation.",
  keywords: "software engineer, AI agents, workflow automation, full-stack development, OAuth, RAG, Next.js, Node.js",
  author: "Suriyan Dhanapal",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
