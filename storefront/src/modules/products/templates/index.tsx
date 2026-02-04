import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      {/* Hero Section with Product */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
        <div
          className="content-container py-12"
          data-testid="product-container"
        >
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <a href="/store" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Collection
            </a>
          </div>

          {/* Main Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="relative">
              <div className="sticky top-24">
                {/* Decorative corner accents */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-amber-500/30 rounded-tl-lg z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-amber-500/30 rounded-br-lg z-10"></div>
                
                <div className="relative rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 shadow-2xl shadow-slate-950/50">
                  <ImageGallery images={product?.images || []} />
                </div>

                {/* Authentication Badge */}
                <div className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-green-400 font-semibold text-sm">100% Authenticated</div>
                      <div className="text-slate-400 text-xs">Verified by experts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info & Actions */}
            <div className="flex flex-col gap-8">
              {/* Product Header */}
              <div>
                <ProductInfo product={product} />
              </div>

              {/* Purchase Section */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
                <Suspense
                  fallback={
                    <ProductActions
                      disabled={true}
                      product={product}
                      region={region}
                    />
                  }
                >
                  <ProductActionsWrapper id={product.id} region={region} />
                </Suspense>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
                  <div className="text-amber-400 text-2xl mb-1">🏆</div>
                  <div className="text-white text-xs font-semibold">Premium</div>
                  <div className="text-slate-400 text-xs">Quality</div>
                </div>
                <div className="text-center p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
                  <div className="text-blue-400 text-2xl mb-1">📦</div>
                  <div className="text-white text-xs font-semibold">Fast</div>
                  <div className="text-slate-400 text-xs">Shipping</div>
                </div>
                <div className="text-center p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
                  <div className="text-green-400 text-2xl mb-1">✓</div>
                  <div className="text-white text-xs font-semibold">Secure</div>
                  <div className="text-slate-400 text-xs">Payment</div>
                </div>
              </div>

              {/* Product Details Tabs */}
              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl overflow-hidden">
                <ProductTabs product={product} />
              </div>

              <ProductOnboardingCta />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div
          className="content-container py-16"
          data-testid="related-products-container"
        >
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts product={product} countryCode={countryCode} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
