"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full sticky top-0 z-40 bg-[rgba(0,5,48,0.85)] text-white backdrop-blur border-b"
      style={{ height: "var(--header-h)" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 h-full flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/images/doyseedu.svg" alt="Logo" width={40} height={40} priority />
          <h4 className="font-semibold tracking-wide">DOYSE EDUCATIONAL CONSULTS</h4>
        </Link>

        <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
          <FaBars className="text-xl" />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li><Link className="hover:text-cyan-300" href="#home">HOME</Link></li>
            <li><Link className="hover:text-cyan-300" href="#about">ABOUT</Link></li>
            <li><Link className="hover:text-cyan-300" href="#why">WHY US ?</Link></li>
            <li><Link className="hover:text-cyan-300" href="#where">WHERE TO STUDY ?</Link></li>
            <li><Link className="hover:text-cyan-300" href="#contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[rgba(0,5,48,0.95)]">
          <ul className="mx-auto max-w-screen-xl px-4 flex flex-col py-3 gap-3 text-sm">
            <li><Link href="#home" onClick={() => setOpen(false)}>HOME</Link></li>
            <li><Link href="#about" onClick={() => setOpen(false)}>ABOUT</Link></li>
            <li><Link href="#why" onClick={() => setOpen(false)}>WHY US ?</Link></li>
            <li><Link href="#where" onClick={() => setOpen(false)}>WHERE TO STUDY ?</Link></li>
            <li><Link href="#contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
