import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section
        className="relative h-[75vh] min-h-[480px] grid place-items-center bg-[url('/images/pic.jpg')] bg-cover bg-center"
        aria-label="Our Goal"
      >
        <div className="absolute inset-0 bg-[rgba(0,5,48,0.7)]" />
        <div className="relative container text-center text-white">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/60 bg-white/5 p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Goal</h1>
            <p className="italic text-lg md:text-xl">
              “Quality education at your fingertips”
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <h2 className="text-3xl md:text-4xl font-semibold pb-2 border-b-2 border-[rgba(0,5,48,0.7)]">
          About us
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/book.jpg"
              alt="Open book"
              fill
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
              Graduate Certificates, Graduate Diplomas, Masters (Coursework & Research), and Doctorates.
              We also assist with accommodation through our partner institutions.
            </p>
            <p>
              Students can rely on our expertise in counseling and packaging their visa applications.
              Without a valid study permit or visa, an international student may not enroll in a program.
              Therefore, it is crucial that applications are properly done to meet the requirements
              as stated by various embassies and High Commissions. Based on our experience, clients can
              expect excellent service from us.
            </p>
          </div>
        </div>
      </section>

      {/* Why pick us */}
      <section
        className="relative h-[260px] grid place-items-center bg-[url('/images/pic2.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-[rgba(2,2,44,0.55)]" />
        <div className="relative container text-center text-white">
          <h2 className="text-3xl font-semibold mb-3">Why Pick Us?</h2>
          <p className="text-lg">
            We offer global placement opportunities that make admission and visa processing an easy ride.
            We provide expert advice to all students without bias.
          </p>
        </div>
      </section>

      {/* Countries */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-semibold underline text-center mb-10">
          Countries we work with:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          <Image src="/images/uk.jpg" alt="United Kingdom" width={240} height={140} className="rounded object-cover w-full h-auto" />
          <Image src="/images/us.jpg" alt="United States"   width={240} height={140} className="rounded object-cover w-full h-auto" />
          <Image src="/images/germeny.jpg" alt="Germany"    width={240} height={140} className="rounded object-cover w-full h-auto" />
          <Image src="/images/canada.jpg" alt="Canada"      width={240} height={140} className="rounded object-cover w-full h-auto" />
        </div>
      </section>

      <Footer />
    </>
  );
}
