/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.VERCEL
      ? "https://next-js-room-booking-project.vercel.app"
      : "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anusdqjaadqpzbuevibn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images//**",
      },
    ],
  },
};

export default nextConfig;
