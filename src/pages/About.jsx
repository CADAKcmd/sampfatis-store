import ProductImage from '../components/ProductImage'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-purple">About Us</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        We celebrate African food culture from London — delivering authentic Nigerian and Pan‑African groceries to the UK community.
        Our prices are negotiable to keep things friendly and fair. Chat with us to get current market rates and delivery options.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          {t:'Sourcing', d:'We partner with trusted African producers and UK importers.', img:'/images/about-sourcing.jpg'},
          {t:'Quality', d:'Handled and packaged to maintain freshness and safety.', img:'/images/about-quality.jpg'},
          {t:'Community', d:'Proudly serving the African diaspora across London and the UK.', img:'/images/about-community.jpg'},
        ].map((f,i)=>(
          <div className="card overflow-hidden" key={i}>
            <ProductImage src={f.img} alt={f.t} className="w-full h-32 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-brand-purple">{f.t}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}