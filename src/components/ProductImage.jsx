import { useState } from 'react'

export default function ProductImage({ src, alt, className }) {
  const [err, setErr] = useState(false)
  const fallback = 'https://picsum.photos/seed/naija-food/600/400'
  return (
    <img
      src={err ? fallback : src}
      alt={alt}
      onError={() => setErr(true)}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}