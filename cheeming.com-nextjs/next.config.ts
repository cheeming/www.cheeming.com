import type { NextConfig } from "next";
import { readFileSync } from 'fs';

module.exports = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED_AT: readFileSync(".last_updated").toString(),
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
