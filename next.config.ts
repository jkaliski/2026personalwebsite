import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/studio/structure/:path*',
        destination: '/studio/default/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
