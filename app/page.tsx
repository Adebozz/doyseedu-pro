import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaBed,
  FaCheckCircle,
  FaEnvelope,
  FaGraduationCap,
  FaPassport,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { countries } from "@/lib/countries";
import { scholarships } from "@/lib/scholarships";
import { WHATSAPP_NUMBER, whatsappUrl } from "@/lib/site";

const WHATSAPP_URL = whatsappUrl("Hello, I would like to ask about studying abroad.");

const services = [
  {
    icon: <FaGraduationCap />,
    title: "School placement",
    text: "Find the right college or university and secure your admission, from certificates to doctorates.",
  },
  {
    icon: <FaPassport />,
    title: "Visa guidance",
    text: "Prepare a strong application that meets the requirements of the embassy or High Commission.",
  },
  {
    icon: <FaBed />,
    title: "Accommodation support",
    text: "We work with partner institutions to help you secure suitable accommodation.",
  },
];

const steps = [
  { title: "Tell us your plans", text: "Share your results, budget and where you would like to study." },
  { title: "Choose your course", text: "We advise you on suitable options, without bias." },
  { title: "Apply for admission", text: "We guide you through securing your place, step by step." },
  { title: "Prepare to travel", text: "Get help with your visa application and accommodation." },
];

const reasons = [
  "Expert advice given without bias",
  "Partner institutions from colleges to universities",
  "Programmes from certificates to doctorates",
  "Visa applications prepared to embassy requirements",
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* HOME / HERO */}
        <section id="home" className="relative isolate overflow-hidden bg-brand text-white">
          <Image src="/images/pic.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-linear-to-b md:bg-linear-to-r from-brand/90 via-brand/80 to-brand/70 md:to-brand/30" />
          <div className="wrap py-20 md:py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Study abroad from Nigeria</h1>
              <p className="mt-5 text-lg md:text-xl leading-relaxed text-white/90">
                Placement, visa guidance and accommodation support for the UK, Canada, Germany and more.
              </p>
              <p className="mt-3 italic text-white/90">“Quality education at your fingertips”</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <FaWhatsapp aria-hidden="true" className="text-xl" />
                  Chat with us on WhatsApp
                </a>
                <Link href="/eligibility-checker" className="btn btn-outline-light">
                  Check your eligibility
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <AnimatedSection id="services" className="section">
          <div className="wrap">
            <h2 className="section-title">How we can help</h2>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
              {services.map((service) => (
                <div key={service.title} className="card flex gap-4 p-5 md:block md:p-6">
                  <div aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-xl text-brand">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand md:mt-4">{service.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted md:mt-2">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* WHERE TO STUDY */}
        <AnimatedSection id="where" className="section bg-surface">
          <div className="wrap">
            <h2 className="section-title">Where you can study</h2>
            <p className="section-intro">
              Read what each country asks for, including costs, proof of funds and visa steps.
            </p>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/study-abroad/${country.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={country.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-bold text-brand">{country.name}</h3>
                    {country.notice && <p className="mt-1 text-sm text-amber-800">Visa restrictions apply</p>}
                    <span className="mt-auto flex items-center gap-2 pt-3 text-sm font-semibold text-brand">
                      Read the guide
                      <FaArrowRight aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FUNDING AND ELIGIBILITY */}
        <AnimatedSection id="start" className="section">
          <div className="wrap grid gap-6 md:grid-cols-2">
            <FeatureLink
              href="/scholarships"
              title="Looking for funding?"
              text={`See ${scholarships.length} scholarships and sponsorships open to Nigerian students, with requirements and official links.`}
              action="See scholarships"
              dark
            />
            <FeatureLink
              href="/eligibility-checker"
              title="Not sure if you qualify?"
              text="Answer seven quick questions about your results, budget and plans to see what to prepare."
              action="Check your eligibility"
            />
          </div>
        </AnimatedSection>

        {/* HOW IT WORKS */}
        <AnimatedSection id="how" className="section bg-surface">
          <div className="wrap">
            <h2 className="section-title">How it works</h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-10 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4 lg:block">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-brand lg:mt-4">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        {/* ABOUT */}
        <AnimatedSection id="about" className="section">
          <div className="wrap grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/pic2.jpg"
                alt="Students smiling together in a classroom"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="section-title">About Doyse</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Doyse Educational Consults is an educational consulting firm in Nigeria. We offer study abroad
                placement and guide students through admission and their visa application, step by step.
              </p>
              <ul className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <FaCheckCircle aria-hidden="true" className="mt-1 shrink-0 text-whatsapp" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection id="faq" className="section bg-surface">
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_2fr]">
            <h2 className="section-title">Frequently asked questions</h2>
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
          </div>
        </AnimatedSection>

        {/* CONTACT */}
        <AnimatedSection id="contact" className="section">
          <div className="wrap grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-title">Talk to us</h2>
              <p className="section-intro">Tell us what you would like to study and we will help you plan your next step.</p>
              <div className="mt-8 grid gap-4">
                <ContactRow icon={<FaWhatsapp />} title="WhatsApp" value="08033321603" href={WHATSAPP_URL} />
                <ContactRow icon={<FaPhone />} title="Phone" value="08033321603" href="tel:+2348033321603" />
                <ContactRow
                  icon={<FaEnvelope />}
                  title="Email"
                  value="dyseeducationconsults@gmail.com"
                  href="mailto:dyseeducationconsults@gmail.com"
                />
              </div>
            </div>

            <ContactForm whatsappNumber={WHATSAPP_NUMBER} />
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </>
  );
}

/* === Local helpers === */

function FeatureLink({
  href,
  title,
  text,
  action,
  dark = false,
}: {
  href: string;
  title: string;
  text: string;
  action: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl p-8 transition-shadow hover:shadow-lg ${
        dark ? "bg-brand text-white" : "border border-line bg-brand-soft text-brand"
      }`}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className={`mt-3 mb-6 leading-relaxed ${dark ? "text-white/90" : "text-muted"}`}>{text}</p>
      <span className="mt-auto flex items-center gap-2 font-semibold">
        {action}
        <FaArrowRight aria-hidden="true" className="text-sm transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function ContactRow({ icon, title, value, href }: { icon: ReactNode; title: string; value: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="card flex items-center gap-4 p-4 transition-shadow hover:shadow-md"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-lg text-brand">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-bold text-brand">{title}</span>
        <span className="block text-sm text-muted [overflow-wrap:anywhere]">{value}</span>
      </span>
    </a>
  );
}
