'use client';

import { useState } from 'react';

export default function FormKontak() {
  const [log, setLog] = useState(null);
  const input = 'w-full border-b border-fosfor/40 bg-transparent py-1.5 text-fosfor placeholder:text-fosfor/50 focus:border-fosfor focus:outline-none';

  if (log) {
    return (
      <div role="status" className="mt-4 space-y-1">
        {log.map((l) => <p key={l} className="text-fosfor/90">{l}</p>)}
        <button type="button" onClick={() => setLog(null)} className="mt-3 rounded border border-fosfor/40 px-3 py-1.5 text-xs hover:bg-fosfor/10">./contact --ulang</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const jenis = new FormData(e.currentTarget).get('jenis');
        setLog([`> mengenkripsi pesan (${jenis})… ok`, '> mengirim… dilewati', '> catatan: ini purwarupa desain — tidak ada pesan yang benar-benar dikirim.']);
      }}
      className="mt-4 grid gap-5 sm:grid-cols-2"
    >
      <div>
        <label htmlFor="k-nama" className="text-xs text-dim">--nama</label>
        <input id="k-nama" required autoComplete="nickname" className={input} />
      </div>
      <div>
        <label htmlFor="k-surel" className="text-xs text-dim">--balas-ke</label>
        <input id="k-surel" type="email" required autoComplete="email" className={input} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="k-jenis" className="text-xs text-dim">--jenis</label>
        <select id="k-jenis" name="jenis" className={`${input} bg-crt`}>
          <option>laporan kerentanan</option>
          <option>undangan bicara</option>
          <option>pertanyaan CTF</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="k-pesan" className="text-xs text-dim">--pesan</label>
        <textarea id="k-pesan" required rows={4} className={input} />
      </div>
      <button type="submit" className="rounded border border-fosfor bg-fosfor/10 py-2.5 font-bold hover:bg-fosfor hover:text-crt sm:col-span-2">$ kirim</button>
    </form>
  );
}
