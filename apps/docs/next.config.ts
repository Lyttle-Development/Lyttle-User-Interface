import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Set root to monorepo root so Turbopack can resolve packages/ui
    root: path.resolve(__dirname, "../.."),
  },
};

export default nextConfig;