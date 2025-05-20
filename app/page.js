'use client';

import { Github, TerminalSquare, Mail, Command, Code2 } from 'lucide-react';

export default function Home() {
  const links = [
    { label: 'GitHub', icon: <Github size={18} />, url: '#' },
    { label: 'Terminal Logs', icon: <TerminalSquare size={18} />, url: '#' },
    { label: 'Email', icon: <Mail size={18} />, url: 'mailto:hack@darkweb.com' },
  ];

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center px-4">
      <div className="max-w-md w-full border border-green-600 p-6 rounded-lg shadow-md bg-[#0c0c0c] relative">
        <div className="absolute top-4 right-4 text-green-700 text-xs">LIVE</div>
        <div className="text-center mb-6">
          <Command size={42} className="mx-auto text-green-400" />
          <h1 className="text-2xl font-bold mt-2">root@namaAnda</h1>
          <p className="text-xs text-green-600">Fullstack dev • Ethical Hacker</p>
          <p className="mt-1 text-green-500 text-sm italic tracking-wide">
            {`"while(alive) { code(); }"`}
          </p>
        </div>
        <div className="space-y-3">
          {links.map(({ label, icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="block border border-green-600 bg-black px-4 py-2 rounded hover:bg-green-950 transition"
            >
              <div className="flex items-center gap-3 text-green-300">
                {icon} <span>{label}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5 gap-2 text-green-500 text-xs">
          <Code2 size={14} /> made with caffeine & shell
        </div>
      </div>
    </main>
  );
}
