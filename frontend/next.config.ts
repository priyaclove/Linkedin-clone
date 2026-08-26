import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow next/image to load uploaded images from the local backend and from
    // any Cloudflare quick-tunnel host (the backend URL you point NEXT_PUBLIC_API_URL at).
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5002",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**.trycloudflare.com",
        pathname: "/uploads/**",
      },
      {
        // Images uploaded to Cloudinary (production storage).
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        // Backend deployed on Render (serves /uploads in dev fallback).
        protocol: "https",
        hostname: "**.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
