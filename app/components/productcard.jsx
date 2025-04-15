import { useState, useEffect, useCallback } from "react";
import { twMerge } from 'tailwind-merge';
import mockProduct from '../lib/mockproduct';
import { FaEye, FaCartArrowDown } from 'react-icons/fa';
import QuickViewPopup from './QuickViewPopup';
import './my.css'

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const variantProducts = mockProduct.variants.map((variant) => ({
      ...mockProduct,
      variants: [variant],
      selectedVariant: variant
    }));

    setTimeout(() => {
      setProducts(variantProducts);
    }, 500);
  }, []);

  if (products.length === 0) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [hovered, setHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const mainImage = selectedVariant?.images?.[0]?.url || '/productimages/default.jpg';
  const hoverImage = selectedVariant?.images?.[1]?.url || mainImage;

  const handleQuickViewClick = useCallback(() => setShowPopup(true), []);
  const handleClosePopup = useCallback(() => setShowPopup(false), []);

  return (
    <div
      className="group relative w-full bg-white rounded-2xl border border-gray-300 overflow-hidden transition-all duration-300 flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sale Badge */}
      {selectedVariant.compareAtPrice && selectedVariant.compareAtPrice > selectedVariant.price && (
        <div className="absolute top-3 left-3 z-10 bg-white border-2 border-red-600 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs">
          <span className="line-through text-red-600 font-semibold">
            ${parseFloat(selectedVariant.compareAtPrice - selectedVariant.price).toFixed(2)}
          </span>
          <span className="ml-1 font-bold text-black">
            ({((selectedVariant.compareAtPrice - selectedVariant.price) / selectedVariant.compareAtPrice * 100).toFixed(0)}% OFF)
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="aspect-[4/5] w-full overflow-hidden relative">
        <img
          src={hovered ? hoverImage : mainImage}
          alt={`Product: ${product.title}, Variant: ${selectedVariant.color}`}
          className="h-full w-full object-cover transition-opacity duration-500"
        />

        {/* Hover Action Buttons */}
        <div className={twMerge(
          "absolute bottom-4 left-4 right-4 flex justify-between gap-2 transition-all duration-300",
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}>
          <button
            onClick={handleQuickViewClick}
            className="flex items-center justify-center gap-2 text-xs bg-white text-black px-4 py-1 rounded-md border-2 border-black hover:bg-gray-100 transition w-1/2"
          >
            <FaEye />
            Quick View
          </button>

          <button className="flex items-center justify-center gap-2 text-xs bg-black text-white px-4 py-1 rounded-md border-2 border-black hover:bg-gray-800 transition w-1/2">
            <FaCartArrowDown />
            Buy Now
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col justify-between flex-grow gap-3">
        <div>
          <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2">{product.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-gray-800">
            ${selectedVariant.price}
          </span>
          {selectedVariant.compareAtPrice && (
            <span className="text-sm font-bold text-red-600 line-through">
              ${selectedVariant.compareAtPrice}
            </span>
          )}
        </div>

        {/* Swatches */}
        <div className="flex gap-2 mt-auto">
          {mockProduct.variants.map((variant, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedVariant(variant)}
              className={twMerge(
                "w-6 h-6 rounded-full border-2 transition-all",
                selectedVariant.color === variant.color
                  ? "border-gray-900"
                  : "border-gray-300"
              )}
              style={{ backgroundColor: variant.colorHex }}
              aria-label={`Color swatch: ${variant.color}`}
            />
          ))}
        </div>
      </div>

      {showPopup && (
        <QuickViewPopup
          product={product}
          selectedVariant={selectedVariant}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
