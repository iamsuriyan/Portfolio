import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono-jb",
});

const SITE_URL = "https://iamsuriyan.github.io/Portfolio/";

const title = "Suriyan Dhanapal — Generative AI & Product Engineer | Backend Systems";
const description =
  "Generative AI product engineer with 2+ years shipping production LLM systems end to end. Built Indian customs compliance platforms with hybrid retrieval, multi-tenant RAG on pgvector and Weaviate, and a unified connector layer for 25+ LLM and speech providers.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s · Suriyan Dhanapal",
  },
  description,
  applicationName: "Suriyan Dhanapal — Portfolio",
  keywords: [
    "Generative AI",
    "product engineer",
    "software engineer",
    "AI engineer",
    "LLM integration",
    "hybrid retrieval",
    "RAG",
    "pgvector",
    "Weaviate",
    "voice AI",
    "FastAPI",
    "Python",
    "React",
    "Next.js",
    "Coimbatore",
  ],
  authors: [{ name: "Suriyan Dhanapal", url: SITE_URL }],
  creator: "Suriyan Dhanapal",
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Suriyan Dhanapal",
    locale: "en_US",
    type: "profile",
    firstName: "Suriyan",
    lastName: "Dhanapal",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

// Structured data so recruiters' tooling and search engines resolve the
// profile correctly rather than guessing from headings.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suriyan Dhanapal",
  jobTitle: "Generative AI Product Engineer",
  description,
  url: SITE_URL,
  email: "mailto:suriyandhanapal@gmail.com",
  telephone: "+91-81100-44608",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Dr. N.G.P. Institute of Technology",
  },
  knowsAbout: [
    "Generative AI",
    "AI Agents",
    "LangGraph",
    "Hybrid Retrieval",
    "RAG",
    "pgvector",
    "Weaviate",
    "Real-time voice AI",
    "OAuth 2.0",
    "FastAPI",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ],
  sameAs: [
    "https://github.com/iamsuriyan",
    "https://www.linkedin.com/in/suriyan-d-74514223a/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
        {/* Scroll reveals are JS-driven, so the prerendered HTML ships with
            the elements at opacity 0. If scripts never run, show everything
            rather than serving a blank page. */}
        <noscript>
          <style>{`
            [data-reveal] {
              opacity: 1 !important;
              filter: none !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
