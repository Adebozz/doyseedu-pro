"use client";

import { useState } from "react";
import { LEVELS, type Level, type Scholarship } from "@/lib/scholarships";

export default function ScholarshipList({ scholarships }: { scholarships: Scholarship[] }) {
  const [level, setLevel] = useState<Level | null>(null);
  const visible = level ? scholarships.filter((s) => s.levels.includes(level)) : scholarships;
  const filters: { label: string; value: Level | null }[] = [
    { label: "All levels", value: null },
    ...LEVELS.map((value) => ({ label: value, value })),
  ];

  return (
    <>
      <div role="group" aria-label="Filter by level of study" className="flex flex-wrap gap-3 mb-4">
        {filters.map((filter) => (
          <button
            key={filter.label}
            type="button"
            aria-pressed={level === filter.value}
            onClick={() => setLevel(filter.value)}
            className={`min-h-11 rounded border px-4 py-2 text-sm font-semibold ${
              level === filter.value ? "bg-[rgb(0,5,48)] text-white border-[rgb(0,5,48)]" : ""
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="text-sm text-gray-600 mb-6">
        Showing {visible.length} of {scholarships.length} scholarships
      </p>

      <ul className="grid gap-6 lg:grid-cols-2">
        {visible.map((s) => (
          <li key={s.name} className="flex flex-col rounded-xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {s.where} · {s.levels.join(", ")}
            </p>
            <p className="mt-3 leading-relaxed">{s.funding}</p>

            <p
              className={`mt-4 rounded border-l-4 px-3 py-2 text-sm text-gray-900 ${
                s.status.open ? "border-green-600 bg-green-50" : "border-amber-500 bg-amber-50"
              }`}
            >
              <strong>{s.status.open ? "Check deadlines: " : "Not open now: "}</strong>
              {s.status.text}
            </p>

            <h3 className="font-semibold mt-4 mb-2">Requirements</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {s.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-4 mb-1">How to apply</h3>
            <p className="text-sm leading-relaxed">{s.apply}</p>

            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Official website for ${s.name}`}
              className="mt-auto inline-block pt-4 pb-2 text-sm font-semibold underline"
            >
              Official website
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
