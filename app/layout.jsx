import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Suriyan Dev",
  description: "Suriyan's Developer Portfolio - Full Stack Developer specializing in AI & Scalable Applications",
  keywords: "Full Stack Developer, AI, React, Node.js, Next.js, Portfolio",
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
