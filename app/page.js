'use client';
import { useEffect, useState } from 'react';

const LINKS = [
  { perm: '-rwx', name: 'writeups/', desc: 'CTF & analisis kerentanan', url: '#' },
  { perm: '-rwx', name: 'tools.sh', desc: 'skrip open-source di GitHub', url: 'https://github.com' },
  { perm: '-rw-', name: 'blog.md', desc: 'catatan keamanan (ID/EN)', url: '#' },
  { perm: '-rw-', name: 'talks.pdf', desc: 'slide seminar & workshop', url: '#' },
  { perm: '-r--', name: 'contact.gpg', desc: 'c1ph3r@proton.me — PGP tersedia', url: 'mailto:c1ph3r@proton.me' },
];

const BANNER = 'whoami';
const OUT = 'c1ph3r — security researcher · CTF player · bug hunter (etis, kok)';

export default function Home() {
  const [typed, setTyped] = useState('');
  const [showOut, setShowOut] = useState(false);
  const [showLs, setShowLs] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(BANNER.slice(0, i));
      if (i >= BANNER.length) {
        clearInterval(t);
        setTimeout(() => setShowOut(true), 250);
        setTimeout(() => setShowLs(true), 700);
      }
    }, 110);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="crt scanlines relative w-full max-w-2xl rounded-xl border border-fosfor/25 bg-crt">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-fosfor/20 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-fosfor/50">c1ph3r@links: ~ — 80×24</span>
        </div>

        <div className="p-5 text-sm leading-relaxed md:p-7">
          <p className="text-fosfor/50"># Selamat datang. Semua tautan dapat dieksekusi.</p>

          <p className="mt-3"><span className="text-dim">c1ph3r@links</span><span className="text-fosfor/50">:~$</span> {typed}{!showOut && <span className="cursor">▮</span>}</p>
          {showOut && <p className="rise mt-1 text-fosfor/80">{OUT}</p>}

          {showOut && (
            <p className="rise mt-4"><span className="text-dim">c1ph3r@links</span><span className="text-fosfor/50">:~$</span> ls -la ./links</p>
          )}

          {showLs && (
            <div className="rise mt-2 space-y-0.5">
              <p className="text-fosfor/40">total {LINKS.length}</p>
              {LINKS.map((l, i) => (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[3.2rem_1fr] items-baseline gap-3 rounded px-2 py-1.5 transition hover:bg-fosfor/10 sm:grid-cols-[3.2rem_11rem_1fr]"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="text-fosfor/45">{l.perm}</span>
                  <span className="font-bold text-fosfor underline-offset-4 group-hover:underline">{l.name}</span>
                  <span className="hidden text-fosfor/55 sm:block"># {l.desc}</span>
                </a>
              ))}
            </div>
          )}

          {showLs && (
            <p className="rise mt-4" style={{ animationDelay: '0.5s' }}>
              <span className="text-dim">c1ph3r@links</span><span className="text-fosfor/50">:~$</span> <span className="cursor">▮</span>
            </p>
          )}

          <p className="mt-6 border-t border-fosfor/15 pt-3 text-[11px] text-fosfor/35">
            uptime {new Date().getFullYear() - 2019}y · GPG 0x4A2F...9C · jangan lupa 2FA 🛡
          </p>
        </div>
      </div>
    </main>
  );
}
