/**
 * PricingCard - Pricing tier cards for SaaS products
 * Demonstrates pricing page layouts with feature lists
 */

export function PricingCard() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 10 projects',
        '5 GB storage',
        'Basic support',
        'Email notifications',
      ],
      featured: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'month',
      description: 'For growing teams and businesses',
      features: [
        'Unlimited projects',
        '50 GB storage',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom integrations',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom SLA',
        'On-premise deployment',
      ],
      featured: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Pricing Card</h3>
        <p className="text-xs text-muted-foreground">
          Pricing tiers with feature comparisons
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border bg-card shadow-sm transition-all hover:shadow-md ${
              plan.featured
                ? 'border-primary ring-2 ring-primary ring-opacity-50'
                : 'border-border'
            }`}
            style={{
              borderRadius: 'var(--radius-lg)',
              borderColor: plan.featured
                ? 'var(--color-primary)'
                : 'var(--color-border)',
              backgroundColor: 'var(--color-card)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Featured Badge */}
            {plan.featured && (
              <div
                className="px-6 pt-4"
                style={{
                  padding: 'var(--spacing-4) var(--spacing-6) 0',
                }}
              >
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-primary-foreground)',
                    borderRadius: 'var(--radius-full)',
                    padding: 'var(--spacing-1) var(--spacing-3)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                  }}
                >
                  Most Popular
                </span>
              </div>
            )}

            {/* Header */}
            <div
              className="p-6"
              style={{
                padding: 'var(--spacing-6)',
              }}
            >
              <h3
                className="text-lg font-semibold text-card-foreground"
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-card-foreground)',
                }}
              >
                {plan.name}
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground"
                style={{
                  marginTop: 'var(--spacing-2)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div
                className="mt-4 flex items-baseline"
                style={{
                  marginTop: 'var(--spacing-4)',
                }}
              >
                <span
                  className="text-4xl font-bold text-card-foreground"
                  style={{
                    fontSize: 'var(--font-size-4xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-card-foreground)',
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="ml-2 text-sm text-muted-foreground"
                  style={{
                    marginLeft: 'var(--spacing-2)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-muted-foreground)',
                  }}
                >
                  / {plan.period}
                </span>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className={`mt-6 w-full rounded px-4 py-3 text-sm font-medium transition-colors ${
                  plan.featured
                    ? ''
                    : 'border border-border bg-transparent hover:bg-muted'
                }`}
                style={{
                  marginTop: 'var(--spacing-6)',
                  backgroundColor: plan.featured
                    ? 'var(--color-primary)'
                    : 'transparent',
                  color: plan.featured
                    ? 'var(--color-primary-foreground)'
                    : 'var(--color-card-foreground)',
                  borderColor: plan.featured
                    ? 'transparent'
                    : 'var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-3) var(--spacing-4)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {plan.featured ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>

            {/* Features */}
            <div
              className="border-t border-border p-6"
              style={{
                borderTopColor: 'var(--color-border)',
                padding: 'var(--spacing-6)',
              }}
            >
              <p
                className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-muted-foreground)',
                  letterSpacing: '0.05em',
                }}
              >
                Features
              </p>
              <ul
                className="mt-4 space-y-3"
                style={{
                  marginTop: 'var(--spacing-4)',
                }}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
                      style={{
                        color: 'var(--color-success)',
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <title>Check</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className="text-sm text-card-foreground"
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-card-foreground)',
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
