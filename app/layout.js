import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"cipher","jobTitle":"Security Researcher","url":"https://linkinbio-cipher.vercel.app","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-cipher.vercel.app"),
  title: "cipher — Security Researcher Links",
  description: "Link in bio bergaya terminal untuk security researcher & CTF player: writeups, tools, dan kontak.",
  applicationName: "cipher",
  keywords: ["link in bio", "security researcher", "CTF", "writeups", "hacker portfolio"],
  authors: [{ name: "cipher" }],
  creator: "cipher",
  publisher: "cipher",
  alternates: { canonical: "https://linkinbio-cipher.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-cipher.vercel.app",
    siteName: "cipher",
    title: "cipher — Security Researcher Links",
    description: "Link in bio bergaya terminal untuk security researcher & CTF player: writeups, tools, dan kontak.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "cipher — Security Researcher Links" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "cipher — Security Researcher Links",
    description: "Link in bio bergaya terminal untuk security researcher & CTF player: writeups, tools, dan kontak.",
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
    <html lang="id">
      <body className={`${jbmono.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
