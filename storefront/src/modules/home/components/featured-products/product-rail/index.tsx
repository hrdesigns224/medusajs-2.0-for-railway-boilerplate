import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-16">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="inline-block mb-3 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Collection</span>
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            {collection.title}
          </h2>
        </div>
        <InteractiveLink 
          href={`/collections/${collection.handle}`}
          className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-2 transition-colors duration-200 group"
        >
          <span>View All</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </InteractiveLink>
      </div>

      {/* Products Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {/* @ts-ignore */}
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
