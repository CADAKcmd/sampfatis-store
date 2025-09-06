export const categories = [
  'All',
  'Raw Food',
  'Flours & Swallows',
  'Seafood',
  'Spices & Condiments',
  'Sauces & Mixes',
  'Snacks',
  'Drinks',
]

// Images point to files you add in /public/images/products
// Example: /public/images/products/garri-ijebu.jpg
export const products = [
  // Raw Food
  { id: 'garri-ijebu', name: 'Garri (Ijebu)', category: 'Raw Food', priceFrom: 5.5, unit: 'per 2kg', image: '/images/products/garri-ijebu.jpg', description: 'Crisp, sour Ijebu garri for soaking or eba.' },
  { id: 'ofada-rice', name: 'Ofada Rice', category: 'Raw Food', priceFrom: 9.5, unit: 'per 2kg', image: '/images/products/ofada-rice.jpg', description: 'Local Ofada rice with rich aroma.' },
  { id: 'ewa-oloyin', name: 'Honey Beans (Ewa Oloyin)', category: 'Raw Food', priceFrom: 7.0, unit: 'per 2kg', image: '/images/products/ewa-oloyin.jpg', description: 'Naturally sweet beans, great for porridge.' },
  { id: 'yam-tuber', name: 'Yam Tuber', category: 'Raw Food', priceFrom: 6.0, unit: 'per tuber', image: '/images/products/yam-tuber.jpg', description: 'Fresh white yam tubers.' },
  { id: 'egusi', name: 'Egusi (Melon Seeds)', category: 'Raw Food', priceFrom: 4.5, unit: 'per 250g', image: '/images/products/egusi.jpg', description: 'For rich, nutty egusi soup.' },
  { id: 'ogbono', name: 'Ogbono Seeds', category: 'Raw Food', priceFrom: 5.0, unit: 'per 250g', image: '/images/products/ogbono.jpg', description: 'Draw soup thickener with deep flavour.' },

  // Flours & Swallows
  { id: 'fufu-flour', name: 'Fufu Flour (Cassava)', category: 'Flours & Swallows', priceFrom: 6.5, unit: 'per 1kg', image: '/images/products/fufu-flour.jpg', description: 'Smooth cassava swallow for soups.' },
  { id: 'pounded-yam-flour', name: 'Pounded Yam Flour', category: 'Flours & Swallows', priceFrom: 7.5, unit: 'per 1kg', image: '/images/products/pounded-yam-flour.jpg', description: 'Light and stretchy pounded yam.' },
  { id: 'semolina', name: 'Semolina', category: 'Flours & Swallows', priceFrom: 3.5, unit: 'per 1kg', image: '/images/products/semolina.jpg', description: 'Classic semolina for swallow or porridge.' },
  { id: 'attieke', name: 'Attiéké (Cassava Couscous)', category: 'Flours & Swallows', priceFrom: 6.0, unit: 'per 500g', image: '/images/products/attieke.jpg', description: 'Ivorian cassava couscous—light and tangy.' },
  { id: 'banku-mix', name: 'Banku Mix', category: 'Flours & Swallows', priceFrom: 5.5, unit: 'per 1kg', image: '/images/products/banku-mix.jpg', description: 'Ghanaian fermented corn/cassava dough.' },

  // Seafood
  { id: 'crayfish', name: 'Crayfish (Ground)', category: 'Seafood', priceFrom: 4.0, unit: 'per 250g', image: '/images/products/crayfish.jpg', description: 'Smoky dried crayfish for stews.' },
  { id: 'smoked-fish', name: 'Smoked Fish', category: 'Seafood', priceFrom: 9.0, unit: 'per pack', image: '/images/products/smoked-fish.jpg', description: 'Smoked catfish/tilapia.' },
  { id: 'stockfish', name: 'Stockfish', category: 'Seafood', priceFrom: 12.0, unit: 'per pack', image: '/images/products/stockfish.jpg', description: 'Traditional Norwegian stockfish pieces.' },

  // Spices & Condiments
  { id: 'palm-oil', name: 'Palm Oil (Red)', category: 'Spices & Condiments', priceFrom: 7.0, unit: 'per 1L', image: '/images/products/palm-oil.jpg', description: 'Rich, vibrant red palm oil.' },
  { id: 'iru', name: 'Iru (Locust Beans)', category: 'Spices & Condiments', priceFrom: 3.0, unit: 'per 100g', image: '/images/products/iru.jpg', description: 'Fermented umami booster.' },
  { id: 'atarodo', name: 'Atarodo (Scotch Bonnet)', category: 'Spices & Condiments', priceFrom: 2.5, unit: 'per 10pcs', image: '/images/products/atarodo.jpg', description: 'Fresh hot peppers.' },
  { id: 'suya-spice', name: 'Suya Spice Blend', category: 'Spices & Condiments', priceFrom: 3.5, unit: 'per jar', image: '/images/products/suya-spice.jpg', description: 'Northern-style peanut spice blend.' },
  { id: 'pepper-soup', name: 'Pepper Soup Spice', category: 'Spices & Condiments', priceFrom: 3.0, unit: 'per pack', image: '/images/products/pepper-soup.jpg', description: 'Aromatic blend for pepper soup.' },

  // Sauces & Mixes
  { id: 'jollof-mix', name: 'Jollof Rice Seasoning', category: 'Sauces & Mixes', priceFrom: 3.5, unit: 'per pack', image: '/images/products/jollof-mix.jpg', description: 'Signature smoky Jollof flavour.' },
  { id: 'moi-moi-mix', name: 'Moi Moi Beans Flour', category: 'Sauces & Mixes', priceFrom: 5.0, unit: 'per 1kg', image: '/images/products/moi-moi-mix.jpg', description: 'Convenient mix for moi moi & akara.' },
  { id: 'shito', name: 'Shito (Ghana Pepper Sauce)', category: 'Sauces & Mixes', priceFrom: 6.0, unit: 'per jar', image: '/images/products/shito.jpg', description: 'Spicy, umami-rich Ghanaian sauce.' },

  // Snacks
  { id: 'plantain-chips', name: 'Plantain Chips', category: 'Snacks', priceFrom: 1.5, unit: 'per pack', image: '/images/products/plantain-chips.jpg', description: 'Crispy, salted plantain chips.' },
  { id: 'chin-chin', name: 'Chin Chin', category: 'Snacks', priceFrom: 2.0, unit: 'per pack', image: '/images/products/chin-chin.jpg', description: 'Buttery crunchy bites.' },
  { id: 'kilishi', name: 'Kilishi (Beef Jerky)', category: 'Snacks', priceFrom: 6.0, unit: 'per 200g', image: '/images/products/kilishi.jpg', description: 'Spicy Northern beef jerky.' },
  { id: 'kuli-kuli', name: 'Kuli Kuli', category: 'Snacks', priceFrom: 1.5, unit: 'per pack', image: '/images/products/kuli-kuli.jpg', description: 'Crunchy peanut snack.' },
  { id: 'groundnut', name: 'Roasted Groundnut', category: 'Snacks', priceFrom: 1.5, unit: 'per pack', image: '/images/products/groundnut.jpg', description: 'Freshly roasted peanuts.' },
  { id: 'kokoro', name: 'Kokoro (Corn Sticks)', category: 'Snacks', priceFrom: 2.0, unit: 'per pack', image: '/images/products/kokoro.jpg', description: 'Crispy corn sticks.' },
  { id: 'puff-puff-mix', name: 'Puff-Puff Mix', category: 'Snacks', priceFrom: 3.0, unit: 'per pack', image: '/images/products/puff-puff-mix.jpg', description: 'Just add water—soft & fluffy.' },
  { id: 'meat-pie', name: 'Meat Pie (Frozen Pack)', category: 'Snacks', priceFrom: 4.5, unit: 'per pack', image: '/images/products/meat-pie.jpg', description: 'Oven-ready Nigerian meat pies.' },

  // Drinks
  { id: 'zobo', name: 'Zobo (Hibiscus) Drink Mix', category: 'Drinks', priceFrom: 3.0, unit: 'per pack', image: '/images/products/zobo.jpg', description: 'Hibiscus petals for zobo/sobolo.' },
]