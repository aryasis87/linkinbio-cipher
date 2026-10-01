import { KEBIJAKAN, SITE, WRITEUP } from '@/lib/cipher';
import Terminal from '../components/Terminal';

export const metadata = {
  title: 'Writeups',
  description: 'Writeup CTF c1ph3r — race condition kupon, XOR berkunci pendek, metadata EXIF, token reset tanpa kedaluwarsa — beserta kebijakan pengungkapan 90 hari.',
  alternates: { canonical: `${SITE}/writeups` },
};

export default function Writeups() {
  return (
    <Terminal perintah="cat writeups/*.md | less">
      <h1 className="mt-4 text-2xl font-bold text-fosfor"># writeups/</h1>
      <p className="mt-1 text-fosfor/75">Empat soal, empat pelajaran. Semua dari kompetisi dan latihan — bukan sistem orang lain.</p>

      <ol className="mt-6 space-y-6">
        {WRITEUP.map((w, i) => (
          <li key={w.slug} id={w.slug} className="scroll-mt-6 rounded border border-fosfor/20 p-4">
            <p className="text-xs text-fosfor/75">[{String(i + 1).padStart(2, '0')}] kategori={w.kat} poin={w.poin} · {w.ajang}</p>
            <h2 className="mt-2 text-lg font-bold text-fosfor">## {w.judul}</h2>
            <p className="mt-2 text-fosfor/90">{w.ringkas}</p>
            <p className="mt-3 border-l-2 border-dim pl-3 text-fosfor/90"><span className="text-dim">pelajaran:</span> {w.pelajaran}</p>
          </li>
        ))}
      </ol>

      <section id="kebijakan" aria-labelledby="kebijakan-h" className="mt-10 scroll-mt-6">
        <p><span className="text-dim">c1ph3r@links</span><span className="text-fosfor/70">:~$</span> cat disclosure.txt</p>
        <h2 id="kebijakan-h" className="mt-3 text-xl font-bold text-fosfor"># Kebijakan pengungkapan</h2>
        <dl className="mt-3 space-y-2">
          {KEBIJAKAN.map(([h, d]) => (
            <div key={h} className="grid grid-cols-[5.5rem_1fr] gap-3">
              <dt className="text-dim">{h}</dt>
              <dd className="text-fosfor/90">{d}</dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="mt-8 text-[11px] text-fosfor/75"># kompetisi dan soal di halaman ini fiktif — contoh purwarupa desain</p>
    </Terminal>
  );
}
