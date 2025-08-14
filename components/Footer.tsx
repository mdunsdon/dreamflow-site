import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p>© {new Date().getFullYear()} DreamFlow Financial Coaching. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
