/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => {
    return [{
      source: '/',
      destination: '/add-credential',
      permanent: true
    }]
  }
}

module.exports = nextConfig
