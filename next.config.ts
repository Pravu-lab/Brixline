import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        esmExternals: true, // Allows handling of ES Modules like Framer Motion
    },
};

export default nextConfig;