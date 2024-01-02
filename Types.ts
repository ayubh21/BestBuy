export interface Products{
  currentPage: number
  total: number
  totalPages: number
  pageSize: number
  products: Product[]
  paths: Path[]
  facets: Facet[]
  lastSearchDate: string
  relatedQueries: any
  sscs: any
  relatedCategories: any
  selectedFacets: SelectedFacet[]
  resources: any
  redirectUrl: any
  promotions: any
  hasBrandStore: boolean
  productStatusCode: any
  sscStatusCode: any
  indexName: string
  queryId: string
  Brand: string
  breadcrumb: any
}

export interface Product {
  sku: string
  name: string
  shortDescription: string
  customerRating: number
  customerRatingCount: number
  customerReviewCount: number
  productUrl: string
  currentRegion: string
  hideSavings: boolean
  hideSaleEndDate: boolean
  productType: any
  regularPrice: number
  salePrice: number
  saleEndDate?: number
  thumbnailImage: string
  primaryParentCategoryId: string
  categoryName: string
  ehf: number
  seoText: string
  sellerId: any
  seller: any
  highResImage?: string
  altLangSeoText: any
  offerId: any
  priceUnit: string
  requiresAgeVerification: boolean
  isPriceEndsLabel: boolean
  hasPromotion: boolean
  isAdvertised: boolean
  isClearance: boolean
  isInStoreOnly: boolean
  isOnlineOnly: boolean
  isVisible: boolean
  isPreorderable: boolean
  isFrenchCompliant: boolean
  isMarketplace: boolean
  hasFrenchContent: boolean
  categoryIds: string[]
}

export interface Path {
  name: string
  value: string
  selectPath: string
  unselectPath: string
  type: string
}

export interface Facet {
  name: string
  systemName: string
  count: number
  filters: Filter[]
  isMultiSelect: boolean
  order: number
}

export interface Filter {
  name: string
  path: string
  count: number
  isSelected: boolean
}

export interface SelectedFacet {
  name: string
  systemName: string
  count: number
  filters: Filter2[]
  isMultiSelect: boolean
  order: number
}

export interface Filter2 {
  name: string
  path: string
  count: number
  isSelected: boolean
}

