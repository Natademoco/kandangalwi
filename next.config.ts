// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // allow all Unsplash images
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // allow fireship.jpg and others
      },
    ],
  },
};

module.exports = nextConfig;
