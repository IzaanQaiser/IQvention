/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures Next.js exports a static site
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during build to prevent any build breaks due to linting errors
  },
  images: {
    unoptimized: true, // Necessary for GitHub Pages as it doesn’t support Next.js image optimization
  },
  basePath: '/IQvention', // The name of your GitHub repository (if it's different, update accordingly)
  assetPrefix: '/IQvention', // This ensures that static assets have the correct path on GitHub Pages
};

module.exports = nextConfig;
