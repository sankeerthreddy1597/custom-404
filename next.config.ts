import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",       
  basePath: "/custom-404",
  assetPrefix: "/custom-404",
  images: {
    unoptimized: true,     
  },
  trailingSlash: true,
};

export default nextConfig;
