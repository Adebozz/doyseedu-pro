import Link from "next/link";

export default function Footer() {
  async function subscribe(formData: FormData) {
    "use server";
    const email = String(formData.get("email") || "").trim();
    if (!email) return;
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });
  }

  return (
    <footer className="mt-16 bg-[rgb(0,5,48)] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-10 grid gap-10 md:grid-cols-3">
        <div>
          <Link href="/" className="font-semibold block mb-3">
            DOYSE EDUCATIONAL CONSULTS
          </Link>
          <p className="text-sm text-white/80">
            Get updates about latest news and offers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#where">Where to go</a></li>
            <li><a href="#why">Why choose us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Sign Up</h3>
          <p className="text-sm text-white/80 mb-3">Get updates about latest news and offers</p>
          <form action={subscribe} className="flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full rounded px-3 py-2 text-sm text-gray-900"
            />
            <button type="submit" className="px-4 py-2 text-sm rounded bg-cyan-400 text-black hover:bg-cyan-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs text-white/80 py-4 border-t border-white/10">
        Copyright &copy; 2025. All right reserved. Developed by Adeboss
      </div>
    </footer>
  );
}
