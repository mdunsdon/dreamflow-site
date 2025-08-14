import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1>Money clarity that feels safe in your body—and gets results.</h1>
          <p className="mt-4 text-lg text-gray-700">
            I help heart‑led humans organize money, heal the stress around it, and move toward the life they actually want—without white‑knuckle budgeting or shame.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="btn-primary">Book a free clarity call</Link>
            <Link href="/retreat" className="btn-secondary">Explore the Retreat</Link>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            CPA + Financial Coach • Breathwork & Reiki Practitioner • Practical systems + somatic healing
          </div>
        </div>
        <div className="card">
          <h3 className="mb-2">What you’ll walk away with</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>A simple money system you can stick with</li>
            <li>Debt + savings plans you’ll actually use</li>
            <li>Calm, clear decisions with less anxiety</li>
            <li>6‑month, 1‑year & 5‑year plans aligned to your life</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
