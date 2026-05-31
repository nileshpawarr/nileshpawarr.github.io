module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost/index.html', 'http://localhost/404.html'],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: '.*/index\\.html',
          assertions: {
            'categories:performance': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
            'categories:accessibility': ['error', { minScore: 1.0, aggregationMethod: 'median' }],
            'categories:best-practices': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
            'categories:seo': ['error', { minScore: 1.0, aggregationMethod: 'median' }],
          },
        },
        {
          matchingUrlPattern: '.*/404\\.html',
          assertions: {
            'categories:performance': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
            'categories:accessibility': ['error', { minScore: 1.0, aggregationMethod: 'median' }],
            'categories:best-practices': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
            // 404 pages intentionally use noindex — SEO score of ~0.66 is expected
            'categories:seo': ['error', { minScore: 0.6, aggregationMethod: 'median' }],
          },
        },
      ],
    },
    upload: { target: 'temporary-public-storage' },
  },
};
