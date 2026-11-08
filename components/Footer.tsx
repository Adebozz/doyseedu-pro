import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[rgb(0,5,48)] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-10 grid gap-10 md:grid-cols-2">
        <div>
          <Link href="/" className="font-semibold block mb-3">
            DOYSE EDUCATIONAL CONSULTS
          </Link>
          <p className="text-sm text-white/80">
            Study abroad placement, visa guidance and accommodation support.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="text-sm">
            <li><a className="inline-block py-3" href="/#home">Home</a></li>
            <li><a className="inline-block py-3" href="/#about">About us</a></li>
            <li><a className="inline-block py-3" href="/#contact">Contact</a></li>
            <li><a className="inline-block py-3" href="/#where">Where to go</a></li>
            <li><a className="inline-block py-3" href="/#why">Why choose us</a></li>
            <li><Link className="inline-block py-3" href="/eligibility-checker">Check your eligibility</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-white/80 py-4 border-t border-white/10">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved. Developed by Adeboss
      </div>
    </footer>
  );
}
