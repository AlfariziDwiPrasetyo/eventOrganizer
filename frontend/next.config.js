/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-1.uhdpaper.com",
      },
    ],
  },
};
http: module.exports = nextConfig;
