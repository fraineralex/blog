const withMDX = require('@next/mdx')()
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = withMDX(nextConfig)
