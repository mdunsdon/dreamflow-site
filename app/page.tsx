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
            <p className="mt-2 text-gray-700">A 3‑day coastal immersion to clear money stress in your body and set up simple systems you’ll keep using.</p>
            <Link href="/retreat" className="btn-secondary mt-4 inline-block">Retreat details</Link>
          </div>
          <div className="card">
            <h3>The Money Reset</h3>
            <p className="mt-2 text-gray-700">Fast, practical coaching—budgeting, debt, saving, and starter investing—paired with gentle nervous‑system work.</p>
            <Link href="/money-reset" className="btn-secondary mt-4 inline-block">Start your reset</Link>
          </div>
          <div className="card">
            <h3>Breathwork & Reiki</h3>
            <p className="mt-2 text-gray-700">Bi‑weekly online journeys and occasional in‑person sessions to release stress and find clarity.</p>
            <Link href="/breathwork-reiki" className="btn-secondary mt-4 inline-block">See dates</Link>
          </div>
        </div>
      </section>
      <SectionCTA />
    </>
  );
}
