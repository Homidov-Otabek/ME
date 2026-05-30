import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ME',
  images: {
    unoptimized: true,
  },
  /* config options here */
  // @ts-ignore
  serverExternalPackages: [],
  // В Next.js 16/15 настройка называется serverActions или перенесена
};

export default nextConfig;
