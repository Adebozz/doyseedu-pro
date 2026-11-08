import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://www.doyseedu.com";
const siteName = "Doyse Educational Consults";
const siteTitle = `Study Abroad Consultants in Nigeria | ${siteName}`;
const siteDescription =
  "Study abroad placement, visa guidance and accommodation support for students in Nigeria. Study in the UK, US, Canada or Germany.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  icons: { icon: "/images/logo.png" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: ["/images/pic.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/pic.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full max-w-full overflow-x-hidden">
      <body className="min-h-screen w-full max-w-full overflow-x-hidden text-[var(--color-foreground)] bg-[var(--color-background)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        {children}

        {/* Tawk.to */}
        <Script id="tawk" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/62b162c97b967b1179959571/1g62ejosj';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": siteName,
              "url": siteUrl,
              "logo": `${siteUrl}/images/logo.png`,
              "description": "Study abroad placements, visa guidance, and student support.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+2348033321603",
                "contactType": "Customer Service",
                "areaServed": ["NG","GB","US","CA","DE"]
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
