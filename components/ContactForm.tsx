"use client";

import type { FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
    <form onSubmit={handleSubmit} className="card grid gap-4">
      <h3 className="text-xl font-bold text-brand">Send us a message</h3>
      <div>
        <label htmlFor="contact-name" className="field-label">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" required className="field" />
      </div>
      <div>
        <label htmlFor="contact-email" className="field-label">Your email (optional)</label>
        <input id="contact-email" type="email" name="email" autoComplete="email" className="field" />
      </div>
      <div>
        <label htmlFor="contact-message" className="field-label">Your message</label>
        <textarea id="contact-message" name="message" rows={5} required className="field" />
      </div>
      <button type="submit" className="btn btn-whatsapp sm:justify-self-start">
        <FaWhatsapp aria-hidden="true" className="text-xl" />
        Continue on WhatsApp
      </button>
      <p className="text-xs text-muted">
        This opens WhatsApp with your message filled in. Press send there to reach us.
      </p>
    </form>
  );
}
