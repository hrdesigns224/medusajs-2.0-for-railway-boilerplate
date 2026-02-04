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
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <ul className="flex flex-col">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </div>
  )
}
