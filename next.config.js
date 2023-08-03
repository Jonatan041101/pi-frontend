/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https',
      },
      { hostname: 'cdn2.thedogapi.com', protocol: 'https' },
    ],
  },
};

module.exports = nextConfig;
