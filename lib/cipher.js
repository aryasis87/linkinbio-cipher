/* c1ph3r — peneliti keamanan & pemain CTF (persona fiktif). Satu sumber isi
   untuk terminal tautan, writeup, dan talks. Kompetisi, acara, dan sidik jari
   kunci adalah contoh purwarupa desain; tidak ada alamat surel sungguhan. */

export const SITE = 'https://linkinbio-cipher.vercel.app';

export const PROFIL = {
  handle: 'c1ph3r',
  peran: 'security researcher · CTF player · bug hunter (etis, kok)',
  kunci: '7F3A 91C2 0B4D E58A 2C11  6E90 4A2F 33D8 B71C 509C (contoh)',
  akun: '@c1ph3r di GitHub & Mastodon (akun contoh)',
};

export const LINKS = [
  { perm: 'drwx', name: 'writeups/', desc: 'CTF & catatan teknik', href: '/writeups' },
  { perm: '-rw-', name: 'disclosure.txt', desc: 'kebijakan pengungkapan 90 hari', href: '/writeups#kebijakan' },
  { perm: '-rw-', name: 'talks.md', desc: 'seminar & workshop', href: '/talks' },
  { perm: '-r--', name: 'contact.gpg', desc: 'kirim pesan (formulir)', href: '/talks#kontak' },
];

export const WRITEUP = [
  { slug: 'kupon-tanpa-batas', judul: 'Kupon tanpa batas', kat: 'web', poin: 300, ajang: 'CTF Kampus Nusantara 2026 (fiktif)', ringkas: 'Endpoint penukaran kupon memeriksa kuota sebelum menulis transaksi. Dua puluh permintaan paralel menukar kupon yang sama sepuluh kali.', pelajaran: 'Periksa dan kurangi kuota dalam satu transaksi basis data, bukan dua langkah terpisah.' },
  { slug: 'xor-sepanjang-nama', judul: 'XOR sepanjang nama', kat: 'kripto', poin: 200, ajang: 'CTF Kampus Nusantara 2026 (fiktif)', ringkas: 'Pesan dienkripsi XOR dengan kunci berulang sepanjang nama tim. Panjang kunci ketahuan dari pola byte yang berulang tiap 7 karakter.', pelajaran: 'Kunci yang pendek dan berulang membuat XOR tidak lebih aman dari sandi Caesar.' },
  { slug: 'foto-yang-bicara', judul: 'Foto yang terlalu banyak bicara', kat: 'forensik', poin: 150, ajang: 'Latihan internal klub keamanan (fiktif)', ringkas: 'Flag tersimpan di metadata EXIF foto — lengkap dengan koordinat GPS tempat foto diambil.', pelajaran: 'Hapus metadata sebelum mengunggah foto; banyak aplikasi tidak melakukannya otomatis.' },
  { slug: 'token-tanpa-tanggal', judul: 'Token tanpa tanggal kedaluwarsa', kat: 'web', poin: 250, ajang: 'CTF Kampus Nusantara 2026 (fiktif)', ringkas: 'Token reset kata sandi tidak pernah kedaluwarsa dan bisa dipakai ulang. Token dari surel lama masih berlaku tiga bulan kemudian.', pelajaran: 'Token reset sekali pakai, umur pendek, dan batal saat kata sandi berganti.' },
];

export const KEBIJAKAN = [
  ['Hari 0', 'Laporan dikirim ke pemilik sistem lewat kanal resmi mereka.'],
  ['Hari 7', 'Bila belum ada balasan, saya kirim ulang ke kontak keamanan kedua.'],
  ['Hari 90', 'Ringkasan dipublikasikan tanpa detail eksploitasi, kecuali pemilik minta tambahan waktu yang wajar.'],
  ['Selalu', 'Tidak mengakses data pengguna lebih dari yang perlu untuk membuktikan masalah.'],
];

// 17 Okt, 7 Nov, 5 Des 2026 = Sabtu.
export const TALKS = [
  { tanggal: 'Sabtu, 17 Okt 2026', judul: 'Race condition untuk pemula', acara: 'Workshop klub keamanan kampus (fiktif), Bandung', durasi: '2 jam, praktik', ringkas: 'Membuat dan menambal bug kupon tanpa batas dari nol.' },
  { tanggal: 'Sabtu, 7 Nov 2026', judul: 'Metadata: jejak yang tidak terlihat', acara: 'Meetup komunitas jurnalis data (fiktif), daring', durasi: '45 menit', ringkas: 'Apa saja yang bocor dari foto dan dokumen kantor, dan cara membersihkannya.' },
  { tanggal: 'Sabtu, 5 Des 2026', judul: 'Menulis laporan bug yang dibaca', acara: 'Konferensi pengembang lokal (fiktif), Jakarta', durasi: '30 menit', ringkas: 'Struktur laporan yang membuat tim mau memperbaiki, bukan defensif.' },
];
