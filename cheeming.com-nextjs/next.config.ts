import type { NextConfig } from "next";
import { readFileSync } from 'fs';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  env: {
    NEXT_PUBLIC_LAST_UPDATED_AT: readFileSync(".last_updated").toString(),
  },
};

export default nextConfig;
