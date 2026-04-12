/** Lab test package card — Book Lab grid (Figma). */
export type BookLabPackage = {
  id: string
  title: string
  category: string
  /** Matches `labTestPackageStripOptions` for hero + filters (e.g. Blood Test, All Tests). */
  testPackageTag: string
  sampleCollection: string
  labName: string
  price: number
  originalPrice: number
  image: string
  rating: number
  testsIncluded: string
  /** Figma cards show “Test Price” vs “Package Price”. */
  priceLabel?: 'Test Price' | 'Package Price'
}
