import React, { useState } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Estimasi Biaya', href: '#estimasi' },
    { label: 'Hubungi Kami', href: '#kontak' },
    { label: 'Lokasi & Jadwal', href: '#lokasi' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-md shadow-orange-950/50">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="tracking-wide">
            BERKAH JAYA <span className="text-orange-500 font-extrabold text-sm ml-0.5">MOTOR</span>
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-orange-400 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${WORKSHOP_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 transition-colors whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-orange-400" />
            <span className="tabular-nums">{WORKSHOP_INFO.phone}</span>
          </a>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg shadow-sm shadow-orange-950 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Jadwal Servis
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/98 px-5 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2 text-sm font-medium text-slate-300 hover:text-orange-400 border-b border-slate-900/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${WORKSHOP_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-slate-200 rounded-lg border border-slate-800 bg-slate-900"
            >
              <Phone className="h-4 w-4 text-orange-400" />
              <span>Hubungi: {WORKSHOP_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-sm"
            >
              Jadwal Servis Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
