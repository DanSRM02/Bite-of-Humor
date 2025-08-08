import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@iconify/react']
  },
  transpilePackages: ['@iconify/react']
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
