import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhone, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="relative h-40 md:h-56 bg-[url('/images/scoo.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[rgba(0,5,48,0.70)] grid place-items-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">Reach Us</h2>
        </div>
      </section>

      {/* Contacts */}
      <section className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={<FaPhone />} title="Phone" value="08033321603" />
          <ContactCard icon={<FaFacebook />} title="Facebook" value="Doyse Education Consult Limited" />
          <ContactCard icon={<FaWhatsapp />} title="WhatsApp" value="08033321603" />
          <ContactCard icon={<FaEnvelope />} title="Email" value="dyseeducationconsults@gmail.com" />
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-xl border p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-cyan-50 text-[rgb(0,5,48)] text-4xl">
        {icon}
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
}
