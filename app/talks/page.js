import { PROFIL, SITE, TALKS } from '@/lib/cipher';
import Terminal from '../components/Terminal';
import FormKontak from '../components/FormKontak';

export const metadata = {
  title: 'Talks & Kontak',
  description: 'Jadwal seminar dan workshop c1ph3r Oktober–Desember 2026 — race condition, metadata, menulis laporan bug — dan formulir kontak.',
  alternates: { canonical: `${SITE}/talks` },
};

export default function Talks() {
  return (
    <Terminal perintah="cat talks.md">
      <h1 className="mt-4 text-2xl font-bold text-fosfor"># talks.md</h1>
      <ol className="mt-6 space-y-5">
        {TALKS.map((t) => (
          <li key={t.judul} className="border-l-2 border-fosfor/30 pl-4">
            <p className="text-xs text-fosfor/75">{t.tanggal} · {t.durasi}</p>
            <h2 className="mt-1 text-lg font-bold text-fosfor">{t.judul}</h2>
            <p className="text-fosfor/80">{t.acara}</p>
            <p className="mt-1 text-fosfor/90">&gt; {t.ringkas}</p>
          </li>
        ))}
      </ol>

      <section id="kontak" aria-labelledby="kontak-h" className="mt-10 scroll-mt-6">
        <p><span className="text-dim">c1ph3r@links</span><span className="text-fosfor/70">:~$</span> ./contact --encrypt</p>
        <h2 id="kontak-h" className="mt-3 text-xl font-bold text-fosfor"># Kontak</h2>
        <p className="mt-1 text-fosfor/80">Untuk laporan kerentanan, undangan bicara, atau pertanyaan CTF. Sidik jari kunci: {PROFIL.kunci}</p>
        <FormKontak />
      </section>
      <p className="mt-8 text-[11px] text-fosfor/75"># acara di halaman ini fiktif — contoh purwarupa desain</p>
    </Terminal>
  );
}
