import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Suriyan — AI & Full-Stack Development",
  description: "I build AI-powered applications, multi-agent orchestration systems, workflow automation, and full-stack solutions for businesses.",
  keywords: "AI development, AI agents, workflow automation, full-stack development, multi-agent orchestration",
  author: "Suriyan",
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
