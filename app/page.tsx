import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { countries } from "@/lib/countries";
import { WHATSAPP_NUMBER, whatsappUrl } from "@/lib/site";

const WHATSAPP_URL = whatsappUrl("Hello, I would like to ask about studying abroad.");

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* HOME / HERO */}
        <AnimatedSection
          id="home"
          className="relative w-full h-[75vh] min-h-[480px] grid place-items-center bg-[url('/images/pic.jpg')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-[rgba(0,5,48,0.7)]" />
          <div className="relative mx-auto max-w-screen-xl px-4 text-center text-white">
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/60 bg-white/5 p-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Study abroad from Nigeria
              </h1>
              <p className="text-lg md:text-xl mb-2">
                Placement, visa guidance and accommodation support for the UK, Canada, Germany and more.
              </p>
              <p className="italic">“Quality education at your fingertips”</p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-[#25D366] text-black font-semibold px-6 py-3 hover:opacity-90"
                >
                  Chat with us on WhatsApp
                </a>
                <Link
                  href="/eligibility-checker"
                  className="rounded border border-white font-semibold px-6 py-3 hover:bg-white/10"
                >
                  Check your eligibility
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ABOUT */}
        <AnimatedSection id="about" className="mx-auto max-w-screen-xl px-4 py-16" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold pb-2 border-b-2 border-[rgba(0,5,48,0.7)]">
            About us
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/book.jpg"
                alt="Open book"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded"
                priority
              />
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                DOYSE EDUCATIONAL CONSULTS is an educational consulting firm in Nigeria
                offering study abroad placement opportunities to prospective students.
                We have global placement opportunities that our students can benefit from.
                We guide them through securing admission and preparing their visa application, step by step.
                Students are able to count on our professionalism and expertise in this area.
              </p>
              <p>
                We render expert advice without bias. Our partner institutions range from Colleges
                to Universities, offering programs from Certificates, Diplomas, Associate Degrees,
                Graduate Certificates, Graduate Diplomas, Masters (Coursework &amp; Research), and Doctorates.
                We also assist with accommodation through our partner institutions.
              </p>
              <p>
                Students can rely on our expertise in counseling and packaging their visa applications.
                Proper applications are crucial to meet the requirements as stated by various embassies and
                High Commissions. Based on our experience, clients can expect excellent service from us.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* WHY US */}
        <AnimatedSection
          id="why"
          className="relative w-full h-[260px] grid place-items-center bg-[url('/images/pic2.jpg')] bg-cover bg-center"
          delay={0.15}
        >
          <div className="absolute inset-0 bg-[rgba(2,2,44,0.55)]" />
          <div className="relative mx-auto max-w-screen-xl px-4 text-center text-white">
            <h2 className="text-3xl font-semibold mb-3">Why Pick Us?</h2>
            <p className="text-lg">
              We offer global placement opportunities and guide you through admission and visa processing.
              We provide expert advice to all students without bias.
            </p>
          </div>
        </AnimatedSection>

        {/* WHERE TO STUDY */}
        <AnimatedSection id="where" className="mx-auto max-w-screen-xl px-4 py-14" delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-semibold underline text-center mb-10">
            Countries we work with:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {countries.map((country) => (
              <CountryCard
                key={country.slug}
                href={`/study-abroad/${country.slug}`}
                src={country.image}
                label={country.name}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* CONTACT */}
        <AnimatedSection id="contact" className="relative w-full" delay={0.25}>
          <div className="relative w-full h-40 md:h-56 bg-[url('/images/scoo.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-[rgba(0,5,48,0.70)] grid place-items-center">
              <h2 className="text-white text-3xl md:text-4xl font-semibold">Reach Us</h2>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl px-4 py-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="grid gap-6 sm:grid-cols-2">
                <InfoCard title="Phone" value="08033321603" href="tel:+2348033321603" />
                <InfoCard title="Facebook" value="Doyse Education Consult Limited" />
                <InfoCard title="WhatsApp" value="08033321603" href={WHATSAPP_URL} />
                <InfoCard
                  title="Email"
                  value="dyseeducationconsults@gmail.com"
                  href="mailto:dyseeducationconsults@gmail.com"
                />
              </div>

              <ContactForm whatsappNumber={WHATSAPP_NUMBER} />
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection className="mx-auto max-w-screen-xl px-4 py-16" delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <FAQ
            items={[
              {
                q: "Do you help with visa guidance?",
                a: "Yes. We advise on requirements and help you prepare a strong application aligned with embassy/High Commission guidelines.",
              },
              {
                q: "Which countries do you cover?",
                a: "UK, US, Canada, Germany and more through our partner institutions.",
              },
              {
                q: "Do you assist with accommodation?",
                a: "Yes. We coordinate with partner institutions to help you secure suitable accommodation.",
              },
            ]}
          />
        </AnimatedSection>
      </main>

      <Footer />
    </>
  );
}

/* === Local helpers === */

function CountryCard({ href, src, label }: { href: string; src: string; label: string }) {
  return (
    <Link
      href={href}
      className="block relative rounded-xl overflow-hidden shadow group transition-transform hover:-translate-y-0.5 hover:shadow"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-black/65 px-3 py-2 text-center">
        <span className="text-sm text-white font-semibold">{label}</span>
      </div>
    </Link>
  );
}

function InfoCard({ title, value, href }: { title: string; value: string; href?: string }) {
  const className =
    "block min-w-0 rounded-xl border p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow";
  const heading = <h3 className="font-semibold mb-1">{title}</h3>;

  if (!href) {
    return (
      <div className={className}>
        {heading}
        <p className="text-sm text-gray-600 [overflow-wrap:anywhere]">{value}</p>
      </div>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {heading}
      <p className="text-sm text-gray-600 underline [overflow-wrap:anywhere]">{value}</p>
    </a>
  );
}
