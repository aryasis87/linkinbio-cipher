import Link from 'next/link';
import { PROFIL } from '@/lib/cipher';

// Bingkai terminal untuk halaman dalam, dengan perintah "cd" sebagai judul.
export default function Terminal({ perintah, children }) {
  return (
    <main className="flex min-h-screen justify-center px-4 py-10">
      <div className="crt scanlines relative w-full max-w-3xl rounded-xl border border-fosfor/25 bg-crt">
        <div className="flex items-center gap-2 border-b border-fosfor/20 px-4 py-3">
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-red-500/70" />
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-green-500/70" />
          <Link href="/" className="ml-3 text-xs text-fosfor/75 hover:text-fosfor hover:underline">← cd ~ ({PROFIL.handle}@links)</Link>
        </div>
        <div className="p-5 text-sm leading-relaxed md:p-7">
          <p><span className="text-dim">{PROFIL.handle}@links</span><span className="text-fosfor/70">:~$</span> {perintah}</p>
          {children}
        </div>
      </div>
    </main>
  );
}
