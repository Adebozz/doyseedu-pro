import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EligibilityChecker from "@/components/EligibilityChecker";
import { countries } from "@/lib/countries";

const title = "Study Abroad Eligibility Checker | Doyse Educational Consults";
const description =
  "Answer a few quick questions about your qualifications, budget and plans to see what to prepare before studying abroad from Nigeria.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/eligibility-checker" },
  openGraph: {
    type: "website",
    url: "/eligibility-checker",
    title,
    description,
    images: ["/images/pic.jpg"],
  },
};

export default function EligibilityCheckerPage() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <h1 className="page-title">Check your study abroad eligibility</h1>
            <p className="page-intro">
              Answer seven quick questions to see what to prepare. Nothing is saved or sent unless you
              choose to share it with us.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
          <EligibilityChecker destinations={countries.map(({ name, slug }) => ({ name, slug }))} />
        </div>
      </main>

      <Footer />
    </>
  );
}
