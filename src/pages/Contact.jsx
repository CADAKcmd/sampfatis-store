import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Contact() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const defaults = useMemo(() => ({
    item: params.get('name') || '',
    rawId: params.get('item') || '',
    priceFrom: params.get('priceFrom') || '',
    unit: params.get('unit') || '',
  }), [params])

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    item: defaults.item,
    offer: defaults.priceFrom ? `£${Number(defaults.priceFrom).toLocaleString('en-GB')} (${defaults.unit})` : '',
    message: defaults.item ? `Hello, I'm interested in ${defaults.item}. I'd like to negotiate the price.` : '',
  })

  useEffect(() => {
    setForm(f => ({
      ...f,
      item: defaults.item,
      offer: defaults.priceFrom ? `£${Number(defaults.priceFrom).toLocaleString('en-GB')} (${defaults.unit})` : f.offer,
      message: defaults.item ? `Hello, I'm interested in ${defaults.item}. I'd like to negotiate the price.` : f.message,
    }))
  }, [defaults])

  const update = (k, v) => setForm(s => ({ ...s, [k]: v }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send')
      setStatus({ loading: false, ok: true, msg: 'Message sent! We will contact you shortly.' })
      setForm(f => ({ ...f, message: '' }))
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message })
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h1 className="text-2xl font-extrabold text-brand-purple">Contact & Negotiate</h1>
          <p className="text-sm text-gray-600 mt-2">
            Tell us the item and your offer in £. We’ll reply with current price and delivery options across the UK.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input value={form.name} onChange={(e)=>update('name', e.target.value)} required
                  className="mt-1 w-full rounded-xl border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" value={form.email} onChange={(e)=>update('email', e.target.value)} required
                  className="mt-1 w-full rounded-xl border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Phone (optional)</label>
                <input value={form.phone} onChange={(e)=>update('phone', e.target.value)}
                  className="mt-1 w-full rounded-xl border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Item</label>
                <input value={form.item} onChange={(e)=>update('item', e.target.value)} required
                  className="mt-1 w-full rounded-xl border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Your Offer or Budget (£)</label>
              <input value={form.offer} onChange={(e)=>update('offer', e.target.value)}
                className="mt-1 w-full rounded-xl border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none" />
              <p className="text-xs text-gray-500 mt-1">Tip: Enter a range or starting price. Our listed prices are indicative only.</p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea rows="4" value={form.message} onChange={(e)=>update('message', e.target.value)} required
                className="mt-1 w-full rounded-2xl border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none" />
            </div>

            <button className="btn btn-primary w-full md:w-auto" disabled={status.loading}>
              {status.loading ? 'Sending...' : 'Submit'}
            </button>

            {status.ok === true && <div className="text-green-600 text-sm">{status.msg}</div>}
            {status.ok === false && <div className="text-red-600 text-sm">Error: {status.msg}</div>}
          </form>
        </div>

        <div className="card p-2 overflow-hidden">
          <div className="h-[380px] w-full rounded-2xl overflow-hidden">
            <iframe
              title="Shop Location"
              src="https://www.google.com/maps?q=London%20UK&output=embed"
              width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-brand-purple">Visit Us</h3>
            <p className="text-sm text-gray-600 mt-1">London, United Kingdom</p>
            <p className="text-sm text-gray-600">Open Mon–Sat</p>
          </div>
        </div>
      </div>
    </section>
  )
}