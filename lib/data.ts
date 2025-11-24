export const categories = [
  {
    slug: 'outerwear',
    name: 'Dış Giyim',
    description: 'Rahat formlar ve modern kesimler'
  },
  {
    slug: 'dresses',
    name: 'Elbiseler',
    description: 'Zamansız silüetler'
  }
]

export const products = [
  {
    slug: 'linen-blazer',
    name: 'Linen Blazer',
    price: 3200,
    category: 'outerwear',
    images: ['/img/blazer1.jpg'],
    tags: ['New'],
    description: 'Hafif keten kumaşla modern blazer.',
    variants: {
      size: ['S', 'M', 'L'],
      color: ['Black', 'Sand']
    }
  },
  {
    slug: 'silk-dress',
    name: 'Silk Midi Dress',
    price: 2800,
    category: 'dresses',
    images: ['/img/dress1.jpg'],
    tags: ['Bestseller'],
    description: 'Minimal çizgilerle ipeksi elbise.',
    variants: {
      size: ['XS', 'S', 'M'],
      color: ['Olive', 'Ivory']
    }
  }
]
