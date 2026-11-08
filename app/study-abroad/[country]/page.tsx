import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CtaPanel from "@/components/CtaPanel";
import { RULES_CHECKED, countries } from "@/lib/countries";

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
        <section className="page-hero">
          <div className="wrap">
            <Link href="/#where" className="inline-block py-2 text-sm text-white/80 underline">
              All destinations
            </Link>
            <h1 className="page-title mt-2">Study in {country.place} from Nigeria</h1>
            <p className="page-intro">{country.summary}</p>
          </div>
        </section>

        <div className="wrap py-12 md:py-16 space-y-12">
          {country.notice && (
            <section role="note" className="notice">
              <h2 className="text-xl font-bold mb-2">{country.notice.title}</h2>
              <p className="leading-relaxed">{country.notice.body}</p>
            </section>
          )}

          <section className="grid gap-6 md:grid-cols-2">
            <Fact title="Visa" value={country.visa} />
            <Fact title="Intakes" value={country.intakes} />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <ListBlock title="What you will need" items={country.requirements} />
            <ListBlock title="Costs and proof of funds" items={country.money} />
          </section>

          <section>
            <h2 className="section-title mb-6">Steps to apply</h2>
            <ol className="grid gap-4 md:grid-cols-2">
              {country.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 leading-relaxed">
                  <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="section-title mb-6">Questions about {country.place}</h2>
            <FAQ items={country.faqs} />
          </section>

          <CtaPanel
            title="Not sure where to start?"
            text="Answer a few questions, or ask us directly on WhatsApp."
            whatsappText={`Hello, I would like to ask about studying in ${country.place}.`}
          />

          <section>
            <h2 className="text-lg font-bold text-brand mb-2">Official sources</h2>
            <p className="text-sm text-muted mb-3">
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
                    className="inline-block py-2 text-brand underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav aria-label="Other destinations">
            <h2 className="text-lg font-bold text-brand mb-2">Other destinations</h2>
            <ul className="flex flex-wrap gap-x-6 text-sm">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link href={`/study-abroad/${other.slug}`} className="inline-block py-2 text-brand underline">
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
    <div className="rounded-2xl bg-brand-soft p-6">
      <h2 className="font-bold text-brand mb-1">{title}</h2>
      <p className="leading-relaxed">{value}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-brand mb-4">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
