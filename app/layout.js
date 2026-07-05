import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400", "700"] });

export const metadata = {
  title: "c1ph3r@links:~",
  description: "Security researcher & CTF player. Writeups, tools, dan kontak — akses via terminal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${jbmono.variable} antialiased`}>{children}</body>
    </html>
  );
}
