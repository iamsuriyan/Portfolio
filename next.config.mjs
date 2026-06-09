import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Pin the workspace root to this project so Next/Turbopack ignores the
  // unrelated package-lock.json in the home directory.
  turbopack: {
    root: __dirname
  },
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
