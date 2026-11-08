import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScholarshipList from "@/components/ScholarshipList";
import { SCHOLARSHIPS_CHECKED, scholarships } from "@/lib/scholarships";
import { whatsappUrl } from "@/lib/site";

const title = "Scholarships for Nigerian Students | Doyse Educational Consults";
const description =
  "Scholarships and sponsorships around the world that are open to Nigerian students, with requirements, application periods and official links.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/scholarships" },
  openGraph: {
    type: "website",
    url: "/scholarships",
    title,
    description,
    images: ["/images/pic.jpg"],
  },
};

export default function ScholarshipsPage() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="bg-[rgb(0,5,48)] text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-14">
            <h1 className="text-3xl md:text-5xl font-bold">Scholarships and sponsorships for Nigerian students</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Funding programmes around the world that accept applicants from Nigeria, with their main
              requirements and where to apply.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-screen-xl px-4 py-12 space-y-12">
          <section>
            <ScholarshipList scholarships={scholarships} />
          </section>

          <section role="note" className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6 text-gray-900">
            <h2 className="text-xl font-semibold mb-2">Protect yourself from scholarship scams</h2>
            <p className="leading-relaxed">
              Always apply through the official website, and never pay anyone who promises to guarantee you
              a scholarship. Each scholarship body makes its own decisions, and no consultant can guarantee
              an award.
            </p>
          </section>

          <section className="rounded-xl bg-[rgb(0,5,48)] p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-2">Want help choosing where to apply?</h2>
            <p className="mb-6 text-white/90">Scholarships open early and close quickly, so it pays to start now.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/eligibility-checker"
                className="rounded border border-white font-semibold px-6 py-3 hover:bg-white/10"
              >
                Check your eligibility
              </Link>
              <a
                href={whatsappUrl("Hello, I would like to ask about scholarships for studying abroad.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-[#25D366] text-black font-semibold px-6 py-3 hover:opacity-90"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </section>

          <p className="text-sm text-gray-600">
            Last checked {SCHOLARSHIPS_CHECKED}. This list is a summary and does not include every requirement.
            Dates and rules can change, so always confirm them on the official website before you apply.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
