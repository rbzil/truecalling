/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    const isProduction = process.env.VERCEL_ENV === "production";
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];

    if (!isProduction) {
      return [
        {
          source: "/:path*",
          headers: [
            ...securityHeaders,
            { key: "X-Robots-Tag", value: "noindex, nofollow" },
          ],
        },
      ];
    }

    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
