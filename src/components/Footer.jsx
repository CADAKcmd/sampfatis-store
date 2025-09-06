export default function Footer() {
  return (
    <footer className="mt-12 border-t border-purple-100 bg-white/70">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-bold text-brand-purple text-lg">Naija Food Store</h4>
          <p className="text-sm mt-2">
            Authentic African groceries and Nigerian snacks from London. Price is negotiable — contact us for the best deal.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-700">Contact</h5>
          <p className="text-sm mt-2">London, United Kingdom</p>
          <p className="text-sm">+44 20 0000 0000</p>
          <p className="text-sm">hello@naijafood.example</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-700">Hours</h5>
          <p className="text-sm mt-2">Mon–Sat: 8:00–18:00</p>
          <p className="text-sm">Sun: 12:00–16:00</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Naija Food Store • London</div>
    </footer>
  )
}