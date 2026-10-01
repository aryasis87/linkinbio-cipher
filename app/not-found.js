import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="crt scanlines relative w-full max-w-lg rounded-xl border border-fosfor/25 bg-crt p-6 text-sm">
        <p><span className="text-dim">c1ph3r@links</span><span className="text-fosfor/70">:~$</span> cd halaman-ini</p>
        <h1 className="mt-1 text-base font-normal text-red-300">bash: cd: halaman-ini: Tidak ada berkas atau direktori seperti itu (404)</h1>
        <p className="mt-4"><span className="text-dim">c1ph3r@links</span><span className="text-fosfor/70">:~$</span> <Link href="/" className="font-bold underline underline-offset-4">cd ~</Link></p>
      </div>
    </main>
  );
}
