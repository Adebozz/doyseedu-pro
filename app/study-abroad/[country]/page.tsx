import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { RULES_CHECKED, countries } from "@/lib/countries";
import { whatsappUrl } from "@/lib/site";

export const dynamicParams = false;

type Props = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return countries.map(({ slug }) => ({ country: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};

  const title = `Study in ${country.place} from Nigeria | Doyse Educational Consults`;
  const url = `/study-abroad/${country.slug}`;
  return {
    title,
    description: country.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: country.summary,
      images: ["/images/pic.jpg"],
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country: slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  const others = countries.filter((c) => c.slug !== country.slug);

  return (
    <>
      <Header />

      <main id="main">
        <section className="bg-[rgb(0,5,48)] text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-14">
            <Link href="/#where" className="inline-block py-2 text-sm text-white/80 underline">
              All destinations
            </Link>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold">Study in {country.place} from Nigeria</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">{country.summary}</p>
          </div>
        </section>

        <div className="mx-auto max-w-screen-xl px-4 py-12 space-y-12">
          {country.notice && (
            <section role="note" className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6 text-gray-900">
              <h2 className="text-xl font-semibold mb-2">{country.notice.title}</h2>
              <p className="leading-relaxed">{country.notice.body}</p>
            </section>
          )}

          <section className="grid gap-6 md:grid-cols-2">
            <Fact title="Visa" value={country.visa} />
            <Fact title="Intakes" value={country.intakes} />
          </section>

          <section className="grid gap-10 md:grid-cols-2">
            <ListBlock title="What you will need" items={country.requirements} />
            <ListBlock title="Costs and proof of funds" items={country.money} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Steps to apply</h2>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              {country.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Questions about {country.place}</h2>
            <FAQ items={country.faqs} />
          </section>

          <section className="rounded-xl bg-[rgb(0,5,48)] p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-2">Not sure where to start?</h2>
            <p className="mb-6 text-white/90">Answer a few questions, or ask us directly on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/eligibility-checker"
                className="rounded border border-white font-semibold px-6 py-3 hover:bg-white/10"
              >
                Check your eligibility
              </Link>
              <a
                href={whatsappUrl(`Hello, I would like to ask about studying in ${country.place}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-[#25D366] text-black font-semibold px-6 py-3 hover:opacity-90"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Official sources</h2>
            <p className="text-sm text-gray-600 mb-3">
              Last checked {RULES_CHECKED}. Rules and amounts can change, so always confirm them with the
              official source before you pay or apply. A visa decision is made by the relevant government
              and cannot be guaranteed.
            </p>
            <ul className="text-sm">
              {country.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav aria-label="Other destinations">
            <h2 className="text-lg font-semibold mb-2">Other destinations</h2>
            <ul className="flex flex-wrap gap-x-6 text-sm">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link href={`/study-abroad/${other.slug}`} className="inline-block py-2 underline">
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* === Local helpers === */

function Fact({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border p-6 shadow-sm">
      <h2 className="font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{value}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
