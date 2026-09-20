'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Products', '/products'], ['Industries', '/industries'], ['Why VeriForm', '/why-veriform'], ['FAQs', '/faqs'], ['Contact Us', '/contact']] as const
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-07%20at%209.39.34%20PM-Bb780HT9mQIPZUhHj4l11RKtyaz9Ts.jpeg'

function Logo() {
  return <Link href="/" className="group flex items-center gap-4" aria-label="VeriForm Business Solutions home"><span className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-primary bg-black shadow-[0_0_32px_rgba(38,132,255,0.24)]"><img src={logoUrl} alt="" className="absolute left-1/2 top-[45%] h-[118%] w-[118%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-top transition-transform group-hover:scale-105" /></span><span className="leading-none"><span className="block text-2xl font-bold tracking-tight text-white">Veri<span className="text-primary">Form</span></span><span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.25em] text-primary">Business Solutions</span></span></Link>
}

function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  return <nav className="flex flex-col gap-5 md:flex-row md:items-center md:gap-7" aria-label="Primary navigation">{navLinks.map(([label, href]) => <Link key={href} href={href} onClick={onNavigate} className="text-sm font-medium text-on-ink/70 transition-colors hover:text-on-ink">{label}</Link>)}</nav>
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(100deg,rgba(8,15,30,0.97),rgba(11,30,58,0.95),rgba(8,15,30,0.97))] text-on-ink shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"><Logo /><div className="hidden items-center gap-8 md:flex"><Navigation /><Link href="/contact#quote" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Request a quote <ArrowUpRight size={16} /></Link></div><button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 md:hidden" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <div className="border-t border-white/10 bg-ink px-5 py-6 md:hidden"><Navigation onNavigate={() => setMenuOpen(false)} /><Link href="/contact#quote" onClick={() => setMenuOpen(false)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Request a quote <ArrowUpRight size={16} /></Link></div>}</header>
}
