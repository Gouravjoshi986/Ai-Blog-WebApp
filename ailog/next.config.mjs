/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true,
    },
    experimental: {
        esmExternals: true
      },
};

export default nextConfig;
