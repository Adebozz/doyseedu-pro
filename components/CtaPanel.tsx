import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/site";

export default function CtaPanel({
  title,
  text,
  whatsappText,
}: {
  title: string;
  text: string;
  whatsappText: string;
}) {
  return (
    <section className="rounded-2xl bg-brand p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-6 text-white/90">{text}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <a href={whatsappUrl(whatsappText)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          <FaWhatsapp aria-hidden="true" className="text-xl" />
          Chat with us on WhatsApp
        </a>
        <Link href="/eligibility-checker" className="btn btn-outline-light">
          Check your eligibility
        </Link>
      </div>
    </section>
  );
}
