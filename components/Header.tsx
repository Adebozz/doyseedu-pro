"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#where", label: "Destinations" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/eligibility-checker", label: "Eligibility checker" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-brand text-white" style={{ height: "var(--header-h)" }}>
      <div className="wrap h-full flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="" width={40} height={40} priority />
          <span className="leading-tight">
            <span className="block font-bold tracking-wide">DOYSE</span>
            <span className="block text-xs text-white/80">Educational Consults</span>
          </span>
        </Link>

        <button aria-label="Toggle menu" aria-expanded={open} className="lg:hidden p-3" onClick={() => setOpen(v => !v)}>
          {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 whitespace-nowrap text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}><Link className="hover:text-cyan-300" href={link.href}>{link.label}</Link></li>
            ))}
            <li>
              <Link className="inline-block rounded-lg bg-white px-4 py-2 font-semibold text-brand hover:bg-brand-soft" href="/#contact">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-brand">
          <ul className="wrap flex flex-col py-2 font-medium">
            {[...links, { href: "/#contact", label: "Contact us" }].map((link) => (
              <li key={link.href}>
                <Link className="block py-3" href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
