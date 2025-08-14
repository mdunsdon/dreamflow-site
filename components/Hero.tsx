import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1>Money clarity that feels human—and totally doable.</h1>
          <p className="mt-4 text-lg text-gray-700">
            I’m Micheal, a CPA + Emotional Health Coach. I help heart‑led people
            organize money in simple steps, calm the nervous system, and move toward
            the life they actually want—without shame, hustle, or “you’re doing it wrong” energy.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="btn-primary">Book a free clarity call</Link>
            <Link href="/retreat" className="btn-secondary">See the Retreat</Link>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Practical systems + somatic healing • Breathwork &amp; Reiki • Trauma‑aware coaching
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200">
          <Image
            src="/images/headshot.jpg"
            alt="Micheal Dunsdon"
            width={1200}
            height={900}
            className="object-cover h-full w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
