import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sandeepgudisa.vercel.app" }],
        destination: "https://sandeepgudisa.netlify.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
