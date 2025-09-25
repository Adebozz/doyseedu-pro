import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DoyseConsults | Educational",
  description: "Quality education at your fingertips",
  icons: { icon: "/images/doyseedu.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full max-w-full overflow-x-hidden">
      <body className="min-h-screen w-full max-w-full overflow-x-hidden text-[var(--color-foreground)] bg-[var(--color-background)]">
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
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Doyse Educational Consults",
            "url": "https://your-domain.com",
            "logo": "https://your-domain.com/images/doyseedu.svg",
            "description": "Study abroad placements, visa guidance, and student support.",
            "sameAs": ["https://www.facebook.com/yourpage"],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+2348033321603",
              "contactType": "Customer Service",
              "areaServed": ["NG","GB","US","CA","DE"]
            }
          })}
        </Script>
      </body>
    </html>
  );
}
