"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/site";

type Destination = { name: string; slug: string };
type QuestionId = "country" | "level" | "qualification" | "grades" | "english" | "funding" | "timing";
type Answers = Partial<Record<QuestionId, string>>;
type Question = { id: QuestionId; label: string; summary: string; options: string[] };

const NOT_SURE_COUNTRY = "Not sure yet";

const SCHOOL = "WAEC, NECO or NABTEB";
const OND = "OND or NCE";
const HND = "HND";
const BACHELORS = "Bachelor's degree";
const MASTERS = "Master's degree";

const UNDERGRADUATE = "Undergraduate degree";
const POSTGRADUATE = "Master's";
const PHD = "PhD";

const LOW_GRADES = "Third Class, Pass, or fewer than 5 credits";
const NO_ENGLISH = "I have not taken one";
const PLANNED_ENGLISH = "I am planning to take one";
const PARTLY_FUNDED = "Partly, I would need a scholarship";
const NEEDS_SCHOLARSHIP = "I would need a full scholarship";
const FULLY_FUNDED = "Yes, by myself, family or a sponsor";
const SOON = "Within 6 months";

function buildQuestions(destinations: Destination[]): Question[] {
  return [
    {
      id: "country",
      label: "Where would you like to study?",
      summary: "Destination",
      options: [...destinations.map((d) => d.name), NOT_SURE_COUNTRY],
    },
    {
      id: "level",
      label: "What would you like to study?",
      summary: "Level",
      options: ["Foundation, certificate or diploma", UNDERGRADUATE, POSTGRADUATE, PHD],
    },
    {
      id: "qualification",
      label: "What is your highest qualification?",
      summary: "Highest qualification",
      options: [SCHOOL, OND, HND, BACHELORS, MASTERS],
    },
    {
      id: "grades",
      label: "How would you describe your results?",
      summary: "Results",
      options: [
        "First Class, Distinction, or mostly As",
        "Second Class Upper, Upper Credit, or mostly Bs",
        "Second Class Lower, Lower Credit, or mostly Cs",
        LOW_GRADES,
        "Awaiting results or not sure",
      ],
    },
    {
      id: "english",
      label: "Have you taken an English test such as IELTS?",
      summary: "English test",
      options: ["Yes, and it is still valid", PLANNED_ENGLISH, NO_ENGLISH],
    },
    {
      id: "funding",
      label: "Can you fund your studies and living costs?",
      summary: "Funding",
      options: [FULLY_FUNDED, PARTLY_FUNDED, NEEDS_SCHOLARSHIP, "Not sure yet"],
    },
    {
      id: "timing",
      label: "When would you like to start?",
      summary: "Start date",
      options: [SOON, "In 6 to 12 months", "In more than a year", "Not sure yet"],
    },
  ];
}

function getNotes(a: Answers): string[] {
  const notes: string[] = [];
  const underSchoolLevel = a.qualification === SCHOOL || a.qualification === OND;

  if (a.country === "United States") {
    notes.push(
      "US student visas are currently restricted for Nigerian nationals. Check the US page before paying any fees, and consider a second destination."
    );
  }
  if (a.level === POSTGRADUATE && underSchoolLevel) {
    notes.push("A master's usually requires a bachelor's degree or equivalent first. An undergraduate or pathway route may suit you better.");
  }
  if (a.level === POSTGRADUATE && a.qualification === HND) {
    notes.push("Some universities accept an HND for a master's, while others ask for a postgraduate diploma or extra study. We can check this for each course.");
  }
  if (a.level === PHD && a.qualification !== MASTERS) {
    notes.push("A PhD usually requires a master's degree, although some universities accept an outstanding bachelor's degree.");
  }
  if (a.level === UNDERGRADUATE && (a.qualification === BACHELORS || a.qualification === MASTERS)) {
    notes.push("You already hold a degree, so a postgraduate course may be a better next step than another undergraduate degree.");
  }
  if (a.country === "Germany" && a.qualification === SCHOOL) {
    notes.push("In Germany, school certificates may first lead to a preparatory college (Studienkolleg) before a degree.");
  }
  if (a.grades === LOW_GRADES) {
    notes.push("Your results may limit direct admission to some courses. Foundation, pathway or top-up routes could help.");
  }
  if (a.english === NO_ENGLISH || a.english === PLANNED_ENGLISH) {
    notes.push("Most universities ask for proof of English. Requirements differ, so confirm what your course and visa accept before booking a test.");
  }
  if (a.country === "Germany") {
    notes.push("German-taught courses require proof of German. Courses taught in English have their own language requirements.");
  }
  if (a.funding === FULLY_FUNDED) {
    notes.push("You will usually need documents showing the required funds. The destination pages explain the amounts.");
  }
  if (a.funding === PARTLY_FUNDED || a.funding === NEEDS_SCHOLARSHIP) {
    notes.push("Scholarships are competitive and often close early. You will still need to show how your studies are funded for the visa.");
  }
  if (a.timing === SOON) {
    notes.push("Six months can be tight for admission, funds and visa steps. It is best to start now and keep a later intake as a backup.");
  }

  return notes;
}

