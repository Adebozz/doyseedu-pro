export const LEVELS = ["Undergraduate", "Master's", "PhD"] as const;
export type Level = (typeof LEVELS)[number];

export type Scholarship = {
  name: string;
  where: string;
  levels: Level[];
  funding: string;
  status: { open: boolean; text: string };
  requirements: string[];
  apply: string;
  url: string;
};

// Dates and eligibility change every year. Recheck each official site and
// update SCHOLARSHIPS_CHECKED whenever this content is reviewed.
export const SCHOLARSHIPS_CHECKED = "November 2026";

export const scholarships: Scholarship[] = [
  {
    name: "Erasmus Mundus Joint Masters",
    where: "Europe and partner countries",
    levels: ["Master's"],
    funding:
      "Full scholarships for the best-ranked students, covering participation costs and contributing to travel, visa and living costs.",
    status: {
      open: true,
      text: "Most programmes take applications between October and January. Check each programme's deadline.",
    },
    requirements: [
      "A bachelor's degree, or be in your final year and graduate before the master's starts.",
      "A recognised equivalent level of learning may also be accepted.",
      "Each master's sets its own entry requirements.",
    ],
    apply: "Apply directly to the programme you choose from the official course catalogue.",
    url: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters",
  },
  {
    name: "DAAD EPOS Development-Related Postgraduate Courses",
    where: "Germany",
    levels: ["Master's", "PhD"],
    funding:
      "Monthly payments of €992 for graduates or €1,400 for doctoral candidates, plus insurance and a travel allowance.",
    status: { open: true, text: "Deadlines for 2027/28 vary by course. Check your chosen course." },
    requirements: [
      "A bachelor's degree, usually of four years, with results in the upper third.",
      "Your degree should normally be no more than six years old.",
      "At least two years of professional experience after your bachelor's degree.",
      "A development-related motivation for your studies.",
      "English or German to the level of your course, normally at least IELTS band 6 for English.",
    ],
    apply: "Apply through the DAAD process for your chosen EPOS course.",
    url: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?detail=50076777",
  },
  {
    name: "Gates Cambridge Scholarship",
    where: "United Kingdom (University of Cambridge)",
    levels: ["Master's", "PhD"],
    funding: "A scholarship for outstanding postgraduate students at the University of Cambridge.",
    status: { open: true, text: "Deadlines depend on your Cambridge course. Check before you apply." },
    requirements: [
      "Be a citizen of any country outside the United Kingdom.",
      "Apply for a PhD, MLitt or eligible one-year postgraduate course at Cambridge.",
      "Show academic excellence and potential for social leadership.",
      "MBA, undergraduate and some professional courses are not eligible.",
    ],
    apply: "Complete the Gates Cambridge section of the funding form in Cambridge's Graduate Application Portal.",
    url: "https://www.gatescambridge.org/apply/eligibility/",
  },
  {
    name: "Mastercard Foundation Scholars Program",
    where: "Partner universities in Africa and worldwide",
    levels: ["Undergraduate", "Master's"],
    funding: "Support for academically strong students with financial need. Details vary by partner university.",
    status: { open: true, text: "Each partner university sets its own deadline." },
    requirements: [
      "Strong academic results and a commitment to making a difference for others.",
      "Leadership, financial need and an intention to give back to society.",
      "Eligible courses and any age limits vary by university.",
      "Partners in the United States are affected by current US visa restrictions for Nigerians.",
    ],
    apply: "There is no central application. Apply directly to a partner university.",
    url: "https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/where-to-apply/",
  },
  {
    name: "Türkiye Scholarships",
    where: "Türkiye",
    levels: ["Undergraduate", "Master's", "PhD"],
    funding:
      "Coverage varies by programme and commonly includes tuition, a monthly stipend, accommodation, health insurance and a Turkish language course.",
    status: { open: false, text: "Applications typically open in January and close in February." },
    requirements: [
      "Under 21 for undergraduate, under 30 for master's, and under 35 for PhD study.",
      "Minimum results of 70% for undergraduate and 75% for postgraduate applicants.",
      "Minimum results of 90% for medicine, dentistry and pharmacy.",
      "Published criteria can change, so confirm them when the new round opens.",
    ],
    apply: "Apply online through the official Türkiye Scholarships portal.",
    url: "https://www.turkiyeburslari.gov.tr/en",
  },
  {
    name: "Stipendium Hungaricum",
    where: "Hungary",
    levels: ["Undergraduate", "Master's", "PhD"],
    funding: "A Hungarian government scholarship for study at bachelor's, master's and doctoral level.",
    status: {
      open: false,
      text: "The 2026/27 round closed on 15 January 2026. Watch the official site for the next round.",
    },
    requirements: [
      "Nigeria is a listed sending partner, and you must be nominated by the Nigerian authorities.",
      "You can only apply for study fields covered by the Nigeria agreement.",
      "The nomination deadline in Nigeria can be earlier than the main deadline.",
    ],
    apply: "Apply on the official portal and complete the nomination process in Nigeria.",
    url: "https://stipendiumhungaricum.hu/",
  },
  {
    name: "Chevening Scholarships",
    where: "United Kingdom",
    levels: ["Master's"],
    funding: "Fully funded one-year master's study in the UK, from the UK government.",
    status: { open: false, text: "Applications for 2027/28 are closed. Watch the official site for the next round." },
    requirements: [
      "Be a citizen of Nigeria and return for at least two years after your scholarship.",
      "At least two years of work experience (2,800 hours) after your undergraduate degree.",
      "An undergraduate degree that qualifies you for a UK master's, finished at least two years before the deadline.",
      "Apply to three eligible UK courses and hold an unconditional offer for one by the deadline.",
    ],
    apply: "Apply online during the Chevening application window.",
    url: "https://www.chevening.org/scholarship/nigeria/",
  },
  {
    name: "Commonwealth Master's Scholarships",
    where: "United Kingdom",
    levels: ["Master's"],
    funding: "UK government funding for talented people who could not otherwise afford to study in the UK.",
    status: { open: false, text: "Applications for 2027/28 closed on 20 October 2026." },
    requirements: [
      "Be a citizen of Nigeria and permanently resident there.",
      "A first degree of at least Second Class Upper, under the most recent Nigerian notice.",
      "Admission to at least two UK universities, under the most recent Nigerian notice.",
      "Nomination by Nigeria's Federal Ministry of Education.",
    ],
    apply: "Apply through the Department of Scholarship Awards and on the CSC application system.",
    url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/",
  },
  {
    name: "Rhodes Scholarship for West Africa",
    where: "United Kingdom (University of Oxford)",
    levels: ["Master's", "PhD"],
    funding: "Three scholarships each year for West Africa, including Nigeria, for study at Oxford.",
    status: {
      open: false,
      text: "The last round closed on 27 August 2026. Applications reopen in 2027 for entry in 2028.",
    },
    requirements: [
      "Be from an eligible West African country, including Nigeria.",
      "Choose an Oxford course covered by the scholarship.",
      "Meet the requirements in the West Africa Information for Candidates, including referees.",
    ],
    apply: "Apply online during the West Africa application window.",
    url: "https://www.rhodeshouse.ox.ac.uk/scholarships/applications/west-africa/",
  },
  {
    name: "Japanese Government (MEXT) Scholarship",
    where: "Japan",
    levels: ["Undergraduate", "Master's", "PhD"],
    funding: "A Japanese government scholarship, available through recommendation by the Embassy of Japan in Nigeria.",
    status: { open: false, text: "The 2027 embassy round is closed. Watch the embassy's announcements." },
    requirements: [
      "In the 2027 round, research applicants had to be born on or after 2 April 1992.",
      "In the 2027 round, undergraduate applicants had to be born on or after 2 April 2002.",
      "Undergraduate applicants must complete secondary school and sit exams in Japanese, English, maths and science.",
      "Research applicants need a research plan that matches their chosen course.",
    ],
    apply: "Apply through the Embassy of Japan in Nigeria when the next round is announced.",
    url: "https://www.ng.emb-japan.go.jp/itpr_en/index.html",
  },
];
