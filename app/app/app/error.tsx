'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="section">
      <div className="container text-center">
        <h1>Something went wrong</h1>
        <p className="mt-4 text-gray-700">{error?.message || "Unexpected error."}</p>
        <button onClick={() => reset()} className="btn-primary mt-6">Try again</button>
      </div>
    </div>
  );
}
