import type { NextConfig } from 'next';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
} as NextConfig;

export default nextConfig;
