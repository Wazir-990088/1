const mockProduct = {
    id: 'gid://shopify/Product/1234567890',
    title: 'Premium Quality T-Shirt for Men',
    handle: 'premium-quality-tshirt-men',
    brand: 'Node',
    description: 'Soft cotton t-shirt with high-quality print.',
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1111',
        title: 'Pink',
        color: 'Pink',
        colorHex: '#FF1493',
        availableForSale: true,
        price: '25.99',
        compareAtPrice: '30.00',
        selectedOptions: [{ name: 'Color', value: 'Pink' }],
        product: {
          handle: 'premium-quality-tshirt-men',
          title: 'Premium Quality T-Shirt for Men'
        },
        images: [
          { url: '/productimages/pink.jpg' },
          { url: '/productimages/pinks.jpg' }
        ]
      },
      {
        id: 'gid://shopify/ProductVariant/2222',
        title: 'Blue',
        color: 'Blue',
        colorHex: '#0000FF',
        availableForSale: true,
        price: '29.99',
        compareAtPrice: '35.00',
        selectedOptions: [{ name: 'Color', value: 'Blue' }],
        product: {
          handle: 'premium-quality-tshirt-men',
          title: 'Premium Quality T-Shirt for Men'
        },
        images: [
          { url: '/productimages/blue.jpg' },
          { url: '/productimages/blues.jpg' }
        ]
      },
      {
        id: 'gid://shopify/ProductVariant/3333',
        title: 'Green',
        color: 'Green',
        colorHex: '#008000',
        availableForSale: true,
        price: '20.00',
        compareAtPrice: '25.00',
        selectedOptions: [{ name: 'Color', value: 'Green' }],
        product: {
          handle: 'premium-quality-tshirt-men',
          title: 'Premium Quality T-Shirt for Men'
        },
        images: [
          { url: '/productimages/green.jpg' },
          { url: '/productimages/greens.jpg' }
        ]
      },
      {
        id: 'gid://shopify/ProductVariant/4444',
        title: 'Navy Blue',
        color: 'Navy Blue',
        colorHex: '#000080',
        availableForSale: false,
        price: '22.00',
        compareAtPrice: '27.00',
        selectedOptions: [{ name: 'Color', value: 'Navy Blue' }],
        product: {
          handle: 'premium-quality-tshirt-men',
          title: 'Premium Quality T-Shirt for Men'
        },
        images: [
          { url: '/productimages/navyblue.jpg' },
          { url: '/productimages/navyblues.jpg' }
        ]
      },
      {
        id: 'gid://shopify/ProductVariant/5555',
        title: 'Orange',
        color: 'Orange',
        colorHex: '#FFA500',
        availableForSale: true,
        price: '22.50',
        compareAtPrice: '27.50',
        selectedOptions: [{ name: 'Color', value: 'Orange' }],
        product: {
          handle: 'premium-quality-tshirt-men',
          title: 'Premium Quality T-Shirt for Men'
        },
        images: [
          { url: '/productimages/orange.jpg' },
          { url: '/productimages/oranges.jpg' }
        ]
      },
      {
        id: 'gid://shopify/ProductVariant/6666',
        title: 'Yellow',
        color: 'Yellow',
        colorHex: '#FFFF00',
        availableForSale: true,
        price: '24.00',
        compareAtPrice: '28.00',
        selectedOptions: [{ name: 'Color', value: 'Yellow' }],
        product: {
          handle: 'premium-quality-tshirt-men',
          title: 'Premium Quality T-Shirt for Men'
        },
        images: [
          { url: '/productimages/yello.jpg' },
          { url: '/productimages/yellows.jpg' }
        ]
      }
    ],
    images: [
      { url: '/productimages/pink.jpg' }
    ],
    isOnSale: true,
    price: '25.99',
    compareAtPrice: '30.00'
  };
  
  export default mockProduct;