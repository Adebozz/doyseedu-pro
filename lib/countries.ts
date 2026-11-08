export type Country = {
  slug: string;
  name: string;
  place: string;
  image: string;
  summary: string;
  visa: string;
  intakes: string;
  notice?: { title: string; body: string };
  requirements: string[];
  money: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
};

// Visa rules and amounts change often. Recheck the sources below and update
// RULES_CHECKED whenever this content is reviewed.
export const RULES_CHECKED = "November 2026";

export const countries: Country[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    place: "the United Kingdom",
    image: "/images/uk.jpg",
    summary:
      "Requirements, costs, intakes and Student visa steps for Nigerian students planning to study in the UK.",
    visa: "Student visa",
    intakes: "September is the main intake. Many universities also start courses in January, and some in May.",
    requirements: [
      "An offer from a licensed student sponsor, confirmed with a Confirmation of Acceptance for Studies (CAS).",
      "Proof of English, usually an approved English test or a degree taught in English that has been assessed by Ecctis.",
      "A tuberculosis (TB) test certificate from an approved clinic in Nigeria.",
      "Enough money for your course fees and living costs.",
    ],
    money: [
      "Course fees: one academic year (up to 9 months), as shown on your CAS.",
      "Living costs: £1,529 a month in London or £1,171 a month elsewhere, for up to 9 months.",
      "The money must be held for at least 28 days in a row, ending within 31 days of your application.",
      "Visa fee: £558 from outside the UK, plus the healthcare surcharge, which depends on how long your visa lasts.",
    ],
    steps: [
      "Choose a course and apply to universities that suit your qualifications and budget.",
      "Accept an offer, meet its conditions and receive your CAS.",
      "Complete your English test and TB test, and prepare your proof of funds.",
      "Apply online. The earliest you can apply is 6 months before your course starts.",
      "A decision usually takes about 3 weeks from outside the UK.",
    ],
    faqs: [
      {
        q: "Can I stay and work in the UK after graduating?",
        a: "You may be able to switch to a Graduate visa. It lasts 2 years if you apply on or before 31 December 2026, or 18 months if you apply on or after 1 January 2027. PhD graduates can stay for 3 years.",
      },
      {
        q: "Is WAEC English enough for the visa?",
        a: "The visa and the university can have different English rules. We can check what your chosen university and visa route will accept before you pay for a test.",
      },
    ],
    sources: [
      { label: "GOV.UK: Student visa", url: "https://www.gov.uk/student-visa" },
      { label: "GOV.UK: Money you need", url: "https://www.gov.uk/student-visa/money" },
      { label: "GOV.UK: Knowledge of English", url: "https://www.gov.uk/student-visa/knowledge-of-english" },
      { label: "GOV.UK: TB tests for visa applicants", url: "https://www.gov.uk/tb-test-visa" },
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    place: "the United States",
    image: "/images/us.jpg",
    summary:
      "Important information for Nigerian students about US student visa restrictions, and what the process normally involves.",
    visa: "F-1 student visa (M-1 and J-1 for some programmes)",
    intakes: "Most universities start in Fall (August or September) and Spring (January).",
    notice: {
      title: "US student visas are currently restricted for Nigerian nationals",
      body: "Presidential Proclamation 10998, in effect since 1 January 2026, suspends the entry of Nigerian nationals on F, M and J visas. You may still apply and attend an interview, but you may be found ineligible. Visas that were already valid on 1 January 2026 are not affected, and exceptions are decided case by case. Please confirm the current position with the US Mission before paying any fees, or talk to us about other destinations.",
    },
    requirements: [
      "If restrictions allow: acceptance by a school approved to host international students, and a Form I-20.",
      "Proof that you can pay for your tuition and living costs, as shown on your Form I-20.",
      "A valid passport, a completed DS-160 application and a visa interview.",
    ],
    money: [
      "Tuition and living costs vary by school and are set out on your Form I-20.",
      "Visa and SEVIS fees apply. Check the current amounts with the US Mission before you pay.",
    ],
    steps: [
      "Check the current restrictions and whether they apply to you.",
      "Speak to us before paying application, SEVIS or visa fees.",
      "If you can proceed, apply to approved schools and obtain your Form I-20.",
      "Pay the required fees, complete the DS-160 and attend your visa interview.",
    ],
    faqs: [
      {
        q: "I already have a valid F-1 visa. Am I affected?",
        a: "The US Mission in Nigeria has said that Nigerian students holding F-1 or J-1 visas that were valid when the proclamation took effect are not affected by it. You should still check the conditions of your own visa before you travel.",
      },
      {
        q: "What are the alternatives?",
        a: "Many students with US plans can consider the UK, Canada or Germany instead. We can compare options based on your course, budget and timeline.",
      },
    ],
    sources: [
      { label: "US Mission Nigeria: Visas", url: "https://ng.usembassy.gov/visas/" },
      {
        label: "US Department of State: Suspension of visa issuance",
        url: "https://travel.state.gov/content/travel/en/News/visas-news/suspension-of-visa-issuance-to-foreign-nationals-to-protect-the-security-of-the-united-states.html",
      },
      {
        label: "Federal Register: Proclamation text",
        url: "https://www.federalregister.gov/documents/2025/12/19/2025-23570/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    place: "Germany",
    image: "/images/germeny.jpg",
    summary:
      "Admission routes, blocked account funds, intakes and visa steps for Nigerian students planning to study in Germany.",
    visa: "National visa for study",
    intakes: "The winter semester starts around October and the summer semester around April.",
    requirements: [
      "Admission to a German university or a preparatory college (Studienkolleg).",
      "School and university certificates. Nigerian applicants should expect to provide WAEC results, and documents may need to be authenticated.",
      "Language proof for your course, in German or English depending on how it is taught.",
      "Proof that you can support yourself during your studies.",
    ],
    money: [
      "German missions have listed about €992 a month, or €11,904 for the first year. Confirm the current amount with the German mission in Nigeria before you transfer money.",
      "A blocked account is the usual way to show this. A formal sponsorship declaration or a scholarship may be accepted instead.",
      "Many public universities charge little or no tuition, but some states and programmes do charge fees, and semester contributions are common.",
      "If your university or Studienkolleg charges fees, you must show you can pay them too.",
    ],
    steps: [
      "Find courses that accept your qualifications and language level.",
      "Check whether you can enter directly or need a Studienkolleg first.",
      "Apply and receive your admission letter.",
      "Arrange your proof of funds and health insurance.",
      "Book and attend a visa appointment with the German Embassy in Abuja or the Consulate General in Lagos.",
    ],
    faqs: [
      {
        q: "Can I go straight to university with WAEC?",
        a: "It depends on your certificates and the university. Some school certificates only give access to a Studienkolleg first, so we check this before you apply.",
      },
      {
        q: "Do I need to speak German?",
        a: "Not for every course, as some are taught in English. German is still very useful for daily life and work, and German-taught courses require proof of German.",
      },
    ],
    sources: [
      { label: "German Missions in Nigeria", url: "https://nigeria.diplo.de/ng-en" },
      { label: "German Federal Foreign Office: Visa for study", url: "https://digital.diplo.de/studium/" },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    place: "Canada",
    image: "/images/canada.jpg",
    summary:
      "Study permit requirements, proof of funds, intakes and application steps for Nigerian students planning to study in Canada.",
    visa: "Study permit",
    intakes: "September is the main intake. Many institutions also start in January, and some in May.",
    requirements: [
      "A letter of acceptance from a designated learning institution (DLI).",
      "A provincial or territorial attestation letter (PAL/TAL), which is usually required.",
      "Proof that you can pay your tuition, living costs and transport, without working in Canada.",
      "A complete online application with your supporting documents.",
    ],
    money: [
      "Living costs: CA$23,448 for one person for the first year, for applications made on or after 1 September 2026, outside Quebec.",
      "This amount does not include tuition or transport, which you must also show you can pay.",
      "For programmes longer than a year, you must explain how you will pay for the full duration.",
      "Quebec has separate financial requirements and needs a Quebec Acceptance Certificate (CAQ).",
    ],
    steps: [
      "Choose a programme at a designated learning institution.",
      "Apply and receive your letter of acceptance.",
      "Get your PAL/TAL through the institution, if you need one.",
      "Prepare your proof of funds and supporting documents.",
      "Apply online for your study permit with as complete an application as possible.",
    ],
    faqs: [
      {
        q: "What is a PAL or TAL?",
        a: "It is a letter from the province or territory confirming there is space for you. Your institution provides it, and it is linked to that school, so changing schools can mean you need a new one.",
      },
      {
        q: "Does Canada look at where my money comes from?",
        a: "Yes. Canada assesses both the amount and its source, and whether the money will be available throughout your studies, so clear documents matter.",
      },
    ],
    sources: [
      {
        label: "Canada.ca: Proof of financial support",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
      },
      {
        label: "Canada.ca: Attestation letters",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html",
      },
      {
        label: "Canada.ca: How to apply",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html",
      },
    ],
  },
];
