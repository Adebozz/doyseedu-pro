import Link from "next/link";
import { countries } from "@/lib/countries";
import { WHATSAPP_NUMBER } from "@/lib/site";

const linkClass = "inline-block py-2 text-white/80 hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="wrap py-12 grid gap-10 grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="font-bold tracking-wide block mb-3">
            DOYSE EDUCATIONAL CONSULTS
          </Link>
          <p className="text-sm leading-relaxed text-white/80">
            Study abroad placement, visa guidance and accommodation support.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="text-sm">
            <li><a className={linkClass} href="/#about">About us</a></li>
            <li><Link className={linkClass} href="/scholarships">Scholarships</Link></li>
            <li><Link className={linkClass} href="/eligibility-checker">Eligibility checker</Link></li>
            <li><a className={linkClass} href="/#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Destinations</h3>
          <ul className="text-sm">
            {countries.map((country) => (
              <li key={country.slug}>
                <Link className={linkClass} href={`/study-abroad/${country.slug}`}>{country.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="text-sm">
            <li><a className={linkClass} href="tel:+2348033321603">Call 08033321603</a></li>
            <li>
              <a className={linkClass} href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
            <li>
              <a className={`${linkClass} [overflow-wrap:anywhere]`} href="mailto:dyseeducationconsults@gmail.com">
                dyseeducationconsults@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-white/80 py-4 px-4 border-t border-white/10">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved. Developed by Adeboss
      </div>
    </footer>
  );
}
