'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/retreat", label: "Retreat" },
  { href: "/money-reset", label: "Money Reset" },
  { href: "/breathwork-reiki", label: "Breathwork & Reiki" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          DreamFlow<span className="text-brand">.</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className={`text-sm ${pathname === i.href ? "text-brand font-medium" : "text-gray-700 hover:text-gray-900"}`}>
              {i.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary text-sm">Book a clarity call</Link>
      </div>
    </header>
  );
}
