'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LINKS, PROFIL } from '@/lib/cipher';

const BANNER = 'whoami';

/* Tautan selalu ada di HTML; hanya kemunculannya yang diatur waktu lewat CSS,
   jadi tetap terbaca tanpa JavaScript. Ketikan "whoami" murni hiasan. */
export default function Home() {
  const [typed, setTyped] = useState(BANNER);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let i = 0;
    setTyped('');
    const t = setInterval(() => {
      i += 1;
      setTyped(BANNER.slice(0, i));
      if (i >= BANNER.length) clearInterval(t);
    }, 110);
    return () => clearInterval(t);
  }, []);

  const prompt = (
    <>
      <span className="text-dim">{PROFIL.handle}@links</span><span className="text-fosfor/70">:~$</span>
    </>
  );

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="crt scanlines relative w-full max-w-2xl rounded-xl border border-fosfor/25 bg-crt">
        <div className="flex items-center gap-2 border-b border-fosfor/20 px-4 py-3" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-fosfor/70">{PROFIL.handle}@links: ~ — 80×24</span>
        </div>

        <div className="p-5 text-sm leading-relaxed md:p-7">
          <p className="text-fosfor/70"># Selamat datang. Semua tautan dapat dieksekusi.</p>
          <p className="mt-3">{prompt} <span aria-hidden="true">{typed}</span><span className="sr-only">whoami</span></p>
          <h1 className="rise mt-1 text-base font-normal text-fosfor" style={{ animationDelay: '0.8s' }}>{PROFIL.handle} — {PROFIL.peran}</h1>

          <p className="rise mt-4" style={{ animationDelay: '1s' }}>{prompt} ls -la ./links</p>
          <nav className="rise mt-2 space-y-0.5" style={{ animationDelay: '1.2s' }} aria-label="Tautan">
            <p className="text-fosfor/70">total {LINKS.length}</p>
            {LINKS.map((l) => (
              <Link key={l.name} href={l.href} className="group grid grid-cols-[3.2rem_1fr] items-baseline gap-3 rounded px-2 py-1.5 transition hover:bg-fosfor/10 sm:grid-cols-[3.2rem_11rem_1fr]">
                <span className="text-fosfor/70" aria-hidden="true">{l.perm}</span>
                <span className="font-bold text-fosfor underline-offset-4 group-hover:underline">{l.name}</span>
                <span className="col-start-2 text-fosfor/75 sm:col-start-auto"># {l.desc}</span>
              </Link>
            ))}
          </nav>

          <p className="rise mt-4" style={{ animationDelay: '1.5s' }}>{prompt} <span className="cursor" aria-hidden="true">▮</span></p>

          <div className="mt-6 space-y-1 border-t border-fosfor/15 pt-3 text-[11px] text-fosfor/75">
            <p>gpg: {PROFIL.kunci}</p>
            <p>{PROFIL.akun} · persona fiktif untuk purwarupa desain · jangan lupa 2FA</p>
          </div>
        </div>
      </div>
    </main>
  );
}
