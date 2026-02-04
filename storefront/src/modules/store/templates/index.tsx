import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Store Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700">
        <div className="content-container py-12">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Card Catalog</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
              Premium Collection
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our curated selection of authenticated sports cards, rare memorabilia, and exclusive collectibles from legends of the game.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex flex-col small:flex-row small:items-start py-12 content-container gap-8"
        data-testid="category-container"
      >
        {/* Sidebar */}
        <div className="small:w-64 flex-shrink-0">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm sticky top-24">
            <RefinementList sortBy={sort} />
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
