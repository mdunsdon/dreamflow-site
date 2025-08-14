import Hero from "@/components/Hero";
import SectionCTA from "@/components/SectionCTA";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3>Chakra Codes of Abundance (Retreat)</h3>
            <p className="mt-2 text-gray-700">A 3‑day coastal reset for your body + money. Clear old patterns, reconnect to your power, and leave with simple systems you’ll actually use.</p>
            <Link href="/retreat" className="btn-secondary mt-4 inline-block">Retreat details</Link>
          </div>
          <div className="card">
            <h3>The Money Reset</h3>
            <p className="mt-2 text-gray-700">Step‑by‑step coaching to get organized fast—budgeting, debt, savings, gentle investing—paired with nervous‑system care so it sticks.</p>
            <Link href="/money-reset" className="btn-secondary mt-4 inline-block">Start your reset</Link>
          </div>
          <div className="card">
            <h3>Breathwork & Reiki</h3>
            <p className="mt-2 text-gray-700">Bi‑weekly online journeys to drop stress, land in your body, and make clear, grounded money decisions.</p>
            <Link href="/breathwork-reiki" className="btn-secondary mt-4 inline-block">See dates</Link>
          </div>
        </div>
      </section>
      <SectionCTA />
    </>
  );
}
