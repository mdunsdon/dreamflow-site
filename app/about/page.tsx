export const metadata = { title: "About — DreamFlow" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1>Hi, I’m Micheal Dunsdon</h1>
          <p className="mt-4 text-gray-700">
            CPA, Financial Coach, and Certified Emotional Health Coach. I combine practical systems with breathwork, reiki, and trauma‑aware coaching so money finally feels safe and actionable.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-6">
            <li>CPA + auditor background → clean, simple financial systems</li>
            <li>Somatic modalities → safety, clarity, and momentum</li>
            <li>Values → non‑judgment, practicality, and ease</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="mb-2">Work with me</h3>
          <p className="text-gray-700">Tell me your top money goal for the next 90 days.</p>
          <a className="btn-primary mt-4 inline-block" href="/contact">Book a clarity call</a>
        </div>
      </div>
    </section>
  );
}
