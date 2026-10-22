/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Serve original images until the framework/native image stack is upgraded.
  images: { unoptimized: true },
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: "22mb",
  },
};

module.exports = nextConfig;
