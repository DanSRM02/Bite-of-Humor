import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons']
  },
  transpilePackages: ['react-icons']
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
