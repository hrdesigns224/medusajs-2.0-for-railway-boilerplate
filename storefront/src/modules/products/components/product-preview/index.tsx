import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedClientLink 
      href={`/products/${product.handle}`} 
      className="group block"
    >
      <div 
        data-testid="product-wrapper"
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
      >
        {/* Card shine effect container */}
        <div className="relative overflow-hidden card-shine">
          {/* Featured badge */}
          {isFeatured && (
            <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Featured
            </div>
          )}
          
          {/* Image container with aspect ratio */}
          <div className="aspect-[3/4] relative bg-slate-800">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
            />
          </div>
          
          {/* Holographic gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        {/* Product info section */}
        <div className="p-4 bg-gradient-to-b from-slate-800/50 to-slate-900">
          {/* Product title */}
          <h3 
            className="text-white font-semibold text-base mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors duration-200" 
            data-testid="product-title"
          >
            {product.title}
          </h3>
          
          {/* Price and condition row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              {cheapestPrice && (
                <span className="text-amber-400 font-bold text-lg">
                  <PreviewPrice price={cheapestPrice} />
                </span>
              )}
            </div>
            
            {/* Rarity indicator - you can customize based on product metadata */}
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
          </div>
          
          {/* Quick view indicator */}
          <div className="mt-3 pt-3 border-t border-slate-700/50">
            <div className="text-slate-400 text-xs flex items-center justify-between group-hover:text-amber-400 transition-colors duration-200">
              <span>View Details</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
