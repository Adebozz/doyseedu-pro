"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaBars } from "react-icons/fa";

const SECTIONS = ["home", "about", "why", "where", "contact"] as const;
type SectionId = typeof SECTIONS[number];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = visible[0].target.id as SectionId;
          if (SECTIONS.includes(id)) setActive(id);
        }
      },
      {
        root: null,
        rootMargin: `-${64}px 0px 0px 0px`, // match --header-h
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = useMemo(
    () =>
      (id: SectionId) =>
        `transition-colors ${active === id ? "text-cyan-300" : "text-white/90 hover:text-cyan-300"}`,
    [active]
  );

  // Close the mobile sheet when clicking a link
  const handleClick = () => setOpen(false);

  return (
    <header
      className="sticky top-0 z-40 bg-[rgba(0,5,48,0.85)] text-white backdrop-blur border-b"
      style={{ height: "var(--header-h)" }}
    >
      <div className="container h-full flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/images/doyseedu.svg" alt="Logo" width={40} height={40} priority />
          <h4 className="font-semibold tracking-wide">DOYSE EDUCATIONAL CONSULTS</h4>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <FaBars className="text-xl" />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li><Link className={linkClass("home")} href="#home">HOME</Link></li>
            <li><Link className={linkClass("about")} href="#about">ABOUT</Link></li>
            <li><Link className={linkClass("why")} href="#why">WHY US ?</Link></li>
            <li><Link className={linkClass("where")} href="#where">WHERE TO STUDY ?</Link></li>
            <li><Link className={linkClass("contact")} href="#contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[rgba(0,5,48,0.95)]">
          <ul className="container flex flex-col py-3 gap-3 text-sm">
            <li><Link href="#home" onClick={handleClick}>HOME</Link></li>
            <li><Link href="#about" onClick={handleClick}>ABOUT</Link></li>
            <li><Link href="#why" onClick={handleClick}>WHY US ?</Link></li>
            <li><Link href="#where" onClick={handleClick}>WHERE TO STUDY ?</Link></li>
            <li><Link href="#contact" onClick={handleClick}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
