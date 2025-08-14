import Link from "next/link";

export default function SectionCTA() {
  return (
    <section className="section bg-gray-50">
      <div className="container text-center">
        <h2>Ready to feel good about money again?</h2>
        <p className="mt-3 text-gray-700">Let’s set up a simple plan and clear the stress in your body so taking action feels natural.</p>
        <div className="mt-6">
          <Link href="/contact" className="btn-primary">Book a clarity call</Link>
        </div>
      </div>
    </section>
  );
}
