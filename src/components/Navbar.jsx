import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/assets/logo.png' // <-- add this (adjust path if needed)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkBase = 'px-4 py-2 rounded-full hover:bg-purple-100 transition'
  const active = ({ isActive }) =>
    isActive ? `${linkBase} bg-purple-100 text-brand-purple` : `${linkBase} text-gray-700`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-purple-100">
      <nav className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand with your logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 md:h-11 md:w-11 rounded-2xl bg-white ring-2 ring-brand-gold/70 overflow-hidden grid place-items-center shadow-sm animate-float">
              <img
                src={logo}
                alt="Naija Food Store logo"
                className="h-8 w-8 md:h-9 md:w-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-extrabold text-brand-purple text-lg md:text-xl">
              Sampfatis Foods
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={active}>Home</NavLink>
            <NavLink to="/shop" className={active}>Shop</NavLink>
            <NavLink to="/about" className={active}>About</NavLink>
            <NavLink
              to="/contact"
              className={`${linkBase} border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white`}
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-purple-200">
            <span className="sr-only">Toggle Menu</span> ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="grid gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={active}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/shop" className={active}>Shop</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className={active}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={`${linkBase} border border-brand-purple text-brand-purple`}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}