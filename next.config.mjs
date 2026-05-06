/** @type {import('next').NextConfig} */

/**
 * Content Security Policy.
 *
 * - 'unsafe-inline' on script/style is required by Next.js (inline hydration
 *   bootstrap, streaming, runtime scripts) and Tailwind (inline styles in
 *   prod via the rendered <style> tags).
 * - 'unsafe-eval' on script-src is required only in dev (Next.js HMR / RSC).
 * - frame-ancestors 'none' replaces and supersedes X-Frame-Options DENY.
 */
function buildCsp({ isDev }) {
  const directives = {
    "default-src": ["'self'"],
    "script-src": [
      "'self'",
      "'unsafe-inline'",
      ...(isDev ? ["'unsafe-eval'"] : []),
    ],
    "style-src": ["'self'", "'unsafe-inline'"],
    "img-src": ["'self'", "data:", "blob:", "https:"],
    "font-src": ["'self'", "data:"],
    "connect-src": ["'self'", ...(isDev ? ["ws:", "wss:"] : [])],
    "frame-ancestors": ["'none'"],
    "form-action": ["'self'"],
    "base-uri": ["'self'"],
    "object-src": ["'none'"],
    "upgrade-insecure-requests": [],
  };
  return Object.entries(directives)
    .map(([k, v]) => (v.length ? `${k} ${v.join(" ")}` : k))
    .join("; ");
}

const nextConfig = {
  reactStrictMode: true,

  async headers() {
    const isProduction = process.env.VERCEL_ENV === "production";
    const isDev = process.env.NODE_ENV !== "production";

    const securityHeaders = [
      { key: "Content-Security-Policy", value: buildCsp({ isDev }) },
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
