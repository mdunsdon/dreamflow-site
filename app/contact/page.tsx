export const metadata = { title: "Contact — DreamFlow" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1>Book a clarity call</h1>
        <p className="mt-4 text-gray-700">Short and sweet. If you prefer, drop a note below and I’ll get back to you.</p>
        <form className="mt-8 card grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input className="rounded-xl border px-3 py-2" placeholder="Your name" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input className="rounded-xl border px-3 py-2" placeholder="you@example.com" type="email" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea className="rounded-xl border px-3 py-2" rows={5} placeholder="What would you love support with?"/>
          </label>
          <button className="btn-primary" type="button">Send (placeholder)</button>
          <p className="text-xs text-gray-500">Replace this with your form tool (Tally, Typedream, Fillout, or simple API) or embed Calendly.</p>
        </form>
      </div>
    </section>
  );
}
