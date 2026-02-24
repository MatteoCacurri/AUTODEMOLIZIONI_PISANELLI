'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/rottamazione', label: 'Rottamazione' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/ricambi', label: 'Ricambi' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-brand-black border-b border-brand-orange/30 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-navbar.png"
              alt="Autodemolizioni Pisanelli"
              width={264}
              height={32}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-orange bg-brand-orange/10'
                    : 'text-gray-300 hover:text-white hover:bg-brand-gray-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.contacts.phone.magazzino.tel}`}
              className="ml-3 hidden lg:flex items-center gap-1.5 text-[#25D366] hover:text-[#1ebe57] text-sm font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {COMPANY.contacts.phone.magazzino.number}
            </a>
            <Link
              href="/contatti"
              className="ml-2 px-4 py-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold rounded-md transition-colors"
            >
              Contattaci
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-md hover:bg-brand-gray-dark transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-brand-gray py-3 space-y-1">
            {/* Numero telefono mobile */}
            <a
              href={`tel:${COMPANY.contacts.phone.magazzino.tel}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-brand-orange font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.contacts.phone.magazzino.number}
            </a>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-orange bg-brand-orange/10'
                    : 'text-gray-300 hover:text-white hover:bg-brand-gray-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold rounded-md transition-colors text-center"
            >
              Contattaci
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
