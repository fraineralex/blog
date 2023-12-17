const { withContentlayer } = require('next-contentlayer')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = withContentlayer(nextConfig)