export default function EligibilityChecker({ destinations }: { destinations: Destination[] }) {
  const questions = buildQuestions(destinations);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const shouldFocus = useRef(false);

  useEffect(() => {
    if (shouldFocus.current) headingRef.current?.focus();
    shouldFocus.current = false;
  }, [step]);

  function goTo(next: number) {
    shouldFocus.current = true;
    setStep(next);
  }

  function restart() {
    setAnswers({});
    setName("");
    goTo(0);
  }

  if (step >= questions.length) {
    const notes = getNotes(answers);
    const destination = destinations.find((d) => d.name === answers.country);
    const message = [
      "Hello, I used the eligibility checker on your website.",
      ...(name.trim() ? [`Name: ${name.trim()}`] : []),
      ...questions.map((q) => `${q.summary}: ${answers[q.id]}`),
    ].join("\n");

    return (
      <div className="rounded-xl border p-6 shadow-sm">
        <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold mb-2 outline-none">
          Your pre-check summary
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          This is a quick guide, not an admission or visa decision. Requirements vary by course and
          institution.
        </p>

        <h3 className="font-semibold mb-2">{notes.length ? "Things to look at" : "Nothing stands out"}</h3>
        {notes.length ? (
          <ul className="list-disc space-y-2 pl-5 leading-relaxed mb-6">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : (
          <p className="leading-relaxed mb-6">
            Your answers don&apos;t raise any obvious issues. The next step is to match you with suitable
            courses.
          </p>
        )}

        {destination && (
          <p className="mb-6">
            <Link href={`/study-abroad/${destination.slug}`} className="inline-block py-2 underline">
              Read the {destination.name} guide
            </Link>
          </p>
        )}

        {(answers.funding === PARTLY_FUNDED || answers.funding === NEEDS_SCHOLARSHIP) && (
          <p className="mb-6">
            <Link href="/scholarships" className="inline-block py-2 underline">
              See scholarships open to Nigerian students
            </Link>
          </p>
        )}

        <label htmlFor="checker-name" className="block font-semibold mb-1">
          Your name (optional)
        </label>
        <input
          id="checker-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full border rounded px-3 py-2 mb-4"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#25D366] text-black text-center font-semibold px-6 py-3 hover:opacity-90"
          >
            Send my answers on WhatsApp
          </a>
          <button type="button" onClick={restart} className="min-h-11 rounded border px-6 py-3 font-semibold">
            Start again
          </button>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          This opens WhatsApp with your answers filled in. Press send there to reach us.
        </p>
      </div>
    );
  }

  const question = questions[step];
  const selected = answers[question.id];

  return (
    <form
      className="rounded-xl border p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        if (selected) goTo(step + 1);
      }}
    >
      <p className="text-sm text-gray-600 mb-2">
        Question {step + 1} of {questions.length}
      </p>
      <div className="h-2 rounded bg-gray-200 mb-6" aria-hidden="true">
        <div
          className="h-2 rounded bg-[rgb(0,5,48)]"
          style={{ width: `${((step + 1) / questions.length) * 100}%` }}
        />
      </div>

      <fieldset>
        <legend className="w-full mb-4">
          <h2 ref={headingRef} tabIndex={-1} className="text-xl font-semibold outline-none">
            {question.label}
          </h2>
        </legend>
        <div className="grid gap-3">
          {question.options.map((option) => (
            <label
              key={option}
              className={`flex min-h-11 cursor-pointer items-center gap-3 rounded border px-4 py-2 ${
                selected === option ? "border-[rgb(0,5,48)] bg-cyan-50 text-gray-900" : ""
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={selected === option}
                onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option }))}
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 flex justify-between gap-3">
        <button
          type="button"
          onClick={() => goTo(step - 1)}
          disabled={step === 0}
          className="min-h-11 rounded border px-6 py-2 font-semibold disabled:invisible"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!selected}
          className="min-h-11 rounded bg-[rgb(0,5,48)] text-white px-6 py-2 font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {step === questions.length - 1 ? "See my summary" : "Next"}
        </button>
      </div>
    </form>
  );
}
