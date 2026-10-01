import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"cipher","jobTitle":"Security Researcher","url":"https://linkinbio-cipher.vercel.app","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-cipher.vercel.app"),
  title: { default: "c1ph3r — Security Researcher & Pemain CTF", template: "%s — c1ph3r" },
  description: "Tautan c1ph3r, peneliti keamanan dan pemain CTF: writeup soal CTF, kebijakan pengungkapan 90 hari, jadwal seminar dan workshop, serta formulir kontak — dalam satu terminal.",
  applicationName: "cipher",
  keywords: ["security researcher", "writeup ctf", "responsible disclosure", "workshop keamanan siber", "link in bio hacker"],
  authors: [{ name: "cipher" }],
  creator: "cipher",
  publisher: "cipher",
  alternates: { canonical: "https://linkinbio-cipher.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-cipher.vercel.app",
    siteName: "cipher",
    title: "c1ph3r — Security Researcher & Pemain CTF",
    description: "Tautan c1ph3r, peneliti keamanan dan pemain CTF: writeup soal CTF, kebijakan pengungkapan 90 hari, jadwal seminar dan workshop, serta formulir kontak — dalam satu terminal.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "c1ph3r — Security Researcher & Pemain CTF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "c1ph3r — Security Researcher & Pemain CTF",
    description: "Tautan c1ph3r, peneliti keamanan dan pemain CTF: writeup soal CTF, kebijakan pengungkapan 90 hari, jadwal seminar dan workshop, serta formulir kontak — dalam satu terminal.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jbmono.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
