import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/words-to-santhi",
  assetPrefix: "/words-to-santhi/",
  images: { unoptimized: true },
};

export default nextConfig;
