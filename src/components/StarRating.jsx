import { useEffect, useState } from 'react'

export default function StarRating({ productId }) {
  const [rating, setRating] = useState(0)
  const key = `rating:${productId}`

  useEffect(() => {
    const saved = Number(localStorage.getItem(key) || 0)
    setRating(saved)
  }, [key])

  const handleSet = (val) => {
    setRating(val)
    localStorage.setItem(key, String(val))
  }

  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map((i) => (
        <button
          key={i}
          onClick={() => handleSet(i)}
          className="p-1"
          aria-label={`Rate ${i} star${i>1?'s':''}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className="drop-shadow">
            <path
              d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.211l8.2-1.193z"
              fill={i <= rating ? '#FFD700' : '#E5E7EB'}
              stroke="#C4B5FD"
            />
          </svg>
        </button>
      ))}
      <span className="text-xs text-gray-500 ml-1">Your rating</span>
    </div>
  )
}