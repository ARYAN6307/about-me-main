import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // Any custom MDX options go here (e.g., rehypePlugins, remarkPlugins)
  },
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'], // Allow .mdx files in the page extensions
  transpilePackages: ['next-mdx-remote'], // Ensure MDX-related packages are transpiled
  sassOptions: {
    compiler: 'modern', // For modern Sass compiler
    silenceDeprecations: ['legacy-js-api'], // Silence any deprecation warnings from legacy JS API
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds to avoid build errors
  },
};

export default withMDX(nextConfig); // Wrap withMDX to enable MDX support
