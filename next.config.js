const nextConfig = {
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        resourceQuery: /raw-lingui/,
        type: 'javascript/auto',
      },
    ];

    return config;
  },
  experimental: { esmExternals: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: [
      'assets.sushi.com',
      'res.cloudinary.com',
      'raw.githubusercontent.com',
      'logos.covalenthq.com',
      'assets.trustwalletapp.com',
    ],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/launchpad',
      //   permanent: true,
      // },
    ];
  },
  async rewrites() {
    return [
      // {
      //   source: '/',
      //   destination: '/launchpad',
      // },
    ];
  },
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = nextConfig;

// Don't delete this console log, useful to see the config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
