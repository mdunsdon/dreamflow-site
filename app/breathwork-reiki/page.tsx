export const metadata = { title: "Breathwork & Reiki — DreamFlow" };

export default function BreathworkPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Breathwork & Reiki</h1>
        <p className="mt-4 text-gray-700">Ground your nervous system. Release money anxiety. Make decisions with clarity. Join bi‑weekly online journeys or book a private session.</p>
        <div className="card mt-8">
          <h3>Upcoming sessions</h3>
          <p className="text-gray-700 mt-2">Calendly or event links can live here.</p>
          {/* Replace the iframe src with your Calendly embed when ready */}
          <div className="mt-4 aspect-video bg-gray-100 rounded-2xl grid place-items-center">
            <span className="text-gray-500 text-sm">Embed calendar here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
