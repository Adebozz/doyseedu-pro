import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* HOME / HERO */}
      <AnimatedSection
        id="home"
        className="relative w-full h-[75vh] min-h-[480px] grid place-items-center bg-[url('/images/pic.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-[rgba(0,5,48,0.7)]" />
        <div className="relative mx-auto max-w-screen-xl px-4 text-center text-white">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/60 bg-white/5 p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Goal</h1>
            <p className="italic text-lg md:text-xl">
              “Quality education at your fingertips”
            </p>
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
              This makes securing admission and processing their visa application an easy ride.
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
            We offer global placement opportunities that make admission and visa processing an easy ride.
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
          <CountryCard src="/images/uk.jpg" alt="United Kingdom" label="United Kingdom" />
          <CountryCard src="/images/us.jpg" alt="United States" label="United States" />
          <CountryCard src="/images/germeny.jpg" alt="Germany" label="Germany" />
          <CountryCard src="/images/canada.jpg" alt="Canada" label="Canada" />
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
              <InfoCard title="Phone" value="08033321603" />
              <InfoCard title="Facebook" value="Doyse Education Consult Limited" />
              <InfoCard title="WhatsApp" value="08033321603" />
              <InfoCard title="Email" value="dyseeducationconsults@gmail.com" />
            </div>

            <ContactForm />
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

      <Footer />
    </>
  );
}

/* === Local helpers === */

function CountryCard({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow group transition-transform hover:-translate-y-0.5 hover:shadow">
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
        <span className="text-white font-semibold">{label}</span>
      </div>
    </div>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
}

function ContactForm() {
  async function action(formData: FormData) {
    "use server";
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  return (
    <form action={action} className="rounded-xl border p-6 shadow-sm grid gap-4">
      <h3 className="text-xl font-semibold">Send us a message</h3>
      <input
        name="name"
        placeholder="Your name"
        required
        className="border rounded px-3 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="border rounded px-3 py-2"
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        required
        className="border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="justify-self-start rounded bg-[rgb(0,5,48)] text-white px-4 py-2 hover:opacity-90"
      >
        Send
      </button>
      <p className="text-xs text-gray-500">We’ll get back to you shortly.</p>
    </form>
  );
}
