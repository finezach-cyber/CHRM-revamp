import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The old brand domain keeps its equity: every chrm.app path 301s to the same path here.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?chrm\\.app" }],
        destination: "https://www.2ndcloser.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
