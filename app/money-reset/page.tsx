export const metadata = { title: "The Money Reset — DreamFlow" };

export default function MoneyResetPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>From “where did it all go?” to “I know exactly what to do.”</h1>
        <p className="mt-4 text-gray-700">
          Learn the few habits that move everything: plan paydays, pay yourself first, automate savings, a debt plan you can live with, and beginner‑friendly investing—backed by nervous system care.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="card">
            <h3 className="mb-2">Paths</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Self‑Paced</strong>: go at your speed with videos + workbook</li>
              <li><strong>Guided</strong>: 1:1 touchpoints + accountability</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="mb-2">Next step</h3>
            <a className="btn-primary mt-2 inline-block" href="/contact">Choose your path</a>
          </div>
        </div>
      </div>
    </section>
  );
}
