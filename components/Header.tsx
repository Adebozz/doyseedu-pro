"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-[rgba(0,5,48,0.85)] text-white backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/doyseedu.svg" alt="Logo" width={48} height={48} priority />
          <h4 className="font-semibold tracking-wide">DOYSE EDUCATIONAL CONSULTS</h4>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen(v => !v)}
        >
          <FaBars className="text-xl" />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li><Link href="/" className="hover:text-cyan-300">HOME</Link></li>
            <li><Link href="/why" className="hover:text-cyan-300">WHY US ?</Link></li>
            <li><Link href="/where" className="hover:text-cyan-300">WHERE TO STUDY ?</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-300">CONTACT</Link></li>
          </ul>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <ul className="container flex flex-col py-3 gap-3 text-sm">
            <li><Link href="/" onClick={() => setOpen(false)}>HOME</Link></li>
            <li><Link href="/why" onClick={() => setOpen(false)}>WHY US ?</Link></li>
            <li><Link href="/where" onClick={() => setOpen(false)}>WHERE TO STUDY ?</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
