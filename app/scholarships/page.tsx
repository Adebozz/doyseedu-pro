import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaPanel from "@/components/CtaPanel";
import ScholarshipList from "@/components/ScholarshipList";
import { SCHOLARSHIPS_CHECKED, scholarships } from "@/lib/scholarships";

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
        <section className="page-hero">
          <div className="wrap">
            <h1 className="page-title">Scholarships and sponsorships for Nigerian students</h1>
            <p className="page-intro">
              Funding programmes around the world that accept applicants from Nigeria, with their main
              requirements and where to apply.
            </p>
          </div>
        </section>

        <div className="wrap py-12 md:py-16 space-y-12">
          <section>
            <ScholarshipList scholarships={scholarships} />
          </section>

          <section role="note" className="notice">
            <h2 className="text-xl font-bold mb-2">Protect yourself from scholarship scams</h2>
            <p className="leading-relaxed">
              Always apply through the official website, and never pay anyone who promises to guarantee you
              a scholarship. Each scholarship body makes its own decisions, and no consultant can guarantee
              an award.
            </p>
          </section>

          <CtaPanel
            title="Want help choosing where to apply?"
            text="Scholarships open early and close quickly, so it pays to start now."
            whatsappText="Hello, I would like to ask about scholarships for studying abroad."
          />

          <p className="text-sm text-muted">
            Last checked {SCHOLARSHIPS_CHECKED}. This list is a summary and does not include every requirement.
            Dates and rules can change, so always confirm them on the official website before you apply.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
