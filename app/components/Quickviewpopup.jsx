import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import Close Icon

const QuickViewPopup = ({ product, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.selectedVariant);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity opacity-100">
      <div className="bg-white rounded-lg w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] p-6 relative transition-all duration-300 ease-in-out">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black transition"
          aria-label="Close Quick View"
        >
          <FaTimes />
        </button>
        
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Product Image */}
          <div className="flex-1 w-full">
            <img
              src={selectedVariant?.images?.[0]?.url || "/default-image.jpg"}
              alt={product.title}
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description || "No description available."}</p>
            
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">${selectedVariant?.price}</p>
              {selectedVariant?.compareAtPrice && (
                <span className="text-sm line-through text-gray-400">
                  ${selectedVariant?.compareAtPrice}
                </span>
              )}
            </div>

            {/* Variant Swatches */}
            <div className="flex gap-2 mt-4">
              {product.variants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => handleVariantChange(variant)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${selectedVariant.color === variant.color ? "border-gray-900" : "border-gray-300"}`}
                  style={{ backgroundColor: variant.colorHex }}
                  aria-label={`Select ${variant.color} variant`}
                />
              ))}
            </div>

            {/* Add to Cart Button */}
            <button className="mt-6 w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPopup;