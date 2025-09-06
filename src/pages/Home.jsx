import { Link } from 'react-router-dom'
import ProductImage from '../components/ProductImage'
import { products } from '../data/products'

export default function Home() {
  const heroImages = products.slice(0, 6)

  const londonPicksIds = ['plantain-chips', 'jollof-mix', 'kilishi', 'egusi', 'fufu-flour', 'shito']
  const londonPicks = londonPicksIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 text-brand-purple px-3 py-1 text-xs font-medium">
              London • UK delivery • Pan‑African
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-purple">
              Authentic African Groceries & Nigerian Snacks in London
            </h1>
            <p className="mt-4 text-gray-600">
              From garri and ofada rice to suya spice, shito and plantain chips — stock your pantry with the best.
              Prices are negotiable. Click “Buy It / Negotiate” to chat and get the best deal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/shop" className="btn btn-primary">Explore Shop</Link>
              <Link to="/contact" className="btn btn-outline">Contact & Negotiate</Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Same‑day dispatch from London on weekdays • UK‑wide delivery
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3">
              {heroImages.map((p) => (
                <div key={p.id} className="rounded-2xl overflow-hidden ring-1 ring-purple-100">
                  <ProductImage src={p.image} alt={p.name} className="w-full h-28 md:h-36 object-cover" />
                </div>
              ))}
            </div>
            <div className="absolute -z-10 blur-3xl bg-brand-gold/30 rounded-full w-56 h-56 -top-10 -right-10" />
          </div>
        </div>
      </section>

      {/* POPULAR IN LONDON */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-brand-purple">Popular in London</h2>
          <Link to="/shop" className="text-sm text-brand-purple hover:underline">See all</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {londonPicks.map(p => (
            <Link to={`/shop`} key={p.id} className="card overflow-hidden group">
              <ProductImage src={p.image} alt={p.name} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-brand-purple font-semibold">£{p.priceFrom.toLocaleString('en-GB')}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{p.category} • {p.unit}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY SHOP WITH US (images instead of icons) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-brand-purple">Why shop with us</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {t:'Fresh & Authentic', d:'Sourced from trusted African markets and brands.', img:'/images/feature-authentic.jpg'},
            {t:'UK‑Wide Delivery', d:'Fast dispatch from London. Trackable delivery.', img:'/images/feature-delivery.jpg'},
            {t:'Negotiate Price', d:'No fixed price — friendly, fair deals.', img:'/images/feature-negotiate.jpg'},
            {t:'Secure Packaging', d:'Sealed and protected for freshness.', img:'/images/feature-packaging.jpg'},
          ].map((f,i)=>(
            <div key={i} className="card overflow-hidden">
              <ProductImage src={f.img} alt={f.t} className="w-full h-28 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-brand-purple">{f.t}</h3>
                <p className="text-sm text-gray-600 mt-2">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PANTRY COLLECTIONS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {t:'Swallows & Flours', img:'/images/collection-flours.jpg', link:'/shop'},
            {t:'Spices & Sauces', img:'/images/collection-spices.jpg', link:'/shop'},
            {t:'Snacks to Love', img:'/images/collection-snacks.jpg', link:'/shop'},
          ].map((c,i)=>(
            <Link to={c.link} key={i} className="relative rounded-3xl overflow-hidden ring-1 ring-purple-100 group">
              <ProductImage src={c.img} alt={c.t} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white font-semibold">{c.t}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}