import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "17 Collectables - Premium Sports Cards & Memorabilia",
  description:
    "Discover rare and valuable sports cards, autographed memorabilia, and collectibles. Your trusted source for premium trading cards.",
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Hero />
      
      {/* Main Content Area */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Featured Collections */}
        <ul className="flex flex-col">
          <FeaturedProducts collections={collections} region={region} />
        </ul>

        {/* Why Choose Us Section */}
        <div className="content-container py-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Why Collectors Trust Us</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6">The 17 Collectables Difference</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're not just another card shop. We're passionate collectors dedicated to authenticity, quality, and building lasting relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xl mb-3">100% Authenticated</h3>
              <p className="text-slate-400 leading-relaxed">Every card is verified by industry experts. No counterfeits, no questions.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xl mb-3">Fast & Secure Shipping</h3>
              <p className="text-slate-400 leading-relaxed">Premium packaging and insured delivery. Your investment arrives safe.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xl mb-3">Expert Grading</h3>
              <p className="text-slate-400 leading-relaxed">Professional condition assessment and grading services available.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xl mb-3">Rare Finds</h3>
              <p className="text-slate-400 leading-relaxed">Access exclusive inventory and limited edition cards you won't find elsewhere.</p>
            </div>
          </div>
        </div>

        {/* Sports Categories Section */}
        <div className="border-y border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-24">
          <div className="content-container">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Shop By Sport</span>
              </div>
              <h2 className="text-5xl font-black text-white mb-6">All Your Favorite Sports</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a href="/categories/baseball" className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⚾</div>
                  <h3 className="text-white font-black text-2xl group-hover:text-amber-400 transition-colors duration-300">Baseball</h3>
                </div>
              </a>

              <a href="/categories/basketball" className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏀</div>
                  <h3 className="text-white font-black text-2xl group-hover:text-amber-400 transition-colors duration-300">Basketball</h3>
                </div>
              </a>

              <a href="/categories/football" className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏈</div>
                  <h3 className="text-white font-black text-2xl group-hover:text-amber-400 transition-colors duration-300">Football</h3>
                </div>
              </a>

              <a href="/categories/hockey" className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏒</div>
                  <h3 className="text-white font-black text-2xl group-hover:text-amber-400 transition-colors duration-300">Hockey</h3>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="content-container py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-500 p-12 md:p-16">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                Start Your Collection Today
              </h2>
              <p className="text-xl text-slate-800 mb-10 leading-relaxed">
                Join thousands of collectors who trust 17 Collectables for authentic sports cards and memorabilia. New inventory added weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/store" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-xl"
                >
                  Browse All Cards
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="/account" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-xl"
                >
                  Create Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
