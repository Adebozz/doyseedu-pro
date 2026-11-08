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
        <section className="bg-[rgb(0,5,48)] text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-14">
            <h1 className="text-3xl md:text-5xl font-bold">Check your study abroad eligibility</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Answer seven quick questions to see what to prepare. Nothing is saved or sent unless you
              choose to share it with us.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-2xl px-4 py-12">
          <EligibilityChecker destinations={countries.map(({ name, slug }) => ({ name, slug }))} />
        </div>
      </main>

      <Footer />
    </>
  );
}
