/**
 * ProductCard - E-commerce product cards
 * Demonstrates product listings with images, ratings, and actions
 */

export function ProductCard() {
  const products = [
    {
      name: 'Wireless Headphones',
      price: '$199.99',
      originalPrice: '$249.99',
      rating: 4.5,
      reviews: 128,
      badge: 'Sale',
      inStock: true,
    },
    {
      name: 'Smart Watch Pro',
      price: '$399.99',
      originalPrice: null,
      rating: 5,
      reviews: 89,
      badge: 'New',
      inStock: true,
    },
    {
      name: 'Laptop Stand',
      price: '$49.99',
      originalPrice: null,
      rating: 4,
      reviews: 234,
      badge: null,
      inStock: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Product Card</h3>
        <p className="text-xs text-muted-foreground">
          E-commerce product cards with images and ratings
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            style={{
              borderRadius: 'var(--radius-lg)',
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-card)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Image */}
            <div
              className="relative aspect-square w-full bg-muted"
              style={{
                backgroundColor: 'var(--color-muted)',
              }}
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className="absolute left-3 top-3"
                  style={{
                    left: 'var(--spacing-3)',
                    top: 'var(--spacing-3)',
                  }}
                >
                  <span
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor:
                        product.badge === 'Sale'
                          ? 'var(--color-error)'
                          : 'var(--color-primary)',
                      color:
                        product.badge === 'Sale'
                          ? 'var(--color-error-foreground)'
                          : 'var(--color-primary-foreground)',
                      borderRadius: 'var(--radius-full)',
                      padding: 'var(--spacing-1) var(--spacing-2)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Wishlist Button */}
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full p-2 transition-colors"
                style={{
                  right: 'var(--spacing-3)',
                  top: 'var(--spacing-3)',
                  backgroundColor: 'var(--color-card)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--spacing-2)',
                }}
                aria-label="Add to wishlist"
              >
                <svg
                  className="h-5 w-5 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Heart</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Placeholder Image */}
              <div className="flex h-full items-center justify-center">
                <svg
                  className="h-16 w-16 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Product</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div
              className="p-4"
              style={{
                padding: 'var(--spacing-4)',
              }}
            >
              <h3
                className="text-sm font-semibold text-card-foreground"
                style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-card-foreground)',
                }}
              >
                {product.name}
              </h3>

              {/* Rating */}
              <div
                className="mt-2 flex items-center gap-2"
                style={{
                  marginTop: 'var(--spacing-2)',
                }}
              >
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${
                        star <= product.rating
                          ? 'text-warning'
                          : 'text-muted-foreground'
                      }`}
                      style={{
                        color:
                          star <= product.rating
                            ? 'var(--color-warning)'
                            : 'var(--color-muted)',
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Star</title>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span
                  className="text-xs text-muted-foreground"
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-muted-foreground)',
                  }}
                >
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div
                className="mt-3 flex items-center gap-2"
                style={{
                  marginTop: 'var(--spacing-3)',
                }}
              >
                <span
                  className="text-lg font-bold text-card-foreground"
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-card-foreground)',
                  }}
                >
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span
                    className="text-sm text-muted-foreground line-through"
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-muted-foreground)',
                    }}
                  >
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <p
                className="mt-2 text-xs"
                style={{
                  marginTop: 'var(--spacing-2)',
                  fontSize: 'var(--font-size-xs)',
                  color: product.inStock
                    ? 'var(--color-success)'
                    : 'var(--color-error)',
                }}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>

              {/* Add to Cart Button */}
              <button
                type="button"
                disabled={!product.inStock}
                className="mt-4 w-full rounded px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                style={{
                  marginTop: 'var(--spacing-4)',
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-primary-foreground)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {product.inStock ? 'Add to Cart' : 'Notify Me'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
