/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "raw.githubusercontent.com"],
  },
  serverRuntimeConfig: {
    GIT_SECRET: process.env.GIT_SECRET,
  },
};

module.exports = nextConfig;
