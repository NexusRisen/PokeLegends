import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PokeLegends',
  assetPrefix: '/PokeLegends/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
