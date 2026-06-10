import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Suriyan Dhanapal — Software Engineer | AI & Full-Stack";
const description =
  "Software Engineer building production AI products — Areev, Atmatic and Axtion at Mindgryd. Full-stack development, backend system design, OAuth identity, and agentic automation.";

export const metadata = {
  metadataBase: new URL("https://iamsuriyan.github.io/Portfolio/"),
  title,
  description,
  keywords: [
    "software engineer",
    "AI agents",
    "workflow automation",
    "full-stack development",
    "OAuth",
    "RAG",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Suriyan Dhanapal" }],
  creator: "Suriyan Dhanapal",
  openGraph: {
    title,
    description,
    url: "https://iamsuriyan.github.io/Portfolio/",
    siteName: "Suriyan Dhanapal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
