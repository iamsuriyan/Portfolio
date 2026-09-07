import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// The site is served from https://iamsuriyan.github.io/Portfolio/, so every
// emitted URL needs that prefix. Setting basePath/assetPrefix makes Next do
// this everywhere — including inside the generated font CSS, which a
// post-build HTML rewrite could never reach.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  // Pin the workspace root to this project so Next/Turbopack ignores the
  // unrelated package-lock.json in the home directory.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  images: { unoptimized: true },
};

export default nextConfig;
