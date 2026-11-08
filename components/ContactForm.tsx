"use client";

import type { FormEvent } from "react";

export default function ContactForm({ whatsappNumber }: { whatsappNumber: string }) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const text = [`Name: ${name}`, ...(email ? [`Email: ${email}`] : []), "", message].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border p-6 shadow-sm grid gap-4">
      <h3 className="text-xl font-semibold">Send us a message</h3>
      <label htmlFor="contact-name" className="sr-only">Your name</label>
      <input
        id="contact-name"
        name="name"
        placeholder="Your name"
        required
        className="border rounded px-3 py-2"
      />
      <label htmlFor="contact-email" className="sr-only">Your email (optional)</label>
      <input
        id="contact-email"
        type="email"
        name="email"
        placeholder="Your email (optional)"
        className="border rounded px-3 py-2"
      />
      <label htmlFor="contact-message" className="sr-only">Your message</label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Your message"
        rows={5}
        required
        className="border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="justify-self-start min-h-11 rounded bg-[rgb(0,5,48)] text-white px-4 py-2 hover:opacity-90"
      >
        Continue on WhatsApp
      </button>
      <p className="text-xs text-gray-500">
        This opens WhatsApp with your message filled in. Press send there to reach us.
      </p>
    </form>
  );
}
