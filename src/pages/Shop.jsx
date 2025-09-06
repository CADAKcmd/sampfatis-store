import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products, categories } from '../data/products'
import StarRating from '../components/StarRating'
import ProductImage from '../components/ProductImage'

export default function Shop() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return products.filter(p => {
      const inCat = cat === 'All' || p.category === cat
      const inSearch = !q || [p.name, p.category, p.description].join(' ').toLowerCase().includes(q)
      return inCat && inSearch
    })
  }, [search, cat])

  const onBuy = (p) => {
    const params = new URLSearchParams({
      name: p.name,
      item: p.id,
      priceFrom: String(p.priceFrom),
      unit: p.unit,
    }).toString()
    navigate(`/contact?${params}`)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-purple">Shop</h1>
          <p className="text-sm text-gray-600">
            Pan‑African groceries and Nigerian snacks in London. Prices are negotiable — contact us to finalise.
          </p>
        </div>

        <div className="w-full md:w-auto flex gap-2">
          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search egusi, garri, jollof mix, plantain chips..."
            className="w-full md:w-80 rounded-full border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={()=>setCat(c)}
            className={`px-4 py-1.5 rounded-full border transition ${cat===c ? 'bg-brand-purple text-white border-brand-purple' : 'border-purple-200 hover:bg-purple-50'}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(p => (
          <div key={p.id} className="card overflow-hidden animate-fade-in-up">
            <div className="relative">
              <ProductImage
                src={p.image}
                alt={p.name}
                className="w-full h-44 sm:h-52 object-cover"
              />
              <span className="absolute top-2 left-2 badge">{p.category}</span>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{p.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-brand-purple">
                    From £{p.priceFrom.toLocaleString('en-GB')} <span className="text-xs text-gray-500">({p.unit})</span>
                  </div>
                  <div className="text-xs text-gray-500">Price not fixed — negotiate</div>
                </div>
                <StarRating productId={p.id} />
              </div>

              <div className="mt-4">
                <button className="btn btn-primary w-full" onClick={() => onBuy(p)}>
                  Buy It / Negotiate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 text-center text-gray-500">No items match your search.</div>
      )}
    </section>
  )
}