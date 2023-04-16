/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["assets.coingecko.com"] },
  resolve: {
    mainFields: ["module", "main"]
  }
}

module.exports = nextConfig
